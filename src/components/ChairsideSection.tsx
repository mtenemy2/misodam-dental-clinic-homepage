import React, { useState } from 'react';
import { Tv, FileText, CheckCircle2, ShieldCheck, HelpCircle, ArrowRight, Sparkles, UserCheck } from 'lucide-react';
import { SAMPLE_TREATMENT_ESTIMATES } from '../data/clinicData';

export const ChairsideSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'tv' | 'estimate'>('tv');
  const [selectedEstimate, setSelectedEstimate] = useState<number>(0);

  return (
    <section id="chairside" className="scroll-mt-28 py-12 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Accent glow */}
      <div className="absolute top-1/3 -right-20 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-20 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-md mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold border border-teal-500/30 mb-2">
            <UserCheck className="w-3.5 h-3.5" /> [핵심 강점 1] 체어사이드 원장 100% 직접 상담
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-snug mb-2">
            "상담실로 이동하지 않습니다."
          </h2>
          <p className="text-sm text-teal-200/90 font-medium">
            원장이 체어에서 대형 TV로 직접 보여드리며 설명합니다.
          </p>
        </div>

        {/* Feature Cards 1 & 2 */}
        <div className="space-y-4 mb-8">
          {/* Card 1 */}
          <div className="bg-slate-800/90 rounded-2xl p-4 border border-slate-700/80 shadow-md">
            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-teal-500/20 text-teal-400 shrink-0 mt-0.5 border border-teal-500/30">
                <Tv className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white mb-1 flex items-center gap-1.5">
                  대형 TV 화면으로 직접 확인하는 구강 상태
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  진료실 체어에 앉아 바로 촬영한 사진과 3D 스캔 자료를 대형 TV 화면으로 크게 띄워, 원장과 환자가 함께 보며 치아 상태를 정밀하게 확인합니다.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-800/90 rounded-2xl p-4 border border-slate-700/80 shadow-md">
            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400 shrink-0 mt-0.5 border border-emerald-500/30">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white mb-1 flex items-center gap-1.5">
                  상담실장 없는 100% 원장 직접 진단 & 케어
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  별도의 상담실이나 영업 상담실장을 거치지 않습니다. 통합치의학과 전문의 원장이 체어사이드에서 직접 진단, 치료 계획, 세부 치료비 계획서까지 투명하게 작성해 드립니다.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Chairside Display & Estimate Preview Switcher */}
        <div className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden shadow-xl">
          {/* View Mode Toggle Bar */}
          <div className="flex border-b border-slate-700 bg-slate-950/50">
            <button
              onClick={() => setActiveTab('tv')}
              className={`flex-1 py-3 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors border-b-2 ${
                activeTab === 'tv'
                  ? 'border-teal-400 text-teal-300 bg-slate-800'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <Tv className="w-4 h-4" /> 대형 TV 구강 진단 화면
            </button>
            <button
              onClick={() => setActiveTab('estimate')}
              className={`flex-1 py-3 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors border-b-2 ${
                activeTab === 'estimate'
                  ? 'border-teal-400 text-teal-300 bg-slate-800'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <FileText className="w-4 h-4" /> 원장 직접 작성 치료비 계획서
            </button>
          </div>

          {/* Tab 1: Chairside TV Scene & Screen Demo */}
          {activeTab === 'tv' && (
            <div className="p-4">
              <div className="relative rounded-xl overflow-hidden border border-slate-700 mb-3">
                <img
                  src="/src/assets/images/스캔.jpg"
                  alt="체어사이드 3D 구강 스캔 및 진단"
                  referrerPolicy="no-referrer"
                  className="w-full h-48 object-cover object-center"
                />
                <div className="absolute top-2 left-2 px-2.5 py-1 rounded-md bg-slate-900/90 text-teal-300 text-[11px] font-bold border border-teal-500/40 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-amber-400" /> 실시간 3D 스캔 TV 연동
                </div>
              </div>

              <div className="bg-slate-950 p-3 rounded-xl border border-slate-700/80 text-xs">
                <div className="flex items-center justify-between text-teal-300 font-bold mb-1.5 pb-1 border-b border-slate-800">
                  <span>체어사이드 직진료의 3가지 안심 포인트</span>
                  <span className="text-[10px] text-slate-400">안산 와동 미소담치과</span>
                </div>
                <ul className="space-y-1.5 text-slate-300">
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                    <span>환자가 직접 원장의 설명과 함께 3D 스캔 영상 확인</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                    <span>불필요한 과잉진료 권유 원천 차단 (영업 실장 없음)</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                    <span>당장 할 치료와 경과 관찰할 치아를 투명하게 구분</span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {/* Tab 2: Treatment Estimate Worksheet Sample */}
          {activeTab === 'estimate' && (
            <div className="p-3 sm:p-4">
              <div className="mb-3 p-3 rounded-xl bg-teal-950/70 border border-teal-700/60 text-xs sm:text-sm text-teal-100 flex items-center gap-2.5 font-medium shadow-xs">
                <FileText className="w-4 h-4 text-teal-400 shrink-0" />
                <span>원장이 진료실에서 환자분과 함께 직접 작성해서 서류로 출력해 드립니다.</span>
              </div>
              <div className="relative rounded-xl overflow-hidden border border-slate-700">
                <img
                  src="/src/assets/images/치료비계획서.png"
                  alt="원장 직접 작성 치료비 계획서"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
