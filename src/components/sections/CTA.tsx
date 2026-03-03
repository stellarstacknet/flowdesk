"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-slate-950 section-padding">
      {/* 배경 gradient orb 장식 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="size-[500px] rounded-full bg-blue-600/10 blur-[120px]" />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-0 -translate-y-1/2"
      >
        <div className="size-[300px] rounded-full bg-violet-600/10 blur-[100px]" />
      </div>

      <motion.div
        className="relative mx-auto max-w-3xl text-center"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
      >
        <motion.h2
          className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
          variants={fadeInUp}
        >
          업무 효율을 높일 준비 되셨나요?
        </motion.h2>
        <motion.p
          className="mx-auto mt-6 max-w-xl text-lg text-slate-400"
          variants={fadeInUp}
        >
          이미 수천 개의 팀이 FlowDesk로 더 나은 성과를 만들고 있습니다. 지금
          바로 무료로 시작해보세요.
        </motion.p>
        <motion.div className="mt-10" variants={fadeInUp}>
          <Button
            size="lg"
            className="gap-2 bg-blue-600 px-10 text-base ring-offset-slate-950 hover:bg-blue-700"
          >
            무료 체험 시작하기
            <ArrowRight className="size-4" />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
