import { useState } from "react";
import type { Photo as PhotoType } from "@/data/images";

/** แปลงข้อความเป็นตัวเลขคงที่ เพื่อให้ภาพประกอบสำรองของแต่ละช่องต่างกันแต่ไม่สุ่มใหม่ทุกครั้ง */
function seedOf(text: string) {
  let n = 0;
  for (let i = 0; i < text.length; i++) n = (n * 31 + text.charCodeAt(i)) >>> 0;
  return n;
}

/**
 * ภาพประกอบที่วาดขึ้นเอง ใช้แทนช่องที่ยังไม่มีรูปถ่าย
 * เป็นทิวเขาซ้อนชั้นเหนือผืนน้ำ องค์ประกอบเปลี่ยนตามชื่อช่อง
 */
function PlaceholderArt({ label, tone = "lake" }: { label: string; tone?: "lake" | "tea" }) {
  const s = seedOf(label);
  const ridge = 120 + (s % 40);
  const shift = (s >> 3) % 60;
  const hasTree = (s >> 5) % 3 !== 0;
  const sky = tone === "tea" ? "#F4EFE2" : "#EFF2EC";
  const far = tone === "tea" ? "#D9C7A3" : "#A9C4C4";

  return (
    <svg
      viewBox="0 0 800 500"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label={label}
      className="size-full"
    >
      <rect width="800" height="500" fill={sky} />
      <circle cx={620 - shift} cy={96} r={38} fill="#E8A020" opacity="0.28" />
      <path
        d={`M0 ${ridge + 90} L${140 - shift} ${ridge} L${300 - shift} ${ridge + 70} L${460 - shift} ${ridge - 20} L${640 - shift} ${ridge + 60} L800 ${ridge + 10} L800 500 L0 500 Z`}
        fill={far}
        opacity="0.8"
      />
      <path
        d={`M0 ${ridge + 150} L${200 + shift} ${ridge + 80} L${420 + shift} ${ridge + 160} L${660 + shift} ${ridge + 70} L800 ${ridge + 140} L800 500 L0 500 Z`}
        fill="#17575E"
        opacity="0.35"
      />
      {hasTree && (
        <g>
          <path
            d="M386 340 C384 306 384 288 388 268 L412 268 C416 290 416 310 414 340 Z"
            fill="#5C4632"
          />
          <path
            d="M400 272 C356 262 322 250 296 232"
            stroke="#5C4632"
            strokeWidth="6"
            fill="none"
          />
          <path
            d="M400 272 C444 262 478 250 504 232"
            stroke="#5C4632"
            strokeWidth="6"
            fill="none"
          />
          <ellipse cx="400" cy="216" rx="176" ry="58" fill="#4F7F3A" opacity="0.9" />
          <ellipse cx="322" cy="196" rx="84" ry="40" fill="#5F8B3A" opacity="0.85" />
          <ellipse cx="482" cy="196" rx="88" ry="38" fill="#5F8B3A" opacity="0.85" />
        </g>
      )}
      <rect x="0" y="332" width="800" height="168" fill="#17575E" opacity="0.92" />
      <rect x="0" y="332" width="800" height="3" fill="#A9C4C4" opacity="0.7" />
      <g opacity="0.28" stroke="#EFF2EC" strokeWidth="3" fill="none">
        <path d="M90 386 q26 -10 52 0 t52 0" />
        <path d="M520 428 q26 -10 52 0 t52 0" />
      </g>
    </svg>
  );
}

export type PhotoProps = {
  photo: PhotoType;
  /** คลาสของกรอบรูป ใช้กำหนดสัดส่วนและขนาด เช่น "aspect-[4/3]" */
  className?: string;
  /** โหลดทันทีแทนการรอเลื่อนถึง ใช้กับรูปแรกที่เห็นบนจอ */
  eager?: boolean;
  /** โทนของภาพประกอบสำรอง */
  tone?: "lake" | "tea";
};

/**
 * แสดงรูปถ่าย ถ้ายังไม่มีไฟล์หรือโหลดไม่สำเร็จ จะสลับไปใช้ภาพประกอบที่วาดไว้แทน
 * เพื่อให้หน้าเว็บไม่มีช่องว่างหรือไอคอนรูปเสีย
 */
export function Photo({ photo, className = "", eager = false, tone = "lake" }: PhotoProps) {
  const [failed, setFailed] = useState(false);
  const missing = !photo.src || failed;

  return (
    <figure className={`relative overflow-hidden bg-secondary ${className}`}>
      {missing ? (
        <PlaceholderArt label={photo.alt} tone={tone} />
      ) : (
        <img
          src={photo.src}
          alt={photo.alt}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          onError={() => setFailed(true)}
          className="size-full object-cover"
        />
      )}

      {photo.credit && !missing && (
        <figcaption className="num absolute bottom-0 right-0 bg-ink/60 px-2 py-0.5 text-[10px] text-paper">
          {photo.credit}
        </figcaption>
      )}

      {/* ป้ายบอกว่าช่องนี้ยังไม่มีรูป แสดงเฉพาะตอนรันโหมดพัฒนา */}
      {missing && import.meta.env.DEV && (
        <figcaption className="absolute inset-x-0 bottom-0 bg-ink/70 px-3 py-1.5 text-[11px] leading-snug text-paper">
          ยังไม่มีรูป · {photo.alt}
        </figcaption>
      )}
    </figure>
  );
}
