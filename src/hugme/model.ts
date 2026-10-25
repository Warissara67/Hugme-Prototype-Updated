import { teas } from "../data/teas";

export type Lang = "th" | "en" | "zh";
export type Localized = [string, string, string];
export const local = (lang: Lang, value: Localized) =>
  value[lang === "th" ? 0 : lang === "en" ? 1 : 2];
export type Page =
  "home" | "map" | "tea" | "quiz" | "reviews" | "cart" | "account" | "admin" | "contact";
export type Product = {
  id: string;
  name: Localized;
  category: number;
  description: Localized;
  photo: string;
  color: string;
  price: number;
  stock: number;
  floral: number;
  fresh: number;
  bold: number;
  caffeine: boolean;
  active: boolean;
};
const chinese = [
  "玫瑰茶",
  "黄菊花茶",
  "蝶豆花茶",
  "甜叶菊茶",
  "香兰叶茶",
  "柠檬草茶",
  "薄荷茶",
  "茉莉花茶",
  "姜茶",
  "万寿菊茶",
  "阿萨姆茶",
  "阿萨姆茉莉茶",
  "柠檬茶",
  "混合花草茶",
  "玫瑰甜叶菊香兰茶",
  "柠檬草甜叶菊香兰茶",
  "菊花甜叶菊香兰茶",
  "蝶豆花甜叶菊香兰茶",
];
export const categories: Localized[] = [
  ["ทั้งหมด", "All teas", "全部"],
  ["ชาดอกไม้", "Floral tea", "花茶"],
  ["ชาสมุนไพร", "Herbal tea", "草本茶"],
  ["ชาใบชา", "Tea leaves", "茶叶"],
  ["ชาสูตรผสม", "Signature blends", "调配茶"],
];
export const initialProducts: Product[] = teas.map((t, i) => {
  const category = ["ชาดอกไม้", "ชาสมุนไพร", "ชาใบชา", "ชาสูตรผสม"].indexOf(t.category) + 1;
  const description: Localized = [
    t.description,
    `${t.nameEn}, a gentle invitation to take a slower moment. Enjoy the aroma and discover your preferred brew.`,
    `${chinese[i]}，放慢脚步，享受茶香。选择您喜爱的冲泡方式，感受自然的滋味。`,
  ];
  return {
    id: t.id,
    name: [t.name, t.nameEn, chinese[i] || t.nameEn],
    category,
    description,
    photo: `/photos/products/${t.id}-jar.jpg`,
    color: t.color,
    price: 120 + (i % 4) * 20,
    stock: 12 + i,
    floral: category === 1 ? 5 : category === 4 ? 3 : 1,
    fresh: ["lemongrass", "black-mint", "lemon", "butterfly-pea"].includes(t.id) ? 5 : 2,
    bold: category === 3 ? 5 : t.id === "ginger" ? 4 : 1,
    caffeine: category === 3,
    active: true,
  };
});
export type Zone = {
  id: string;
  name: Localized;
  note: Localized;
  photo: string;
  x: number;
  y: number;
  distance: string;
};
export const initialZones: Zone[] = [
  {
    id: "shop",
    name: ["โฮงชาฮักมี", "The tea house", "哈米茶屋"],
    note: [
      "เริ่มต้นวันช้า ๆ กับชาสักแก้ว และเลือกของฝากจากทางร้าน",
      "Start slowly with a cup of tea and discover something to take home.",
      "从一杯茶开始，慢慢发现茶屋里的美好。",
    ],
    photo: "/photos/shop-view.jpg",
    x: 23,
    y: 72,
    distance: "0",
  },
  {
    id: "pier",
    name: ["ท่าเรือ", "The pier", "码头"],
    note: [
      "จุดชมบรรยากาศริมน้ำ สอบถามกิจกรรมกับทางร้านก่อนเดินทาง",
      "A place to enjoy the waterfront. Ask the team about available activities.",
      "欣赏水边景色，出行前请向茶屋咨询活动。",
    ],
    photo: "/photos/pier.jpg",
    x: 38,
    y: 57,
    distance: "0.2",
  },
  {
    id: "chamchuri",
    name: ["ต้นฉำฉากลางน้ำ", "The rain tree", "水中雨树"],
    note: [
      "ไฮไลท์ที่เปลี่ยนไปตามฤดูกาลและระดับน้ำ เหมาะกับการชมธรรมชาติ",
      "A memorable tree whose scenery changes with the seasons and water level.",
      "随着季节和水位变化，欣赏雨树不同的自然风貌。",
    ],
    photo: "/photos/chamchuri-sunset.jpg",
    x: 68,
    y: 38,
    distance: "3.4",
  },
  {
    id: "moai",
    name: ["เขาโมอาย", "Moai viewpoint", "摩艾山观景点"],
    note: [
      "สัมผัสทิวเขาและธรรมชาติ สอบถามสภาพเส้นทางกับทางร้าน",
      "Discover the hills and natural scenery. Check route conditions with the team.",
      "感受山间自然风光，出行前请确认路线情况。",
    ],
    photo: "/photos/rocky-peak.jpg",
    x: 81,
    y: 69,
    distance: "2.2",
  },
];
export type Status = "pending" | "confirmed" | "packing" | "shipped" | "cancelled";
export const statuses: Record<Status, Localized> = {
  pending: ["รอตรวจสอบการชำระเงิน", "Payment review", "待审核付款"],
  confirmed: ["ยืนยันคำสั่งซื้อแล้ว", "Confirmed", "订单已确认"],
  packing: ["กำลังจัดเตรียมสินค้า", "Packing", "正在打包"],
  shipped: ["จัดส่งแล้ว", "Shipped", "已发货"],
  cancelled: ["ยกเลิกแล้ว", "Cancelled", "已取消"],
};
export type CartLine = { id: string; qty: number };
export type Order = {
  id: string;
  created: string;
  customer: string;
  email: string;
  address: string;
  items: { id: string; name: Localized; qty: number; price: number }[];
  total: number;
  status: Status;
  tracking: string;
  carrier: string;
  slipName: string;
  stockDeducted: boolean;
};
export type Review = {
  id: string;
  author: string;
  rating: number;
  text: string;
  target: string;
  visible: boolean;
  sample?: boolean;
};
export type Email = {
  id: string;
  orderId: string;
  to: string;
  kind: Status | "newsletter";
  created: string;
  title?: string;
};
export type Promo = {
  id: string;
  title: Localized;
  body: Localized;
  start: string;
  end: string;
  enabled: boolean;
};
export type Clip = { id: string; title: string; url: string };
export type DemoState = {
  version: 2;
  lang: Lang;
  profile: { name: string; email: string; address: string; newsletter: boolean } | null;
  products: Product[];
  cart: CartLine[];
  orders: Order[];
  reviews: Review[];
  emails: Email[];
  promos: Promo[];
  clips: Clip[];
  zones: Zone[];
};
export function seedState(): DemoState {
  return {
    version: 2,
    lang: "th",
    profile: null,
    products: initialProducts.map((p) => ({ ...p })),
    cart: [],
    orders: [],
    emails: [],
    clips: [],
    zones: initialZones.map((z) => ({ ...z })),
    reviews: [],
    promos: [
      {
        id: "welcome",
        title: ["เก็บความสุขกลับบ้าน", "A little happiness to take home", "把美好带回家"],
        body: [
          "เลือกชาที่ชอบ แล้วสั่งส่งถึงบ้านระหว่างเที่ยวต่อ",
          "Choose your favourite tea. We will send it home while you keep exploring.",
          "挑选心爱的茶，继续旅行，让茶先到家。",
        ],
        start: "",
        end: "",
        enabled: true,
      },
    ],
  };
}
export function availableStock(product: Product, orders: Order[]) {
  return Math.max(
    0,
    product.stock -
      orders
        .filter((o) => !o.stockDeducted && o.status !== "cancelled")
        .reduce(
          (sum, o) =>
            sum + o.items.filter((i) => i.id === product.id).reduce((a, i) => a + i.qty, 0),
          0,
        ),
  );
}
export function scoreTea(p: Product, answers: number[]) {
  const taste = answers[0] ?? 0;
  return (
    (taste === 0 ? p.floral : taste === 1 ? p.fresh : p.bold) * 3 +
    (answers[1] === 0 ? (!p.caffeine ? 8 : 0) : p.caffeine ? 8 : 0) +
    (answers[2] === 0 ? (p.bold <= 2 ? 4 : 0) : p.bold >= 3 ? 4 : 0)
  );
}
export function rankTeas(products: Product[], answers: number[]) {
  return products
    .filter((p) => p.active)
    .map((p) => ({ product: p, score: scoreTea(p, answers) }))
    .sort((a, b) => b.score - a.score || a.product.id.localeCompare(b.product.id));
}
export function transitionOrder(
  state: DemoState,
  id: string,
  status: Status,
  carrier = "",
  tracking = "",
): DemoState {
  const o = state.orders.find((o) => o.id === id);
  if (!o) throw new Error("ORDER_NOT_FOUND");
  if (o.status === status) return state;
  const allowed: Record<Status, Status[]> = {
    pending: ["confirmed", "cancelled"],
    confirmed: ["packing", "cancelled"],
    packing: ["shipped", "cancelled"],
    shipped: [],
    cancelled: [],
  };
  if (!allowed[o.status].includes(status)) throw new Error("INVALID_TRANSITION");
  if (status === "shipped" && (!carrier.trim() || !tracking.trim()))
    throw new Error("TRACKING_REQUIRED");
  if (
    status === "shipped" &&
    o.items.some((i) => (state.products.find((p) => p.id === i.id)?.stock ?? 0) < i.qty)
  )
    throw new Error("INSUFFICIENT_STOCK");
  return {
    ...state,
    products: state.products.map((p) =>
      status === "shipped" && !o.stockDeducted
        ? {
            ...p,
            stock: p.stock - o.items.filter((i) => i.id === p.id).reduce((n, i) => n + i.qty, 0),
          }
        : p,
    ),
    orders: state.orders.map((item) =>
      item.id === id
        ? {
            ...item,
            status,
            carrier: carrier || item.carrier,
            tracking: tracking || item.tracking,
            stockDeducted: item.stockDeducted || status === "shipped",
          }
        : item,
    ),
    emails: [
      {
        id: `${id}-${status}`,
        orderId: id,
        to: o.email,
        kind: status,
        created: new Date().toISOString(),
      },
      ...state.emails,
    ],
  };
}
