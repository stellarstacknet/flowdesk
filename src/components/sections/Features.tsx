"use client";

import { motion } from "framer-motion";
import { LayoutDashboard, Clock, MessageSquare, BarChart3 } from "lucide-react";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";

/* 기능 카드 데이터 — 아이콘 + 제목 + 설명 */
const FEATURES = [
  {
    icon: LayoutDashboard,
    title: "스마트 태스크 보드",
    description:
      "자유롭게 구성할 수 있는 칸반 보드로 업무를 체계적으로 정리하세요. 드래그 앤 드롭으로 간편하게 우선순위를 관리합니다.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Clock,
    title: "자동 시간 추적",
    description:
      "각 업무에 소요되는 시간을 자동으로 기록합니다. 별도 도구 없이 정확한 리포트를 확인하세요.",
    color: "bg-violet-100 text-violet-600",
  },
  {
    icon: MessageSquare,
    title: "실시간 팀 메신저",
    description:
      "업무 흐름에 맞춰 스레드로 대화하세요. 프로젝트 안에서 바로 소통할 수 있습니다.",
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    icon: BarChart3,
    title: "강력한 분석 대시보드",
    description:
      "팀 성과를 실시간 대시보드로 시각화합니다. 병목 구간을 사전에 발견하고 빠르게 대응하세요.",
    color: "bg-amber-100 text-amber-600",
  },
] as const;

export function Features() {
  return (
    <section id="features" className="bg-white section-padding">
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
            빠른 성과를 위한 핵심 기능
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            효율적인 팀 협업을 위한 기능을 모두 담았습니다.
          </p>
        </motion.div>

        {/* 기능 카드 2x2 그리드 */}
        <motion.div
          className="mt-16 grid gap-8 sm:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {FEATURES.map((feature) => (
            <motion.div
              key={feature.title}
              className="group rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              variants={fadeInUp}
            >
              {/* 아이콘 */}
              <div
                className={`inline-flex size-12 items-center justify-center rounded-xl ${feature.color}`}
              >
                <feature.icon className="size-6" />
              </div>
              {/* 텍스트 */}
              <h3 className="mt-5 text-xl font-semibold text-slate-900">
                {feature.title}
              </h3>
              <p className="mt-2 leading-relaxed text-slate-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
