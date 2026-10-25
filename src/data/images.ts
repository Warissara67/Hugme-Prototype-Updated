/**
 * ทะเบียนรูปภาพของเว็บ
 * ------------------------------------------------------------------
 * วางไฟล์รูปไว้ที่ public/photos/ แล้วใส่ชื่อไฟล์ตรงช่อง src
 * ช่องไหนที่ src เป็นค่าว่าง ระบบจะวาดภาพประกอบแทนให้อัตโนมัติ
 * เว็บจึงใช้งานได้ทันทีแม้ยังไม่มีรูปครบ
 *
 * ดูรายการรูปที่ต้องถ่ายและขนาดที่แนะนำได้ที่ public/photos/README.md
 */

export type Photo = {
  /** พาธของรูป เช่น "/photos/hero.jpg" ปล่อยว่างไว้ถ้ายังไม่มีรูป */
  src: string;
  /** คำบรรยายรูปสำหรับผู้ใช้โปรแกรมอ่านหน้าจอ และใช้เป็นคำใบ้ว่าช่องนี้ควรเป็นรูปอะไร */
  alt: string;
  /** เครดิตช่างภาพ ถ้ามี */
  credit?: string;
};

const p = (src: string, alt: string, credit?: string): Photo =>
  credit === undefined ? { src, alt } : { src, alt, credit };

/** รูปหลักที่ใช้ตกแต่งแต่ละหน้า */
export const photos = {
  /** ภาพเปิดหน้าแรก แนวนอน กว้างอย่างน้อย 2000px */
  hero: p("/photos/chamchuri-sunset.jpg", "ต้นฉำฉายืนอยู่กลางอ่างเก็บน้ำ มีสันเขาเป็นฉากหลัง"),
  /** หน้าร้านโฮงชาฮักมี */
  shop: p("/photos/shop-view.jpg", "โรงน้ำชาไม้ริมอ่างเก็บน้ำ มีที่จอดรถอยู่หน้าร้าน"),
  /** ระเบียงนั่งรอรอบเรือ */
  terrace: p("", "ระเบียงไม้ของร้านที่หันออกไปทางผืนน้ำ"),
  /** การชงชา */
  brewing: p("", "มือกำลังรินน้ำร้อนจากกาลงถ้วยชา"),
  /** เรือบนผืนน้ำ */
  boat: p("/photos/chamchuri-sunset.jpg", "เรือหางยาวแล่นอยู่บนผืนน้ำกว้าง"),
  /** ท่าเรือของร้าน */
  pier: p("/photos/pier.jpg", "ท่าเรือโฮงชาฮักมีและเรือที่จอดรออยู่ริมอ่าง"),
  /** ภาพกว้างของอ่างตอนเช้า ใช้เป็นแถบคั่น */
  morning: p("/photos/sea-of-mist.jpg", "ไอหมอกบาง ๆ ลอยเหนือผิวน้ำในตอนเช้า"),
} as const;

/** รูปประจำแต่ละจุดแวะ คีย์ต้องตรงกับ id ใน src/data/stops.ts */
export const stopPhotos: Record<string, Photo> = {
  hongcha: p("/photos/shop-view.jpg", "โฮงชาฮักมี จุดเริ่มต้นของเส้นทาง"),
  pier: p("/photos/pier.jpg", "ท่าเรือโฮงชาฮักมีตอนเรือกำลังออกจากฝั่ง"),
  "doi-pha-daeng": p("", "หน้าผาสีแดงของดอยผาแดงเมื่อมองจากเรือ"),
  "khao-moai": p("/photos/rocky-peak.jpg", "แนวหินบนเขาโมอายที่มีรูปทรงคล้ายใบหน้า"),
  chamchuri: p("/photos/chamchuri-sunset.jpg", "ต้นฉำฉากลางน้ำเมื่อมองจากระยะใกล้"),
  return: p("/photos/aerial-lake.jpg", "วิวขากลับเข้าฝั่งช่วงบ่าย"),
};

/** แผนที่ชื่อบรรจุภัณฑ์ไปเป็นชื่อไฟล์ */
const packSlug: Record<string, string> = {
  กระปุกพลาสติก: "jar",
  ซองเล็ก: "sachet",
  ขวดแก้ว: "glass",
  ถุงซิป: "zip",
};

/** รูปสินค้าจริงรายชนิด แยกตามบรรจุภัณฑ์ ตัดมาจากแผ่นเมนูของร้าน */
export const teaProductPhoto = (teaId: string, pack: string, alt: string): Photo => ({
  src: `/photos/products/${teaId}-${packSlug[pack] ?? "jar"}.jpg`,
  alt,
});

/** แผ่นเมนูของร้าน แยกตามรูปแบบบรรจุภัณฑ์ */
export const menuSheets = [
  { key: "กระปุกพลาสติก", photo: p("/photos/menu-plastic-jar.jpg", "แผ่นเมนูชาแบบกระปุกพลาสติก") },
  { key: "ซองเล็ก", photo: p("/photos/menu-sachet.jpg", "แผ่นเมนูชาแบบซองเล็ก") },
  { key: "ขวดแก้ว", photo: p("/photos/menu-glass-jar.jpg", "แผ่นเมนูชาแบบขวดแก้ว") },
  { key: "ถุงซิป", photo: p("/photos/menu-zip-bag.jpg", "แผ่นเมนูชาแบบถุงซิป") },
] as const;

/** รูปประจำแต่ละฤดู ใช้ในหน้าเตรียมตัว */
export const seasonPhotos: Record<string, Photo> = {
  dry: p("", "หน้าแล้ง น้ำลดจนเห็นโคนต้นและรากของต้นฉำฉา"),
  rain: p("", "หน้าฝน น้ำเต็มอ่างและใบไม้เขียวจัด"),
  cool: p("/photos/sea-of-mist.jpg", "หน้าหนาว ไอหมอกลอยเหนือผิวน้ำในตอนเช้า"),
};
