"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";

/* 후기 데이터 — 한국 인물 + 회사 */
const TESTIMONIALS = [
  {
    quote:
      "FlowDesk 도입 후 개발팀의 협업 방식이 완전히 달라졌습니다. 첫 달에 배포 속도가 40% 빨라졌어요.",
    name: "김서연",
    title: "테크플로우 CTO",
    initials: "김",
  },
  {
    quote:
      "드디어 업무 흐름을 방해하지 않는 프로젝트 도구를 찾았습니다. 깔끔하고, 빠르고, 직관적이에요.",
    name: "박민수",
    title: "레이캐스트코리아 프로덕트 리드",
    initials: "박",
  },
  {
    quote:
      "기존에 쓰던 3개의 도구를 FlowDesk 하나로 대체했습니다. 비용 절감 효과가 즉시 나타났어요.",
    name: "이하은",
    title: "스케일업 개발 총괄",
    initials: "이",
  },
] as const;

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-slate-50 section-padding">
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
            이미 많은 팀이 선택했습니다
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            실제 고객의 이야기를 들어보세요.
          </p>
        </motion.div>

        {/* 후기 카드 3개 */}
        <motion.div
          className="mt-16 grid gap-8 md:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {TESTIMONIALS.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              variants={fadeInUp}
            >
              {/* 큰 따옴표 장식 */}
              <Quote className="size-8 text-blue-600/20" />
              {/* 후기 텍스트 */}
              <p className="mt-4 flex-1 text-lg leading-relaxed text-slate-700">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              {/* 프로필 */}
              <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-6">
                {/* 아바타 placeholder — 성 1글자 */}
                <div className="flex size-10 items-center justify-center rounded-full bg-slate-100 text-sm font-semibold text-slate-600">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-slate-500">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
