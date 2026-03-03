import type { Variants } from "framer-motion";

/* ──────────────────────────────────────────────
   공통 Framer Motion Variants
   모든 섹션에서 일관된 스크롤 트리거 애니메이션을 위해
   이 파일에서 import해서 사용한다.

   사용법:
   <motion.div
     variants={fadeInUp}
     initial="hidden"
     whileInView="visible"
     viewport={{ once: true, margin: "-100px" }}
   />
   ────────────────────────────────────────────── */

/* 아래에서 위로 올라오며 페이드 인 — 가장 기본적인 스크롤 애니메이션 */
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

/* 단순 페이드 인 — y 이동 없이 투명도만 변화 */
export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

/* 컨테이너 stagger — 자식 요소들을 순차적으로 애니메이션 */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

/* 좌측에서 슬라이드 인 */
export const slideInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

/* 스케일 업 — 살짝 작은 상태에서 원래 크기로 */
export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

/* whileInView에 전달할 공통 viewport 설정 */
export const viewportConfig = {
  once: true,
  margin: "-100px" as const,
};
