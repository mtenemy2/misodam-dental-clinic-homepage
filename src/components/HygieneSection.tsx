import React from 'react';
import { ShieldAlert, Sparkles, Eye, CheckCircle2 } from 'lucide-react';

export const HygieneSection: React.FC = () => {
  return (
    <section id="hygiene" className="scroll-mt-28 py-12 bg-slate-50 border-y border-slate-200 relative">
      <div className="max-w-md mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold border border-teal-200/80 mb-2">
            <ShieldAlert className="w-3.5 h-3.5 text-teal-700" /> [핵심 강점 3] 철저 위생 & 멸균
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug mb-2">
            보이지 않는 곳까지 완벽하게,<br />
            <span className="text-teal-700">감염 걱정 없는 안심 멸균</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            첨단 저온 플라즈마 멸균기와 1인 1기구 대면 개봉 원칙 준수
          </p>
        </div>

        {/* Highlight 1: NEW Plasma Sterilizer */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-teal-200/80 shadow-md mb-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-gradient-to-l from-teal-600 to-teal-700 text-white text-[10px] font-black px-3 py-1 rounded-bl-xl shadow-2xs uppercase tracking-wider">
            NEW 도입
          </div>

          <div className="flex items-center gap-2 mb-2">
            <span className="p-2 rounded-xl bg-teal-50 text-teal-700">
              <Sparkles className="w-5 h-5 text-teal-600" />
            </span>
            <div>
              <h3 className="text-base font-extrabold text-slate-900">
                첨단 저온 플라즈마 멸균기
              </h3>
              <span className="text-[11px] font-mono font-semibold text-teal-700">
                Plasma Sterilizer System
              </span>
            </div>
          </div>

          <p className="text-xs text-slate-700 leading-relaxed mb-3 font-medium">
            열과 습기에 약해 기존 고온 멸균기로 소독하기 어려웠던 미세 정밀 기구까지 100% 신속·완벽 멸균합니다. 기구의 손상 없이 최상의 위생 상태를 유지합니다.
          </p>

          <div className="p-2.5 rounded-xl bg-teal-50/80 border border-teal-100 text-xs text-teal-900 font-semibold flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
            <span>핸드피스 및 미세 노즐 내부 균주까지 99.99% 사멸</span>
          </div>
        </div>

        {/* Highlight 2: 1인 1기구 개별 멸균 포장 & 대면 개봉 */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-md mb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="p-2 rounded-xl bg-emerald-50 text-emerald-700">
              <Eye className="w-5 h-5 text-emerald-600" />
            </span>
            <div>
              <h3 className="text-base font-extrabold text-slate-900">
                1인 1기구 개별 멸균 포장 원칙
              </h3>
              <span className="text-[11px] font-bold text-emerald-700">
                환자 눈앞에서 직접 개봉
              </span>
            </div>
          </div>

          <p className="text-xs text-slate-700 leading-relaxed mb-3 font-medium">
            모든 진료 기구는 고온고압/플라즈마 멸균 후 개별 포장하며, 환자분이 보는 앞에서 직접 개봉하여 사용합니다.
          </p>

          <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 font-semibold flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span className="leading-relaxed">
              3way시린지, 핸드피스, 스케일러를 포함한 모든 기구를 완벽히 소독된 기구로 교체합니다.
            </span>
          </div>
        </div>


      </div>
    </section>
  );
};
