"use client";

import { motion } from "framer-motion";
import { fadeIn, viewportConfig } from "@/lib/animations";

/* ──────────────────────────────────────────────
   가상 고객사 로고 — 영문 워드마크 스타일
   한국 테크 기업 트렌드에 맞춰 영문 브랜드네임 사용
   각 로고는 타이포그래피 + 미니멀 심볼을 조합
   ────────────────────────────────────────────── */

/* neosys — "N" 로고마크 + 워드마크 */
function NeosysLogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 110 28"
      fill="currentColor"
      aria-hidden="true"
    >
      {/* N 로고마크 — 라운드 사각형 안에 N */}
      <rect x="0" y="3" width="22" height="22" rx="5" opacity="0.15" />
      <text
        x="4.5"
        y="21"
        fontSize="16"
        fontWeight="800"
        fontFamily="inherit"
        opacity="0.7"
      >
        N
      </text>
      {/* 워드마크 */}
      <text
        x="28"
        y="20"
        fontSize="17"
        fontWeight="600"
        letterSpacing="-0.3"
        fontFamily="inherit"
      >
        neosys
      </text>
    </svg>
  );
}

/* BLUWAVE — 대문자 + 하단 물결 라인 */
function BluwaveLogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 28"
      fill="currentColor"
      aria-hidden="true"
    >
      <text
        x="0"
        y="18"
        fontSize="16"
        fontWeight="800"
        letterSpacing="2"
        fontFamily="inherit"
      >
        BLUWAVE
      </text>
      <path
        d="M0 24c8-4 16 0 24-4s16 0 24-4 16 0 24-4 16 0 24-4 16 0 24-4"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        opacity="0.4"
      />
    </svg>
  );
}

/* insight — 소문자 + i 대신 수직바 심볼 */
function InsightLogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 90 28"
      fill="currentColor"
      aria-hidden="true"
    >
      <rect x="0" y="6" width="2.5" height="14" rx="1" opacity="0.8" />
      <circle cx="1.25" cy="3" r="1.8" opacity="0.5" />
      <text
        x="7"
        y="20"
        fontSize="17"
        fontWeight="600"
        letterSpacing="-0.3"
        fontFamily="inherit"
      >
        nsight
      </text>
    </svg>
  );
}

/* CORETECH — 볼드 대문자, 콜론 세퍼레이터 */
function CoretechLogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 130 28"
      fill="currentColor"
      aria-hidden="true"
    >
      <text
        x="0"
        y="19"
        fontSize="16"
        fontWeight="800"
        letterSpacing="1.5"
        fontFamily="inherit"
      >
        CORE
      </text>
      <rect x="60" y="8" width="2" height="3" rx="0.5" opacity="0.4" />
      <rect x="60" y="15" width="2" height="3" rx="0.5" opacity="0.4" />
      <text
        x="66"
        y="19"
        fontSize="16"
        fontWeight="400"
        letterSpacing="1.5"
        fontFamily="inherit"
      >
        TECH
      </text>
    </svg>
  );
}

/* dailyplanet — 궤도 링이 감싸는 "d" 로고마크 + 워드마크 */
function DailyplanetLogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 140 28"
      fill="currentColor"
      aria-hidden="true"
    >
      {/* d 로고마크 + 궤도 링 */}
      <circle
        cx="11"
        cy="14"
        r="9"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="none"
        opacity="0.2"
      />
      <ellipse
        cx="11"
        cy="14"
        rx="12"
        ry="5"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
        opacity="0.15"
        transform="rotate(-20 11 14)"
      />
      <text
        x="5.5"
        y="19"
        fontSize="14"
        fontWeight="700"
        fontFamily="inherit"
        opacity="0.6"
      >
        d
      </text>
      {/* 워드마크 */}
      <text
        x="28"
        y="19"
        fontSize="16"
        fontWeight="600"
        letterSpacing="-0.3"
        fontFamily="inherit"
      >
        dailyplanet
      </text>
    </svg>
  );
}

/* NEXTON — 대문자 + X를 화살표 형태로 강조 */
function NextonLogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 110 28"
      fill="currentColor"
      aria-hidden="true"
    >
      <text
        x="0"
        y="19"
        fontSize="17"
        fontWeight="800"
        letterSpacing="1"
        fontFamily="inherit"
      >
        NEX
      </text>
      <text
        x="48"
        y="19"
        fontSize="17"
        fontWeight="800"
        letterSpacing="1"
        fontFamily="inherit"
      >
        TON
      </text>
      <path
        d="M42 14l5-5M42 14l5 5"
        stroke="currentColor"
        strokeWidth="1.8"
        fill="none"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}

/* 로고 컴포넌트 목록 — 높이 통일, 너비는 개별 조정 */
const LOGOS = [
  { name: "neosys", Logo: NeosysLogo, width: "w-[100px] sm:w-28" },
  { name: "bluwave", Logo: BluwaveLogo, width: "w-28 sm:w-32" },
  { name: "insight", Logo: InsightLogo, width: "w-[88px] sm:w-24" },
  { name: "coretech", Logo: CoretechLogo, width: "w-28 sm:w-32" },
  {
    name: "dailyplanet",
    Logo: DailyplanetLogo,
    width: "w-[120px] sm:w-[140px]",
  },
  { name: "nexton", Logo: NextonLogo, width: "w-24 sm:w-28" },
] as const;

export function LogoCloud() {
  return (
    <section className="bg-slate-50 py-12 sm:py-16">
      <motion.div
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
      >
        <p className="text-center text-sm font-medium tracking-wide text-slate-500">
          1,200개 이상의 팀이 FlowDesk와 함께하고 있습니다
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-6 sm:gap-x-12 md:gap-x-14">
          {LOGOS.map(({ name, Logo, width }) => (
            <Logo
              key={name}
              className={`${width} h-7 text-slate-400 transition-colors duration-300 hover:text-slate-600`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
