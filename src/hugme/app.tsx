import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Leaf,
  ShoppingBag,
  Menu,
  X,
  Plus,
  Minus,
  Search,
  SlidersHorizontal,
  Sparkles,
  ChevronRight,
  Check,
  Truck,
  ShieldCheck,
  Package,
  Mail,
  UserRound,
  Star,
  Coffee,
  Mountain,
  Waves,
  Upload,
  QrCode,
  Copy,
  CheckCircle2,
  Settings2,
  Trash2,
  ExternalLink,
  LogOut,
  Clock,
  Heart,
  ArrowLeft,
} from "lucide-react";
import QRCode from "qrcode";
import "./hugme.css";
import "./details.css";
import {
  availableStock,
  categories,
  local,
  rankTeas,
  seedState,
  statuses,
  transitionOrder,
  type DemoState,
  type Lang,
  type Localized,
  type Order,
  type Page,
  type Product,
  type Status,
} from "./model";

const STORAGE = "hugme-prototype-v2";
const navigation: { page: Page; label: Localized }[] = [
  { page: "home", label: ["หน้าแรก", "Home", "首页"] },
  { page: "map", label: ["เที่ยวฮักมี", "Explore", "探索"] },
  { page: "tea", label: ["ชาและของฝาก", "Our teas", "茶与好礼"] },
  { page: "quiz", label: ["ค้นหาชาที่ใช่", "Find your tea", "寻找您的茶"] },
  { page: "reviews", label: ["เรื่องเล่าจากผู้มาเยือน", "Stories", "旅行故事"] },
];
const currency = (n: number) =>
  new Intl.NumberFormat("th-TH", {
    style: "currency",
    currency: "THB",
    maximumFractionDigits: 0,
  }).format(n);
function Action({
  children,
  onClick,
  secondary = false,
  className = "",
  type = "button",
  disabled = false,
}: {
  children: ReactNode;
  onClick?: () => void;
  secondary?: boolean;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`hm-button ${secondary ? "secondary" : ""} ${className}`}
    >
      {children}
    </button>
  );
}
function Heading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="hm-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h1>{title}</h1>
      {description && <p>{description}</p>}
    </div>
  );
}
function TeaCard({
  p,
  lang,
  onOpen,
  onAdd,
  remaining,
}: {
  p: Product;
  lang: Lang;
  onOpen: () => void;
  onAdd: () => void;
  remaining: number;
}) {
  return (
    <article className="tea-card">
      <button className="tea-image" onClick={onOpen} aria-label={local(lang, p.name)}>
        <span className="product-tag">{local(lang, categories[p.category]!)}</span>
        <img src={p.photo} alt={local(lang, p.name)} loading="lazy" />
        <span className="image-arrow">
          <ArrowUpRight size={21} />
        </span>
      </button>
      <div className="tea-info">
        <span className="eyebrow">HUG ME · ORGANIC FARM</span>
        <button className="text-button tea-title" onClick={onOpen}>
          {local(lang, p.name)}
        </button>
        <div className="tea-price">
          <span>
            {currency(p.price)} <small>{local(lang, ["/ กระปุก", "/ jar", "/ 罐"])}</small>
          </span>
          <button
            className="add-button"
            onClick={onAdd}
            disabled={remaining <= 0}
            aria-label={local(lang, ["เพิ่มลงตะกร้า", "Add to bag", "加入购物袋"])}
          >
            {remaining > 0 ? <Plus size={19} /> : <X size={18} />}
          </button>
        </div>
      </div>
    </article>
  );
}

