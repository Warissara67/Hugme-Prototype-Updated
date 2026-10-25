import { Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { contact } from "@/data/contact";

const nav = [
  { to: "/", label: "หน้าแรก" },
  { to: "/map", label: "แผนที่เส้นทาง" },
  { to: "/tea", label: "ชาที่ร้าน" },
  { to: "/prepare", label: "เตรียมตัวและกติกา" },
  { to: "/contact", label: "ติดต่อและจอง" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const els = document.querySelectorAll(".reveal:not(.is-visible)");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-50 focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
      >
        ข้ามไปยังเนื้อหา
      </a>

      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
          <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <img
              src="/logo-hugme.png"
              alt="โลโก้ HUG ME Organic Farm"
              width={40}
              height={40}
              className="size-10 shrink-0"
            />
            <span className="flex flex-col leading-tight">
              <span className="font-display text-base font-bold tracking-tight text-primary">
                ต้นฉำฉากลางน้ำ
              </span>
              <span className="num text-[11px] text-muted-foreground">
                โฮงชาฮักมี · อ.พร้าว เชียงใหม่
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: n.to === "/" }}
                activeProps={{ className: "text-primary border-accent" }}
                inactiveProps={{ className: "text-muted-foreground border-transparent" }}
                className="border-b-2 px-3 py-2 text-sm transition-colors hover:text-primary"
              >
                {n.label}
              </Link>
            ))}
            <a
              href={`tel:${contact.phone}`}
              className="ml-2 inline-flex items-center gap-1.5 border border-primary bg-accent px-3 py-2 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
            >
              <Phone className="size-4" aria-hidden /> โทรจอง
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "ปิดเมนู" : "เปิดเมนู"}
            className="inline-flex size-10 items-center justify-center border border-border md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {open && (
          <nav className="border-t border-border bg-background md:hidden">
            <div className="mx-auto max-w-6xl px-4 py-2">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: n.to === "/" }}
                  activeProps={{ className: "text-primary font-medium" }}
                  className="block border-b border-border py-3 text-[15px] last:border-0"
                >
                  {n.label}
                </Link>
              ))}
              <a
                href={`tel:${contact.phone}`}
                className="my-3 flex items-center justify-center gap-2 border border-primary bg-accent px-3 py-3 text-sm font-medium text-accent-foreground"
              >
                <Phone className="size-4" aria-hidden /> โทรจอง {contact.phoneDisplay}
              </a>
            </div>
          </nav>
        )}
      </header>

      <main id="main">{children}</main>

      <footer className="border-t border-border bg-primary text-primary-foreground">
        {/* เส้นระดับน้ำสีชา คั่นก่อนเข้าส่วนท้าย */}
        <div className="h-1 bg-accent" aria-hidden />

        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
            <div>
              <p className="font-display text-xl font-semibold">โฮงชาฮักมี</p>
              <p className="measure mt-3 text-sm text-primary-foreground/80">
                โรงน้ำชาริมอ่างเก็บน้ำเขื่อนแม่งัด อำเภอพร้าว จังหวัดเชียงใหม่ มีท่าเรือของตัวเอง
                นั่งจิบชารอรอบเรือแล้วออกไปชมต้นฉำฉากลางน้ำ ไปกลับไม่ถึงหนึ่งชั่วโมง
              </p>
            </div>

            <div>
              <p className="num text-xs uppercase tracking-widest text-primary-foreground/60">
                หน้าทั้งหมด
              </p>
              <ul className="mt-3 space-y-2 text-sm">
                {nav.slice(1).map((n) => (
                  <li key={n.to}>
                    <Link
                      to={n.to}
                      className="text-primary-foreground/85 underline-offset-4 hover:underline"
                    >
                      {n.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="num text-xs uppercase tracking-widest text-primary-foreground/60">
                ติดต่อ
              </p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a
                    className="num inline-flex items-center gap-2 underline-offset-4 hover:underline"
                    href={`tel:${contact.phone}`}
                  >
                    <Phone className="size-4" aria-hidden /> {contact.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a
                    className="inline-flex items-center gap-2 underline-offset-4 hover:underline"
                    href={contact.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MapPin className="size-4" aria-hidden /> เปิดแผนที่นำทาง
                  </a>
                </li>
                <li className="num text-primary-foreground/70">{contact.openHours}</li>
              </ul>
            </div>
          </div>

          <p className="num mt-10 border-t border-primary-foreground/15 pt-5 text-xs text-primary-foreground/55">
            {contact.address}
          </p>
        </div>
      </footer>
    </div>
  );
}
