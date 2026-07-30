import React from 'react';
import { Clock, Target, ShieldCheck, CheckCircle2, Award, ArrowRight, UserCheck } from 'lucide-react';

export const DigitalImplantSection: React.FC = () => {
  return (
    <section id="digital-implant" className="scroll-mt-28 py-10 bg-gradient-to-b from-slate-900 via-slate-900 to-teal-950 text-white relative overflow-hidden">
      {/* Background Decorative Accent */}
      <div className="absolute -right-16 -top-16 w-48 h-48 bg-teal-500/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -left-16 -bottom-16 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-md mx-auto px-4 sm:px-6 relative z-10">
        {/* Connection Flow Tag line */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-teal-400 bg-teal-950/80 px-2.5 py-1 rounded-md border border-teal-800/80">
            스캔에서 식립까지 100% 디지털 프로세스
          </span>
          <ArrowRight className="w-3.5 h-3.5 text-teal-400" />
        </div>

        {/* Section Header */}
        <div className="mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-900/60 text-teal-200 text-xs font-bold border border-teal-700/60 mb-2">
            <Award className="w-3.5 h-3.5 text-teal-400" /> 와동 10년+ 풍부한 임상 노하우
          </span>
          <h2 className="text-xl sm:text-2xl font-black tracking-tight leading-tight text-white mb-2">
            와동에서 10년 이상,<br />
            <span className="text-teal-400 underline decoration-teal-400/50 decoration-4 underline-offset-4">
              경험으로 증명하는 디지털 임플란트
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-teal-100/90 font-medium leading-relaxed italic">
            "수술은 더 빠르게, 회복은 더 편안하게, 난케이스도 안전하게"
          </p>
        </div>

        {/* Highlight Tag Buttons (Visual Points) */}
        <div className="grid grid-cols-1 gap-2 mb-6">
          <div className="p-3 rounded-xl bg-slate-800/90 border border-teal-500/30 flex items-center gap-3 shadow-sm">
            <div className="w-8 h-8 rounded-lg bg-teal-500/20 text-teal-300 flex items-center justify-center shrink-0">
              <Clock className="w-4 h-4 text-teal-400" />
            </div>
            <div>
              <span className="text-xs font-extrabold text-teal-300 block">⏱️ 빠른 수술 & 최소 통증</span>
              <span className="text-[11px] text-slate-300">컴퓨터 사전 모의수술로 최소 절개 진행</span>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-slate-800/90 border border-teal-500/30 flex items-center gap-3 shadow-sm">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center shrink-0">
              <Target className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <span className="text-xs font-extrabold text-emerald-300 block">🎯 0.1mm 오차 없는 정밀 식립</span>
              <span className="text-[11px] text-slate-300">3D CT & 스캔 데이터 기반 잇몸 속 위치 확보</span>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-slate-800/90 border border-teal-500/30 flex items-center gap-3 shadow-sm">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
            </div>
            <div>
              <span className="text-xs font-extrabold text-amber-300 block">🛡️ 고난도 뼈이식 / 난케이스 전문</span>
              <span className="text-[11px] text-slate-300">잇몸 뼈가 적거나 신경관이 가까운 케이스도 안전하게</span>
            </div>
          </div>
        </div>

        {/* Content Cards */}
        <div className="space-y-4 mb-6">
          {/* Card 1 */}
          <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/80 backdrop-blur-xs">
            <h3 className="text-sm font-bold text-teal-300 mb-2 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
              <span>1. 와동 최고 수준의 풍부한 디지털 임플란트 임상 경험</span>
            </h3>
            <ul className="space-y-2 text-xs text-slate-300 leading-relaxed pl-1">
              <li className="flex items-start gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0 mt-1.5" />
                <span>
                  <strong className="text-white font-semibold">10년 이상 지속해온 디지털 임플란트:</strong> 안산미소담치과는 10년 전부터 일찍이 디지털 임플란트 시스템을 도입하여 와동 지역에서 가장 깊이 있고 풍부한 임상 노하우를 축적해 왔습니다.
                </span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0 mt-1.5" />
                <span>
                  <strong className="text-white font-semibold">환자분 대부분이 선택하는 검증된 방식:</strong> 현재 본원에 내원하시는 임플란트 환자 대부분이 3D 디지털 가이드를 활용한 방식으로 안전하게 시술받고 계십니다.
                </span>
              </li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/80 backdrop-blur-xs">
            <h3 className="text-sm font-bold text-teal-300 mb-2 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
              <span>2. 3D 디지털 가이드 시술의 명확한 장점</span>
            </h3>
            <div className="space-y-2.5 text-xs text-slate-300 leading-relaxed">
              <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-700/60">
                <span className="font-extrabold text-white text-xs block mb-1 text-teal-200">
                  ⚡ 빠른 수술시간 & 신속한 회복
                </span>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  컴퓨터 사전 모의수술을 통해 최소 절개(또는 무절개)로 진행하므로 시술 시간이 짧고 통증, 출혈, 붓기가 대폭 줄어듭니다.
                </p>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-700/60">
                <span className="font-extrabold text-white text-xs block mb-1 text-teal-200">
                  🎯 어려운 케이스도 정확하고 안전하게
                </span>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  잇몸 뼈 상태가 좋지 않거나 신경관과의 거리가 가까운 고난도·난케이스에서도 3D CT 및 구강스캐너 데이터 기반으로 0.1mm의 오차까지 계산하여 잇몸 속 식립 위치를 정밀하게 확보합니다.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Director's Personal Message Box */}
        <div className="p-4 rounded-2xl bg-gradient-to-r from-teal-900/80 to-slate-900 border border-teal-500/40 shadow-lg relative overflow-hidden">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-teal-500/20 border border-teal-400/40 flex items-center justify-center shrink-0 text-teal-300">
              <UserCheck className="w-5 h-5 text-teal-300" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-teal-400 uppercase tracking-wider block mb-0.5">
                대표원장 메시지
              </span>
              <p className="text-xs text-slate-100 font-medium leading-relaxed italic">
                "10년 이상 동안 쌓아온 디지털 임플란트 노하우로, 치아가 많이 남지 않으셨거나 수술이 두려운 어르신들도 안심하고 받으실 수 있도록 정성을 다합니다."
              </p>
              <div className="mt-2 text-[11px] font-bold text-teal-300 flex items-center gap-1">
                <span>통합치의학과 전문의 김지환 대표원장</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
