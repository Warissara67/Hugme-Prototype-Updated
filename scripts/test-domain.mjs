import assert from "node:assert/strict";
import { mkdtemp, readFile, writeFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import ts from "typescript";

const dir = await mkdtemp(join(tmpdir(), "hugme-test-"));
try {
  for (const [source, name] of [
    ["src/data/teas.ts", "teas"],
    ["src/hugme/model.ts", "model"],
  ]) {
    const code = (await readFile(new URL("../" + source, import.meta.url), "utf8")).replace(
      /(["'])\.\.\/data\/teas\1/g,
      '"./teas.mjs"',
    );
    await writeFile(
      join(dir, name + ".mjs"),
      ts.transpileModule(code, {
        compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ESNext },
      }).outputText,
    );
  }
  const { seedState, availableStock, transitionOrder, rankTeas } = await import(
    pathToFileURL(join(dir, "model.mjs")).href
  );
  let state = seedState();
  const tea = state.products[0];
  const initial = tea.stock;
  const order = {
    id: "TEST-001",
    created: "2026-10-24T00:00:00Z",
    customer: "Demo",
    email: "demo@example.com",
    address: "Sample address",
    items: [{ id: tea.id, name: tea.name, qty: 2, price: tea.price }],
    total: tea.price * 2,
    status: "pending",
    tracking: "",
    carrier: "",
    slipName: "sample.png",
    stockDeducted: false,
  };
  state = { ...state, orders: [order] };
  assert.equal(availableStock(tea, state.orders), initial - 2, "pending order reserves stock");
  assert.throws(
    () => transitionOrder(state, order.id, "shipped", "Demo", "DEMO01"),
    /INVALID_TRANSITION/,
  );
  state = transitionOrder(state, order.id, "confirmed");
  assert.equal(state.products[0].stock, initial, "confirmation does not deduct physical stock");
  state = transitionOrder(state, order.id, "packing");
  assert.throws(() => transitionOrder(state, order.id, "shipped"), /TRACKING_REQUIRED/);
  state = transitionOrder(state, order.id, "shipped", "Demo carrier", "DEMO01");
  assert.equal(state.products[0].stock, initial - 2);
  assert.equal(
    availableStock(state.products[0], state.orders),
    initial - 2,
    "shipped stock is not reserved twice",
  );
  assert.equal(
    transitionOrder(state, order.id, "shipped", "Demo carrier", "DEMO01"),
    state,
    "repeated shipment is idempotent",
  );
  assert.equal(state.emails.length, 3, "each status creates one notification");
  assert.throws(() => transitionOrder(state, order.id, "cancelled"), /INVALID_TRANSITION/);
  const cancelled = transitionOrder({ ...seedState(), orders: [order] }, order.id, "cancelled");
  assert.equal(
    availableStock(cancelled.products[0], cancelled.orders),
    initial,
    "cancellation releases reserved stock",
  );
  const insufficient = {
    ...seedState(),
    products: seedState().products.map((p) => (p.id === tea.id ? { ...p, stock: 1 } : p)),
    orders: [{ ...order, status: "packing" }],
  };
  assert.throws(
    () => transitionOrder(insufficient, order.id, "shipped", "Demo", "DEMO01"),
    /INSUFFICIENT_STOCK/,
  );
  const floral = rankTeas(seedState().products, [0, 0, 0]);
  assert.equal(floral[0].score, 27);
  assert.equal(floral[0].product.caffeine, false);
  const bold = rankTeas(seedState().products, [2, 1, 1]);
  assert.equal(bold[0].product.caffeine, true);
  assert.notEqual(floral[0].product.id, bold[0].product.id, "preferences change recommendations");
  const hidden = seedState().products.map((p) => ({ ...p, active: p.id !== bold[0].product.id }));
  assert.ok(rankTeas(hidden, [2, 1, 1]).every((x) => x.product.id !== bold[0].product.id));
  for (const p of seedState().products)
    await readFile(new URL("../public" + p.photo, import.meta.url));
  console.log(
    "PASS: reservations, cancellation, transitions, required tracking, one-time stock deduction, notifications, tea scoring, hidden products, and all 18 product images.",
  );
} finally {
  await rm(dir, { recursive: true, force: true });
}
