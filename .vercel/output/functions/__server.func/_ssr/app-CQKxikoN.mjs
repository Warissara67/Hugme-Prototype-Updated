import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { A as ArrowRight, C as Heart, D as CircleCheck, E as Coffee, O as Check, S as Leaf, T as Copy, _ as Minus, a as Truck, b as Mail, c as Sparkles, d as Settings2, f as Search, g as Mountain, h as Package, i as Upload, j as ArrowLeft, k as ArrowUpRight, l as ShoppingBag, m as Plus, n as Waves, o as Trash2, p as QrCode, r as UserRound, s as Star, t as X, u as ShieldCheck, v as Menu, w as ExternalLink, x as LogOut, y as MapPin } from "../_libs/lucide-react.mjs";
import { t as require_lib } from "../_libs/qrcode.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app-CQKxikoN.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var import_lib = /* @__PURE__ */ __toESM(require_lib());
var teas = [
	{
		id: "rose",
		name: "ชากุหลาบ",
		nameEn: "Rose Tea",
		category: "ชาดอกไม้",
		color: "#C4626B",
		flavorNotes: [
			"หอมดอกไม้",
			"นุ่ม",
			"ไม่ฝาด"
		],
		caffeine: "ไม่มี",
		servedHot: true,
		servedCold: true,
		brewTime: "3–5 นาที",
		goodFor: "ผ่อนคลายช่วงเย็น",
		description: "กลีบกุหลาบอบแห้ง ให้น้ำชาสีชมพูอมแดงและกลิ่นดอกไม้ชัดตั้งแต่เปิดฝา",
		price: 0
	},
	{
		id: "chrysanthemum-yellow",
		name: "ชาเก๊กฮวยเหลือง",
		nameEn: "Chrysanthemum Yellow Tea",
		category: "ชาดอกไม้",
		color: "#E8B33A",
		flavorNotes: [
			"หวานอ่อน",
			"กลิ่นดอกไม้",
			"ชุ่มคอ"
		],
		caffeine: "ไม่มี",
		servedHot: true,
		servedCold: true,
		brewTime: "3–5 นาที",
		goodFor: "ดื่มได้ทั้งวัน",
		description: "ดอกเก๊กฮวยเหลืองอบแห้งทั้งดอก ให้น้ำสีเหลืองทอง รสหวานอ่อนตามธรรมชาติ",
		price: 0
	},
	{
		id: "butterfly-pea",
		name: "ชาอัญชัน",
		nameEn: "Butterfly Pea Tea",
		category: "ชาดอกไม้",
		color: "#5B4B9E",
		flavorNotes: [
			"รสอ่อน",
			"สีสด",
			"ไม่หวาน"
		],
		caffeine: "ไม่มี",
		servedHot: true,
		servedCold: true,
		brewTime: "3–4 นาที",
		goodFor: "ทำเมนูเย็น บีบมะนาวแล้วเปลี่ยนสี",
		description: "ดอกอัญชันอบแห้ง ให้น้ำสีน้ำเงินเข้ม เมื่อเติมมะนาวจะเปลี่ยนเป็นสีม่วงอมชมพู",
		price: 0
	},
	{
		id: "stevia",
		name: "ชาหญ้าหวาน",
		nameEn: "Stevia Tea",
		category: "ชาสมุนไพร",
		color: "#7FA05A",
		flavorNotes: ["หวานธรรมชาติ", "ไม่มีน้ำตาล"],
		caffeine: "ไม่มี",
		servedHot: true,
		servedCold: true,
		brewTime: "3–5 นาที",
		goodFor: "ใช้เพิ่มความหวานแทนน้ำตาล",
		description: "ใบหญ้าหวานอบแห้ง ให้ความหวานโดยไม่ให้พลังงาน นิยมผสมกับชาชนิดอื่น",
		price: 0
	},
	{
		id: "pandan",
		name: "ชาใบเตย",
		nameEn: "Pandan Tea",
		category: "ชาสมุนไพร",
		color: "#4F8A4B",
		flavorNotes: ["หอมใบเตย", "กลมกล่อม"],
		caffeine: "ไม่มี",
		servedHot: true,
		servedCold: true,
		brewTime: "4–5 นาที",
		goodFor: "ดื่มหลังอาหาร",
		description: "ใบเตยหั่นอบแห้ง กลิ่นหอมคุ้นเคยแบบขนมไทย ดื่มเปล่าหรือผสมกับชาอื่นก็ได้",
		price: 0
	},
	{
		id: "lemongrass",
		name: "ชาตะไคร้",
		nameEn: "Lemongrass Tea",
		category: "ชาสมุนไพร",
		color: "#D3B65E",
		flavorNotes: [
			"กลิ่นซิตรัส",
			"สดชื่น",
			"เผ็ดปลายอ่อน ๆ"
		],
		caffeine: "ไม่มี",
		servedHot: true,
		servedCold: true,
		brewTime: "5 นาที",
		goodFor: "ดื่มหลังอาหารมัน",
		description: "ตะไคร้ซอยอบแห้ง กลิ่นแรงและสดชื่น เป็นชาที่คนไม่ชอบกลิ่นดอกไม้มักถูกใจ",
		price: 0
	},
	{
		id: "black-mint",
		name: "ชามิ้นท์",
		nameEn: "Black Mint Tea",
		category: "ชาสมุนไพร",
		color: "#2F5D3A",
		flavorNotes: ["เย็นปลายลิ้น", "กลิ่นสะระแหน่"],
		caffeine: "ไม่มี",
		servedHot: true,
		servedCold: true,
		brewTime: "3–4 นาที",
		goodFor: "ดับกลิ่นปาก ดื่มตอนอากาศร้อน",
		description: "ใบมิ้นท์อบแห้ง ให้ความเย็นปลายลิ้น ชงเย็นแล้วสดชื่นเป็นพิเศษ",
		price: 0
	},
	{
		id: "jasmine",
		name: "ชามะลิ",
		nameEn: "Jasmine Tea",
		category: "ชาดอกไม้",
		color: "#E4D9A8",
		flavorNotes: ["หอมมะลิ", "บางเบา"],
		caffeine: "ไม่มี",
		servedHot: true,
		servedCold: true,
		brewTime: "3–4 นาที",
		goodFor: "ดื่มก่อนนอน",
		description: "ดอกมะลิตูมอบแห้งทั้งดอก กลิ่นหอมอ่อนโยน ไม่ฝาด ดื่มตอนดึกได้",
		price: 0
	},
	{
		id: "ginger",
		name: "ชาขิง",
		nameEn: "Ginger Tea",
		category: "ชาสมุนไพร",
		color: "#C98A3C",
		flavorNotes: ["เผ็ดร้อน", "อุ่นท้อง"],
		caffeine: "ไม่มี",
		servedHot: true,
		servedCold: false,
		brewTime: "5–7 นาที",
		goodFor: "อากาศเย็น หรือตอนไม่สบายท้อง",
		description: "ขิงหั่นอบแห้ง ให้ความเผ็ดร้อนแบบอุ่น ๆ เหมาะกับรอบเช้าที่อากาศเย็น",
		price: 0
	},
	{
		id: "marigold",
		name: "ชาดาวเรือง",
		nameEn: "Marigold Tea",
		category: "ชาดอกไม้",
		color: "#E0812A",
		flavorNotes: ["กลิ่นดอกไม้เข้ม", "สีส้มสด"],
		caffeine: "ไม่มี",
		servedHot: true,
		servedCold: true,
		brewTime: "4–5 นาที",
		goodFor: "ดื่มตอนกลางวัน",
		description: "กลีบดาวเรืองอบแห้ง ให้น้ำสีส้มทอง กลิ่นดอกไม้ชัดกว่าชาดอกไม้ชนิดอื่น",
		price: 0
	},
	{
		id: "assam",
		name: "ชาอัสสัม",
		nameEn: "Assam Tea",
		category: "ชาใบชา",
		color: "#7B3E22",
		flavorNotes: [
			"เข้ม",
			"ฝาดกำลังดี",
			"กลิ่นมอลต์"
		],
		caffeine: "ปานกลาง",
		servedHot: true,
		servedCold: true,
		brewTime: "3–4 นาที",
		goodFor: "รอบเช้า หรือชงเป็นชานม",
		description: "ใบชาอัสสัมแท้ ให้น้ำสีน้ำตาลแดงเข้ม รสหนักแน่น เป็นชาชนิดเดียวในเมนูที่มีคาเฟอีนชัด",
		price: 0
	},
	{
		id: "assam-jasmine",
		name: "ชาอัสสัมมะลิ",
		nameEn: "Assam and Jasmine Tea",
		category: "ชาใบชา",
		color: "#8A5230",
		flavorNotes: ["เข้มแต่หอม", "ปลายกลิ่นมะลิ"],
		caffeine: "ปานกลาง",
		servedHot: true,
		servedCold: true,
		brewTime: "3–4 นาที",
		goodFor: "คนที่ชอบชาเข้มแต่ไม่ชอบกลิ่นฝาด",
		description: "ใบชาอัสสัมผสมดอกมะลิ ได้ความหนักแน่นของใบชาแต่มีกลิ่นดอกไม้ตัดปลาย",
		price: 0
	},
	{
		id: "lemon",
		name: "ชาเลมอน",
		nameEn: "Lemon Tea",
		category: "ชาสมุนไพร",
		color: "#D8B33F",
		flavorNotes: ["เปรี้ยวอ่อน", "กลิ่นเปลือกเลมอน"],
		caffeine: "ไม่มี",
		servedHot: true,
		servedCold: true,
		brewTime: "4–5 นาที",
		goodFor: "ชงเย็นในวันอากาศร้อน",
		description: "เลมอนฝานอบแห้งทั้งแว่น กลิ่นเปลือกชัด ชงเย็นแล้วสดชื่น เป็นสินค้าออกใหม่ล่าสุดของร้าน",
		price: 0,
		isNew: true
	},
	{
		id: "mixed",
		name: "ชาโอ๊ะ",
		nameEn: "Mixed Tea",
		category: "ชาสูตรผสม",
		color: "#B58A4A",
		flavorNotes: ["หลายกลิ่นในแก้วเดียว", "กลมกล่อม"],
		caffeine: "ไม่มี",
		servedHot: true,
		servedCold: true,
		brewTime: "4–5 นาที",
		goodFor: "คนที่ยังไม่รู้ว่าชอบชาแบบไหน",
		description: "ชาผสมหลายชนิดในกระปุกเดียว เป็นตัวเริ่มต้นที่ดีสำหรับคนที่มาครั้งแรก",
		price: 0
	},
	{
		id: "rose-stevia-pandan",
		name: "สูตรกุหลาบ หญ้าหวาน ใบเตย",
		nameEn: "Rose, Stevia and Pandan Tea",
		category: "ชาสูตรผสม",
		color: "#B8707E",
		flavorNotes: [
			"หอมกุหลาบ",
			"หวานธรรมชาติ",
			"ปลายใบเตย"
		],
		caffeine: "ไม่มี",
		servedHot: true,
		servedCold: true,
		brewTime: "4–5 นาที",
		goodFor: "คนชอบชาหวานแต่ไม่อยากเติมน้ำตาล",
		description: "สูตรผสมสำเร็จ กุหลาบให้กลิ่น หญ้าหวานให้ความหวาน ใบเตยช่วยให้กลมกล่อมขึ้น",
		price: 0
	},
	{
		id: "lemongrass-stevia-pandan",
		name: "สูตรตะไคร้ หญ้าหวาน ใบเตย",
		nameEn: "Lemongrass, Stevia and Pandan Tea",
		category: "ชาสูตรผสม",
		color: "#C9B45C",
		flavorNotes: [
			"สดชื่น",
			"หวานอ่อน",
			"หอมใบเตย"
		],
		caffeine: "ไม่มี",
		servedHot: true,
		servedCold: true,
		brewTime: "5 นาที",
		goodFor: "ดื่มหลังอาหาร",
		description: "ตะไคร้เป็นตัวนำ ตัดความแรงด้วยใบเตยและหญ้าหวาน ดื่มง่ายกว่าตะไคร้ล้วน",
		price: 0
	},
	{
		id: "chrysanthemum-stevia-pandan",
		name: "สูตรเก๊กฮวย หญ้าหวาน ใบเตย",
		nameEn: "Chrysanthemum Yellow, Stevia and Pandan Tea",
		category: "ชาสูตรผสม",
		color: "#D9A83C",
		flavorNotes: [
			"หวานอ่อน",
			"ชุ่มคอ",
			"หอมอ่อน"
		],
		caffeine: "ไม่มี",
		servedHot: true,
		servedCold: true,
		brewTime: "4–5 นาที",
		goodFor: "ดื่มได้ทั้งวัน เด็กดื่มได้",
		description: "เก๊กฮวยกับหญ้าหวานเข้ากันดีอยู่แล้ว ใบเตยเพิ่มกลิ่นให้แน่นขึ้นอีกชั้น",
		price: 0
	},
	{
		id: "butterfly-pea-stevia-pandan",
		name: "สูตรอัญชัน หญ้าหวาน ใบเตย",
		nameEn: "Butterfly Pea, Stevia and Pandan Tea",
		category: "ชาสูตรผสม",
		color: "#6A5AA8",
		flavorNotes: [
			"สีสด",
			"หวานอ่อน",
			"หอมใบเตย"
		],
		caffeine: "ไม่มี",
		servedHot: true,
		servedCold: true,
		brewTime: "4 นาที",
		goodFor: "ชงเย็น ถ่ายรูปสวย",
		description: "อัญชันให้สี หญ้าหวานให้ความหวาน ใบเตยกลบกลิ่นเขียวของดอกอัญชัน",
		price: 0
	}
];
var local = (lang, value) => value[lang === "th" ? 0 : lang === "en" ? 1 : 2];
var chinese = [
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
	"蝶豆花甜叶菊香兰茶"
];
var categories = [
	[
		"ทั้งหมด",
		"All teas",
		"全部"
	],
	[
		"ชาดอกไม้",
		"Floral tea",
		"花茶"
	],
	[
		"ชาสมุนไพร",
		"Herbal tea",
		"草本茶"
	],
	[
		"ชาใบชา",
		"Tea leaves",
		"茶叶"
	],
	[
		"ชาสูตรผสม",
		"Signature blends",
		"调配茶"
	]
];
var initialProducts = teas.map((t, i) => {
	const category = [
		"ชาดอกไม้",
		"ชาสมุนไพร",
		"ชาใบชา",
		"ชาสูตรผสม"
	].indexOf(t.category) + 1;
	const description = [
		t.description,
		`${t.nameEn}, a gentle invitation to take a slower moment. Enjoy the aroma and discover your preferred brew.`,
		`${chinese[i]}，放慢脚步，享受茶香。选择您喜爱的冲泡方式，感受自然的滋味。`
	];
	return {
		id: t.id,
		name: [
			t.name,
			t.nameEn,
			chinese[i] || t.nameEn
		],
		category,
		description,
		photo: `/photos/products/${t.id}-jar.jpg`,
		color: t.color,
		price: 120 + i % 4 * 20,
		stock: 12 + i,
		floral: category === 1 ? 5 : category === 4 ? 3 : 1,
		fresh: [
			"lemongrass",
			"black-mint",
			"lemon",
			"butterfly-pea"
		].includes(t.id) ? 5 : 2,
		bold: category === 3 ? 5 : t.id === "ginger" ? 4 : 1,
		caffeine: category === 3,
		active: true
	};
});
var initialZones = [
	{
		id: "shop",
		name: [
			"โฮงชาฮักมี",
			"The tea house",
			"哈米茶屋"
		],
		note: [
			"เริ่มต้นวันช้า ๆ กับชาสักแก้ว และเลือกของฝากจากทางร้าน",
			"Start slowly with a cup of tea and discover something to take home.",
			"从一杯茶开始，慢慢发现茶屋里的美好。"
		],
		photo: "/photos/shop-view.jpg",
		x: 23,
		y: 72,
		distance: "0"
	},
	{
		id: "pier",
		name: [
			"ท่าเรือ",
			"The pier",
			"码头"
		],
		note: [
			"จุดชมบรรยากาศริมน้ำ สอบถามกิจกรรมกับทางร้านก่อนเดินทาง",
			"A place to enjoy the waterfront. Ask the team about available activities.",
			"欣赏水边景色，出行前请向茶屋咨询活动。"
		],
		photo: "/photos/pier.jpg",
		x: 38,
		y: 57,
		distance: "0.2"
	},
	{
		id: "chamchuri",
		name: [
			"ต้นฉำฉากลางน้ำ",
			"The rain tree",
			"水中雨树"
		],
		note: [
			"ไฮไลท์ที่เปลี่ยนไปตามฤดูกาลและระดับน้ำ เหมาะกับการชมธรรมชาติ",
			"A memorable tree whose scenery changes with the seasons and water level.",
			"随着季节和水位变化，欣赏雨树不同的自然风貌。"
		],
		photo: "/photos/chamchuri-sunset.jpg",
		x: 68,
		y: 38,
		distance: "3.4"
	},
	{
		id: "moai",
		name: [
			"เขาโมอาย",
			"Moai viewpoint",
			"摩艾山观景点"
		],
		note: [
			"สัมผัสทิวเขาและธรรมชาติ สอบถามสภาพเส้นทางกับทางร้าน",
			"Discover the hills and natural scenery. Check route conditions with the team.",
			"感受山间自然风光，出行前请确认路线情况。"
		],
		photo: "/photos/rocky-peak.jpg",
		x: 81,
		y: 69,
		distance: "2.2"
	}
];
var statuses = {
	pending: [
		"รอตรวจสอบการชำระเงิน",
		"Payment review",
		"待审核付款"
	],
	confirmed: [
		"ยืนยันคำสั่งซื้อแล้ว",
		"Confirmed",
		"订单已确认"
	],
	packing: [
		"กำลังจัดเตรียมสินค้า",
		"Packing",
		"正在打包"
	],
	shipped: [
		"จัดส่งแล้ว",
		"Shipped",
		"已发货"
	],
	cancelled: [
		"ยกเลิกแล้ว",
		"Cancelled",
		"已取消"
	]
};
function seedState() {
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
		promos: [{
			id: "welcome",
			title: [
				"เก็บความสุขกลับบ้าน",
				"A little happiness to take home",
				"把美好带回家"
			],
			body: [
				"เลือกชาที่ชอบ แล้วสั่งส่งถึงบ้านระหว่างเที่ยวต่อ",
				"Choose your favourite tea. We will send it home while you keep exploring.",
				"挑选心爱的茶，继续旅行，让茶先到家。"
			],
			start: "",
			end: "",
			enabled: true
		}]
	};
}
function availableStock(product, orders) {
	return Math.max(0, product.stock - orders.filter((o) => !o.stockDeducted && o.status !== "cancelled").reduce((sum, o) => sum + o.items.filter((i) => i.id === product.id).reduce((a, i) => a + i.qty, 0), 0));
}
function scoreTea(p, answers) {
	const taste = answers[0] ?? 0;
	return (taste === 0 ? p.floral : taste === 1 ? p.fresh : p.bold) * 3 + (answers[1] === 0 ? !p.caffeine ? 8 : 0 : p.caffeine ? 8 : 0) + (answers[2] === 0 ? p.bold <= 2 ? 4 : 0 : p.bold >= 3 ? 4 : 0);
}
function rankTeas(products, answers) {
	return products.filter((p) => p.active).map((p) => ({
		product: p,
		score: scoreTea(p, answers)
	})).sort((a, b) => b.score - a.score || a.product.id.localeCompare(b.product.id));
}
function transitionOrder(state, id, status, carrier = "", tracking = "") {
	const o = state.orders.find((o) => o.id === id);
	if (!o) throw new Error("ORDER_NOT_FOUND");
	if (o.status === status) return state;
	if (!{
		pending: ["confirmed", "cancelled"],
		confirmed: ["packing", "cancelled"],
		packing: ["shipped", "cancelled"],
		shipped: [],
		cancelled: []
	}[o.status].includes(status)) throw new Error("INVALID_TRANSITION");
	if (status === "shipped" && (!carrier.trim() || !tracking.trim())) throw new Error("TRACKING_REQUIRED");
	if (status === "shipped" && o.items.some((i) => (state.products.find((p) => p.id === i.id)?.stock ?? 0) < i.qty)) throw new Error("INSUFFICIENT_STOCK");
	return {
		...state,
		products: state.products.map((p) => status === "shipped" && !o.stockDeducted ? {
			...p,
			stock: p.stock - o.items.filter((i) => i.id === p.id).reduce((n, i) => n + i.qty, 0)
		} : p),
		orders: state.orders.map((item) => item.id === id ? {
			...item,
			status,
			carrier: carrier || item.carrier,
			tracking: tracking || item.tracking,
			stockDeducted: item.stockDeducted || status === "shipped"
		} : item),
		emails: [{
			id: `${id}-${status}`,
			orderId: id,
			to: o.email,
			kind: status,
			created: (/* @__PURE__ */ new Date()).toISOString()
		}, ...state.emails]
	};
}
var STORAGE = "hugme-prototype-v2";
var navigation = [
	{
		page: "home",
		label: [
			"หน้าแรก",
			"Home",
			"首页"
		]
	},
	{
		page: "map",
		label: [
			"เที่ยวฮักมี",
			"Explore",
			"探索"
		]
	},
	{
		page: "tea",
		label: [
			"ชาและของฝาก",
			"Our teas",
			"茶与好礼"
		]
	},
	{
		page: "quiz",
		label: [
			"ค้นหาชาที่ใช่",
			"Find your tea",
			"寻找您的茶"
		]
	},
	{
		page: "reviews",
		label: [
			"เรื่องเล่าจากผู้มาเยือน",
			"Stories",
			"旅行故事"
		]
	}
];
var currency = (n) => new Intl.NumberFormat("th-TH", {
	style: "currency",
	currency: "THB",
	maximumFractionDigits: 0
}).format(n);
function Action({ children, onClick, secondary = false, className = "", type = "button", disabled = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type,
		onClick,
		disabled,
		className: `hm-button ${secondary ? "secondary" : ""} ${className}`,
		children
	});
}
function Heading({ eyebrow, title, description }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "hm-heading",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "eyebrow",
				children: eyebrow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: title }),
			description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: description })
		]
	});
}
function TeaCard({ p, lang, onOpen, onAdd, remaining }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "tea-card",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			className: "tea-image",
			onClick: onOpen,
			"aria-label": local(lang, p.name),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "product-tag",
					children: local(lang, categories[p.category])
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: p.photo,
					alt: local(lang, p.name),
					loading: "lazy"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "image-arrow",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 21 })
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "tea-info",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "eyebrow",
					children: "HUG ME · ORGANIC FARM"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "text-button tea-title",
					onClick: onOpen,
					children: local(lang, p.name)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "tea-price",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						currency(p.price),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: local(lang, [
							"/ กระปุก",
							"/ jar",
							"/ 罐"
						]) })
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "add-button",
						onClick: onAdd,
						disabled: remaining <= 0,
						"aria-label": local(lang, [
							"เพิ่มลงตะกร้า",
							"Add to bag",
							"加入购物袋"
						]),
						children: remaining > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { size: 19 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 18 })
					})]
				})
			]
		})]
	});
}
function HugmeApp({ initialPage = "home" }) {
	const [state, setState] = (0, import_react.useState)(seedState);
	const [ready, setReady] = (0, import_react.useState)(false);
	const [page, setPage] = (0, import_react.useState)(initialPage);
	const [menu, setMenu] = (0, import_react.useState)(false);
	const [toast, setToast] = (0, import_react.useState)("");
	const [selected, setSelected] = (0, import_react.useState)(null);
	const dialog = (0, import_react.useRef)(null);
	const [filter, setFilter] = (0, import_react.useState)(0);
	const [search, setSearch] = (0, import_react.useState)("");
	const [sort, setSort] = (0, import_react.useState)("featured");
	const [zone, setZone] = (0, import_react.useState)("shop");
	const [answers, setAnswers] = (0, import_react.useState)([]);
	const [quizStep, setQuizStep] = (0, import_react.useState)(-1);
	const [slip, setSlip] = (0, import_react.useState)(null);
	const [slipImages, setSlipImages] = (0, import_react.useState)({});
	const [slipPreview, setSlipPreview] = (0, import_react.useState)(null);
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [checkoutError, setCheckoutError] = (0, import_react.useState)("");
	const [admin, setAdmin] = (0, import_react.useState)(false);
	const [adminTab, setAdminTab] = (0, import_react.useState)("overview");
	const [qrUrl, setQrUrl] = (0, import_react.useState)("");
	const [qrImage, setQrImage] = (0, import_react.useState)("");
	const [showQr, setShowQr] = (0, import_react.useState)(false);
	const [reviewRating, setReviewRating] = (0, import_react.useState)(5);
	const [editProduct, setEditProduct] = (0, import_react.useState)("rose");
	const lang = state.lang;
	const t = (th, en, zh) => local(lang, [
		th,
		en,
		zh
	]);
	const l = (value) => local(lang, value);
	const products = state.products.filter((p) => p.active);
	const count = state.cart.reduce((n, i) => n + i.qty, 0);
	const notify = (msg) => setToast(msg);
	(0, import_react.useEffect)(() => {
		try {
			const raw = localStorage.getItem(STORAGE);
			if (raw) {
				const value = JSON.parse(raw);
				if (value.version === 2 && Array.isArray(value.products) && Array.isArray(value.orders)) setState({
					...seedState(),
					...value
				});
			}
		} catch {
			setToast("ไม่สามารถอ่านข้อมูลเดิมได้ · Could not restore demo data");
		}
		setReady(true);
		const sync = () => {
			const key = window.location.hash.replace("#/", "");
			if ([
				"home",
				"map",
				"tea",
				"quiz",
				"reviews",
				"cart",
				"account",
				"admin",
				"contact"
			].includes(key)) setPage(key);
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
	(0, import_react.useEffect)(() => {
		if (!ready) return;
		try {
			localStorage.setItem(STORAGE, JSON.stringify(state));
		} catch {
			setToast(t("พื้นที่จัดเก็บเต็ม ข้อมูลอาจไม่ถูกบันทึก", "Storage is full. Changes may not persist.", "存储空间已满，可能无法保存。"));
		}
		document.documentElement.lang = state.lang;
	}, [state, ready]);
	(0, import_react.useEffect)(() => {
		if (!toast) return;
		const id = setTimeout(() => setToast(""), 4200);
		return () => clearTimeout(id);
	}, [toast]);
	(0, import_react.useEffect)(() => {
		const d = dialog.current;
		if (selected && d && !d.open) d.showModal();
		if (!selected && d?.open) d.close();
	}, [selected]);
	(0, import_react.useEffect)(() => {
		if (!showQr) return;
		let active = true;
		import_lib.toDataURL(qrUrl, {
			width: 360,
			margin: 2,
			color: {
				dark: "#214438",
				light: "#ffffff"
			}
		}).then((url) => {
			if (active) setQrImage(url);
		}).catch(() => {
			if (active) setQrImage("");
		});
		return () => {
			active = false;
		};
	}, [qrUrl, showQr]);
	(0, import_react.useEffect)(() => {
		if (!slipPreview) return;
		const close = (e) => {
			if (e.key === "Escape") setSlipPreview(null);
		};
		window.addEventListener("keydown", close);
		return () => window.removeEventListener("keydown", close);
	}, [slipPreview]);
	const go = (p) => {
		setPage(p);
		setMenu(false);
		setSelected(null);
		history.pushState(null, "", `${location.pathname}#/${p}`);
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};
	const changeLanguage = (value) => setState((s) => ({
		...s,
		lang: value
	}));
	const add = (p) => {
		if ((state.cart.find((i) => i.id === p.id)?.qty ?? 0) >= availableStock(p, state.orders)) {
			notify(t("สินค้ามีไม่เพียงพอ", "Not enough stock", "库存不足"));
			return;
		}
		setState((s) => ({
			...s,
			cart: s.cart.some((i) => i.id === p.id) ? s.cart.map((i) => i.id === p.id ? {
				...i,
				qty: i.qty + 1
			} : i) : [...s.cart, {
				id: p.id,
				qty: 1
			}]
		}));
		notify(t("เพิ่มลงตะกร้าแล้ว", "Added to your bag", "已加入购物袋"));
	};
	const quantity = (id, delta) => {
		const p = state.products.find((p) => p.id === id);
		if (!p) return;
		if ((state.cart.find((i) => i.id === id)?.qty ?? 0) + delta > availableStock(p, state.orders)) {
			notify(t("สินค้ามีไม่เพียงพอ", "Not enough stock", "库存不足"));
			return;
		}
		setState((s) => ({
			...s,
			cart: s.cart.map((i) => i.id === id ? {
				...i,
				qty: i.qty + delta
			} : i).filter((i) => i.qty > 0)
		}));
	};
	const productCard = (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TeaCard, {
		p,
		lang,
		onOpen: () => setSelected(p.id),
		onAdd: () => add(p),
		remaining: availableStock(p, state.orders)
	}, p.id);
	const promoLive = state.promos.filter((p) => p.enabled && (!p.start || p.start <= (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)) && (!p.end || p.end >= (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)));
	function home() {
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "hm-hero",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hero-copy",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "eyebrow",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "tiny-line" }), " PHRAO, CHIANG MAI"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "hero-script",
							children: "A little closer to nature."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", { children: [
							t("พักใจให้ธรรมชาติ", "Slow days.", "慢下来，"),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							t("เติมความสุขด้วยชา", "Beautiful tea.", "与自然共饮。")
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "hero-description",
							children: t("โฮงชาฮักมี ชวนคุณออกมาใช้เวลาช้า ๆ ท่ามกลางขุนเขา ค้นพบเรื่องราวของชา และพาความสุขเล็ก ๆ กลับบ้าน", "Find your quiet moment among the mountains. Explore Hong Cha Hug Me, discover the tea you love, and take a little happiness home.", "来到哈米茶屋，在群山间享受慢时光，探索茶的故事，把一份美好带回家。")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hero-actions",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Action, {
								onClick: () => go("map"),
								children: [t("ออกไปเที่ยวฮักมี", "Explore Hug Me", "探索哈米"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 18 })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: "under-link",
								onClick: () => go("tea"),
								children: [t("เลือกชาที่คุณชอบ", "Discover our teas", "探索我们的茶"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 18 })]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hero-bottom",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "leaf-seal",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leaf, {})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: t("จากธรรมชาติ สู่ช่วงเวลาดี ๆ", "Grown with care. Shared with love.", "源于自然，用心分享。") }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("small", { children: ["HUG ME ORGANIC FARM · ", t("อ.พร้าว เชียงใหม่", "Chiang Mai, Thailand", "泰国清迈")] })] })]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hero-photo",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/photos/chamchuri-sunset.jpg",
							alt: t("ต้นฉำฉากลางน้ำท่ามกลางภูเขา", "The rain tree surrounded by mountains", "群山环绕的水中雨树"),
							fetchPriority: "high"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hero-photo-top",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "HUG ME MOMENTS" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "PHRAO" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "photo-caption",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "eyebrow",
								children: "THE RAIN TREE"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: t("ต้นฉำฉากลางน้ำ", "A moment worth slowing down for", "值得停留的时光") })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								"aria-label": t("ดูจุดท่องเที่ยว", "Explore this place", "查看景点"),
								onClick: () => {
									setZone("chamchuri");
									go("map");
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "vertical-label",
							children: "NATURE · TEA · COMMUNITY"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "journey-strip",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mountain, { size: 19 }), t("เที่ยวธรรมชาติ", "Explore nature", "探索自然")] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Coffee, { size: 19 }), t("ค้นพบชาที่ชอบ", "Find your favourite tea", "寻找喜爱的茶")] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, { size: 19 }), t("สั่งชาให้ส่งถึงบ้าน", "Send a little joy home", "好茶送到家")] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "hm-section",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "section-top",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow",
						children: "EXPLORE HUG ME"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: t("ที่นี่ มีเรื่องราวให้ค้นพบ", "A place to make memories", "在这里，发现美好") })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "under-link",
						onClick: () => go("map"),
						children: [t("สำรวจทุกมุม", "Explore the map", "探索地图"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 18 })]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "explore-grid",
					children: state.zones.filter((z) => z.id !== "pier").map((z, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "destination",
						onClick: () => {
							setZone(z.id);
							go("map");
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "destination-photo",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: z.photo,
								alt: l(z.name),
								loading: "lazy"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["0", i + 1] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "destination-title",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "eyebrow",
								children: i === 0 ? "THE TEA HOUSE" : i === 1 ? "OUR HIGHLIGHT" : "NATURE & SLOW LIFE"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: l(z.name) })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 23 })]
						})]
					}, z.id))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "quiz-banner",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "quiz-art",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/photos/products/rose-glass.jpg",
							alt: t("ชากุหลาบ", "Rose tea", "玫瑰茶")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "circle-label",
							children: [
								"FIND",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"YOUR",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "tea." })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/photos/products/assam-glass.jpg",
							alt: t("ชาอัสสัม", "Assam tea", "阿萨姆茶")
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "quiz-copy",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow",
							children: "A TEA THAT FEELS LIKE YOU"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: t("ชาที่ใช่ อาจอยู่ใกล้กว่าที่คิด", "Your next favourite cup awaits.", "找到属于您的那杯茶。") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("ตอบคำถามสั้น ๆ 3 ข้อ แล้วให้เราช่วยค้นหาชาที่เข้ากับรสนิยมของคุณ ลองได้ทั้งที่บ้านและระหว่างแวะมาหาเรา", "Three small questions. A personal tea discovery. Try it from home or while visiting our tea house.", "回答三个简单问题，发现符合您口味的茶。在家或到店都能体验。") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Action, {
							onClick: () => {
								setQuizStep(-1);
								setAnswers([]);
								go("quiz");
							},
							children: [t("ค้นหาชาของฉัน", "Find my tea", "寻找我的茶"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { size: 18 })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: t("ประมาณ 1 นาที · เลือกจากความชอบของคุณ", "About 1 minute · Based on your preferences", "约一分钟 · 根据您的口味") })
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "hm-section",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "section-top",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow",
							children: "FROM OUR FARM, WITH LOVE"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: t("ชาดี ๆ สำหรับทุกวันของคุณ", "A little ritual, every day.", "给每一天，一杯好茶。") })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "under-link",
							onClick: () => go("tea"),
							children: [t("ดูชาทั้งหมด", "Shop all teas", "查看全部茶品"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 18 })]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "product-grid featured",
						children: [
							"rose",
							"assam",
							"butterfly-pea",
							"lemongrass"
						].map((id) => products.find((p) => p.id === id)).filter((p) => !!p).map(productCard)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "subtle-note",
						children: t("ราคาและสต๊อกในต้นแบบเป็นข้อมูลสาธิต กรุณายืนยันกับร้านก่อนเปิดใช้งานจริง", "Prices and stock are demonstration data, pending confirmation by the shop.", "原型中的价格与库存仅供演示，实际使用前请与茶屋确认。")
					})
				]
			}),
			promoLive.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "promotion-strip",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow",
						children: "LITTLE THINGS, BIG HAPPINESS"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: l(p.title) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: l(p.body) })
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Action, {
					secondary: true,
					onClick: () => go("tea"),
					children: [t("เลือกชากลับบ้าน", "Bring tea home", "把茶带回家"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 18 })]
				})]
			}, p.id)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "story-section",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/photos/shop-view.jpg",
					alt: t("บรรยากาศโฮงชาฮักมี", "Hug Me scenery", "哈米茶屋风景"),
					loading: "lazy"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow",
						children: "MORE THAN A CUP OF TEA"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: t("หนึ่งสถานที่ หลายความทรงจำ", "Come for the scenery. Stay for the feeling.", "因风景而来，为美好停留。") }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("รู้จักฮักมีผ่านเรื่องราวของผู้มาเยือน ชมคลิปรีวิวและแบ่งปันช่วงเวลาดี ๆ ของคุณ เพื่อให้การมาเที่ยวครั้งต่อไปมีความหมายมากขึ้น", "Get to know Hug Me through visitor stories. Discover their perspectives and share your own moments.", "通过旅人的故事认识哈米。分享您的美好时刻，让下一次旅程更有意义。") }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "under-link",
						onClick: () => go("reviews"),
						children: [t("อ่านเรื่องราวจากผู้มาเยือน", "Read visitor stories", "阅读旅行故事"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 18 })]
					})
				] })]
			})
		] });
	}
	function mapPage() {
		const z = state.zones.find((z) => z.id === zone) ?? state.zones[0];
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "hm-section page-section",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
					eyebrow: "A LITTLE EXPLORING",
					title: t("เลือกมุมโปรดของคุณ", "Find your favourite corner", "寻找您最爱的角落"),
					description: t("กดเลือกจุดบนแผนผัง เพื่อรู้จักโฮงชาฮักมีให้มากขึ้น", "Tap a place on the map and get to know Hug Me.", "点击地图上的地点，进一步了解哈米。")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "map-layout",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "map-canvas",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
								viewBox: "0 0 800 600",
								"aria-hidden": "true",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pattern", {
										id: "map-grid",
										width: "35",
										height: "35",
										patternUnits: "userSpaceOnUse",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
											d: "M35 0H0V35",
											fill: "none",
											stroke: "#dce1d2",
											strokeWidth: "1"
										})
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
										width: "800",
										height: "600",
										fill: "#eff0e4"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
										width: "800",
										height: "600",
										fill: "url(#map-grid)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
										d: "M0 80Q180 180 300 80T800 50V300Q650 180 490 360T0 370Z",
										fill: "#c4d9d2"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
										d: "M-20 115Q160 235 320 140T820 105",
										fill: "none",
										stroke: "#e5eeea",
										strokeWidth: "8"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
										d: "M185 432Q290 450 304 342T545 228Q590 260 650 414",
										fill: "none",
										stroke: "#a3a58b",
										strokeWidth: "3",
										strokeDasharray: "9 10"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
										d: "M20 535L95 420L165 535M105 560L205 415L310 560M570 150L655 35L730 150M650 170L745 35L830 170",
										fill: "#d4dec5",
										stroke: "#c3cfb4",
										strokeWidth: "2"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
										x: "320",
										y: "175",
										fill: "#6a8c82",
										fontSize: "17",
										fontFamily: "Georgia",
										letterSpacing: "4",
										children: "SLOW BY THE WATER"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "map-compass",
								children: [
									"N",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"↑"
								]
							}),
							state.zones.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								style: {
									left: `${s.x}%`,
									top: `${s.y}%`
								},
								className: `map-pin ${zone === s.id ? "active" : ""}`,
								onClick: () => setZone(s.id),
								"aria-label": l(s.name),
								"aria-pressed": zone === s.id,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: i + 1 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: l(s.name) })]
							}, s.id)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "map-legend",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "legend-dot" }), t("คลิกเพื่อดูรายละเอียด", "Select a location", "选择地点")]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "zone-detail",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: z.photo,
							alt: l(z.name)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "eyebrow",
								children: ["EXPLORE · 0", state.zones.indexOf(z) + 1]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: l(z.name) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: l(z.note) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "distance",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { size: 18 }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									t("ระยะทางตัวอย่างจากร้าน", "Sample distance from tea house", "距茶屋的示例距离"),
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [
										z.distance,
										" ",
										t("กม.", "km", "公里")
									] })
								] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "subtle-note",
								children: t("แผนผังและระยะทางเป็นข้อมูลสาธิต ไม่ใช่มาตราส่วนหรือเส้นทางนำทางจริง โปรดตรวจสอบกับร้าน", "Illustrative map and sample distances, not a navigation route. Confirm details with the shop.", "示意图与距离仅供演示，并非实际导航路线。请向茶屋确认。")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Action, {
								secondary: true,
								onClick: () => go("contact"),
								children: [t("สอบถามข้อมูลสถานที่", "Ask the tea house", "咨询茶屋"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 18 })]
							})
						] })]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "info-band",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leaf, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("ใช้เวลาให้เต็มที่กับธรรมชาติ เว็บไซต์นี้ให้ข้อมูลกิจกรรม ไม่มีระบบจองเรือหรือจองกิจกรรมออนไลน์", "Enjoy nature at your pace. This website provides activity information; it does not accept activity or boat bookings.", "自在享受自然。本网站提供活动信息，不接受活动或船票预订。") })]
				})
			]
		});
	}
	function teaPage() {
		const found = products.filter((p) => (!filter || p.category === filter) && p.name.join(" ").toLowerCase().includes(search.toLowerCase())).sort((a, b) => sort === "low" ? a.price - b.price : sort === "high" ? b.price - a.price : 0);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "hm-section page-section",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "catalog-header",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
						eyebrow: "THE TEA COLLECTION",
						title: t("ความสุข ที่ชงได้ทุกวัน", "Good days begin with tea.", "让每一天，从好茶开始。"),
						description: t("ทำความรู้จักชาของเรา แล้วเลือกแก้วที่เป็นคุณ จะซื้อที่ร้านหรือสั่งส่งถึงบ้านก็ได้", "Explore our teas, discover your favourites, and enjoy them at the tea house or at home.", "认识我们的茶，选择喜爱的味道，在店内购买或送到家。")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "quiz-mini",
						onClick: () => {
							setAnswers([]);
							setQuizStep(-1);
							go("quiz");
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [t("ยังเลือกไม่ถูก?", "Not sure where to start?", "还没选好？"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: t("ลองค้นหาชาที่ใช่ →", "Find your tea →", "寻找您的茶 →") })] })]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "catalog-tools",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "category-list",
						"aria-label": t("หมวดหมู่ชา", "Tea categories", "茶品分类"),
						children: categories.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: filter === i ? "active" : "",
							onClick: () => setFilter(i),
							children: l(c)
						}, i))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "search-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "search-field",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { size: 18 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: search,
								onChange: (e) => setSearch(e.target.value),
								placeholder: t("ค้นหาชา…", "Search tea…", "搜索茶品…"),
								"aria-label": t("ค้นหาชา", "Search tea", "搜索茶品")
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							"aria-label": t("เรียงสินค้า", "Sort products", "排序"),
							value: sort,
							onChange: (e) => setSort(e.target.value),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "featured",
									children: t("เรียงตามรายการ", "Featured", "推荐排序")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "low",
									children: t("ราคา น้อย–มาก", "Price: low to high", "价格从低到高")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "high",
									children: t("ราคา มาก–น้อย", "Price: high to low", "价格从高到低")
								})
							]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "result-count",
					children: [
						found.length,
						" ",
						t("รายการ · บรรจุภัณฑ์กระปุก", "teas · jar packaging", "款茶 · 罐装")
					]
				}),
				found.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "product-grid",
					children: found.map(productCard)
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "empty-state",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: t("ยังไม่พบชาที่ค้นหา", "No tea found", "未找到茶品") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Action, {
							secondary: true,
							onClick: () => {
								setFilter(0);
								setSearch("");
							},
							children: t("ดูชาทั้งหมด", "Show all teas", "查看全部茶品")
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "info-band",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QrCode, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: t("อยู่ที่ร้าน? อ่านข้อมูลชาได้จาก QR Code", "At the tea house? Scan to discover your tea.", "在茶屋？扫码了解茶品。") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("ข้อมูลและแบบทดสอบเดียวกัน เปิดอ่านได้ทั้งที่ร้านและที่บ้าน", "The same tea information and quiz are available wherever you are.", "无论在家还是店内，都能阅读相同的茶品信息并参与测试。") })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "under-link",
							onClick: () => {
								setShowQr(!showQr);
								setQrUrl(location.origin + "/tea");
							},
							children: t("แสดง QR", "Show QR", "显示二维码")
						})
					]
				}),
				showQr && qrPanel(),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "subtle-note",
					children: t("ราคา สต๊อก และรายละเอียดการชงเป็นข้อมูลตัวอย่างสำหรับนำเสนอต้นแบบ", "Prices, stock and brewing information are sample data for this prototype.", "价格、库存与冲泡信息为原型演示数据。")
				})
			]
		});
	}
	function qrPanel() {
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "qr-panel",
			children: [qrImage && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: qrImage,
				alt: "QR Code"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: t("เปิดหน้าข้อมูลชาโดยตรง", "Open tea information directly", "直接打开茶品页面") }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [t("ลิงก์เว็บไซต์สำหรับ QR Code", "Website URL for QR code", "二维码网站链接"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "url",
					value: qrUrl,
					onChange: (e) => setQrUrl(e.target.value)
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "subtle-note",
					children: t("เมื่อเผยแพร่เว็บ ให้เปลี่ยนเป็นลิงก์จริง มือถือเครื่องอื่นไม่สามารถเปิด localhost ได้", "Use the deployed website URL. Other devices cannot open a localhost address.", "请使用已发布的网站地址，其他设备无法访问 localhost。")
				}),
				qrImage && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: qrImage,
					download: "hugme-tea-qr.png",
					className: "under-link",
					children: [t("ดาวน์โหลด QR Code", "Download QR code", "下载二维码"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 16 })]
				})
			] })]
		});
	}
	const questions = [
		{
			title: [
				"คุณชอบกลิ่นและรสแบบไหน?",
				"Which flavours draw you in?",
				"您喜欢哪种香气与口感？"
			],
			options: [
				{
					label: [
						"หอมดอกไม้",
						"Soft & floral",
						"柔和花香"
					],
					note: [
						"ละมุน เบาสบาย",
						"Delicate and gentle",
						"细腻柔和"
					],
					icon: Leaf
				},
				{
					label: [
						"สดชื่น",
						"Bright & refreshing",
						"清新爽口"
					],
					note: [
						"ชอบกลิ่นสมุนไพรหรือซิตรัส",
						"Herbal or citrus notes",
						"草本或柑橘香气"
					],
					icon: Waves
				},
				{
					label: [
						"เข้มข้น",
						"Rich & bold",
						"浓郁醇厚"
					],
					note: [
						"มีรสชาติชัดเจน",
						"A fuller-bodied cup",
						"口感饱满"
					],
					icon: Coffee
				}
			]
		},
		{
			title: [
				"คุณต้องการคาเฟอีนไหม?",
				"How about caffeine?",
				"您偏好含咖啡因的茶吗？"
			],
			options: [{
				label: [
					"เลือกแบบไม่มีคาเฟอีน",
					"Prefer caffeine-free",
					"偏好无咖啡因"
				],
				note: [
					"สำหรับช่วงเวลาผ่อนคลาย",
					"For a quieter moment",
					"享受宁静时光"
				],
				icon: Leaf
			}, {
				label: [
					"มีคาเฟอีนได้",
					"Caffeine is welcome",
					"可以含咖啡因"
				],
				note: [
					"ชอบรสชาติของใบชา",
					"Enjoy the character of tea leaves",
					"喜欢茶叶的风味"
				],
				icon: Coffee
			}]
		},
		{
			title: [
				"แก้วโปรดของคุณควรเป็นแบบไหน?",
				"What feels like your kind of cup?",
				"您喜欢怎样的一杯茶？"
			],
			options: [{
				label: [
					"เบาและนุ่ม",
					"Light & mellow",
					"清淡柔和"
				],
				note: [
					"จิบเพลิน ๆ ไม่เข้มมาก",
					"Easy to sip and unwind",
					"轻松慢饮"
				],
				icon: Heart
			}, {
				label: [
					"รสชัด มีเอกลักษณ์",
					"Distinct & full-bodied",
					"浓郁独特"
				],
				note: [
					"ชอบรสชาติที่สัมผัสได้ชัด",
					"A character that stands out",
					"鲜明的风味"
				],
				icon: Sparkles
			}]
		}
	];
	function quizPage() {
		const results = rankTeas(products, answers).slice(0, 3);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "hm-section page-section quiz-page",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
				eyebrow: "FIND YOUR TEA",
				title: t("ทุกความชอบ มีชาที่เข้ากัน", "There is a tea for your kind of day.", "每一种喜好，都有一款好茶。"),
				description: t("ค้นพบชาจากรสนิยมของคุณ ด้วยคำถามสั้น ๆ 3 ข้อ", "Discover tea based on your preferences, with three simple questions.", "通过三个简单问题，发现适合您口味的茶。")
			}), quizStep < 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "quiz-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "quiz-start-image",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/photos/products/rose-glass.jpg",
						alt: t("ชากุหลาบ", "Rose tea", "玫瑰茶")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow",
						children: "YOUR LITTLE TEA RITUAL"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: t("เริ่มจากสิ่งที่คุณชอบ", "Start with what you love.", "从您的喜好开始。") }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("ไม่มีคำตอบที่ถูกหรือผิด เลือกกลิ่น รสชาติ และคาเฟอีนที่คุณชอบ แล้วพบกับชาที่น่าลอง", "There are no right or wrong answers. Tell us your taste and caffeine preferences.", "没有对错之分，只需告诉我们您喜欢的口味与咖啡因偏好。") }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Action, {
						onClick: () => {
							setAnswers([]);
							setQuizStep(0);
						},
						children: [t("เริ่มค้นหาชาของฉัน", "Start my tea discovery", "开始寻找我的茶"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 18 })]
					})
				] })]
			}) : quizStep < 3 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "quiz-question",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "quiz-progress",
						children: questions.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: i <= quizStep ? "done" : "" }, i))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "eyebrow",
						children: [
							"0",
							quizStep + 1,
							" / 03"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: l(questions[quizStep].title) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "quiz-options",
						children: questions[quizStep].options.map((o, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: answers[quizStep] === i ? "selected" : "",
							onClick: () => setAnswers((a) => {
								const b = [...a];
								b[quizStep] = i;
								return b;
							}),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(o.icon, {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: l(o.label) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: l(o.note) }),
								answers[quizStep] === i && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "option-check" })
							]
						}, i))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "quiz-controls",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "under-link",
							onClick: () => setQuizStep((s) => s - 1),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 17 }), t("ย้อนกลับ", "Back", "返回")]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Action, {
							disabled: answers[quizStep] === void 0,
							onClick: () => setQuizStep((s) => s + 1),
							children: [quizStep === 2 ? t("ดูชาที่เหมาะกับฉัน", "Reveal my teas", "查看结果") : t("ถัดไป", "Next", "下一步"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 18 })]
						})]
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "quiz-results",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "result-intro",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "leaf-seal",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: t("ชาที่เราอยากให้คุณลอง", "Meet your tea matches.", "为您推荐的茶。") }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("จัดอันดับจากกลิ่นและรสชาติ (น้ำหนัก 3) คาเฟอีน (8 คะแนน) และความเข้ม (4 คะแนน)", "Ranked by flavour (weight 3), caffeine preference (8 points) and body (4 points).", "根据风味（权重3）、咖啡因偏好（8分）及浓淡（4分）排名。") })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "product-grid result-grid",
						children: results.map(({ product, score }, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "match-label",
							children: [
								i === 0 ? "✦ " : "",
								t("อันดับ", "Match", "推荐"),
								" ",
								i + 1,
								" · ",
								score,
								"/27 ",
								t("คะแนน", "points", "分")
							]
						}), productCard(product)] }, product.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "quiz-controls",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("ซื้อที่หน้าร้าน หรือเพิ่มลงตะกร้าเพื่อสั่งส่งถึงบ้าน", "Buy at the tea house or add to your bag for home delivery.", "可在店内购买，或加入购物袋配送到家。") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Action, {
							secondary: true,
							onClick: () => {
								setAnswers([]);
								setQuizStep(0);
							},
							children: t("ลองอีกครั้ง", "Try again", "重新测试")
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "subtle-note",
						children: t("แบบทดสอบแนะนำตามความชอบ ไม่ใช่คำแนะนำทางการแพทย์ เกณฑ์และข้อมูลชาต้องตรวจสอบกับร้านก่อนใช้งานจริง", "Preference-based recommendations, not medical advice. Tea data and scoring require shop validation.", "根据口味偏好推荐，并非医疗建议。茶品信息与评分规则须经茶屋确认。")
					})
				]
			})]
		});
	}
	function reviewsPage() {
		const reviews = state.reviews.filter((r) => r.visible);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "hm-section page-section",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
					eyebrow: "STORIES FROM OUR VISITORS",
					title: t("ฮักมี ในมุมของคุณ", "Hug Me, through your eyes.", "您眼中的哈米。"),
					description: t("พื้นที่เล่าเรื่องราว แบ่งปันความประทับใจ และรู้จักฮักมีผ่านผู้มาเยือน", "Stories, impressions and a different perspective on our little place.", "分享旅途印象，从不同视角认识这个美好的地方。")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "reviews-intro",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/photos/aerial-lake.jpg",
						alt: t("บรรยากาศธรรมชาติ", "Nature at Hug Me", "哈米的自然风光")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow",
							children: "WATCH & EXPLORE"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: t("เรื่องเล่าจากอินฟลูเอนเซอร์", "Stories worth watching", "值得一看的故事") }),
						state.clips.length ? state.clips.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							className: "clip-link",
							href: c.url,
							target: "_blank",
							rel: "noreferrer",
							children: [c.title, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { size: 18 })]
						}, c.id)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("คลิปรีวิวที่ได้รับการตรวจสอบจากร้านจะรวบรวมไว้ที่นี่ ผู้ดูแลสามารถเพิ่มลิงก์ได้จากหลังบ้าน", "Verified visitor videos will appear here. The administrator can add review links in the demo dashboard.", "茶屋确认的视频将展示在这里。管理员可在后台添加链接。") })
					] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "review-layout",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: t("ความประทับใจจากผู้มาเยือน", "Visitor impressions", "访客评价") }), reviews.length ? reviews.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "review-item",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "review-by",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "avatar",
									children: r.author.slice(0, 1)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: r.author }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: r.target })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "stars",
									children: ["★".repeat(r.rating), "☆".repeat(5 - r.rating)]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: r.text })]
					}, r.id)) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "empty-state compact",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("ยังไม่มีรีวิว มาแบ่งปันเรื่องราวแรกกัน", "No reviews yet. Share the first story.", "还没有评价，分享第一个故事吧。") })]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "form-panel",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: t("แบ่งปันช่วงเวลาดี ๆ", "Share your moment", "分享美好时光") }), state.profile ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: (e) => {
								e.preventDefault();
								const f = new FormData(e.currentTarget);
								const message = String(f.get("review") ?? "").trim();
								if (!message) return;
								const review = {
									id: crypto.randomUUID(),
									author: state.profile.name,
									rating: reviewRating,
									text: message,
									target: String(f.get("target")),
									visible: true
								};
								setState((s) => ({
									...s,
									reviews: [review, ...s.reviews]
								}));
								e.currentTarget.reset();
								notify(t("ขอบคุณสำหรับรีวิว", "Thank you for sharing", "感谢您的分享"));
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [t("รีวิวเกี่ยวกับ", "Your review is about", "评价内容"), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									name: "target",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: t("บรรยากาศและการท่องเที่ยว", "The place & experience", "环境与体验") }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: t("ชาและสินค้า", "Tea & products", "茶与商品") }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: t("กิจกรรม", "Activities", "活动") })
									]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "rating-input",
									"aria-label": t("คะแนน", "Rating", "评分"),
									children: [
										1,
										2,
										3,
										4,
										5
									].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setReviewRating(n),
										"aria-label": `${n} / 5`,
										"aria-pressed": reviewRating === n,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
											fill: n <= reviewRating ? "#c49a55" : "none",
											color: "#c49a55"
										})
									}, n))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [t("ความประทับใจของคุณ", "Your story", "您的故事"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									name: "review",
									required: true,
									minLength: 5,
									maxLength: 1e3,
									placeholder: t("เล่าช่วงเวลาที่คุณประทับใจ…", "Tell us about your visit…", "分享您的体验…")
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Action, {
									type: "submit",
									children: [t("ส่งรีวิว", "Post review", "发布评价"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 17 })]
								})
							]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("เข้าสู่โหมดสมาชิกเพื่อเขียนรีวิว", "Enter member demo to share a review.", "进入会员演示以发表评价。") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Action, {
							onClick: () => go("account"),
							children: t("เข้าสู่โหมดสมาชิก", "Member demo", "会员演示")
						})] })]
					})]
				})
			]
		});
	}
	async function placeOrder(form) {
		if (busy) return;
		if (!state.profile) {
			go("account");
			return;
		}
		if (!slip) {
			setCheckoutError(t("กรุณาเลือกภาพสลิปตัวอย่าง", "Please attach a sample receipt", "请上传示例付款凭证"));
			return;
		}
		if (!state.cart.length) return;
		const items = state.cart.map((i) => ({
			item: i,
			p: state.products.find((p) => p.id === i.id)
		}));
		if (items.some(({ item, p }) => !p || !p.active || availableStock(p, state.orders) < item.qty)) {
			setCheckoutError(t("สินค้าในตะกร้ามีไม่เพียงพอ กรุณาปรับจำนวน", "Some items are unavailable. Please update quantities.", "部分商品库存不足，请调整数量。"));
			return;
		}
		setBusy(true);
		setCheckoutError("");
		try {
			const f = new FormData(form);
			const id = "HM-" + Date.now().toString(36).toUpperCase();
			const order = {
				id,
				created: (/* @__PURE__ */ new Date()).toISOString(),
				customer: String(f.get("name")).trim(),
				email: state.profile.email,
				address: String(f.get("address")).trim(),
				items: items.map(({ item, p }) => ({
					id: item.id,
					name: p.name,
					qty: item.qty,
					price: p.price
				})),
				total: items.reduce((n, { item, p }) => n + item.qty * p.price, 0),
				status: "pending",
				tracking: "",
				carrier: "",
				slipName: slip.name,
				stockDeducted: false
			};
			if (!order.customer || !order.address) throw new Error("ADDRESS_REQUIRED");
			const imageUrl = URL.createObjectURL(slip);
			setSlipImages((s) => ({
				...s,
				[id]: imageUrl
			}));
			setState((s) => ({
				...s,
				orders: [order, ...s.orders],
				cart: [],
				emails: [{
					id: id + "-pending",
					orderId: id,
					to: order.email,
					kind: "pending",
					created: order.created
				}, ...s.emails]
			}));
			setSlip(null);
			go("account");
			notify(t("สร้างคำสั่งซื้อสาธิตแล้ว รอตรวจสอบสลิป", "Demo order created. Awaiting payment review.", "演示订单已创建，等待付款审核。"));
		} catch {
			setCheckoutError(t("กรุณาตรวจสอบข้อมูลและลองใหม่", "Please check the form and try again", "请检查信息后重试"));
		} finally {
			setBusy(false);
		}
	}
	function cartPage() {
		const total = state.cart.reduce((n, i) => n + (state.products.find((p) => p.id === i.id)?.price ?? 0) * i.qty, 0);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "hm-section page-section",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
				eyebrow: "A LITTLE JOY TO TAKE HOME",
				title: t("ตะกร้าของคุณ", "Your tea bag", "您的购物袋"),
				description: t("เที่ยวต่อให้เต็มที่ แล้วให้ชาที่ชอบเดินทางไปหาคุณ", "Keep exploring. Let your favourite tea find its way home.", "尽情旅行，让喜欢的茶送到家。")
			}), !count ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "empty-state",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { size: 45 }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: t("ตะกร้ายังว่างอยู่", "A good cup is waiting.", "一杯好茶正等着您。") }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("เลือกชาสักกระปุก แล้วเก็บช่วงเวลาดี ๆ กลับบ้าน", "Choose a tea and take a little moment home.", "挑选一罐茶，把美好时光带回家。") }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Action, {
						onClick: () => go("tea"),
						children: [t("เลือกซื้อชา", "Explore our teas", "选购茶品"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 18 })]
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "checkout-layout",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "cart-items",
						children: state.cart.map((i) => {
							const p = state.products.find((p) => p.id === i.id);
							if (!p) return null;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "cart-item",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: p.photo,
										alt: l(p.name)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											className: "text-button",
											onClick: () => setSelected(p.id),
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: l(p.name) })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: t("บรรจุภัณฑ์กระปุก · ราคาสาธิต", "Jar packaging · Sample price", "罐装 · 示例价格") }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: currency(p.price) })
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "quantity",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => quantity(p.id, -1),
												"aria-label": t("ลดจำนวน", "Decrease quantity", "减少数量"),
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { size: 14 })
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: i.qty }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => quantity(p.id, 1),
												"aria-label": t("เพิ่มจำนวน", "Increase quantity", "增加数量"),
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { size: 14 })
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										className: "icon-button",
										onClick: () => setState((s) => ({
											...s,
											cart: s.cart.filter((c) => c.id !== i.id)
										})),
										"aria-label": t("นำสินค้าออก", "Remove item", "移除商品"),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { size: 17 })
									})
								]
							}, i.id);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "shipping-note",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: t("ส่งถึงบ้าน แล้วไปเที่ยวต่อ", "Delivered home. More time to explore.", "配送到家，继续旅行。") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("ต้นแบบนี้ใช้ค่าจัดส่ง 0 บาทเพื่อสาธิต กรุณากำหนดค่าจัดส่งจริงก่อนเปิดใช้งาน", "This demo uses ฿0 shipping. Actual shipping rates must be configured before launch.", "演示运费为0泰铢，正式上线前须配置实际运费。") })] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "under-link",
						onClick: () => go("tea"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 17 }), t("เลือกชาเพิ่ม", "Continue exploring", "继续选购")]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "checkout-panel",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: t("สรุปคำสั่งซื้อ", "Order summary", "订单摘要") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "summary-line",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("ยอดสินค้า", "Subtotal", "商品小计") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: currency(total) })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "summary-line",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("ค่าจัดส่งสาธิต", "Demo shipping", "演示运费") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: currency(0) })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "summary-line total",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("รวมทั้งหมด", "Total", "合计") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: currency(total) })]
						}),
						!state.profile ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("เข้าสู่โหมดสมาชิกก่อนสร้างคำสั่งซื้อ", "Enter member demo to place an order.", "请进入会员演示后下单。") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Action, {
							onClick: () => go("account"),
							children: t("เข้าสู่โหมดสมาชิก", "Continue as demo member", "进入会员演示")
						})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: (e) => {
								e.preventDefault();
								placeOrder(e.currentTarget);
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [t("ชื่อผู้รับ (ข้อมูลตัวอย่าง)", "Recipient (sample data)", "收件人（示例信息）"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									name: "name",
									required: true,
									maxLength: 100,
									defaultValue: state.profile.name
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [t("ที่อยู่จัดส่ง (ข้อมูลตัวอย่าง)", "Address (sample data)", "收货地址（示例信息）"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									name: "address",
									required: true,
									minLength: 10,
									maxLength: 500,
									defaultValue: state.profile.address
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "payment-demo",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { size: 20 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("โหมดสาธิต: ไม่ต้องโอนเงินจริง ใช้ภาพตัวอย่างแทนสลิป และอย่ากรอกข้อมูลส่วนบุคคลจริง", "Demo only: do not transfer money. Use a sample image and fictitious personal details.", "仅供演示：请勿真实转账，请使用示例图片与虚构个人信息。") })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "upload-field",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { size: 24 }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: slip ? slip.name : t("แนบภาพสลิปตัวอย่าง", "Attach sample receipt", "上传示例凭证") }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "JPG / PNG / WEBP · ≤ 2 MB" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "file",
											accept: "image/jpeg,image/png,image/webp",
											onChange: (e) => {
												const f = e.target.files?.[0];
												if (!f) {
													setSlip(null);
													return;
												}
												if (![
													"image/jpeg",
													"image/png",
													"image/webp"
												].includes(f.type) || f.size > 2097152) {
													setCheckoutError(t("เลือกไฟล์ภาพขนาดไม่เกิน 2 MB", "Choose an image up to 2 MB", "请选择不超过2 MB的图片"));
													e.target.value = "";
													setSlip(null);
													return;
												}
												setSlip(f);
												setCheckoutError("");
											}
										})
									]
								}),
								checkoutError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									role: "alert",
									className: "error-text",
									children: checkoutError
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Action, {
									type: "submit",
									disabled: busy,
									children: [busy ? t("กำลังบันทึก…", "Saving…", "正在保存…") : t("ยืนยันคำสั่งซื้อสาธิต", "Place demo order", "确认演示订单"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 18 })]
								})
							]
						})
					]
				})]
			})]
		});
	}
	function orderCard(o, manage = false) {
		const index = [
			"pending",
			"confirmed",
			"packing",
			"shipped"
		].indexOf(o.status);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "order-card",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "order-top",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: o.id }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: new Date(o.created).toLocaleDateString(lang === "th" ? "th-TH" : lang === "zh" ? "zh-CN" : "en-GB") })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: `status ${o.status}`,
						children: l(statuses[o.status])
					})]
				}),
				o.status !== "cancelled" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "order-progress",
					children: [
						"pending",
						"confirmed",
						"packing",
						"shipped"
					].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: i <= index ? "complete" : "",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: i < index ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 13 }) : i + 1 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: l(statuses[s]) })]
					}, s))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "order-lines",
					children: o.items.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						l(i.name),
						" × ",
						i.qty
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: currency(i.price * i.qty) })] }, i.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "summary-line",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: o.customer }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: currency(o.total) })]
				}),
				o.tracking && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "tracking",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, { size: 19 }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							o.carrier,
							" · ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: o.tracking })
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "icon-button",
							"aria-label": t("คัดลอกเลขพัสดุ", "Copy tracking number", "复制运单号"),
							onClick: () => navigator.clipboard?.writeText(o.tracking).then(() => notify(t("คัดลอกแล้ว", "Copied", "已复制"))).catch(() => notify(o.tracking)),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { size: 16 })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: t("นำเลขไปตรวจสอบกับบริษัทขนส่ง", "Check this number with the carrier", "请向承运商查询运单") })
					]
				}),
				manage && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "order-admin",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							o.email,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							o.address
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "under-link",
							onClick: () => {
								const url = slipImages[o.id];
								if (url) setSlipPreview(url);
								else notify(t("เก็บเฉพาะชื่อไฟล์หลังรีเฟรช สร้างคำสั่งซื้อใหม่เพื่อทดลองตรวจภาพสลิป", "Only the filename persists after refresh. Create a new demo order to inspect its image.", "刷新后仅保留文件名，请创建新演示订单查看图片。"));
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { size: 15 }), o.slipName]
						}),
						o.status === "pending" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Action, {
							onClick: () => updateOrder(o.id, "confirmed"),
							children: t("ยืนยันการชำระเงิน", "Confirm payment", "确认付款")
						}),
						o.status === "confirmed" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Action, {
							onClick: () => updateOrder(o.id, "packing"),
							children: t("เริ่มจัดเตรียมสินค้า", "Start packing", "开始打包")
						}),
						o.status === "packing" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							className: "shipping-form",
							onSubmit: (e) => {
								e.preventDefault();
								const f = new FormData(e.currentTarget);
								updateOrder(o.id, "shipped", String(f.get("carrier")), String(f.get("tracking")));
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [t("บริษัทขนส่ง", "Carrier", "承运商"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									name: "carrier",
									required: true,
									placeholder: t("ชื่อบริษัทขนส่ง", "Carrier name", "承运商名称")
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [t("เลขพัสดุ", "Tracking number", "运单号"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									name: "tracking",
									required: true,
									minLength: 4
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Action, {
									type: "submit",
									children: t("จัดส่งแล้ว / ตัดสต๊อก", "Ship & deduct stock", "发货并扣减库存")
								})
							]
						}),
						!["shipped", "cancelled"].includes(o.status) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "under-link danger",
							onClick: () => updateOrder(o.id, "cancelled"),
							children: t("ยกเลิกคำสั่งซื้อ", "Cancel order", "取消订单")
						})
					]
				})
			]
		}, o.id);
	}
	function updateOrder(id, status, carrier = "", tracking = "") {
		try {
			const next = transitionOrder(state, id, status, carrier, tracking);
			setState(next);
			notify(t("อัปเดตสถานะและบันทึกอีเมลสาธิตแล้ว", "Status updated; demo email recorded", "状态已更新，演示邮件已记录"));
		} catch (e) {
			notify(e.message === "TRACKING_REQUIRED" ? t("กรุณากรอกข้อมูลขนส่ง", "Please complete shipping information", "请填写配送信息") : t("อัปเดตไม่ได้ โปรดตรวจสอบสถานะและสต๊อก", "Cannot update: check order status and stock", "无法更新，请检查状态与库存"));
		}
	}
	function accountPage() {
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "hm-section page-section",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
				eyebrow: "YOUR HUG ME SPACE",
				title: state.profile ? t(`สวัสดี ${state.profile.name}`, `Hello, ${state.profile.name}`, `您好，${state.profile.name}`) : t("ยินดีต้อนรับกลับบ้าน", "Make yourself at home.", "欢迎来到您的小天地。"),
				description: t("จัดการข้อมูล ดูคำสั่งซื้อ และเก็บเรื่องราวดี ๆ ของคุณไว้ที่นี่", "Your details, your orders, and your little moments.", "在这里管理个人资料、订单与美好回忆。")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "account-layout",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "form-panel",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "panel-title",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: state.profile ? t("ข้อมูลสมาชิก", "Member details", "会员资料") : t("ทดลองใช้บัญชีสมาชิก", "Try a demo membership", "体验演示会员") })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "subtle-note",
							children: t("บัญชีสาธิตในเบราว์เซอร์นี้เท่านั้น ไม่มีการยืนยันตัวตนจริง กรุณาใช้ข้อมูลตัวอย่าง", "Browser-local demo account, not real authentication. Please use fictitious details.", "仅为浏览器本地演示账户，并非真实身份验证，请使用虚构信息。")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: (e) => {
								e.preventDefault();
								const f = new FormData(e.currentTarget);
								setState((s) => ({
									...s,
									profile: {
										name: String(f.get("name")).trim(),
										email: String(f.get("email")).trim(),
										address: String(f.get("address")).trim(),
										newsletter: f.get("newsletter") === "on"
									}
								}));
								notify(t("บันทึกข้อมูลแล้ว", "Details saved", "资料已保存"));
								if (!state.profile && count) go("cart");
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [t("ชื่อที่แสดง", "Display name", "显示名称"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									name: "name",
									required: true,
									minLength: 2,
									maxLength: 60,
									defaultValue: state.profile?.name ?? "นักเดินทาง",
									autoComplete: "off"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [t("อีเมลตัวอย่าง", "Sample email", "示例邮箱"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									name: "email",
									type: "email",
									required: true,
									defaultValue: state.profile?.email ?? "traveler@example.com",
									autoComplete: "off"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [t("ที่อยู่ตัวอย่าง", "Sample address", "示例地址"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									name: "address",
									defaultValue: state.profile?.address ?? "123 ถนนตัวอย่าง อำเภอพร้าว จังหวัดเชียงใหม่ 50190"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "checkbox-label",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "checkbox",
										name: "newsletter",
										defaultChecked: state.profile?.newsletter ?? false
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("ต้องการรับข่าวสารและโปรโมชั่นทางอีเมล (ยกเลิกได้ทุกเมื่อ)", "Receive news and offers by email (unsubscribe anytime)", "接收新闻与优惠邮件（可随时取消）") })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Action, {
									type: "submit",
									children: [state.profile ? t("บันทึกข้อมูล", "Save details", "保存资料") : t("เริ่มทดลองเป็นสมาชิก", "Enter member demo", "进入会员演示"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 17 })]
								})
							]
						}, state.profile ? "profile" : "login"),
						state.profile && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "under-link",
							onClick: () => {
								setState((s) => ({
									...s,
									profile: null
								}));
								notify(t("ออกจากโหมดสมาชิกแล้ว", "Signed out of member demo", "已退出会员演示"));
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { size: 16 }), t("ออกจากโหมดสมาชิก", "Leave member demo", "退出会员演示")]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "section-top",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: t("คำสั่งซื้อของฉัน", "My orders", "我的订单") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "count-label",
							children: state.orders.filter((o) => o.email === state.profile?.email).length
						})]
					}),
					state.orders.filter((o) => o.email === state.profile?.email).length ? state.orders.filter((o) => o.email === state.profile?.email).map((o) => orderCard(o)) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "empty-state compact",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, { size: 34 }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("ยังไม่มีคำสั่งซื้อ", "No orders yet", "暂无订单") }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Action, {
								secondary: true,
								onClick: () => go("tea"),
								children: t("เลือกชาที่ชอบ", "Find a tea you love", "选购喜欢的茶")
							})
						]
					}),
					state.profile && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "email-box",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { size: 19 }), t("กล่องอีเมลสาธิต", "Demo email inbox", "演示邮件收件箱")] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "subtle-note",
								children: t("ตัวอย่างข้อความแจ้งเตือน ระบบยังไม่ส่งอีเมลจริง", "Notification previews only. No real email is sent.", "仅预览通知内容，不发送真实邮件。")
							}),
							state.emails.filter((e) => e.to === state.profile?.email).map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "email-item",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { size: 18 }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: e.kind === "newsletter" ? e.title : l(statuses[e.kind]) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: e.kind === "newsletter" ? t("คุณได้รับข้อความนี้เนื่องจากเลือกรับข่าวสาร", "You opted in to news and offers.", "您已订阅新闻与优惠。") : t(`คำสั่งซื้อ ${e.orderId} ของคุณได้รับการอัปเดต`, `Your order ${e.orderId} has been updated.`, `您的订单 ${e.orderId} 已更新。`) })] })]
							}, e.id))
						]
					})
				] })]
			})]
		});
	}
	function adminPage() {
		if (!admin) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "hm-section page-section",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "empty-state admin-gate",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings2, { size: 40 }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow",
						children: "HUG ME · BACK OFFICE"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: t("ทดลองจัดการร้าน", "Explore the back office", "体验商店后台") }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("พื้นที่สาธิตสำหรับนำเสนอโครงงาน จัดการข้อมูลจำลองในเบราว์เซอร์นี้ ไม่ใช่ระบบผู้ดูแลที่ยืนยันตัวตนแล้ว", "A presentation demo for managing sample data in this browser. This is not an authenticated production dashboard.", "用于项目展示的本地数据管理演示，并非已验证身份的生产后台。") }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Action, {
						onClick: () => setAdmin(true),
						children: [t("เปิดหลังบ้านสาธิต", "Open demo dashboard", "打开演示后台"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 17 })]
					})
				]
			})
		});
		const tabs = [
			["overview", t("ภาพรวม", "Overview", "概览")],
			["orders", t("คำสั่งซื้อ", "Orders", "订单")],
			["products", t("สินค้าและสต๊อก", "Products & stock", "商品与库存")],
			["content", t("เนื้อหาและข่าวสาร", "Content & news", "内容与新闻")],
			["reviews", t("รีวิว", "Reviews", "评价")],
			["qr", t("QR Code", "QR code", "二维码")]
		];
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "hm-section page-section admin-page",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "section-top",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
						eyebrow: "HUG ME · BACK OFFICE",
						title: t("ดูแลร้าน ด้วยความใส่ใจ", "A little care, behind the scenes.", "用心经营每一个细节。")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "under-link",
						onClick: () => setAdmin(false),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { size: 16 }), t("ออกจากหลังบ้าน", "Leave dashboard", "退出后台")]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "admin-tabs",
					children: tabs.map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: id === adminTab ? "active" : "",
						onClick: () => {
							setAdminTab(id);
							if (id === "qr") {
								setShowQr(true);
								setQrUrl(location.origin + "/tea");
							}
						},
						children: label
					}, id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "demo-notice",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { size: 16 }), t("ข้อมูลสาธิตในเครื่องนี้ · ไม่มีการรับเงินหรือส่งอีเมลจริง", "Local demo data · No actual payment or email delivery", "本地演示数据 · 无实际收款或邮件发送")]
				}),
				adminTab === "overview" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "stat-grid",
						children: [
							[t("ยอดขายที่ยืนยันแล้ว", "Confirmed sales", "已确认销售额"), currency(state.orders.filter((o) => [
								"confirmed",
								"packing",
								"shipped"
							].includes(o.status)).reduce((n, o) => n + o.total, 0))],
							[t("คำสั่งซื้อทั้งหมด", "Total orders", "订单总数"), state.orders.length],
							[t("รอตรวจสอบสลิป", "Awaiting review", "待审核"), state.orders.filter((o) => o.status === "pending").length],
							[t("คะแนนรีวิวเฉลี่ย", "Average rating", "平均评分"), state.reviews.filter((r) => r.visible).length ? (state.reviews.filter((r) => r.visible).reduce((n, r) => n + r.rating, 0) / state.reviews.filter((r) => r.visible).length).toFixed(1) + "/5" : "—"]
						].map(([label, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: value })] }, label))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: t("คำสั่งซื้อล่าสุด", "Recent orders", "最近订单") }),
					state.orders.length ? state.orders.slice(0, 3).map((o) => orderCard(o, true)) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "empty-state compact",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("เริ่มสั่งซื้อในหน้าร้านค้า แล้วกลับมาลองตรวจสลิปที่นี่", "Place a demo order in the shop, then review it here.", "先在商店创建演示订单，再到这里审核。") }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Action, {
								secondary: true,
								onClick: () => go("tea"),
								children: t("ไปหน้าร้านค้า", "Open shop", "前往商店")
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "info-band",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t(`บันทึกอีเมลสาธิต ${state.emails.length} รายการ เมื่อสถานะเปลี่ยน ระบบจะสร้างข้อความในบัญชีสมาชิก`, `${state.emails.length} demo emails recorded. Status changes create a preview in the member account.`, `已记录 ${state.emails.length} 封演示邮件，状态变更会在会员账户生成预览。`) })]
					})
				] }),
				adminTab === "orders" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: state.orders.length ? state.orders.map((o) => orderCard(o, true)) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "empty-state",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: t("ยังไม่มีคำสั่งซื้อ", "No orders yet", "暂无订单") })]
				}) }),
				adminTab === "products" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "subtle-note",
						children: t("ปรับราคาและจำนวนจริงในระบบสาธิต จำนวนพร้อมขายหักสินค้าที่กันให้คำสั่งซื้อแล้ว สต๊อกจริงจะลดเมื่อจัดส่ง", "Available stock excludes reserved orders. Physical stock is deducted only on shipment.", "可售库存扣除预留订单数量，实际库存仅在发货时扣减。")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "table-scroll",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: [
							t("สินค้า", "Product", "商品"),
							t("ราคา (บาท)", "Price (THB)", "价格（泰铢）"),
							t("สต๊อก", "Stock", "库存"),
							t("พร้อมขาย", "Available", "可售"),
							t("แสดงสินค้า", "Visible", "展示")
						].map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: x }, x)) }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: state.products.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "table-product",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: p.photo,
									alt: ""
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: l(p.name) })]
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								"aria-label": `${l(p.name)} ${t("ราคา", "price", "价格")}`,
								type: "number",
								min: "1",
								max: "100000",
								defaultValue: p.price,
								onBlur: (e) => {
									const n = Number(e.target.value);
									if (!Number.isFinite(n) || n < 1) {
										e.target.value = String(p.price);
										return;
									}
									setState((s) => ({
										...s,
										products: s.products.map((item) => item.id === p.id ? {
											...item,
											price: n
										} : item)
									}));
								}
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								"aria-label": `${l(p.name)} ${t("สต๊อก", "stock", "库存")}`,
								type: "number",
								min: "0",
								max: "100000",
								defaultValue: p.stock,
								onBlur: (e) => {
									const n = Number(e.target.value);
									const reserved = p.stock - availableStock(p, state.orders);
									if (!Number.isInteger(n) || n < reserved) {
										e.target.value = String(p.stock);
										notify(t("จำนวนต้องไม่น้อยกว่าสินค้าที่กันไว้", "Stock cannot be below reserved quantity", "库存不能低于预留数量"));
										return;
									}
									setState((s) => ({
										...s,
										products: s.products.map((item) => item.id === p.id ? {
											...item,
											stock: n
										} : item)
									}));
								}
							}, `${p.id}-${p.stock}`) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: availableStock(p, state.orders) < 5 ? "stock-low" : "",
								children: availableStock(p, state.orders)
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "checkbox",
								"aria-label": `${t("แสดง", "Show", "显示")} ${l(p.name)}`,
								checked: p.active,
								onChange: (e) => setState((s) => ({
									...s,
									products: s.products.map((item) => item.id === p.id ? {
										...item,
										active: e.target.checked
									} : item)
								}))
							}) })
						] }, p.id)) })] })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "form-panel product-editor",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: t("แก้ไขข้อมูลชา", "Edit tea information", "编辑茶品信息") }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [t("เลือกสินค้า", "Select product", "选择商品"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								value: editProduct,
								onChange: (e) => setEditProduct(e.target.value),
								children: state.products.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: p.id,
									children: l(p.name)
								}, p.id))
							})] }),
							state.products.filter((p) => p.id === editProduct).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								onSubmit: (e) => {
									e.preventDefault();
									const f = new FormData(e.currentTarget);
									const name = [...p.name];
									const description = [...p.description];
									const i = lang === "th" ? 0 : lang === "en" ? 1 : 2;
									name[i] = String(f.get("name")).trim();
									description[i] = String(f.get("description")).trim();
									if (!name[i] || !description[i]) return;
									setState((s) => ({
										...s,
										products: s.products.map((x) => x.id === p.id ? {
											...x,
											name,
											description
										} : x)
									}));
									notify(t("บันทึกข้อมูลชาแล้ว", "Tea information saved", "茶品信息已保存"));
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "subtle-note",
										children: t("แก้ไขชื่อและรายละเอียดตามภาษาที่เลือกด้านบน", "Edit the name and description in the selected language.", "编辑当前所选语言的名称与描述。")
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [t("ชื่อชา", "Tea name", "茶名"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										name: "name",
										defaultValue: l(p.name),
										required: true,
										maxLength: 100
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [t("รายละเอียดชา", "Tea description", "茶品描述"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										name: "description",
										defaultValue: l(p.description),
										required: true,
										maxLength: 1200
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Action, {
										type: "submit",
										children: t("บันทึกข้อมูลชา", "Save tea details", "保存茶品信息")
									})
								]
							}, p.id + lang))
						]
					})
				] }),
				adminTab === "content" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "content-editor",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "form-panel",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: t("ข้อความประชาสัมพันธ์หน้าแรก", "Home announcements", "首页公告") }),
							state.promos.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								onSubmit: (e) => {
									e.preventDefault();
									const f = new FormData(e.currentTarget);
									const title = [
										String(f.get("title0")),
										String(f.get("title1")),
										String(f.get("title2"))
									];
									const body = [
										String(f.get("body0")),
										String(f.get("body1")),
										String(f.get("body2"))
									];
									const start = String(f.get("start"));
									const end = String(f.get("end"));
									if (start && end && start > end) {
										notify(t("วันสิ้นสุดต้องอยู่หลังวันเริ่ม", "End date must follow start date", "结束日期须晚于开始日期"));
										return;
									}
									setState((s) => ({
										...s,
										promos: s.promos.map((item) => item.id === p.id ? {
											...item,
											title,
											body,
											start,
											end,
											enabled: f.get("enabled") === "on"
										} : item)
									}));
									notify(t("บันทึกเนื้อหาแล้ว", "Content saved", "内容已保存"));
								},
								children: [
									[
										"TH",
										"EN",
										"中文"
									].map((label, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [
										label,
										" · ",
										t("หัวข้อ", "Title", "标题"),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											name: "title" + i,
											defaultValue: p.title[i],
											required: true,
											maxLength: 100
										})
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [
										label,
										" · ",
										t("ข้อความ", "Message", "内容"),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
											name: "body" + i,
											defaultValue: p.body[i],
											required: true,
											maxLength: 400
										})
									] })] }, label)),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "form-row",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [t("วันเริ่ม", "Start date", "开始日期"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											name: "start",
											type: "date",
											defaultValue: p.start
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [t("วันสิ้นสุด", "End date", "结束日期"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											name: "end",
											type: "date",
											defaultValue: p.end
										})] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "checkbox-label",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "checkbox",
											name: "enabled",
											defaultChecked: p.enabled
										}), t("แสดงบนหน้าแรก", "Show on homepage", "在首页显示")]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Action, {
										type: "submit",
										children: t("บันทึกข่าวสาร", "Save announcement", "保存公告")
									})
								]
							}, p.id)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: "under-link",
								onClick: () => {
									if (!state.profile?.newsletter) {
										notify(t("ยังไม่มีสมาชิกที่เลือกรับข่าวสารในต้นแบบ", "No opted-in demo member yet", "暂无订阅新闻的演示会员"));
										return;
									}
									const title = l(state.promos[0].title);
									setState((s) => ({
										...s,
										emails: [{
											id: crypto.randomUUID(),
											orderId: "",
											to: s.profile.email,
											kind: "newsletter",
											created: (/* @__PURE__ */ new Date()).toISOString(),
											title
										}, ...s.emails]
									}));
									notify(t("เพิ่มอีเมลข่าวสารสาธิตแล้ว", "Demo newsletter added", "演示新闻邮件已添加"));
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { size: 17 }), t("ทดลองแจ้งข่าวสารให้สมาชิกที่ยินยอม", "Preview newsletter for opted-in member", "向已订阅会员发送演示预览")]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "form-panel",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: t("ลิงก์คลิปรีวิว", "Review video links", "评价视频链接") }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								onSubmit: (e) => {
									e.preventDefault();
									const f = new FormData(e.currentTarget);
									const url = String(f.get("url"));
									try {
										if (new URL(url).protocol !== "https:") throw new Error();
									} catch {
										notify(t("กรุณาใช้ลิงก์ HTTPS ที่ถูกต้อง", "Use a valid HTTPS URL", "请输入有效HTTPS链接"));
										return;
									}
									setState((s) => ({
										...s,
										clips: [...s.clips, {
											id: crypto.randomUUID(),
											title: String(f.get("title")),
											url
										}]
									}));
									e.currentTarget.reset();
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [t("ชื่อคลิป", "Video title", "视频标题"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										name: "title",
										required: true,
										maxLength: 150
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [t("ลิงก์คลิป", "Video URL", "视频链接"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										name: "url",
										type: "url",
										placeholder: "https://…",
										required: true
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Action, {
										type: "submit",
										children: [t("เพิ่มลิงก์", "Add link", "添加链接"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { size: 17 })]
									})
								]
							}),
							state.clips.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "clip-admin",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: c.title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "icon-button",
									onClick: () => setState((s) => ({
										...s,
										clips: s.clips.filter((x) => x.id !== c.id)
									})),
									"aria-label": t("ลบคลิป", "Remove clip", "删除视频"),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { size: 17 })
								})]
							}, c.id))
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "form-panel",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: t("จุดบนแผนที่", "Map locations", "地图地点") }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "subtle-note",
								children: t("แก้คำอธิบายตามภาษาที่เลือกด้านบน", "Edit descriptions in the currently selected language.", "编辑当前所选语言的描述。")
							}),
							state.zones.map((z) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								className: "zone-edit",
								onSubmit: (e) => {
									e.preventDefault();
									const f = new FormData(e.currentTarget);
									const name = [...z.name];
									const note = [...z.note];
									const index = lang === "th" ? 0 : lang === "en" ? 1 : 2;
									name[index] = String(f.get("name"));
									note[index] = String(f.get("note"));
									setState((s) => ({
										...s,
										zones: s.zones.map((x) => x.id === z.id ? {
											...x,
											name,
											note,
											distance: String(f.get("distance"))
										} : x)
									}));
									notify(t("บันทึกสถานที่แล้ว", "Location saved", "地点已保存"));
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [t("ชื่อสถานที่", "Location name", "地点名称"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										name: "name",
										defaultValue: l(z.name),
										required: true
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [t("รายละเอียด", "Description", "描述"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										name: "note",
										defaultValue: l(z.note),
										required: true
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [t("ระยะทางตัวอย่าง (กม.)", "Sample distance (km)", "示例距离（公里）"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										name: "distance",
										type: "number",
										step: "0.1",
										min: "0",
										defaultValue: z.distance,
										required: true
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Action, {
										secondary: true,
										type: "submit",
										children: t("บันทึก", "Save", "保存")
									})
								]
							}, z.id + lang))
						]
					})] })]
				}),
				adminTab === "reviews" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: state.reviews.length ? state.reviews.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "review-item",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "review-by",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: r.author }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "stars",
								children: "★".repeat(r.rating)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: r.text }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "checkbox-label",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "checkbox",
								checked: r.visible,
								onChange: (e) => setState((s) => ({
									...s,
									reviews: s.reviews.map((x) => x.id === r.id ? {
										...x,
										visible: e.target.checked
									} : x)
								}))
							}), t("แสดงรีวิวบนเว็บไซต์", "Show this review", "展示此评价")]
						})
					]
				}, r.id)) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "empty-state compact",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("ยังไม่มีรีวิวให้ตรวจสอบ", "No reviews to moderate", "暂无待审核评价") })]
				}) }),
				adminTab === "qr" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: t("QR Code สำหรับหน้าร้าน", "QR codes for the tea house", "茶屋二维码") }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [t("เลือกหน้าข้อมูลชา", "Choose a tea page", "选择茶品页面"), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						onChange: (e) => {
							setQrUrl(location.origin + "/tea" + (e.target.value ? "?tea=" + e.target.value : ""));
							setShowQr(true);
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "",
							children: t("ชาทั้งหมด", "All teas", "全部茶品")
						}), products.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: p.id,
							children: l(p.name)
						}, p.id))]
					})] }),
					qrPanel()
				] })
			]
		});
	}
	function contactPage() {
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "hm-section page-section",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
				eyebrow: "COME FIND YOUR QUIET",
				title: t("แล้วพบกันที่ฮักมี", "We will save you a quiet moment.", "在哈米，留一份宁静给您。")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "contact-layout",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/photos/shop-view.jpg",
					alt: t("โฮงชาฮักมี", "Hong Cha Hug Me", "哈米茶屋")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: t("โฮงชาฮักมี", "Hong Cha Hug Me", "哈米茶屋") }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "HUG ME ORGANIC FARM" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { size: 18 }), t("บ้านแม่แปง อำเภอพร้าว จังหวัดเชียงใหม่", "Mae Paeng, Phrao, Chiang Mai, Thailand", "泰国清迈府Phrao县 Mae Paeng")] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("สอบถามข้อมูลร้าน กิจกรรม และเวลาเปิดบริการก่อนเดินทาง", "Contact the tea house for activities and current opening hours before your visit.", "出行前请咨询活动安排与营业时间。") }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						className: "hm-button",
						href: "tel:0816696653",
						children: ["081-669-6653", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 18 })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Action, {
						secondary: true,
						onClick: () => go("map"),
						children: [t("สำรวจแผนผัง", "Explore the map", "查看示意图"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { size: 17 })]
					})
				] })]
			})]
		});
	}
	const currentProduct = state.products.find((p) => p.id === selected);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "hugme-app",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				className: "skip-link",
				href: "#main-content",
				children: t("ข้ามไปยังเนื้อหา", "Skip to content", "跳至内容")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "topbar",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("ความสุขเล็ก ๆ จากพร้าว เชียงใหม่", "A little happiness from Phrao, Chiang Mai", "来自清迈Phrao的一份小美好") }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => go("contact"),
					children: [t("มาเยี่ยมเรา", "Visit us", "来访茶屋"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 12 })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "hm-header",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "brand",
						onClick: () => go("home"),
						"aria-label": "Hug Me home",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "brand-symbol",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leaf, { size: 25 })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "brand-name",
							children: ["hug me", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "ORGANIC FARM" })]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: menu ? "open" : "",
						"aria-label": t("เมนูหลัก", "Main navigation", "主导航"),
						children: navigation.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `#/${n.page}`,
							className: page === n.page ? "active" : "",
							onClick: (e) => {
								e.preventDefault();
								go(n.page);
							},
							children: l(n.label)
						}, n.page))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "header-actions",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "language-select",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "sr-only",
									children: t("ภาษา", "Language", "语言")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									value: lang,
									onChange: (e) => changeLanguage(e.target.value),
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "th",
											children: "TH"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "en",
											children: "EN"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "zh",
											children: "中文"
										})
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: `icon-button ${page === "account" ? "active" : ""}`,
								onClick: () => go("account"),
								"aria-label": t("บัญชีสมาชิก", "My account", "会员账户"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, { size: 21 })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: "icon-button cart-icon",
								onClick: () => go("cart"),
								"aria-label": t(`ตะกร้า ${count} ชิ้น`, `Shopping bag, ${count} items`, `购物袋，${count} 件`),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { size: 21 }), count > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: count })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "icon-button mobile-toggle",
								onClick: () => setMenu((v) => !v),
								"aria-expanded": menu,
								"aria-label": t("เปิดเมนู", "Toggle menu", "菜单"),
								children: menu ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				id: "main-content",
				children: page === "home" ? home() : page === "map" ? mapPage() : page === "tea" ? teaPage() : page === "quiz" ? quizPage() : page === "reviews" ? reviewsPage() : page === "cart" ? cartPage() : page === "account" ? accountPage() : page === "admin" ? adminPage() : contactPage()
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "hm-footer",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "footer-main",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: "brand",
								onClick: () => go("home"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leaf, { size: 32 }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "brand-name",
									children: ["hug me", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "ORGANIC FARM" })]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("ชาสักแก้ว ธรรมชาติรอบตัว และเวลาที่เป็นของคุณ", "A cup of tea. A little nature. A moment of your own.", "一杯茶，一片自然，一段属于自己的时光。") }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "eyebrow",
								children: "PHRAO · CHIANG MAI · THAILAND"
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: t("รู้จักฮักมี", "Discover", "发现哈米") }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => go("map"),
								children: t("เที่ยวฮักมี", "Explore Hug Me", "探索哈米")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => go("reviews"),
								children: t("เรื่องเล่าจากผู้มาเยือน", "Visitor stories", "访客故事")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => go("contact"),
								children: t("ติดต่อเรา", "Contact us", "联系我们")
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: t("ชาของคุณ", "Your tea", "您的茶") }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => go("tea"),
								children: t("ชาและของฝาก", "Tea collection", "茶品系列")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => go("quiz"),
								children: t("ค้นหาชาที่ใช่", "Find your tea", "寻找您的茶")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => go("account"),
								children: t("บัญชีและคำสั่งซื้อ", "Account & orders", "账户与订单")
							})
						] })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "footer-bottom",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["© HUG ME ORGANIC FARM · ", t("ต้นแบบเพื่อการศึกษา", "Educational prototype", "教学原型")] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => go("admin"),
						children: [t("ทดลองหลังบ้าน", "Demo dashboard", "演示后台"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings2, { size: 14 })]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "prototype-note",
				children: t("ต้นแบบสาธิต · ราคา สต๊อก และคำสั่งซื้อเป็นข้อมูลตัวอย่าง ไม่มีการรับชำระเงินจริง", "Interactive prototype · Sample prices, inventory and orders. No real payments.", "交互原型 · 价格、库存与订单为演示数据，不收取真实付款。")
			}),
			toast && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "toast",
				role: "status",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { size: 19 }),
					toast,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setToast(""),
						"aria-label": t("ปิด", "Close", "关闭"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 16 })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dialog", {
				ref: dialog,
				className: "product-dialog",
				onCancel: () => setSelected(null),
				onClose: () => setSelected(null),
				onClick: (e) => {
					if (e.target === e.currentTarget) setSelected(null);
				},
				children: currentProduct && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "product-modal",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "modal-close icon-button",
							onClick: () => setSelected(null),
							"aria-label": t("ปิดรายละเอียด", "Close details", "关闭详情"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "detail-photo",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: currentProduct.photo,
								alt: l(currentProduct.name)
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "detail-copy",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "eyebrow",
									children: [l(categories[currentProduct.category]), " · HUG ME"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: l(currentProduct.name) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: l(currentProduct.description) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "tea-facts",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leaf, { size: 18 }), currentProduct.caffeine ? t("มีคาเฟอีน", "Contains caffeine", "含咖啡因") : t("ไม่มีคาเฟอีนตามข้อมูลตัวอย่าง", "Caffeine-free in sample data", "示例资料：不含咖啡因")] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Coffee, { size: 18 }), t("บรรจุภัณฑ์กระปุก", "Jar packaging", "罐装")] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "brew-note",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: t("ช่วงเวลาสำหรับชาของคุณ", "Make a moment for tea", "留一刻时间给茶") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("เริ่มชงด้วยน้ำร้อน 3–5 นาที แล้วปรับความเข้มตามความชอบ โปรดยืนยันวิธีชงของชาแต่ละชนิดกับร้าน", "Try steeping for 3–5 minutes and adjust to taste. Confirm tea-specific brewing instructions with the shop.", "可尝试冲泡3至5分钟并按口味调整。具体冲泡方法请与茶屋确认。") })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "detail-price",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: currency(currentProduct.price) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: availableStock(currentProduct, state.orders) > 0 ? t(`พร้อมขาย ${availableStock(currentProduct, state.orders)} ชิ้น`, `${availableStock(currentProduct, state.orders)} available`, `可售 ${availableStock(currentProduct, state.orders)} 件`) : t("สินค้าหมด", "Out of stock", "售罄") })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Action, {
									disabled: !currentProduct.active || availableStock(currentProduct, state.orders) <= 0,
									onClick: () => add(currentProduct),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { size: 18 }), t("เพิ่มลงตะกร้า", "Add to bag", "加入购物袋")]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									className: "under-link",
									onClick: () => {
										setSelected(null);
										go("cart");
									},
									children: [t("ดูตะกร้าของฉัน", "View my bag", "查看购物袋"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 17 })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "subtle-note",
									children: t("ราคาและรายละเอียดเป็นข้อมูลสาธิต", "Sample price and product information", "示例价格与产品信息")
								})
							]
						})
					]
				})
			}),
			slipPreview && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "slip-overlay",
				role: "dialog",
				"aria-modal": "true",
				"aria-label": t("ภาพสลิปตัวอย่าง", "Sample receipt", "示例凭证"),
				onClick: () => setSlipPreview(null),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "modal-close icon-button",
					autoFocus: true,
					onClick: () => setSlipPreview(null),
					"aria-label": t("ปิด", "Close", "关闭"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: slipPreview,
					alt: t("ภาพสลิปตัวอย่าง", "Sample receipt", "示例凭证")
				})]
			})
		]
	});
}
//#endregion
export { HugmeApp as t };
