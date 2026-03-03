"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";

/* 가격 플랜 데이터 — 원화 기준 */
const PLANS = [
  {
    name: "스타터",
    price: "무료",
    period: "",
    description: "소규모 프로젝트와 개인 사용자에게 적합합니다.",
    cta: "무료로 시작하기",
    highlighted: false,
    features: ["프로젝트 5개", "팀원 3명", "기본 분석 리포트", "커뮤니티 지원"],
  },
  {
    name: "프로",
    price: "₩25,000",
    period: "/월",
    description: "성장하는 팀에 필요한 모든 기능을 제공합니다.",
    cta: "14일 무료 체험",
    highlighted: true,
    features: [
      "프로젝트 무제한",
      "팀원 25명",
      "고급 분석 대시보드",
      "우선 지원",
      "시간 추적 기능",
    ],
  },
  {
    name: "엔터프라이즈",
    price: "별도 문의",
    period: "",
    description: "대규모 조직을 위한 맞춤형 솔루션입니다.",
    cta: "도입 상담 요청",
    highlighted: false,
    features: [
      "프로의 모든 기능",
      "팀원 수 무제한",
      "맞춤형 연동",
      "전담 매니저 배정",
      "SSO & SAML 인증",
    ],
  },
] as const;

export function Pricing() {
  return (
    <section id="pricing" className="bg-white section-padding">
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
            합리적이고 투명한 요금제
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            숨겨진 비용 없이, 언제든지 해지할 수 있습니다.
          </p>
        </motion.div>

        {/* 3단 카드 */}
        <motion.div
          className="mt-16 grid gap-8 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {PLANS.map((plan) => (
            <motion.div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-8 ${
                plan.highlighted
                  ? "border-blue-600 ring-2 ring-blue-600 shadow-xl lg:scale-105"
                  : "border-slate-200"
              }`}
              variants={fadeInUp}
            >
              {/* 가장 인기 뱃지 */}
              {plan.highlighted && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 px-4 py-1 text-white hover:bg-blue-600">
                  추천
                </Badge>
              )}

              {/* 플랜명 + 가격 */}
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {plan.name}
                </h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold tracking-tight text-slate-900">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="ml-1 text-slate-500">{plan.period}</span>
                  )}
                </div>
                <p className="mt-2 text-sm text-slate-600">
                  {plan.description}
                </p>
              </div>

              {/* 기능 리스트 */}
              <ul className="mt-8 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="size-5 shrink-0 text-blue-600" />
                    <span className="text-sm text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA 버튼 */}
              <div className="mt-8">
                <Button
                  className={`w-full ${
                    plan.highlighted
                      ? "bg-blue-600 hover:bg-blue-700"
                      : "bg-slate-900 hover:bg-slate-800"
                  }`}
                >
                  {plan.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
