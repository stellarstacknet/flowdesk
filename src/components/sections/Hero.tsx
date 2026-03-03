"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { fadeInUp, fadeIn, staggerContainer } from "@/lib/animations";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      {/* 미세한 그리드 패턴 오버레이 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(148,163,184,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,.15) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <motion.div
        className="relative mx-auto max-w-7xl px-4 pb-32 pt-24 text-center sm:px-6 sm:pt-32 md:pb-40 md:pt-40 lg:px-8"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* 상단 Badge */}
        <motion.div variants={fadeIn}>
          <Badge
            variant="outline"
            className="mb-6 border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm text-blue-400"
          >
            오픈 베타 진행 중 &mdash; 지금 무료로 시작하세요
          </Badge>
        </motion.div>

        {/* 메인 타이틀 */}
        <motion.h1
          className="mx-auto max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          variants={fadeInUp}
        >
          <span className="text-white">프로젝트 관리</span>
          <br />
          <span className="gradient-text">가장 스마트하게</span>
        </motion.h1>

        {/* 서브 타이틀 */}
        <motion.p
          className="mx-auto mt-6 max-w-2xl text-lg text-slate-400 sm:text-xl"
          variants={fadeInUp}
        >
          팀 협업부터 일정 관리, 실시간 진행 현황까지. 하나의 플랫폼으로
          프로젝트를 한눈에 관리하세요.
        </motion.p>

        {/* CTA 버튼 2개 */}
        <motion.div
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          variants={fadeInUp}
        >
          <Button
            size="lg"
            className="gap-2 bg-blue-600 px-8 text-base ring-offset-slate-950 hover:bg-blue-700"
          >
            무료 체험 시작하기
            <ArrowRight className="size-4" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="gap-2 border-slate-700 bg-transparent px-8 text-base text-slate-300 ring-offset-slate-950 hover:bg-slate-800 hover:text-white"
          >
            <Play className="size-4" />
            데모 영상 보기
          </Button>
        </motion.div>

        {/* 대시보드 목업 UI */}
        <motion.div
          className="relative mx-auto mt-16 max-w-5xl sm:mt-20"
          variants={fadeInUp}
        >
          {/* glow 효과 */}
          <div className="absolute -inset-4 rounded-2xl glow" />

          {/* 목업 컨테이너 */}
          <div className="relative overflow-hidden rounded-xl border border-slate-700/50 bg-slate-900 shadow-2xl">
            {/* 브라우저 상단 바 */}
            <div className="flex items-center gap-2 border-b border-slate-700/50 px-4 py-3">
              <div className="flex gap-1.5">
                <div className="size-3 rounded-full bg-red-500/70" />
                <div className="size-3 rounded-full bg-yellow-500/70" />
                <div className="size-3 rounded-full bg-green-500/70" />
              </div>
              <div className="ml-4 flex-1 rounded-md bg-slate-800 px-3 py-1 text-xs text-slate-500">
                app.flowdesk.io/dashboard
              </div>
            </div>

            {/* 대시보드 본문 */}
            <div className="grid grid-cols-12 gap-4 p-4 sm:p-6">
              {/* 사이드바 */}
              <div className="col-span-3 hidden space-y-3 md:block">
                <div className="h-8 rounded bg-slate-800" />
                <div className="h-6 w-3/4 rounded bg-slate-800/60" />
                <div className="h-6 w-2/3 rounded bg-slate-800/60" />
                <div className="h-6 rounded bg-blue-600/20" />
                <div className="h-6 w-4/5 rounded bg-slate-800/60" />
                <div className="h-6 w-3/5 rounded bg-slate-800/60" />
              </div>

              {/* 메인 콘텐츠 영역 */}
              <div className="col-span-12 space-y-4 md:col-span-9">
                {/* 상단 통계 카드 */}
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
                  {[
                    "bg-blue-600/20",
                    "bg-violet-600/20",
                    "bg-emerald-600/20",
                    "bg-amber-600/20",
                  ].map((color, i) => (
                    <div key={i} className={`rounded-lg ${color} p-3`}>
                      <div className="h-3 w-1/2 rounded bg-slate-700/50" />
                      <div className="mt-2 h-5 w-2/3 rounded bg-slate-600/50" />
                    </div>
                  ))}
                </div>

                {/* 칸반 보드 프리뷰 */}
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-3">
                  {["할 일", "진행 중", "완료"].map((title) => (
                    <div key={title} className="rounded-lg bg-slate-800/50 p-3">
                      <div className="mb-3 text-xs font-medium text-slate-500">
                        {title}
                      </div>
                      <div className="space-y-2">
                        {[...Array(title === "진행 중" ? 3 : 2)].map((_, j) => (
                          <div key={j} className="rounded-md bg-slate-800 p-2">
                            <div className="h-2.5 w-4/5 rounded bg-slate-700/60" />
                            <div className="mt-1.5 h-2 w-1/2 rounded bg-slate-700/40" />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Hero → LogoCloud 그라디언트 전환 */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-slate-50"
      />
    </section>
  );
}
