"use client";

import { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

/* 네비게이션 메뉴 항목 — 앵커 스크롤로 해당 섹션 이동 */
const NAV_LINKS = [
  { label: "주요 기능", href: "#features" },
  { label: "이용 방법", href: "#how-it-works" },
  { label: "요금제", href: "#pricing" },
  { label: "고객 후기", href: "#testimonials" },
] as const;

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      aria-label="메인 내비게이션"
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-slate-950/80 backdrop-blur-md"
          : "bg-slate-950/30 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* 로고 */}
        <a href="#" className="flex items-center gap-2">
          <div className="flex size-8 items-center justify-center rounded-lg bg-blue-600">
            <Zap className="size-4 text-white" />
          </div>
          <span className="text-lg font-bold text-white">FlowDesk</span>
        </a>

        {/* 데스크톱 메뉴 */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-300 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* 데스크톱 CTA */}
        <div className="hidden md:block">
          <Button
            size="sm"
            className="bg-blue-600 ring-offset-slate-950 hover:bg-blue-700"
          >
            무료로 시작하기
          </Button>
        </div>

        {/* 모바일 햄버거 버튼 */}
        <button
          type="button"
          className="rounded-md p-1 text-slate-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "메뉴 닫기" : "메뉴 열기"}
        >
          {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* 모바일 슬라이드다운 메뉴 */}
      {mobileOpen && (
        <div className="border-t border-white/10 bg-slate-950/95 backdrop-blur-md md:hidden">
          <div className="space-y-1 px-4 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block rounded-md px-3 py-2 text-sm text-slate-300 transition-colors hover:bg-slate-800 hover:text-white"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <Button
                size="sm"
                className="w-full bg-blue-600 ring-offset-slate-950 hover:bg-blue-700"
              >
                무료로 시작하기
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
