import type { Metadata } from "next";
import { Outfit, Noto_Sans_KR } from "next/font/google";
import "./globals.css";

/* 영문 디스플레이 폰트 — geometric sans-serif, SaaS 랜딩에 적합 */
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

/* 한글 본문 폰트 — 가독성 높은 고딕체 */
const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FlowDesk — 팀을 위한 프로젝트 관리 플랫폼",
  description:
    "FlowDesk는 스마트 태스크 보드, 자동 시간 추적, 실시간 팀 협업을 제공하는 프로젝트 관리 플랫폼입니다.",
  keywords: ["프로젝트 관리", "팀 협업", "태스크 보드", "SaaS", "업무 관리"],
  openGraph: {
    title: "FlowDesk — 팀을 위한 프로젝트 관리 플랫폼",
    description:
      "업무 보드, 시간 추적, 실시간 협업까지. 하나의 도구로 프로젝트를 관리하세요.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${outfit.variable} ${notoSansKR.variable} font-sans antialiased`}
      >
        {/* 키보드 사용자를 위한 skip-to-content 링크 */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-blue-600 focus:px-4 focus:py-2 focus:text-white"
        >
          본문으로 건너뛰기
        </a>
        {children}
      </body>
    </html>
  );
}
