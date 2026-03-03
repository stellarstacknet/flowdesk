# FlowDesk

B2B SaaS 팀 생산성 플랫폼의 랜딩페이지입니다.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?logo=tailwindcss)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)
![License](https://img.shields.io/badge/License-MIT-yellow)

## Live Demo

[flowdesk.stellarstack.net](https://flowdesk.stellarstack.net)

## Tech Stack

| 기술 | 용도 |
|------|------|
| **Next.js 16** (App Router) | SSG 정적 생성, 라우팅 |
| **Tailwind CSS v4** | 유틸리티 기반 스타일링 |
| **shadcn/ui** | UI 컴포넌트 (Button, Badge, Separator) |
| **Framer Motion** | 스크롤 기반 애니메이션 |
| **Lucide React** | 아이콘 |
| **TypeScript** | 타입 안전성 |

## Sections

| # | 섹션 | 설명 |
|---|------|------|
| 1 | Navbar | 반응형 sticky 네비게이션, 모바일 햄버거 메뉴 |
| 2 | Hero | 히어로 헤드라인 + CTA + 미니 칸반보드 데모 |
| 3 | Logo Cloud | 가상 고객사 SVG 워드마크 로고 6종 |
| 4 | Features | 2x2 그리드 주요 기능 카드 |
| 5 | How It Works | 3단계 사용 방법 안내 |
| 6 | Pricing | 3단 요금제 비교 카드 |
| 7 | Testimonials | 고객 후기 3건 |
| 8 | CTA | 최종 전환 유도 섹션 |
| 9 | Footer | 4컬럼 링크 + 소셜 아이콘 |

## Features

- 모바일 퍼스트 반응형 디자인 (375px~)
- Framer Motion `whileInView` 스크롤 애니메이션
- 접근성: skip-to-content, aria-label, focus-visible
- 한국어 완전 로컬라이제이션
- Open Graph 메타데이터
- Vercel 자동 배포 (CI/CD)

## Getting Started

```bash
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000) 에서 확인할 수 있습니다.

## Build

```bash
npm run build
```

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Tailwind v4 테마 + 커스텀 유틸리티
│   ├── layout.tsx           # 루트 레이아웃 (Outfit + Noto Sans KR)
│   └── page.tsx             # 메인 페이지 (섹션 조합)
├── components/
│   ├── sections/            # 9개 랜딩페이지 섹션
│   └── ui/                  # shadcn/ui 컴포넌트
└── lib/
    ├── animations.ts        # Framer Motion 프리셋
    └── utils.ts             # cn() 유틸리티
```

## License

MIT License - 자세한 내용은 [LICENSE](LICENSE) 파일을 참고하세요.