export function HugmeApp({ initialPage = "home" }: { initialPage?: Page }) {
  const [state, setState] = useState<DemoState>(seedState);
  const [ready, setReady] = useState(false);
  const [page, setPage] = useState<Page>(initialPage);
  const [menu, setMenu] = useState(false);
  const [toast, setToast] = useState("");
  const [selected, setSelected] = useState<string | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const [filter, setFilter] = useState(0);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("featured");
  const [zone, setZone] = useState("shop");
  const [answers, setAnswers] = useState<number[]>([]);
  const [quizStep, setQuizStep] = useState(-1);
  const [slip, setSlip] = useState<File | null>(null);
  const [slipImages, setSlipImages] = useState<Record<string, string>>({});
  const [slipPreview, setSlipPreview] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [checkoutError, setCheckoutError] = useState("");
  const [admin, setAdmin] = useState(false);
  const [adminTab, setAdminTab] = useState("overview");
  const [qrUrl, setQrUrl] = useState("");
  const [qrImage, setQrImage] = useState("");
  const [showQr, setShowQr] = useState(false);
  const [reviewRating, setReviewRating] = useState(5);
  const [editProduct, setEditProduct] = useState("rose");
  const lang = state.lang;
  const t = (th: string, en: string, zh: string) => local(lang, [th, en, zh]);
  const l = (value: Localized) => local(lang, value);
  const products = state.products.filter((p) => p.active);
  const count = state.cart.reduce((n, i) => n + i.qty, 0);
  const notify = (msg: string) => setToast(msg);
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE);
      if (raw) {
        const value = JSON.parse(raw);
        if (value.version === 2 && Array.isArray(value.products) && Array.isArray(value.orders))
          setState({ ...seedState(), ...value });
      }
    } catch {
      setToast("ไม่สามารถอ่านข้อมูลเดิมได้ · Could not restore demo data");
    }
    setReady(true);
    const sync = () => {
      const key = window.location.hash.replace("#/", "") as Page;
      if (
        ["home", "map", "tea", "quiz", "reviews", "cart", "account", "admin", "contact"].includes(
          key,
        )
      )
        setPage(key);
      else setPage(initialPage);
    };
    sync();
    const tea = new URLSearchParams(location.search).get("tea");
    if (tea) {
      setPage("tea");
      setSelected(tea);
    }
    setQrUrl(location.origin + "/tea");
    window.addEventListener("popstate", sync);
    window.addEventListener("hashchange", sync);
    return () => {
      window.removeEventListener("popstate", sync);
      window.removeEventListener("hashchange", sync);
    };
  }, []);
  useEffect(() => {
    if (!ready) return;
    try {
      localStorage.setItem(STORAGE, JSON.stringify(state));
    } catch {
      setToast(
        t(
          "พื้นที่จัดเก็บเต็ม ข้อมูลอาจไม่ถูกบันทึก",
          "Storage is full. Changes may not persist.",
          "存储空间已满，可能无法保存。",
        ),
      );
    }
    document.documentElement.lang = state.lang;
  }, [state, ready]);
  useEffect(() => {
    if (!toast) return;
    const id = setTimeout(() => setToast(""), 4200);
    return () => clearTimeout(id);
  }, [toast]);
  useEffect(() => {
    const d = dialog.current;
    if (selected && d && !d.open) d.showModal();
    if (!selected && d?.open) d.close();
  }, [selected]);
  useEffect(() => {
    if (!showQr) return;
    let active = true;
    QRCode.toDataURL(qrUrl, { width: 360, margin: 2, color: { dark: "#214438", light: "#ffffff" } })
      .then((url) => {
        if (active) setQrImage(url);
      })
      .catch(() => {
        if (active) setQrImage("");
      });
    return () => {
      active = false;
    };
  }, [qrUrl, showQr]);
  useEffect(() => {
    if (!slipPreview) return;
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSlipPreview(null);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [slipPreview]);
  const go = (p: Page) => {
    setPage(p);
    setMenu(false);
    setSelected(null);
    history.pushState(null, "", `${location.pathname}#/${p}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const changeLanguage = (value: Lang) => setState((s) => ({ ...s, lang: value }));
  const add = (p: Product) => {
    const inCart = state.cart.find((i) => i.id === p.id)?.qty ?? 0;
    if (inCart >= availableStock(p, state.orders)) {
      notify(t("สินค้ามีไม่เพียงพอ", "Not enough stock", "库存不足"));
      return;
    }
    setState((s) => ({
      ...s,
      cart: s.cart.some((i) => i.id === p.id)
        ? s.cart.map((i) => (i.id === p.id ? { ...i, qty: i.qty + 1 } : i))
        : [...s.cart, { id: p.id, qty: 1 }],
    }));
    notify(t("เพิ่มลงตะกร้าแล้ว", "Added to your bag", "已加入购物袋"));
  };
  const quantity = (id: string, delta: number) => {
    const p = state.products.find((p) => p.id === id);
    if (!p) return;
    const old = state.cart.find((i) => i.id === id)?.qty ?? 0;
    if (old + delta > availableStock(p, state.orders)) {
      notify(t("สินค้ามีไม่เพียงพอ", "Not enough stock", "库存不足"));
      return;
    }
    setState((s) => ({
      ...s,
      cart: s.cart
        .map((i) => (i.id === id ? { ...i, qty: i.qty + delta } : i))
        .filter((i) => i.qty > 0),
    }));
  };
  const productCard = (p: Product) => (
    <TeaCard
      key={p.id}
      p={p}
      lang={lang}
      onOpen={() => setSelected(p.id)}
      onAdd={() => add(p)}
      remaining={availableStock(p, state.orders)}
    />
  );
  const promoLive = state.promos.filter(
    (p) =>
      p.enabled &&
      (!p.start || p.start <= new Date().toISOString().slice(0, 10)) &&
      (!p.end || p.end >= new Date().toISOString().slice(0, 10)),
  );

  function home() {
    return (
      <>
        <section className="hm-hero">
          <div className="hero-copy">
            <span className="eyebrow">
              <span className="tiny-line" /> PHRAO, CHIANG MAI
            </span>
            <p className="hero-script">A little closer to nature.</p>
            <h1>
              {t("พักใจให้ธรรมชาติ", "Slow days.", "慢下来，")}
              <br />
              {t("เติมความสุขด้วยชา", "Beautiful tea.", "与自然共饮。")}
            </h1>
            <p className="hero-description">
              {t(
                "โฮงชาฮักมี ชวนคุณออกมาใช้เวลาช้า ๆ ท่ามกลางขุนเขา ค้นพบเรื่องราวของชา และพาความสุขเล็ก ๆ กลับบ้าน",
                "Find your quiet moment among the mountains. Explore Hong Cha Hug Me, discover the tea you love, and take a little happiness home.",
                "来到哈米茶屋，在群山间享受慢时光，探索茶的故事，把一份美好带回家。",
              )}
            </p>
            <div className="hero-actions">
              <Action onClick={() => go("map")}>
                {t("ออกไปเที่ยวฮักมี", "Explore Hug Me", "探索哈米")}
                <ArrowUpRight size={18} />
              </Action>
              <button className="under-link" onClick={() => go("tea")}>
                {t("เลือกชาที่คุณชอบ", "Discover our teas", "探索我们的茶")}
                <ArrowRight size={18} />
              </button>
            </div>
            <div className="hero-bottom">
              <span className="leaf-seal">
                <Leaf />
              </span>
              <div>
                <strong>
                  {t(
                    "จากธรรมชาติ สู่ช่วงเวลาดี ๆ",
                    "Grown with care. Shared with love.",
                    "源于自然，用心分享。",
                  )}
                </strong>
                <small>
                  HUG ME ORGANIC FARM · {t("อ.พร้าว เชียงใหม่", "Chiang Mai, Thailand", "泰国清迈")}
                </small>
              </div>
            </div>
          </div>
          <div className="hero-photo">
            <img
              src="/photos/chamchuri-sunset.jpg"
              alt={t(
                "ต้นฉำฉากลางน้ำท่ามกลางภูเขา",
                "The rain tree surrounded by mountains",
                "群山环绕的水中雨树",
              )}
              fetchPriority="high"
            />
            <div className="hero-photo-top">
              <span>HUG ME MOMENTS</span>
              <span>PHRAO</span>
            </div>
            <div className="photo-caption">
              <div>
                <span className="eyebrow">THE RAIN TREE</span>
                <h2>{t("ต้นฉำฉากลางน้ำ", "A moment worth slowing down for", "值得停留的时光")}</h2>
              </div>
              <button
                aria-label={t("ดูจุดท่องเที่ยว", "Explore this place", "查看景点")}
                onClick={() => {
                  setZone("chamchuri");
                  go("map");
                }}
              >
                <ArrowUpRight />
              </button>
            </div>
            <span className="vertical-label">NATURE · TEA · COMMUNITY</span>
          </div>
        </section>
        <div className="journey-strip">
          <span>
            <Mountain size={19} />
            {t("เที่ยวธรรมชาติ", "Explore nature", "探索自然")}
          </span>
          <span>
            <Coffee size={19} />
            {t("ค้นพบชาที่ชอบ", "Find your favourite tea", "寻找喜爱的茶")}
          </span>
          <span>
            <Truck size={19} />
            {t("สั่งชาให้ส่งถึงบ้าน", "Send a little joy home", "好茶送到家")}
          </span>
        </div>
        <section className="hm-section">
          <div className="section-top">
            <div>
              <span className="eyebrow">EXPLORE HUG ME</span>
              <h2>
                {t("ที่นี่ มีเรื่องราวให้ค้นพบ", "A place to make memories", "在这里，发现美好")}
              </h2>
            </div>
            <button className="under-link" onClick={() => go("map")}>
              {t("สำรวจทุกมุม", "Explore the map", "探索地图")}
              <ArrowRight size={18} />
            </button>
          </div>
          <div className="explore-grid">
            {state.zones
              .filter((z) => z.id !== "pier")
              .map((z, i) => (
                <button
                  key={z.id}
                  className="destination"
                  onClick={() => {
                    setZone(z.id);
                    go("map");
                  }}
                >
                  <div className="destination-photo">
                    <img src={z.photo} alt={l(z.name)} loading="lazy" />
                    <span>0{i + 1}</span>
                  </div>
                  <div className="destination-title">
                    <div>
                      <span className="eyebrow">
                        {i === 0
                          ? "THE TEA HOUSE"
                          : i === 1
                            ? "OUR HIGHLIGHT"
                            : "NATURE & SLOW LIFE"}
                      </span>
                      <h3>{l(z.name)}</h3>
                    </div>
                    <ArrowUpRight size={23} />
                  </div>
                </button>
              ))}
          </div>
        </section>
        <section className="quiz-banner">
          <div className="quiz-art">
            <img src="/photos/products/rose-glass.jpg" alt={t("ชากุหลาบ", "Rose tea", "玫瑰茶")} />
            <span className="circle-label">
              FIND
              <br />
              YOUR
              <br />
              <em>tea.</em>
            </span>
            <img
              src="/photos/products/assam-glass.jpg"
              alt={t("ชาอัสสัม", "Assam tea", "阿萨姆茶")}
            />
          </div>
          <div className="quiz-copy">
            <span className="eyebrow">A TEA THAT FEELS LIKE YOU</span>
            <h2>
              {t(
                "ชาที่ใช่ อาจอยู่ใกล้กว่าที่คิด",
                "Your next favourite cup awaits.",
                "找到属于您的那杯茶。",
              )}
            </h2>
            <p>
              {t(
                "ตอบคำถามสั้น ๆ 3 ข้อ แล้วให้เราช่วยค้นหาชาที่เข้ากับรสนิยมของคุณ ลองได้ทั้งที่บ้านและระหว่างแวะมาหาเรา",
                "Three small questions. A personal tea discovery. Try it from home or while visiting our tea house.",
                "回答三个简单问题，发现符合您口味的茶。在家或到店都能体验。",
              )}
            </p>
            <Action
              onClick={() => {
                setQuizStep(-1);
                setAnswers([]);
                go("quiz");
              }}
            >
              {t("ค้นหาชาของฉัน", "Find my tea", "寻找我的茶")}
              <Sparkles size={18} />
            </Action>
            <small>
              {t(
                "ประมาณ 1 นาที · เลือกจากความชอบของคุณ",
                "About 1 minute · Based on your preferences",
                "约一分钟 · 根据您的口味",
              )}
            </small>
          </div>
        </section>
        <section className="hm-section">
          <div className="section-top">
            <div>
              <span className="eyebrow">FROM OUR FARM, WITH LOVE</span>
              <h2>
                {t(
                  "ชาดี ๆ สำหรับทุกวันของคุณ",
                  "A little ritual, every day.",
                  "给每一天，一杯好茶。",
                )}
              </h2>
            </div>
            <button className="under-link" onClick={() => go("tea")}>
              {t("ดูชาทั้งหมด", "Shop all teas", "查看全部茶品")}
              <ArrowRight size={18} />
            </button>
          </div>
          <div className="product-grid featured">
            {["rose", "assam", "butterfly-pea", "lemongrass"]
              .map((id) => products.find((p) => p.id === id))
              .filter((p): p is Product => !!p)
              .map(productCard)}
          </div>
          <p className="subtle-note">
            {t(
              "ราคาและสต๊อกในต้นแบบเป็นข้อมูลสาธิต กรุณายืนยันกับร้านก่อนเปิดใช้งานจริง",
              "Prices and stock are demonstration data, pending confirmation by the shop.",
              "原型中的价格与库存仅供演示，实际使用前请与茶屋确认。",
            )}
          </p>
        </section>
        {promoLive.map((p) => (
          <section className="promotion-strip" key={p.id}>
            <div>
              <span className="eyebrow">LITTLE THINGS, BIG HAPPINESS</span>
              <h2>{l(p.title)}</h2>
              <p>{l(p.body)}</p>
            </div>
            <Action secondary onClick={() => go("tea")}>
              {t("เลือกชากลับบ้าน", "Bring tea home", "把茶带回家")}
              <ArrowRight size={18} />
            </Action>
          </section>
        ))}
        <section className="story-section">
          <img
            src="/photos/shop-view.jpg"
            alt={t("บรรยากาศโฮงชาฮักมี", "Hug Me scenery", "哈米茶屋风景")}
            loading="lazy"
          />
          <div>
            <span className="eyebrow">MORE THAN A CUP OF TEA</span>
            <h2>
              {t(
                "หนึ่งสถานที่ หลายความทรงจำ",
                "Come for the scenery. Stay for the feeling.",
                "因风景而来，为美好停留。",
              )}
            </h2>
            <p>
              {t(
                "รู้จักฮักมีผ่านเรื่องราวของผู้มาเยือน ชมคลิปรีวิวและแบ่งปันช่วงเวลาดี ๆ ของคุณ เพื่อให้การมาเที่ยวครั้งต่อไปมีความหมายมากขึ้น",
                "Get to know Hug Me through visitor stories. Discover their perspectives and share your own moments.",
                "通过旅人的故事认识哈米。分享您的美好时刻，让下一次旅程更有意义。",
              )}
            </p>
            <button className="under-link" onClick={() => go("reviews")}>
              {t("อ่านเรื่องราวจากผู้มาเยือน", "Read visitor stories", "阅读旅行故事")}
              <ArrowRight size={18} />
            </button>
          </div>
        </section>
      </>
    );
  }

  function mapPage() {
    const z = state.zones.find((z) => z.id === zone) ?? state.zones[0]!;
    return (
      <div className="hm-section page-section">
        <Heading
          eyebrow="A LITTLE EXPLORING"
          title={t("เลือกมุมโปรดของคุณ", "Find your favourite corner", "寻找您最爱的角落")}
          description={t(
            "กดเลือกจุดบนแผนผัง เพื่อรู้จักโฮงชาฮักมีให้มากขึ้น",
            "Tap a place on the map and get to know Hug Me.",
            "点击地图上的地点，进一步了解哈米。",
          )}
        />
        <div className="map-layout">
          <div className="map-canvas">
            <svg viewBox="0 0 800 600" aria-hidden="true">
              <defs>
                <pattern id="map-grid" width="35" height="35" patternUnits="userSpaceOnUse">
                  <path d="M35 0H0V35" fill="none" stroke="#dce1d2" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="800" height="600" fill="#eff0e4" />
              <rect width="800" height="600" fill="url(#map-grid)" />
              <path d="M0 80Q180 180 300 80T800 50V300Q650 180 490 360T0 370Z" fill="#c4d9d2" />
              <path
                d="M-20 115Q160 235 320 140T820 105"
                fill="none"
                stroke="#e5eeea"
                strokeWidth="8"
              />
              <path
                d="M185 432Q290 450 304 342T545 228Q590 260 650 414"
                fill="none"
                stroke="#a3a58b"
                strokeWidth="3"
                strokeDasharray="9 10"
              />
              <path
                d="M20 535L95 420L165 535M105 560L205 415L310 560M570 150L655 35L730 150M650 170L745 35L830 170"
                fill="#d4dec5"
                stroke="#c3cfb4"
                strokeWidth="2"
              />
              <text
                x="320"
                y="175"
                fill="#6a8c82"
                fontSize="17"
                fontFamily="Georgia"
                letterSpacing="4"
              >
                SLOW BY THE WATER
              </text>
            </svg>
            <span className="map-compass">
              N<br />↑
            </span>
            {state.zones.map((s, i) => (
              <button
                key={s.id}
                style={{ left: `${s.x}%`, top: `${s.y}%` }}
                className={`map-pin ${zone === s.id ? "active" : ""}`}
                onClick={() => setZone(s.id)}
                aria-label={l(s.name)}
                aria-pressed={zone === s.id}
              >
                <span>{i + 1}</span>
                <strong>{l(s.name)}</strong>
              </button>
            ))}
            <div className="map-legend">
              <span className="legend-dot" />
              {t("คลิกเพื่อดูรายละเอียด", "Select a location", "选择地点")}
            </div>
          </div>
          <article className="zone-detail">
            <img src={z.photo} alt={l(z.name)} />
            <div>
              <span className="eyebrow">EXPLORE · 0{state.zones.indexOf(z) + 1}</span>
              <h2>{l(z.name)}</h2>
              <p>{l(z.note)}</p>
              <div className="distance">
                <MapPin size={18} />
                <span>
                  {t(
                    "ระยะทางตัวอย่างจากร้าน",
                    "Sample distance from tea house",
                    "距茶屋的示例距离",
                  )}{" "}
                  <strong>
                    {z.distance} {t("กม.", "km", "公里")}
                  </strong>
                </span>
              </div>
              <p className="subtle-note">
                {t(
                  "แผนผังและระยะทางเป็นข้อมูลสาธิต ไม่ใช่มาตราส่วนหรือเส้นทางนำทางจริง โปรดตรวจสอบกับร้าน",
                  "Illustrative map and sample distances, not a navigation route. Confirm details with the shop.",
                  "示意图与距离仅供演示，并非实际导航路线。请向茶屋确认。",
                )}
              </p>
              <Action secondary onClick={() => go("contact")}>
                {t("สอบถามข้อมูลสถานที่", "Ask the tea house", "咨询茶屋")}
                <ArrowUpRight size={18} />
              </Action>
            </div>
          </article>
        </div>
        <div className="info-band">
          <Leaf />
          <p>
            {t(
              "ใช้เวลาให้เต็มที่กับธรรมชาติ เว็บไซต์นี้ให้ข้อมูลกิจกรรม ไม่มีระบบจองเรือหรือจองกิจกรรมออนไลน์",
              "Enjoy nature at your pace. This website provides activity information; it does not accept activity or boat bookings.",
              "自在享受自然。本网站提供活动信息，不接受活动或船票预订。",
            )}
          </p>
        </div>
      </div>
    );
  }

  function teaPage() {
    const found = products
      .filter(
        (p) =>
          (!filter || p.category === filter) &&
          p.name.join(" ").toLowerCase().includes(search.toLowerCase()),
      )
      .sort((a, b) =>
        sort === "low" ? a.price - b.price : sort === "high" ? b.price - a.price : 0,
      );
    return (
      <div className="hm-section page-section">
        <div className="catalog-header">
          <Heading
            eyebrow="THE TEA COLLECTION"
            title={t(
              "ความสุข ที่ชงได้ทุกวัน",
              "Good days begin with tea.",
              "让每一天，从好茶开始。",
            )}
            description={t(
              "ทำความรู้จักชาของเรา แล้วเลือกแก้วที่เป็นคุณ จะซื้อที่ร้านหรือสั่งส่งถึงบ้านก็ได้",
              "Explore our teas, discover your favourites, and enjoy them at the tea house or at home.",
              "认识我们的茶，选择喜爱的味道，在店内购买或送到家。",
            )}
          />
          <button
            className="quiz-mini"
            onClick={() => {
              setAnswers([]);
              setQuizStep(-1);
              go("quiz");
            }}
          >
            <Sparkles />
            <span>
              {t("ยังเลือกไม่ถูก?", "Not sure where to start?", "还没选好？")}
              <strong>{t("ลองค้นหาชาที่ใช่ →", "Find your tea →", "寻找您的茶 →")}</strong>
            </span>
          </button>
        </div>
        <div className="catalog-tools">
          <div className="category-list" aria-label={t("หมวดหมู่ชา", "Tea categories", "茶品分类")}>
            {categories.map((c, i) => (
              <button key={i} className={filter === i ? "active" : ""} onClick={() => setFilter(i)}>
                {l(c)}
              </button>
            ))}
          </div>
          <div className="search-row">
            <label className="search-field">
              <Search size={18} />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={t("ค้นหาชา…", "Search tea…", "搜索茶品…")}
                aria-label={t("ค้นหาชา", "Search tea", "搜索茶品")}
              />
            </label>
            <select
              aria-label={t("เรียงสินค้า", "Sort products", "排序")}
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="featured">{t("เรียงตามรายการ", "Featured", "推荐排序")}</option>
              <option value="low">
                {t("ราคา น้อย–มาก", "Price: low to high", "价格从低到高")}
              </option>
              <option value="high">
                {t("ราคา มาก–น้อย", "Price: high to low", "价格从高到低")}
              </option>
            </select>
          </div>
        </div>
        <div className="result-count">
          {found.length} {t("รายการ · บรรจุภัณฑ์กระปุก", "teas · jar packaging", "款茶 · 罐装")}
        </div>
        {found.length ? (
          <div className="product-grid">{found.map(productCard)}</div>
        ) : (
          <div className="empty-state">
            <Search />
            <h2>{t("ยังไม่พบชาที่ค้นหา", "No tea found", "未找到茶品")}</h2>
            <Action
              secondary
              onClick={() => {
                setFilter(0);
                setSearch("");
              }}
            >
              {t("ดูชาทั้งหมด", "Show all teas", "查看全部茶品")}
            </Action>
          </div>
        )}
        <div className="info-band">
          <QrCode />
          <div>
            <strong>
              {t(
                "อยู่ที่ร้าน? อ่านข้อมูลชาได้จาก QR Code",
                "At the tea house? Scan to discover your tea.",
                "在茶屋？扫码了解茶品。",
              )}
            </strong>
            <p>
              {t(
                "ข้อมูลและแบบทดสอบเดียวกัน เปิดอ่านได้ทั้งที่ร้านและที่บ้าน",
                "The same tea information and quiz are available wherever you are.",
                "无论在家还是店内，都能阅读相同的茶品信息并参与测试。",
              )}
            </p>
          </div>
          <button
            className="under-link"
            onClick={() => {
              setShowQr(!showQr);
              setQrUrl(location.origin + "/tea");
            }}
          >
            {t("แสดง QR", "Show QR", "显示二维码")}
          </button>
        </div>
        {showQr && qrPanel()}
        <p className="subtle-note">
          {t(
            "ราคา สต๊อก และรายละเอียดการชงเป็นข้อมูลตัวอย่างสำหรับนำเสนอต้นแบบ",
            "Prices, stock and brewing information are sample data for this prototype.",
            "价格、库存与冲泡信息为原型演示数据。",
          )}
        </p>
      </div>
    );
  }
  function qrPanel() {
    return (
      <div className="qr-panel">
        {qrImage && <img src={qrImage} alt="QR Code" />}
        <div>
          <h3>
            {t("เปิดหน้าข้อมูลชาโดยตรง", "Open tea information directly", "直接打开茶品页面")}
          </h3>
          <label>
            {t("ลิงก์เว็บไซต์สำหรับ QR Code", "Website URL for QR code", "二维码网站链接")}
            <input type="url" value={qrUrl} onChange={(e) => setQrUrl(e.target.value)} />
          </label>
          <p className="subtle-note">
            {t(
              "เมื่อเผยแพร่เว็บ ให้เปลี่ยนเป็นลิงก์จริง มือถือเครื่องอื่นไม่สามารถเปิด localhost ได้",
              "Use the deployed website URL. Other devices cannot open a localhost address.",
              "请使用已发布的网站地址，其他设备无法访问 localhost。",
            )}
          </p>
          {qrImage && (
            <a href={qrImage} download="hugme-tea-qr.png" className="under-link">
              {t("ดาวน์โหลด QR Code", "Download QR code", "下载二维码")}
              <ArrowRight size={16} />
            </a>
          )}
        </div>
      </div>
    );
  }

  const questions: {
    title: Localized;
    options: { label: Localized; note: Localized; icon: typeof Leaf }[];
  }[] = [
    {
      title: ["คุณชอบกลิ่นและรสแบบไหน?", "Which flavours draw you in?", "您喜欢哪种香气与口感？"],
      options: [
        {
          label: ["หอมดอกไม้", "Soft & floral", "柔和花香"],
          note: ["ละมุน เบาสบาย", "Delicate and gentle", "细腻柔和"],
          icon: Leaf,
        },
        {
          label: ["สดชื่น", "Bright & refreshing", "清新爽口"],
          note: ["ชอบกลิ่นสมุนไพรหรือซิตรัส", "Herbal or citrus notes", "草本或柑橘香气"],
          icon: Waves,
        },
        {
          label: ["เข้มข้น", "Rich & bold", "浓郁醇厚"],
          note: ["มีรสชาติชัดเจน", "A fuller-bodied cup", "口感饱满"],
          icon: Coffee,
        },
      ],
    },
    {
      title: ["คุณต้องการคาเฟอีนไหม?", "How about caffeine?", "您偏好含咖啡因的茶吗？"],
      options: [
        {
          label: ["เลือกแบบไม่มีคาเฟอีน", "Prefer caffeine-free", "偏好无咖啡因"],
          note: ["สำหรับช่วงเวลาผ่อนคลาย", "For a quieter moment", "享受宁静时光"],
          icon: Leaf,
        },
        {
          label: ["มีคาเฟอีนได้", "Caffeine is welcome", "可以含咖啡因"],
          note: ["ชอบรสชาติของใบชา", "Enjoy the character of tea leaves", "喜欢茶叶的风味"],
          icon: Coffee,
        },
      ],
    },
    {
      title: [
        "แก้วโปรดของคุณควรเป็นแบบไหน?",
        "What feels like your kind of cup?",
        "您喜欢怎样的一杯茶？",
      ],
      options: [
        {
          label: ["เบาและนุ่ม", "Light & mellow", "清淡柔和"],
          note: ["จิบเพลิน ๆ ไม่เข้มมาก", "Easy to sip and unwind", "轻松慢饮"],
          icon: Heart,
        },
        {
          label: ["รสชัด มีเอกลักษณ์", "Distinct & full-bodied", "浓郁独特"],
          note: ["ชอบรสชาติที่สัมผัสได้ชัด", "A character that stands out", "鲜明的风味"],
          icon: Sparkles,
        },
      ],
    },
  ];
  function quizPage() {
    const results = rankTeas(products, answers).slice(0, 3);
    return (
      <div className="hm-section page-section quiz-page">
        <Heading
          eyebrow="FIND YOUR TEA"
          title={t(
            "ทุกความชอบ มีชาที่เข้ากัน",
            "There is a tea for your kind of day.",
            "每一种喜好，都有一款好茶。",
          )}
          description={t(
            "ค้นพบชาจากรสนิยมของคุณ ด้วยคำถามสั้น ๆ 3 ข้อ",
            "Discover tea based on your preferences, with three simple questions.",
            "通过三个简单问题，发现适合您口味的茶。",
          )}
        />
        {quizStep < 0 ? (
          <div className="quiz-start">
            <div className="quiz-start-image">
              <img
                src="/photos/products/rose-glass.jpg"
                alt={t("ชากุหลาบ", "Rose tea", "玫瑰茶")}
              />
              <span className="eyebrow">YOUR LITTLE TEA RITUAL</span>
            </div>
            <div>
              <h2>{t("เริ่มจากสิ่งที่คุณชอบ", "Start with what you love.", "从您的喜好开始。")}</h2>
              <p>
                {t(
                  "ไม่มีคำตอบที่ถูกหรือผิด เลือกกลิ่น รสชาติ และคาเฟอีนที่คุณชอบ แล้วพบกับชาที่น่าลอง",
                  "There are no right or wrong answers. Tell us your taste and caffeine preferences.",
                  "没有对错之分，只需告诉我们您喜欢的口味与咖啡因偏好。",
                )}
              </p>
              <Action
                onClick={() => {
                  setAnswers([]);
                  setQuizStep(0);
                }}
              >
                {t("เริ่มค้นหาชาของฉัน", "Start my tea discovery", "开始寻找我的茶")}
                <ArrowRight size={18} />
              </Action>
            </div>
          </div>
        ) : quizStep < 3 ? (
          <div className="quiz-question">
            <div className="quiz-progress">
              {questions.map((_, i) => (
                <span className={i <= quizStep ? "done" : ""} key={i} />
              ))}
            </div>
            <span className="eyebrow">0{quizStep + 1} / 03</span>
            <h2>{l(questions[quizStep]!.title)}</h2>
            <div className="quiz-options">
              {questions[quizStep]!.options.map((o, i) => (
                <button
                  key={i}
                  className={answers[quizStep] === i ? "selected" : ""}
                  onClick={() =>
                    setAnswers((a) => {
                      const b = [...a];
                      b[quizStep] = i;
                      return b;
                    })
                  }
                >
                  <o.icon />
                  <strong>{l(o.label)}</strong>
                  <span>{l(o.note)}</span>
                  {answers[quizStep] === i && <CheckCircle2 className="option-check" />}
                </button>
              ))}
            </div>
            <div className="quiz-controls">
              <button className="under-link" onClick={() => setQuizStep((s) => s - 1)}>
                <ArrowLeft size={17} />
                {t("ย้อนกลับ", "Back", "返回")}
              </button>
              <Action
                disabled={answers[quizStep] === undefined}
                onClick={() => setQuizStep((s) => s + 1)}
              >
                {quizStep === 2
                  ? t("ดูชาที่เหมาะกับฉัน", "Reveal my teas", "查看结果")
                  : t("ถัดไป", "Next", "下一步")}
                <ArrowRight size={18} />
              </Action>
            </div>
          </div>
        ) : (
          <div className="quiz-results">
            <div className="result-intro">
              <span className="leaf-seal">
                <Sparkles />
              </span>
              <h2>{t("ชาที่เราอยากให้คุณลอง", "Meet your tea matches.", "为您推荐的茶。")}</h2>
              <p>
                {t(
                  "จัดอันดับจากกลิ่นและรสชาติ (น้ำหนัก 3) คาเฟอีน (8 คะแนน) และความเข้ม (4 คะแนน)",
                  "Ranked by flavour (weight 3), caffeine preference (8 points) and body (4 points).",
                  "根据风味（权重3）、咖啡因偏好（8分）及浓淡（4分）排名。",
                )}
              </p>
            </div>
            <div className="product-grid result-grid">
              {results.map(({ product, score }, i) => (
                <div key={product.id}>
                  <div className="match-label">
                    {i === 0 ? "✦ " : ""}
                    {t("อันดับ", "Match", "推荐")} {i + 1} · {score}/27 {t("คะแนน", "points", "分")}
                  </div>
                  {productCard(product)}
                </div>
              ))}
            </div>
            <div className="quiz-controls">
              <p>
                {t(
                  "ซื้อที่หน้าร้าน หรือเพิ่มลงตะกร้าเพื่อสั่งส่งถึงบ้าน",
                  "Buy at the tea house or add to your bag for home delivery.",
                  "可在店内购买，或加入购物袋配送到家。",
                )}
              </p>
              <Action
                secondary
                onClick={() => {
                  setAnswers([]);
                  setQuizStep(0);
                }}
              >
                {t("ลองอีกครั้ง", "Try again", "重新测试")}
              </Action>
            </div>
            <p className="subtle-note">
              {t(
                "แบบทดสอบแนะนำตามความชอบ ไม่ใช่คำแนะนำทางการแพทย์ เกณฑ์และข้อมูลชาต้องตรวจสอบกับร้านก่อนใช้งานจริง",
                "Preference-based recommendations, not medical advice. Tea data and scoring require shop validation.",
                "根据口味偏好推荐，并非医疗建议。茶品信息与评分规则须经茶屋确认。",
              )}
            </p>
          </div>
        )}
      </div>
    );
  }

  function reviewsPage() {
    const reviews = state.reviews.filter((r) => r.visible);
    return (
      <div className="hm-section page-section">
        <Heading
          eyebrow="STORIES FROM OUR VISITORS"
          title={t("ฮักมี ในมุมของคุณ", "Hug Me, through your eyes.", "您眼中的哈米。")}
          description={t(
            "พื้นที่เล่าเรื่องราว แบ่งปันความประทับใจ และรู้จักฮักมีผ่านผู้มาเยือน",
            "Stories, impressions and a different perspective on our little place.",
            "分享旅途印象，从不同视角认识这个美好的地方。",
          )}
        />
        <section className="reviews-intro">
          <img
            src="/photos/aerial-lake.jpg"
            alt={t("บรรยากาศธรรมชาติ", "Nature at Hug Me", "哈米的自然风光")}
          />
          <div>
            <span className="eyebrow">WATCH & EXPLORE</span>
            <h2>{t("เรื่องเล่าจากอินฟลูเอนเซอร์", "Stories worth watching", "值得一看的故事")}</h2>
            {state.clips.length ? (
              state.clips.map((c) => (
                <a className="clip-link" key={c.id} href={c.url} target="_blank" rel="noreferrer">
                  {c.title}
                  <ExternalLink size={18} />
                </a>
              ))
            ) : (
              <p>
                {t(
                  "คลิปรีวิวที่ได้รับการตรวจสอบจากร้านจะรวบรวมไว้ที่นี่ ผู้ดูแลสามารถเพิ่มลิงก์ได้จากหลังบ้าน",
                  "Verified visitor videos will appear here. The administrator can add review links in the demo dashboard.",
                  "茶屋确认的视频将展示在这里。管理员可在后台添加链接。",
                )}
              </p>
            )}
          </div>
        </section>
        <div className="review-layout">
          <div>
            <h2>{t("ความประทับใจจากผู้มาเยือน", "Visitor impressions", "访客评价")}</h2>
            {reviews.length ? (
              reviews.map((r) => (
                <article className="review-item" key={r.id}>
                  <div className="review-by">
                    <span className="avatar">{r.author.slice(0, 1)}</span>
                    <div>
                      <strong>{r.author}</strong>
                      <small>{r.target}</small>
                    </div>
                    <span className="stars">
                      {"★".repeat(r.rating)}
                      {"☆".repeat(5 - r.rating)}
                    </span>
                  </div>
                  <p>{r.text}</p>
                </article>
              ))
            ) : (
              <div className="empty-state compact">
                <Heart />
                <p>
                  {t(
                    "ยังไม่มีรีวิว มาแบ่งปันเรื่องราวแรกกัน",
                    "No reviews yet. Share the first story.",
                    "还没有评价，分享第一个故事吧。",
                  )}
                </p>
              </div>
            )}
          </div>
          <div className="form-panel">
            <h3>{t("แบ่งปันช่วงเวลาดี ๆ", "Share your moment", "分享美好时光")}</h3>
            {state.profile ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const f = new FormData(e.currentTarget);
                  const message = String(f.get("review") ?? "").trim();
                  if (!message) return;
                  const review = {
                    id: crypto.randomUUID(),
                    author: state.profile!.name,
                    rating: reviewRating,
                    text: message,
                    target: String(f.get("target")),
                    visible: true,
                  };
                  setState((s) => ({ ...s, reviews: [review, ...s.reviews] }));
                  e.currentTarget.reset();
                  notify(t("ขอบคุณสำหรับรีวิว", "Thank you for sharing", "感谢您的分享"));
                }}
              >
                <label>
                  {t("รีวิวเกี่ยวกับ", "Your review is about", "评价内容")}
                  <select name="target">
                    <option>
                      {t("บรรยากาศและการท่องเที่ยว", "The place & experience", "环境与体验")}
                    </option>
                    <option>{t("ชาและสินค้า", "Tea & products", "茶与商品")}</option>
                    <option>{t("กิจกรรม", "Activities", "活动")}</option>
                  </select>
                </label>
                <div className="rating-input" aria-label={t("คะแนน", "Rating", "评分")}>
                  {[1, 2, 3, 4, 5].map((n) => (
                    <button
                      type="button"
                      key={n}
                      onClick={() => setReviewRating(n)}
                      aria-label={`${n} / 5`}
                      aria-pressed={reviewRating === n}
                    >
                      <Star fill={n <= reviewRating ? "#c49a55" : "none"} color="#c49a55" />
                    </button>
                  ))}
                </div>
                <label>
                  {t("ความประทับใจของคุณ", "Your story", "您的故事")}
                  <textarea
                    name="review"
                    required
                    minLength={5}
                    maxLength={1000}
                    placeholder={t(
                      "เล่าช่วงเวลาที่คุณประทับใจ…",
                      "Tell us about your visit…",
                      "分享您的体验…",
                    )}
                  />
                </label>
                <Action type="submit">
                  {t("ส่งรีวิว", "Post review", "发布评价")}
                  <ArrowRight size={17} />
                </Action>
              </form>
            ) : (
              <>
                <p>
                  {t(
                    "เข้าสู่โหมดสมาชิกเพื่อเขียนรีวิว",
                    "Enter member demo to share a review.",
                    "进入会员演示以发表评价。",
                  )}
                </p>
                <Action onClick={() => go("account")}>
                  {t("เข้าสู่โหมดสมาชิก", "Member demo", "会员演示")}
                </Action>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }

  async function placeOrder(form: HTMLFormElement) {
    if (busy) return;
    if (!state.profile) {
      go("account");
      return;
    }
    if (!slip) {
      setCheckoutError(
        t("กรุณาเลือกภาพสลิปตัวอย่าง", "Please attach a sample receipt", "请上传示例付款凭证"),
      );
      return;
    }
    if (!state.cart.length) return;
    const items = state.cart.map((i) => ({
      item: i,
      p: state.products.find((p) => p.id === i.id),
    }));
    if (
      items.some(({ item, p }) => !p || !p.active || availableStock(p, state.orders) < item.qty)
    ) {
      setCheckoutError(
        t(
          "สินค้าในตะกร้ามีไม่เพียงพอ กรุณาปรับจำนวน",
          "Some items are unavailable. Please update quantities.",
          "部分商品库存不足，请调整数量。",
        ),
      );
      return;
    }
    setBusy(true);
    setCheckoutError("");
    try {
      const f = new FormData(form);
      const id = "HM-" + Date.now().toString(36).toUpperCase();
      const order: Order = {
        id,
        created: new Date().toISOString(),
        customer: String(f.get("name")).trim(),
        email: state.profile.email,
        address: String(f.get("address")).trim(),
        items: items.map(({ item, p }) => ({
          id: item.id,
          name: p!.name,
          qty: item.qty,
          price: p!.price,
        })),
        total: items.reduce((n, { item, p }) => n + item.qty * p!.price, 0),
        status: "pending",
        tracking: "",
        carrier: "",
        slipName: slip.name,
        stockDeducted: false,
      };
      if (!order.customer || !order.address) throw new Error("ADDRESS_REQUIRED");
      const imageUrl = URL.createObjectURL(slip);
      setSlipImages((s) => ({ ...s, [id]: imageUrl }));
      setState((s) => ({
        ...s,
        orders: [order, ...s.orders],
        cart: [],
        emails: [
          {
            id: id + "-pending",
            orderId: id,
            to: order.email,
            kind: "pending",
            created: order.created,
          },
          ...s.emails,
        ],
      }));
      setSlip(null);
      go("account");
      notify(
        t(
          "สร้างคำสั่งซื้อสาธิตแล้ว รอตรวจสอบสลิป",
          "Demo order created. Awaiting payment review.",
          "演示订单已创建，等待付款审核。",
        ),
      );
    } catch {
      setCheckoutError(
        t(
          "กรุณาตรวจสอบข้อมูลและลองใหม่",
          "Please check the form and try again",
          "请检查信息后重试",
        ),
      );
    } finally {
      setBusy(false);
    }
  }
  function cartPage() {
    const total = state.cart.reduce(
      (n, i) => n + (state.products.find((p) => p.id === i.id)?.price ?? 0) * i.qty,
      0,
    );
    return (
      <div className="hm-section page-section">
        <Heading
          eyebrow="A LITTLE JOY TO TAKE HOME"
          title={t("ตะกร้าของคุณ", "Your tea bag", "您的购物袋")}
          description={t(
            "เที่ยวต่อให้เต็มที่ แล้วให้ชาที่ชอบเดินทางไปหาคุณ",
            "Keep exploring. Let your favourite tea find its way home.",
            "尽情旅行，让喜欢的茶送到家。",
          )}
        />
        {!count ? (
          <div className="empty-state">
            <ShoppingBag size={45} />
            <h2>{t("ตะกร้ายังว่างอยู่", "A good cup is waiting.", "一杯好茶正等着您。")}</h2>
            <p>
              {t(
                "เลือกชาสักกระปุก แล้วเก็บช่วงเวลาดี ๆ กลับบ้าน",
                "Choose a tea and take a little moment home.",
                "挑选一罐茶，把美好时光带回家。",
              )}
            </p>
            <Action onClick={() => go("tea")}>
              {t("เลือกซื้อชา", "Explore our teas", "选购茶品")}
              <ArrowRight size={18} />
            </Action>
          </div>
        ) : (
          <div className="checkout-layout">
            <div>
              <div className="cart-items">
                {state.cart.map((i) => {
                  const p = state.products.find((p) => p.id === i.id);
                  if (!p) return null;
                  return (
                    <article key={i.id} className="cart-item">
                      <img src={p.photo} alt={l(p.name)} />
                      <div>
                        <button className="text-button" onClick={() => setSelected(p.id)}>
                          <h3>{l(p.name)}</h3>
                        </button>
                        <small>
                          {t(
                            "บรรจุภัณฑ์กระปุก · ราคาสาธิต",
                            "Jar packaging · Sample price",
                            "罐装 · 示例价格",
                          )}
                        </small>
                        <strong>{currency(p.price)}</strong>
                      </div>
                      <div className="quantity">
                        <button
                          onClick={() => quantity(p.id, -1)}
                          aria-label={t("ลดจำนวน", "Decrease quantity", "减少数量")}
                        >
                          <Minus size={14} />
                        </button>
                        <span>{i.qty}</span>
                        <button
                          onClick={() => quantity(p.id, 1)}
                          aria-label={t("เพิ่มจำนวน", "Increase quantity", "增加数量")}
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <button
                        className="icon-button"
                        onClick={() =>
                          setState((s) => ({ ...s, cart: s.cart.filter((c) => c.id !== i.id) }))
                        }
                        aria-label={t("นำสินค้าออก", "Remove item", "移除商品")}
                      >
                        <Trash2 size={17} />
                      </button>
                    </article>
                  );
                })}
              </div>
              <div className="shipping-note">
                <Truck />
                <div>
                  <strong>
                    {t(
                      "ส่งถึงบ้าน แล้วไปเที่ยวต่อ",
                      "Delivered home. More time to explore.",
                      "配送到家，继续旅行。",
                    )}
                  </strong>
                  <p>
                    {t(
                      "ต้นแบบนี้ใช้ค่าจัดส่ง 0 บาทเพื่อสาธิต กรุณากำหนดค่าจัดส่งจริงก่อนเปิดใช้งาน",
                      "This demo uses ฿0 shipping. Actual shipping rates must be configured before launch.",
                      "演示运费为0泰铢，正式上线前须配置实际运费。",
                    )}
                  </p>
                </div>
              </div>
              <button className="under-link" onClick={() => go("tea")}>
                <ArrowLeft size={17} />
                {t("เลือกชาเพิ่ม", "Continue exploring", "继续选购")}
              </button>
            </div>
            <aside className="checkout-panel">
              <h2>{t("สรุปคำสั่งซื้อ", "Order summary", "订单摘要")}</h2>
              <div className="summary-line">
                <span>{t("ยอดสินค้า", "Subtotal", "商品小计")}</span>
                <strong>{currency(total)}</strong>
              </div>
              <div className="summary-line">
                <span>{t("ค่าจัดส่งสาธิต", "Demo shipping", "演示运费")}</span>
                <span>{currency(0)}</span>
              </div>
              <div className="summary-line total">
                <span>{t("รวมทั้งหมด", "Total", "合计")}</span>
                <strong>{currency(total)}</strong>
              </div>
              {!state.profile ? (
                <>
                  <p>
                    {t(
                      "เข้าสู่โหมดสมาชิกก่อนสร้างคำสั่งซื้อ",
                      "Enter member demo to place an order.",
                      "请进入会员演示后下单。",
                    )}
                  </p>
                  <Action onClick={() => go("account")}>
                    {t("เข้าสู่โหมดสมาชิก", "Continue as demo member", "进入会员演示")}
                  </Action>
                </>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    void placeOrder(e.currentTarget);
                  }}
                >
                  <label>
                    {t(
                      "ชื่อผู้รับ (ข้อมูลตัวอย่าง)",
                      "Recipient (sample data)",
                      "收件人（示例信息）",
                    )}
                    <input name="name" required maxLength={100} defaultValue={state.profile.name} />
                  </label>
                  <label>
                    {t(
                      "ที่อยู่จัดส่ง (ข้อมูลตัวอย่าง)",
                      "Address (sample data)",
                      "收货地址（示例信息）",
                    )}
                    <textarea
                      name="address"
                      required
                      minLength={10}
                      maxLength={500}
                      defaultValue={state.profile.address}
                    />
                  </label>
                  <div className="payment-demo">
                    <ShieldCheck size={20} />
                    <p>
                      {t(
                        "โหมดสาธิต: ไม่ต้องโอนเงินจริง ใช้ภาพตัวอย่างแทนสลิป และอย่ากรอกข้อมูลส่วนบุคคลจริง",
                        "Demo only: do not transfer money. Use a sample image and fictitious personal details.",
                        "仅供演示：请勿真实转账，请使用示例图片与虚构个人信息。",
                      )}
                    </p>
                  </div>
                  <label className="upload-field">
                    <Upload size={24} />
                    <strong>
                      {slip
                        ? slip.name
                        : t("แนบภาพสลิปตัวอย่าง", "Attach sample receipt", "上传示例凭证")}
                    </strong>
                    <small>JPG / PNG / WEBP · ≤ 2 MB</small>
                    <input
                      type="file"
                      accept="image/jpeg,image/png,image/webp"
                      onChange={(e) => {
                        const f = e.target.files?.[0];
                        if (!f) {
                          setSlip(null);
                          return;
                        }
                        if (
                          !["image/jpeg", "image/png", "image/webp"].includes(f.type) ||
                          f.size > 2 * 1024 * 1024
                        ) {
                          setCheckoutError(
                            t(
                              "เลือกไฟล์ภาพขนาดไม่เกิน 2 MB",
                              "Choose an image up to 2 MB",
                              "请选择不超过2 MB的图片",
                            ),
                          );
                          e.target.value = "";
                          setSlip(null);
                          return;
                        }
                        setSlip(f);
                        setCheckoutError("");
                      }}
                    />
                  </label>
                  {checkoutError && (
                    <p role="alert" className="error-text">
                      {checkoutError}
                    </p>
                  )}
                  <Action type="submit" disabled={busy}>
                    {busy
                      ? t("กำลังบันทึก…", "Saving…", "正在保存…")
                      : t("ยืนยันคำสั่งซื้อสาธิต", "Place demo order", "确认演示订单")}
                    <ArrowRight size={18} />
                  </Action>
                </form>
              )}
            </aside>
          </div>
        )}
      </div>
    );
  }

  function orderCard(o: Order, manage = false) {
    const index = ["pending", "confirmed", "packing", "shipped"].indexOf(o.status);
    return (
      <article className="order-card" key={o.id}>
        <div className="order-top">
          <div>
            <strong>{o.id}</strong>
            <small>
              {new Date(o.created).toLocaleDateString(
                lang === "th" ? "th-TH" : lang === "zh" ? "zh-CN" : "en-GB",
              )}
            </small>
          </div>
          <span className={`status ${o.status}`}>{l(statuses[o.status])}</span>
        </div>
        {o.status !== "cancelled" && (
          <div className="order-progress">
            {(["pending", "confirmed", "packing", "shipped"] as Status[]).map((s, i) => (
              <div className={i <= index ? "complete" : ""} key={s}>
                <span>{i < index ? <Check size={13} /> : i + 1}</span>
                <small>{l(statuses[s])}</small>
              </div>
            ))}
          </div>
        )}
        <div className="order-lines">
          {o.items.map((i) => (
            <div key={i.id}>
              <span>
                {l(i.name)} × {i.qty}
              </span>
              <strong>{currency(i.price * i.qty)}</strong>
            </div>
          ))}
        </div>
        <div className="summary-line">
          <span>{o.customer}</span>
          <strong>{currency(o.total)}</strong>
        </div>
        {o.tracking && (
          <div className="tracking">
            <Truck size={19} />
            <span>
              {o.carrier} · <strong>{o.tracking}</strong>
            </span>
            <button
              className="icon-button"
              aria-label={t("คัดลอกเลขพัสดุ", "Copy tracking number", "复制运单号")}
              onClick={() =>
                navigator.clipboard
                  ?.writeText(o.tracking)
                  .then(() => notify(t("คัดลอกแล้ว", "Copied", "已复制")))
                  .catch(() => notify(o.tracking))
              }
            >
              <Copy size={16} />
            </button>
            <small>
              {t(
                "นำเลขไปตรวจสอบกับบริษัทขนส่ง",
                "Check this number with the carrier",
                "请向承运商查询运单",
              )}
            </small>
          </div>
        )}
        {manage && (
          <div className="order-admin">
            <p>
              {o.email}
              <br />
              {o.address}
            </p>
            <button
              className="under-link"
              onClick={() => {
                const url = slipImages[o.id];
                if (url) setSlipPreview(url);
                else
                  notify(
                    t(
                      "เก็บเฉพาะชื่อไฟล์หลังรีเฟรช สร้างคำสั่งซื้อใหม่เพื่อทดลองตรวจภาพสลิป",
                      "Only the filename persists after refresh. Create a new demo order to inspect its image.",
                      "刷新后仅保留文件名，请创建新演示订单查看图片。",
                    ),
                  );
              }}
            >
              <Upload size={15} />
              {o.slipName}
            </button>
            {o.status === "pending" && (
              <Action onClick={() => updateOrder(o.id, "confirmed")}>
                {t("ยืนยันการชำระเงิน", "Confirm payment", "确认付款")}
              </Action>
            )}
            {o.status === "confirmed" && (
              <Action onClick={() => updateOrder(o.id, "packing")}>
                {t("เริ่มจัดเตรียมสินค้า", "Start packing", "开始打包")}
              </Action>
            )}
            {o.status === "packing" && (
              <form
                className="shipping-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  const f = new FormData(e.currentTarget);
                  updateOrder(o.id, "shipped", String(f.get("carrier")), String(f.get("tracking")));
                }}
              >
                <label>
                  {t("บริษัทขนส่ง", "Carrier", "承运商")}
                  <input
                    name="carrier"
                    required
                    placeholder={t("ชื่อบริษัทขนส่ง", "Carrier name", "承运商名称")}
                  />
                </label>
                <label>
                  {t("เลขพัสดุ", "Tracking number", "运单号")}
                  <input name="tracking" required minLength={4} />
                </label>
                <Action type="submit">
                  {t("จัดส่งแล้ว / ตัดสต๊อก", "Ship & deduct stock", "发货并扣减库存")}
                </Action>
              </form>
            )}
            {!["shipped", "cancelled"].includes(o.status) && (
              <button className="under-link danger" onClick={() => updateOrder(o.id, "cancelled")}>
                {t("ยกเลิกคำสั่งซื้อ", "Cancel order", "取消订单")}
              </button>
            )}
          </div>
        )}
      </article>
    );
  }
  function updateOrder(id: string, status: Status, carrier = "", tracking = "") {
    try {
      const next = transitionOrder(state, id, status, carrier, tracking);
      setState(next);
      notify(
        t(
          "อัปเดตสถานะและบันทึกอีเมลสาธิตแล้ว",
          "Status updated; demo email recorded",
          "状态已更新，演示邮件已记录",
        ),
      );
    } catch (e) {
      notify(
        (e as Error).message === "TRACKING_REQUIRED"
          ? t("กรุณากรอกข้อมูลขนส่ง", "Please complete shipping information", "请填写配送信息")
          : t(
              "อัปเดตไม่ได้ โปรดตรวจสอบสถานะและสต๊อก",
              "Cannot update: check order status and stock",
              "无法更新，请检查状态与库存",
            ),
      );
    }
  }

  function accountPage() {
    return (
      <div className="hm-section page-section">
        <Heading
          eyebrow="YOUR HUG ME SPACE"
          title={
            state.profile
              ? t(
                  `สวัสดี ${state.profile.name}`,
                  `Hello, ${state.profile.name}`,
                  `您好，${state.profile.name}`,
                )
              : t("ยินดีต้อนรับกลับบ้าน", "Make yourself at home.", "欢迎来到您的小天地。")
          }
          description={t(
            "จัดการข้อมูล ดูคำสั่งซื้อ และเก็บเรื่องราวดี ๆ ของคุณไว้ที่นี่",
            "Your details, your orders, and your little moments.",
            "在这里管理个人资料、订单与美好回忆。",
          )}
        />
        <div className="account-layout">
          <div className="form-panel">
            <div className="panel-title">
              <UserRound />
              <h3>
                {state.profile
                  ? t("ข้อมูลสมาชิก", "Member details", "会员资料")
                  : t("ทดลองใช้บัญชีสมาชิก", "Try a demo membership", "体验演示会员")}
              </h3>
            </div>
            <p className="subtle-note">
              {t(
                "บัญชีสาธิตในเบราว์เซอร์นี้เท่านั้น ไม่มีการยืนยันตัวตนจริง กรุณาใช้ข้อมูลตัวอย่าง",
                "Browser-local demo account, not real authentication. Please use fictitious details.",
                "仅为浏览器本地演示账户，并非真实身份验证，请使用虚构信息。",
              )}
            </p>
            <form
              key={state.profile ? "profile" : "login"}
              onSubmit={(e) => {
                e.preventDefault();
                const f = new FormData(e.currentTarget);
                setState((s) => ({
                  ...s,
                  profile: {
                    name: String(f.get("name")).trim(),
                    email: String(f.get("email")).trim(),
                    address: String(f.get("address")).trim(),
                    newsletter: f.get("newsletter") === "on",
                  },
                }));
                notify(t("บันทึกข้อมูลแล้ว", "Details saved", "资料已保存"));
                if (!state.profile && count) go("cart");
              }}
            >
              <label>
                {t("ชื่อที่แสดง", "Display name", "显示名称")}
                <input
                  name="name"
                  required
                  minLength={2}
                  maxLength={60}
                  defaultValue={state.profile?.name ?? "นักเดินทาง"}
                  autoComplete="off"
                />
              </label>
              <label>
                {t("อีเมลตัวอย่าง", "Sample email", "示例邮箱")}
                <input
                  name="email"
                  type="email"
                  required
                  defaultValue={state.profile?.email ?? "traveler@example.com"}
                  autoComplete="off"
                />
              </label>
              <label>
                {t("ที่อยู่ตัวอย่าง", "Sample address", "示例地址")}
                <textarea
                  name="address"
                  defaultValue={
                    state.profile?.address ?? "123 ถนนตัวอย่าง อำเภอพร้าว จังหวัดเชียงใหม่ 50190"
                  }
                />
              </label>
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="newsletter"
                  defaultChecked={state.profile?.newsletter ?? false}
                />
                <span>
                  {t(
                    "ต้องการรับข่าวสารและโปรโมชั่นทางอีเมล (ยกเลิกได้ทุกเมื่อ)",
                    "Receive news and offers by email (unsubscribe anytime)",
                    "接收新闻与优惠邮件（可随时取消）",
                  )}
                </span>
              </label>
              <Action type="submit">
                {state.profile
                  ? t("บันทึกข้อมูล", "Save details", "保存资料")
                  : t("เริ่มทดลองเป็นสมาชิก", "Enter member demo", "进入会员演示")}
                <ArrowRight size={17} />
              </Action>
            </form>
            {state.profile && (
              <button
                className="under-link"
                onClick={() => {
                  setState((s) => ({ ...s, profile: null }));
                  notify(t("ออกจากโหมดสมาชิกแล้ว", "Signed out of member demo", "已退出会员演示"));
                }}
              >
                <LogOut size={16} />
                {t("ออกจากโหมดสมาชิก", "Leave member demo", "退出会员演示")}
              </button>
            )}
          </div>
          <div>
            <div className="section-top">
              <h2>{t("คำสั่งซื้อของฉัน", "My orders", "我的订单")}</h2>
              <span className="count-label">
                {state.orders.filter((o) => o.email === state.profile?.email).length}
              </span>
            </div>
            {state.orders.filter((o) => o.email === state.profile?.email).length ? (
              state.orders.filter((o) => o.email === state.profile?.email).map((o) => orderCard(o))
            ) : (
              <div className="empty-state compact">
                <Package size={34} />
                <p>{t("ยังไม่มีคำสั่งซื้อ", "No orders yet", "暂无订单")}</p>
                <Action secondary onClick={() => go("tea")}>
                  {t("เลือกชาที่ชอบ", "Find a tea you love", "选购喜欢的茶")}
                </Action>
              </div>
            )}
            {state.profile && (
              <section className="email-box">
                <h3>
                  <Mail size={19} />
                  {t("กล่องอีเมลสาธิต", "Demo email inbox", "演示邮件收件箱")}
                </h3>
                <p className="subtle-note">
                  {t(
                    "ตัวอย่างข้อความแจ้งเตือน ระบบยังไม่ส่งอีเมลจริง",
                    "Notification previews only. No real email is sent.",
                    "仅预览通知内容，不发送真实邮件。",
                  )}
                </p>
                {state.emails
                  .filter((e) => e.to === state.profile?.email)
                  .map((e) => (
                    <div className="email-item" key={e.id}>
                      <Mail size={18} />
                      <div>
                        <strong>{e.kind === "newsletter" ? e.title : l(statuses[e.kind])}</strong>
                        <p>
                          {e.kind === "newsletter"
                            ? t(
                                "คุณได้รับข้อความนี้เนื่องจากเลือกรับข่าวสาร",
                                "You opted in to news and offers.",
                                "您已订阅新闻与优惠。",
                              )
                            : t(
                                `คำสั่งซื้อ ${e.orderId} ของคุณได้รับการอัปเดต`,
                                `Your order ${e.orderId} has been updated.`,
                                `您的订单 ${e.orderId} 已更新。`,
                              )}
                        </p>
                      </div>
                    </div>
                  ))}
              </section>
            )}
          </div>
        </div>
      </div>
    );
  }

  function adminPage() {
    if (!admin)
      return (
        <div className="hm-section page-section">
          <div className="empty-state admin-gate">
            <Settings2 size={40} />
            <span className="eyebrow">HUG ME · BACK OFFICE</span>
            <h1>{t("ทดลองจัดการร้าน", "Explore the back office", "体验商店后台")}</h1>
            <p>
              {t(
                "พื้นที่สาธิตสำหรับนำเสนอโครงงาน จัดการข้อมูลจำลองในเบราว์เซอร์นี้ ไม่ใช่ระบบผู้ดูแลที่ยืนยันตัวตนแล้ว",
                "A presentation demo for managing sample data in this browser. This is not an authenticated production dashboard.",
                "用于项目展示的本地数据管理演示，并非已验证身份的生产后台。",
              )}
            </p>
            <Action onClick={() => setAdmin(true)}>
              {t("เปิดหลังบ้านสาธิต", "Open demo dashboard", "打开演示后台")}
              <ArrowRight size={17} />
            </Action>
          </div>
        </div>
      );
    const tabs = [
      ["overview", t("ภาพรวม", "Overview", "概览")],
      ["orders", t("คำสั่งซื้อ", "Orders", "订单")],
      ["products", t("สินค้าและสต๊อก", "Products & stock", "商品与库存")],
      ["content", t("เนื้อหาและข่าวสาร", "Content & news", "内容与新闻")],
      ["reviews", t("รีวิว", "Reviews", "评价")],
      ["qr", t("QR Code", "QR code", "二维码")],
    ];
    return (
      <div className="hm-section page-section admin-page">
        <div className="section-top">
          <Heading
            eyebrow="HUG ME · BACK OFFICE"
            title={t(
              "ดูแลร้าน ด้วยความใส่ใจ",
              "A little care, behind the scenes.",
              "用心经营每一个细节。",
            )}
          />
          <button className="under-link" onClick={() => setAdmin(false)}>
            <LogOut size={16} />
            {t("ออกจากหลังบ้าน", "Leave dashboard", "退出后台")}
          </button>
        </div>
        <div className="admin-tabs">
          {tabs.map(([id, label]) => (
            <button
              key={id}
              className={id === adminTab ? "active" : ""}
              onClick={() => {
                setAdminTab(id!);
                if (id === "qr") {
                  setShowQr(true);
                  setQrUrl(location.origin + "/tea");
                }
              }}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="demo-notice">
          <ShieldCheck size={16} />
          {t(
            "ข้อมูลสาธิตในเครื่องนี้ · ไม่มีการรับเงินหรือส่งอีเมลจริง",
            "Local demo data · No actual payment or email delivery",
            "本地演示数据 · 无实际收款或邮件发送",
          )}
        </div>
        {adminTab === "overview" && (
          <>
            <div className="stat-grid">
              {[
                [
                  t("ยอดขายที่ยืนยันแล้ว", "Confirmed sales", "已确认销售额"),
                  currency(
                    state.orders
                      .filter((o) => ["confirmed", "packing", "shipped"].includes(o.status))
                      .reduce((n, o) => n + o.total, 0),
                  ),
                ],
                [t("คำสั่งซื้อทั้งหมด", "Total orders", "订单总数"), state.orders.length],
                [
                  t("รอตรวจสอบสลิป", "Awaiting review", "待审核"),
                  state.orders.filter((o) => o.status === "pending").length,
                ],
                [
                  t("คะแนนรีวิวเฉลี่ย", "Average rating", "平均评分"),
                  state.reviews.filter((r) => r.visible).length
                    ? (
                        state.reviews.filter((r) => r.visible).reduce((n, r) => n + r.rating, 0) /
                        state.reviews.filter((r) => r.visible).length
                      ).toFixed(1) + "/5"
                    : "—",
                ],
              ].map(([label, value]) => (
                <div key={label}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>
            <h2>{t("คำสั่งซื้อล่าสุด", "Recent orders", "最近订单")}</h2>
            {state.orders.length ? (
              state.orders.slice(0, 3).map((o) => orderCard(o, true))
            ) : (
              <div className="empty-state compact">
                <Package />
                <p>
                  {t(
                    "เริ่มสั่งซื้อในหน้าร้านค้า แล้วกลับมาลองตรวจสลิปที่นี่",
                    "Place a demo order in the shop, then review it here.",
                    "先在商店创建演示订单，再到这里审核。",
                  )}
                </p>
                <Action secondary onClick={() => go("tea")}>
                  {t("ไปหน้าร้านค้า", "Open shop", "前往商店")}
                </Action>
              </div>
            )}
            <div className="info-band">
              <Mail />
              <p>
                {t(
                  `บันทึกอีเมลสาธิต ${state.emails.length} รายการ เมื่อสถานะเปลี่ยน ระบบจะสร้างข้อความในบัญชีสมาชิก`,
                  `${state.emails.length} demo emails recorded. Status changes create a preview in the member account.`,
                  `已记录 ${state.emails.length} 封演示邮件，状态变更会在会员账户生成预览。`,
                )}
              </p>
            </div>
          </>
        )}
        {adminTab === "orders" && (
          <>
            {state.orders.length ? (
              state.orders.map((o) => orderCard(o, true))
            ) : (
              <div className="empty-state">
                <Package />
                <h3>{t("ยังไม่มีคำสั่งซื้อ", "No orders yet", "暂无订单")}</h3>
              </div>
            )}
          </>
        )}
        {adminTab === "products" && (
          <>
            <p className="subtle-note">
              {t(
                "ปรับราคาและจำนวนจริงในระบบสาธิต จำนวนพร้อมขายหักสินค้าที่กันให้คำสั่งซื้อแล้ว สต๊อกจริงจะลดเมื่อจัดส่ง",
                "Available stock excludes reserved orders. Physical stock is deducted only on shipment.",
                "可售库存扣除预留订单数量，实际库存仅在发货时扣减。",
              )}
            </p>
            <div className="table-scroll">
              <table>
                <thead>
                  <tr>
                    {[
                      t("สินค้า", "Product", "商品"),
                      t("ราคา (บาท)", "Price (THB)", "价格（泰铢）"),
                      t("สต๊อก", "Stock", "库存"),
                      t("พร้อมขาย", "Available", "可售"),
                      t("แสดงสินค้า", "Visible", "展示"),
                    ].map((x) => (
                      <th key={x}>{x}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {state.products.map((p) => (
                    <tr key={p.id}>
                      <td>
                        <div className="table-product">
                          <img src={p.photo} alt="" />
                          <span>{l(p.name)}</span>
                        </div>
                      </td>
                      <td>
                        <input
                          aria-label={`${l(p.name)} ${t("ราคา", "price", "价格")}`}
                          type="number"
                          min="1"
                          max="100000"
                          defaultValue={p.price}
                          onBlur={(e) => {
                            const n = Number(e.target.value);
                            if (!Number.isFinite(n) || n < 1) {
                              e.target.value = String(p.price);
                              return;
                            }
                            setState((s) => ({
                              ...s,
                              products: s.products.map((item) =>
                                item.id === p.id ? { ...item, price: n } : item,
                              ),
                            }));
                          }}
                        />
                      </td>
                      <td>
                        <input
                          aria-label={`${l(p.name)} ${t("สต๊อก", "stock", "库存")}`}
                          type="number"
                          min="0"
                          max="100000"
                          defaultValue={p.stock}
                          key={`${p.id}-${p.stock}`}
                          onBlur={(e) => {
                            const n = Number(e.target.value);
                            const reserved = p.stock - availableStock(p, state.orders);
                            if (!Number.isInteger(n) || n < reserved) {
                              e.target.value = String(p.stock);
                              notify(
                                t(
                                  "จำนวนต้องไม่น้อยกว่าสินค้าที่กันไว้",
                                  "Stock cannot be below reserved quantity",
                                  "库存不能低于预留数量",
                                ),
                              );
                              return;
                            }
                            setState((s) => ({
                              ...s,
                              products: s.products.map((item) =>
                                item.id === p.id ? { ...item, stock: n } : item,
                              ),
                            }));
                          }}
                        />
                      </td>
                      <td>
                        <span className={availableStock(p, state.orders) < 5 ? "stock-low" : ""}>
                          {availableStock(p, state.orders)}
                        </span>
                      </td>
                      <td>
                        <input
                          type="checkbox"
                          aria-label={`${t("แสดง", "Show", "显示")} ${l(p.name)}`}
                          checked={p.active}
                          onChange={(e) =>
                            setState((s) => ({
                              ...s,
                              products: s.products.map((item) =>
                                item.id === p.id ? { ...item, active: e.target.checked } : item,
                              ),
                            }))
                          }
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <section className="form-panel product-editor">
              <h3>{t("แก้ไขข้อมูลชา", "Edit tea information", "编辑茶品信息")}</h3>
              <label>
                {t("เลือกสินค้า", "Select product", "选择商品")}
                <select value={editProduct} onChange={(e) => setEditProduct(e.target.value)}>
                  {state.products.map((p) => (
                    <option key={p.id} value={p.id}>
                      {l(p.name)}
                    </option>
                  ))}
                </select>
              </label>
              {state.products
                .filter((p) => p.id === editProduct)
                .map((p) => (
                  <form
                    key={p.id + lang}
                    onSubmit={(e) => {
                      e.preventDefault();
                      const f = new FormData(e.currentTarget);
                      const name = [...p.name] as Localized;
                      const description = [...p.description] as Localized;
                      const i = lang === "th" ? 0 : lang === "en" ? 1 : 2;
                      name[i] = String(f.get("name")).trim();
                      description[i] = String(f.get("description")).trim();
                      if (!name[i] || !description[i]) return;
                      setState((s) => ({
                        ...s,
                        products: s.products.map((x) =>
                          x.id === p.id ? { ...x, name, description } : x,
                        ),
                      }));
                      notify(t("บันทึกข้อมูลชาแล้ว", "Tea information saved", "茶品信息已保存"));
                    }}
                  >
                    <p className="subtle-note">
                      {t(
                        "แก้ไขชื่อและรายละเอียดตามภาษาที่เลือกด้านบน",
                        "Edit the name and description in the selected language.",
                        "编辑当前所选语言的名称与描述。",
                      )}
                    </p>
                    <label>
                      {t("ชื่อชา", "Tea name", "茶名")}
                      <input name="name" defaultValue={l(p.name)} required maxLength={100} />
                    </label>
                    <label>
                      {t("รายละเอียดชา", "Tea description", "茶品描述")}
                      <textarea
                        name="description"
                        defaultValue={l(p.description)}
                        required
                        maxLength={1200}
                      />
                    </label>
                    <Action type="submit">
                      {t("บันทึกข้อมูลชา", "Save tea details", "保存茶品信息")}
                    </Action>
                  </form>
                ))}
            </section>
          </>
        )}
        {adminTab === "content" && (
          <div className="content-editor">
            <section className="form-panel">
              <h3>{t("ข้อความประชาสัมพันธ์หน้าแรก", "Home announcements", "首页公告")}</h3>
              {state.promos.map((p) => (
                <form
                  key={p.id}
                  onSubmit={(e) => {
                    e.preventDefault();
                    const f = new FormData(e.currentTarget);
                    const title: Localized = [
                      String(f.get("title0")),
                      String(f.get("title1")),
                      String(f.get("title2")),
                    ];
                    const body: Localized = [
                      String(f.get("body0")),
                      String(f.get("body1")),
                      String(f.get("body2")),
                    ];
                    const start = String(f.get("start"));
                    const end = String(f.get("end"));
                    if (start && end && start > end) {
                      notify(
                        t(
                          "วันสิ้นสุดต้องอยู่หลังวันเริ่ม",
                          "End date must follow start date",
                          "结束日期须晚于开始日期",
                        ),
                      );
                      return;
                    }
                    setState((s) => ({
                      ...s,
                      promos: s.promos.map((item) =>
                        item.id === p.id
                          ? { ...item, title, body, start, end, enabled: f.get("enabled") === "on" }
                          : item,
                      ),
                    }));
                    notify(t("บันทึกเนื้อหาแล้ว", "Content saved", "内容已保存"));
                  }}
                >
                  {["TH", "EN", "中文"].map((label, i) => (
                    <div key={label}>
                      <label>
                        {label} · {t("หัวข้อ", "Title", "标题")}
                        <input
                          name={"title" + i}
                          defaultValue={p.title[i]}
                          required
                          maxLength={100}
                        />
                      </label>
                      <label>
                        {label} · {t("ข้อความ", "Message", "内容")}
                        <textarea
                          name={"body" + i}
                          defaultValue={p.body[i]}
                          required
                          maxLength={400}
                        />
                      </label>
                    </div>
                  ))}
                  <div className="form-row">
                    <label>
                      {t("วันเริ่ม", "Start date", "开始日期")}
                      <input name="start" type="date" defaultValue={p.start} />
                    </label>
                    <label>
                      {t("วันสิ้นสุด", "End date", "结束日期")}
                      <input name="end" type="date" defaultValue={p.end} />
                    </label>
                  </div>
                  <label className="checkbox-label">
                    <input type="checkbox" name="enabled" defaultChecked={p.enabled} />
                    {t("แสดงบนหน้าแรก", "Show on homepage", "在首页显示")}
                  </label>
                  <Action type="submit">
                    {t("บันทึกข่าวสาร", "Save announcement", "保存公告")}
                  </Action>
                </form>
              ))}
              <button
                className="under-link"
                onClick={() => {
                  if (!state.profile?.newsletter) {
                    notify(
                      t(
                        "ยังไม่มีสมาชิกที่เลือกรับข่าวสารในต้นแบบ",
                        "No opted-in demo member yet",
                        "暂无订阅新闻的演示会员",
                      ),
                    );
                    return;
                  }
                  const title = l(state.promos[0]!.title);
                  setState((s) => ({
                    ...s,
                    emails: [
                      {
                        id: crypto.randomUUID(),
                        orderId: "",
                        to: s.profile!.email,
                        kind: "newsletter",
                        created: new Date().toISOString(),
                        title,
                      },
                      ...s.emails,
                    ],
                  }));
                  notify(
                    t("เพิ่มอีเมลข่าวสารสาธิตแล้ว", "Demo newsletter added", "演示新闻邮件已添加"),
                  );
                }}
              >
                <Mail size={17} />
                {t(
                  "ทดลองแจ้งข่าวสารให้สมาชิกที่ยินยอม",
                  "Preview newsletter for opted-in member",
                  "向已订阅会员发送演示预览",
                )}
              </button>
            </section>
            <div>
              <section className="form-panel">
                <h3>{t("ลิงก์คลิปรีวิว", "Review video links", "评价视频链接")}</h3>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const f = new FormData(e.currentTarget);
                    const url = String(f.get("url"));
                    try {
                      if (new URL(url).protocol !== "https:") throw new Error();
                    } catch {
                      notify(
                        t(
                          "กรุณาใช้ลิงก์ HTTPS ที่ถูกต้อง",
                          "Use a valid HTTPS URL",
                          "请输入有效HTTPS链接",
                        ),
                      );
                      return;
                    }
                    setState((s) => ({
                      ...s,
                      clips: [
                        ...s.clips,
                        { id: crypto.randomUUID(), title: String(f.get("title")), url },
                      ],
                    }));
                    e.currentTarget.reset();
                  }}
                >
                  <label>
                    {t("ชื่อคลิป", "Video title", "视频标题")}
                    <input name="title" required maxLength={150} />
                  </label>
                  <label>
                    {t("ลิงก์คลิป", "Video URL", "视频链接")}
                    <input name="url" type="url" placeholder="https://…" required />
                  </label>
                  <Action type="submit">
                    {t("เพิ่มลิงก์", "Add link", "添加链接")}
                    <Plus size={17} />
                  </Action>
                </form>
                {state.clips.map((c) => (
                  <div className="clip-admin" key={c.id}>
                    <span>{c.title}</span>
                    <button
                      className="icon-button"
                      onClick={() =>
                        setState((s) => ({ ...s, clips: s.clips.filter((x) => x.id !== c.id) }))
                      }
                      aria-label={t("ลบคลิป", "Remove clip", "删除视频")}
                    >
                      <Trash2 size={17} />
                    </button>
                  </div>
                ))}
              </section>
              <section className="form-panel">
                <h3>{t("จุดบนแผนที่", "Map locations", "地图地点")}</h3>
                <p className="subtle-note">
                  {t(
                    "แก้คำอธิบายตามภาษาที่เลือกด้านบน",
                    "Edit descriptions in the currently selected language.",
                    "编辑当前所选语言的描述。",
                  )}
                </p>
                {state.zones.map((z) => (
                  <form
                    className="zone-edit"
                    key={z.id + lang}
                    onSubmit={(e) => {
                      e.preventDefault();
                      const f = new FormData(e.currentTarget);
                      const name = [...z.name] as Localized;
                      const note = [...z.note] as Localized;
                      const index = lang === "th" ? 0 : lang === "en" ? 1 : 2;
                      name[index] = String(f.get("name"));
                      note[index] = String(f.get("note"));
                      setState((s) => ({
                        ...s,
                        zones: s.zones.map((x) =>
                          x.id === z.id
                            ? { ...x, name, note, distance: String(f.get("distance")) }
                            : x,
                        ),
                      }));
                      notify(t("บันทึกสถานที่แล้ว", "Location saved", "地点已保存"));
                    }}
                  >
                    <label>
                      {t("ชื่อสถานที่", "Location name", "地点名称")}
                      <input name="name" defaultValue={l(z.name)} required />
                    </label>
                    <label>
                      {t("รายละเอียด", "Description", "描述")}
                      <textarea name="note" defaultValue={l(z.note)} required />
                    </label>
                    <label>
                      {t("ระยะทางตัวอย่าง (กม.)", "Sample distance (km)", "示例距离（公里）")}
                      <input
                        name="distance"
                        type="number"
                        step="0.1"
                        min="0"
                        defaultValue={z.distance}
                        required
                      />
                    </label>
                    <Action secondary type="submit">
                      {t("บันทึก", "Save", "保存")}
                    </Action>
                  </form>
                ))}
              </section>
            </div>
          </div>
        )}
        {adminTab === "reviews" && (
          <>
            {state.reviews.length ? (
              state.reviews.map((r) => (
                <div className="review-item" key={r.id}>
                  <div className="review-by">
                    <strong>{r.author}</strong>
                    <span className="stars">{"★".repeat(r.rating)}</span>
                  </div>
                  <p>{r.text}</p>
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      checked={r.visible}
                      onChange={(e) =>
                        setState((s) => ({
                          ...s,
                          reviews: s.reviews.map((x) =>
                            x.id === r.id ? { ...x, visible: e.target.checked } : x,
                          ),
                        }))
                      }
                    />
                    {t("แสดงรีวิวบนเว็บไซต์", "Show this review", "展示此评价")}
                  </label>
                </div>
              ))
            ) : (
              <div className="empty-state compact">
                <Star />
                <p>{t("ยังไม่มีรีวิวให้ตรวจสอบ", "No reviews to moderate", "暂无待审核评价")}</p>
              </div>
            )}
          </>
        )}
        {adminTab === "qr" && (
          <>
            <h2>{t("QR Code สำหรับหน้าร้าน", "QR codes for the tea house", "茶屋二维码")}</h2>
            <label>
              {t("เลือกหน้าข้อมูลชา", "Choose a tea page", "选择茶品页面")}
              <select
                onChange={(e) => {
                  setQrUrl(
                    location.origin + "/tea" + (e.target.value ? "?tea=" + e.target.value : ""),
                  );
                  setShowQr(true);
                }}
              >
                <option value="">{t("ชาทั้งหมด", "All teas", "全部茶品")}</option>
                {products.map((p) => (
                  <option key={p.id} value={p.id}>
                    {l(p.name)}
                  </option>
                ))}
              </select>
            </label>
            {qrPanel()}
          </>
        )}
      </div>
    );
  }

  function contactPage() {
    return (
      <div className="hm-section page-section">
        <Heading
          eyebrow="COME FIND YOUR QUIET"
          title={t(
            "แล้วพบกันที่ฮักมี",
            "We will save you a quiet moment.",
            "在哈米，留一份宁静给您。",
          )}
        />
        <div className="contact-layout">
          <img src="/photos/shop-view.jpg" alt={t("โฮงชาฮักมี", "Hong Cha Hug Me", "哈米茶屋")} />
          <div>
            <h2>{t("โฮงชาฮักมี", "Hong Cha Hug Me", "哈米茶屋")}</h2>
            <p>HUG ME ORGANIC FARM</p>
            <p>
              <MapPin size={18} />
              {t(
                "บ้านแม่แปง อำเภอพร้าว จังหวัดเชียงใหม่",
                "Mae Paeng, Phrao, Chiang Mai, Thailand",
                "泰国清迈府Phrao县 Mae Paeng",
              )}
            </p>
            <p>
              {t(
                "สอบถามข้อมูลร้าน กิจกรรม และเวลาเปิดบริการก่อนเดินทาง",
                "Contact the tea house for activities and current opening hours before your visit.",
                "出行前请咨询活动安排与营业时间。",
              )}
            </p>
            <a className="hm-button" href="tel:0816696653">
              081-669-6653
              <ArrowUpRight size={18} />
            </a>
            <Action secondary onClick={() => go("map")}>
              {t("สำรวจแผนผัง", "Explore the map", "查看示意图")}
              <MapPin size={17} />
            </Action>
          </div>
        </div>
      </div>
    );
  }

  const currentProduct = state.products.find((p) => p.id === selected);
  return (
    <div className="hugme-app">
      <a className="skip-link" href="#main-content">
        {t("ข้ามไปยังเนื้อหา", "Skip to content", "跳至内容")}
      </a>
      <div className="topbar">
        <span>
          {t(
            "ความสุขเล็ก ๆ จากพร้าว เชียงใหม่",
            "A little happiness from Phrao, Chiang Mai",
            "来自清迈Phrao的一份小美好",
          )}
        </span>
        <button onClick={() => go("contact")}>
          {t("มาเยี่ยมเรา", "Visit us", "来访茶屋")}
          <ArrowUpRight size={12} />
        </button>
      </div>
      <header className="hm-header">
        <button className="brand" onClick={() => go("home")} aria-label="Hug Me home">
          <span className="brand-symbol">
            <Leaf size={25} />
          </span>
          <span className="brand-name">
            hug me<small>ORGANIC FARM</small>
          </span>
        </button>
        <nav className={menu ? "open" : ""} aria-label={t("เมนูหลัก", "Main navigation", "主导航")}>
          {navigation.map((n) => (
            <a
              key={n.page}
              href={`#/${n.page}`}
              className={page === n.page ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                go(n.page);
              }}
            >
              {l(n.label)}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <label className="language-select">
            <span className="sr-only">{t("ภาษา", "Language", "语言")}</span>
            <select value={lang} onChange={(e) => changeLanguage(e.target.value as Lang)}>
              <option value="th">TH</option>
              <option value="en">EN</option>
              <option value="zh">中文</option>
            </select>
          </label>
          <button
            className={`icon-button ${page === "account" ? "active" : ""}`}
            onClick={() => go("account")}
            aria-label={t("บัญชีสมาชิก", "My account", "会员账户")}
          >
            <UserRound size={21} />
          </button>
          <button
            className="icon-button cart-icon"
            onClick={() => go("cart")}
            aria-label={t(
              `ตะกร้า ${count} ชิ้น`,
              `Shopping bag, ${count} items`,
              `购物袋，${count} 件`,
            )}
          >
            <ShoppingBag size={21} />
            {count > 0 && <span>{count}</span>}
          </button>
          <button
            className="icon-button mobile-toggle"
            onClick={() => setMenu((v) => !v)}
            aria-expanded={menu}
            aria-label={t("เปิดเมนู", "Toggle menu", "菜单")}
          >
            {menu ? <X /> : <Menu />}
          </button>
        </div>
      </header>
      <main id="main-content">
        {page === "home"
          ? home()
          : page === "map"
            ? mapPage()
            : page === "tea"
              ? teaPage()
              : page === "quiz"
                ? quizPage()
                : page === "reviews"
                  ? reviewsPage()
                  : page === "cart"
                    ? cartPage()
                    : page === "account"
                      ? accountPage()
                      : page === "admin"
                        ? adminPage()
                        : contactPage()}
      </main>
      <footer className="hm-footer">
        <div className="footer-main">
          <div>
            <button className="brand" onClick={() => go("home")}>
              <Leaf size={32} />
              <span className="brand-name">
                hug me<small>ORGANIC FARM</small>
              </span>
            </button>
            <p>
              {t(
                "ชาสักแก้ว ธรรมชาติรอบตัว และเวลาที่เป็นของคุณ",
                "A cup of tea. A little nature. A moment of your own.",
                "一杯茶，一片自然，一段属于自己的时光。",
              )}
            </p>
            <span className="eyebrow">PHRAO · CHIANG MAI · THAILAND</span>
          </div>
          <div>
            <strong>{t("รู้จักฮักมี", "Discover", "发现哈米")}</strong>
            <button onClick={() => go("map")}>
              {t("เที่ยวฮักมี", "Explore Hug Me", "探索哈米")}
            </button>
            <button onClick={() => go("reviews")}>
              {t("เรื่องเล่าจากผู้มาเยือน", "Visitor stories", "访客故事")}
            </button>
            <button onClick={() => go("contact")}>
              {t("ติดต่อเรา", "Contact us", "联系我们")}
            </button>
          </div>
          <div>
            <strong>{t("ชาของคุณ", "Your tea", "您的茶")}</strong>
            <button onClick={() => go("tea")}>
              {t("ชาและของฝาก", "Tea collection", "茶品系列")}
            </button>
            <button onClick={() => go("quiz")}>
              {t("ค้นหาชาที่ใช่", "Find your tea", "寻找您的茶")}
            </button>
            <button onClick={() => go("account")}>
              {t("บัญชีและคำสั่งซื้อ", "Account & orders", "账户与订单")}
            </button>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © HUG ME ORGANIC FARM · {t("ต้นแบบเพื่อการศึกษา", "Educational prototype", "教学原型")}
          </span>
          <button onClick={() => go("admin")}>
            {t("ทดลองหลังบ้าน", "Demo dashboard", "演示后台")}
            <Settings2 size={14} />
          </button>
        </div>
      </footer>
      <div className="prototype-note">
        {t(
          "ต้นแบบสาธิต · ราคา สต๊อก และคำสั่งซื้อเป็นข้อมูลตัวอย่าง ไม่มีการรับชำระเงินจริง",
          "Interactive prototype · Sample prices, inventory and orders. No real payments.",
          "交互原型 · 价格、库存与订单为演示数据，不收取真实付款。",
        )}
      </div>
      {toast && (
        <div className="toast" role="status">
          <CheckCircle2 size={19} />
          {toast}
          <button onClick={() => setToast("")} aria-label={t("ปิด", "Close", "关闭")}>
            <X size={16} />
          </button>
        </div>
      )}
      <dialog
        ref={dialog}
        className="product-dialog"
        onCancel={() => setSelected(null)}
        onClose={() => setSelected(null)}
        onClick={(e) => {
          if (e.target === e.currentTarget) setSelected(null);
        }}
      >
        {currentProduct && (
          <div className="product-modal">
            <button
              className="modal-close icon-button"
              onClick={() => setSelected(null)}
              aria-label={t("ปิดรายละเอียด", "Close details", "关闭详情")}
            >
              <X />
            </button>
            <div className="detail-photo">
              <img src={currentProduct.photo} alt={l(currentProduct.name)} />
            </div>
            <div className="detail-copy">
              <span className="eyebrow">{l(categories[currentProduct.category]!)} · HUG ME</span>
              <h2>{l(currentProduct.name)}</h2>
              <p>{l(currentProduct.description)}</p>
              <div className="tea-facts">
                <span>
                  <Leaf size={18} />
                  {currentProduct.caffeine
                    ? t("มีคาเฟอีน", "Contains caffeine", "含咖啡因")
                    : t(
                        "ไม่มีคาเฟอีนตามข้อมูลตัวอย่าง",
                        "Caffeine-free in sample data",
                        "示例资料：不含咖啡因",
                      )}
                </span>
                <span>
                  <Coffee size={18} />
                  {t("บรรจุภัณฑ์กระปุก", "Jar packaging", "罐装")}
                </span>
              </div>
              <div className="brew-note">
                <strong>
                  {t("ช่วงเวลาสำหรับชาของคุณ", "Make a moment for tea", "留一刻时间给茶")}
                </strong>
                <p>
                  {t(
                    "เริ่มชงด้วยน้ำร้อน 3–5 นาที แล้วปรับความเข้มตามความชอบ โปรดยืนยันวิธีชงของชาแต่ละชนิดกับร้าน",
                    "Try steeping for 3–5 minutes and adjust to taste. Confirm tea-specific brewing instructions with the shop.",
                    "可尝试冲泡3至5分钟并按口味调整。具体冲泡方法请与茶屋确认。",
                  )}
                </p>
              </div>
              <div className="detail-price">
                <strong>{currency(currentProduct.price)}</strong>
                <span>
                  {availableStock(currentProduct, state.orders) > 0
                    ? t(
                        `พร้อมขาย ${availableStock(currentProduct, state.orders)} ชิ้น`,
                        `${availableStock(currentProduct, state.orders)} available`,
                        `可售 ${availableStock(currentProduct, state.orders)} 件`,
                      )
                    : t("สินค้าหมด", "Out of stock", "售罄")}
                </span>
              </div>
              <Action
                disabled={
                  !currentProduct.active || availableStock(currentProduct, state.orders) <= 0
                }
                onClick={() => add(currentProduct)}
              >
                <ShoppingBag size={18} />
                {t("เพิ่มลงตะกร้า", "Add to bag", "加入购物袋")}
              </Action>
              <button
                className="under-link"
                onClick={() => {
                  setSelected(null);
                  go("cart");
                }}
              >
                {t("ดูตะกร้าของฉัน", "View my bag", "查看购物袋")}
                <ArrowRight size={17} />
              </button>
              <p className="subtle-note">
                {t(
                  "ราคาและรายละเอียดเป็นข้อมูลสาธิต",
                  "Sample price and product information",
                  "示例价格与产品信息",
                )}
              </p>
            </div>
          </div>
        )}
      </dialog>
      {slipPreview && (
        <div
          className="slip-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={t("ภาพสลิปตัวอย่าง", "Sample receipt", "示例凭证")}
          onClick={() => setSlipPreview(null)}
        >
          <button
            className="modal-close icon-button"
            autoFocus
            onClick={() => setSlipPreview(null)}
            aria-label={t("ปิด", "Close", "关闭")}
          >
            <X />
          </button>
          <img src={slipPreview} alt={t("ภาพสลิปตัวอย่าง", "Sample receipt", "示例凭证")} />
        </div>
      )}
    </div>
  );
}
