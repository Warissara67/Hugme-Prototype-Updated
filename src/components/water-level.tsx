import { useId, useState } from "react";

// ตัวเลื่อนดูระดับน้ำตามฤดูกาล — ภาพจำลอง ไม่ใช่รูปถ่าย
const seasons = [
  {
    key: "dry",
    name: "หน้าแล้ง",
    months: "มีนาคม – พฤษภาคม",
    note: "น้ำลดจนเห็นโคนต้นและราก เดินบนดินเลนรอบต้นได้บางปี ภาพจะไม่เหมือนรีวิวที่คนแชร์กัน",
    level: 0.12,
    leaf: "#8FA860",
  },
  {
    key: "early-rain",
    name: "ต้นฝน",
    months: "มิถุนายน – สิงหาคม",
    note: "น้ำเริ่มสูง โคนต้นจมน้ำ ใบเขียวจัดที่สุดในรอบปี ฝนตกเป็นช่วง ๆ รอบเรืออาจเลื่อน",
    level: 0.4,
    leaf: "#5F8B3A",
  },
  {
    key: "late-rain",
    name: "ปลายฝน",
    months: "กันยายน – พฤศจิกายน",
    note: "น้ำเต็มอ่าง ต้นไม้ดูลอยอยู่กลางน้ำ เป็นภาพที่คนส่วนใหญ่ตามหา",
    level: 0.72,
    leaf: "#4F7F3A",
  },
  {
    key: "cool",
    name: "หน้าหนาว",
    months: "ธันวาคม – กุมภาพันธ์",
    note: "น้ำเริ่มลดทีละนิด อากาศเย็น มีโอกาสเจอหมอกเช้ามากที่สุด แต่ก็ไม่ได้มีทุกวัน",
    level: 0.55,
    leaf: "#6E8F4A",
  },
];

export function WaterLevelSlider() {
  const [value, setValue] = useState(50);
  const id = useId();
  const index = Math.min(3, Math.floor(value / 25));
  const season = seasons[index]!;
  const waterY = 250 - season.level * 90;

  return (
    <div className="border border-border bg-card p-4">
      <p className="font-display text-base font-semibold">ระดับน้ำตามฤดูกาล</p>

      <svg
        viewBox="0 0 400 300"
        role="img"
        aria-label={`ภาพจำลองต้นฉำฉากลางน้ำในช่วง${season.name}`}
        className="mt-3 w-full border border-border"
      >
        <rect x="0" y="0" width="400" height="300" fill="#EFF2EC" />
        {/* ภูเขาไกล */}
        <path
          d="M0 190 L70 130 L130 185 L200 120 L280 190 L340 150 L400 195 L400 300 L0 300 Z"
          fill="#A9C4C4"
          opacity="0.7"
        />
        {/* ลำต้นและราก */}
        <path
          d="M188 250 C186 220 186 200 190 178 L210 178 C214 200 214 222 212 250 Z"
          fill="#5C4632"
        />
        <path
          d="M188 250 C176 254 168 258 158 262"
          stroke="#5C4632"
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M212 250 C224 254 234 258 244 262"
          stroke="#5C4632"
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
        />
        {/* กิ่งแผ่ */}
        <path d="M200 180 C170 172 140 164 118 150" stroke="#5C4632" strokeWidth="4" fill="none" />
        <path d="M200 180 C230 172 262 164 284 150" stroke="#5C4632" strokeWidth="4" fill="none" />
        {/* ทรงพุ่มร่ม */}
        <ellipse cx="200" cy="128" rx="128" ry="44" fill={season.leaf} />
        <ellipse cx="150" cy="112" rx="62" ry="34" fill={season.leaf} opacity="0.9" />
        <ellipse cx="252" cy="112" rx="66" ry="32" fill={season.leaf} opacity="0.9" />
        {/* น้ำ */}
        <rect x="0" y={waterY} width="400" height={300 - waterY} fill="#17575E" opacity="0.85" />
        <rect x="0" y={waterY} width="400" height="3" fill="#A9C4C4" />
        <g opacity="0.35" stroke="#EFF2EC" strokeWidth="2" fill="none">
          <path d={`M40 ${waterY + 18} q14 -6 28 0 t28 0`} />
          <path d={`M270 ${waterY + 30} q14 -6 28 0 t28 0`} />
        </g>
      </svg>

      <label htmlFor={id} className="mt-4 block text-sm text-muted-foreground">
        เลื่อนดูระดับน้ำในแต่ละช่วงของปี
      </label>
      <input
        id={id}
        type="range"
        min={0}
        max={100}
        step={1}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="mt-2 w-full accent-[#E8A020]"
        aria-valuetext={`${season.name} ${season.months}`}
      />
      <div className="num mt-1 flex justify-between text-[11px] text-muted-foreground">
        {seasons.map((s) => (
          <span key={s.key}>{s.name}</span>
        ))}
      </div>

      <div className="mt-3 border-l-2 border-accent pl-3">
        <p className="font-display text-sm font-semibold">
          {season.name} <span className="num text-xs text-muted-foreground">{season.months}</span>
        </p>
        <p className="measure mt-1 text-sm">{season.note}</p>
      </div>

      <p className="mt-3 text-xs text-muted-foreground">
        ภาพนี้เป็นภาพจำลอง ระดับน้ำจริงขึ้นกับการบริหารน้ำของเขื่อนในแต่ละปี
      </p>
    </div>
  );
}
