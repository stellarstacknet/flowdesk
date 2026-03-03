import { Zap } from "lucide-react";
import { Separator } from "@/components/ui/separator";

/* Footer 링크 컬럼 데이터 */
const FOOTER_LINKS = [
  {
    title: "제품",
    links: ["주요 기능", "요금제", "연동 서비스", "업데이트 내역"],
  },
  {
    title: "회사",
    links: ["회사 소개", "블로그", "채용", "보도자료"],
  },
  {
    title: "지원",
    links: ["개발 문서", "고객센터", "API 레퍼런스", "서비스 상태"],
  },
  {
    title: "법적 고지",
    links: ["개인정보처리방침", "이용약관", "보안 정책"],
  },
] as const;

/* 소셜 아이콘 SVG — 외부 의존성 없이 인라인 */
function TwitterIcon() {
  return (
    <svg
      className="size-5"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      className="size-5"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      className="size-5"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* 4컬럼 링크 */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {FOOTER_LINKS.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold text-slate-900">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-slate-500 transition-colors hover:text-slate-900"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        {/* 하단: 로고 + 저작권 + 소셜 */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          {/* 로고 */}
          <div className="flex items-center gap-2">
            <div className="flex size-7 items-center justify-center rounded-lg bg-blue-600">
              <Zap className="size-3.5 text-white" />
            </div>
            <span className="text-sm font-semibold text-slate-900">
              FlowDesk
            </span>
          </div>

          {/* 저작권 */}
          <p className="text-sm text-slate-500">
            &copy; 2026 FlowDesk. All rights reserved.
          </p>

          {/* 소셜 아이콘 */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-slate-400 transition-colors hover:text-slate-600"
              aria-label="Twitter"
            >
              <TwitterIcon />
            </a>
            <a
              href="#"
              className="text-slate-400 transition-colors hover:text-slate-600"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </a>
            <a
              href="#"
              className="text-slate-400 transition-colors hover:text-slate-600"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
