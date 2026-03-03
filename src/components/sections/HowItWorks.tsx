"use client";

import { motion } from "framer-motion";
import { FolderOpen, Users, Rocket } from "lucide-react";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";

/* 3단계 프로세스 데이터 */
const STEPS = [
  {
    step: 1,
    icon: FolderOpen,
    title: "워크스페이스 생성",
    description:
      "몇 초 만에 프로젝트를 설정하세요. 기존 도구에서 데이터를 가져오거나 템플릿으로 바로 시작할 수 있습니다.",
  },
  {
    step: 2,
    icon: Users,
    title: "팀원 초대",
    description:
      "링크 하나로 팀원을 초대하세요. 역할과 권한을 설정하고, 곧바로 협업을 시작할 수 있습니다.",
  },
  {
    step: 3,
    icon: Rocket,
    title: "본격적으로 시작",
    description:
      "실시간으로 진행 상황을 추적하고, 마감일을 지키며, 팀과 함께 성과를 만들어가세요.",
  },
] as const;

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-slate-50 section-padding">
      <div className="mx-auto max-w-7xl">
        {/* 섹션 헤더 */}
        <motion.div
          className="text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            3단계로 간편하게 시작하세요
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            가입부터 첫 번째 프로젝트 완료까지, 5분이면 충분합니다.
          </p>
        </motion.div>

        {/* 3단계 가로 배치 */}
        <motion.div
          className="relative mt-16 grid gap-8 md:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {/* 단계 사이 점선 연결 (데스크톱만) */}
          <div className="pointer-events-none absolute top-16 right-0 left-0 hidden md:block">
            <div className="mx-auto h-px w-2/3 border-t-2 border-dashed border-slate-300" />
          </div>

          {STEPS.map((step) => (
            <motion.div
              key={step.step}
              className="relative flex flex-col items-center text-center"
              variants={fadeInUp}
            >
              {/* 숫자 원형 뱃지 */}
              <div className="relative z-10 flex size-14 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white shadow-lg shadow-blue-600/25">
                {step.step}
              </div>
              {/* 아이콘 */}
              <div className="mt-6 flex size-12 items-center justify-center rounded-xl bg-white shadow-sm">
                <step.icon className="size-6 text-slate-700" />
              </div>
              {/* 텍스트 */}
              <h3 className="mt-4 text-xl font-semibold text-slate-900">
                {step.title}
              </h3>
              <p className="mt-2 max-w-xs leading-relaxed text-slate-600">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
