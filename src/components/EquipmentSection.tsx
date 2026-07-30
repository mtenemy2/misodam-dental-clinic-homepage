import React, { useState } from 'react';
import { Cpu, Zap, Activity, CheckCircle2, XCircle, ArrowRight, Sparkles, Sliders } from 'lucide-react';
import { CLINIC_EQUIPMENT } from '../data/clinicData';

export const EquipmentSection: React.FC = () => {
  const [selectedEquipId, setSelectedEquipId] = useState<string>('trios6');
  const activeEquip = CLINIC_EQUIPMENT.find((e) => e.id === selectedEquipId) || CLINIC_EQUIPMENT[0];

  return (
    <section id="equipment" className="scroll-mt-28 py-12 bg-white relative">
      <div className="max-w-md mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-bold border border-teal-200/80 mb-2">
            <Cpu className="w-3.5 h-3.5 text-teal-600" /> [핵심 강점 2] 대학병원급 최신 디지털 장비
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug mb-2">
            동네 치과에서도 누리는<br />
            <span className="text-teal-700">최고 수준의 디지털 진료</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            TRIOS 6, 독일 KaVo 전기모터, SONICflex로 통증은 낮추고 정밀도는 높였습니다.
          </p>
        </div>

        {/* Equipment Selector Tabs */}
        <div className="flex gap-1.5 overflow-x-auto no-scrollbar pb-2 mb-5">
          {CLINIC_EQUIPMENT.map((equip) => (
            <button
              key={equip.id}
              onClick={() => setSelectedEquipId(equip.id)}
              className={`flex-1 min-w-[110px] py-2.5 px-3 rounded-xl text-xs font-bold transition-all text-center border ${
                selectedEquipId === equip.id
                  ? 'bg-teal-700 text-white border-teal-700 shadow-md scale-102'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              <div className="text-[10px] opacity-80 mb-0.5">{equip.category}</div>
              <div>{equip.name.split(' ')[0]} {equip.name.split(' ')[1] || ''}</div>
            </button>
          ))}
        </div>

        {/* Active Equipment Detailed Card */}
        <div className="bg-gradient-to-br from-slate-50 to-teal-50/30 rounded-2xl p-5 border border-teal-100 shadow-md mb-8">
          {/* Badge & Title */}
          <div className="flex items-center justify-between mb-3">
            <span className="px-2.5 py-1 rounded-md bg-teal-100 text-teal-800 text-xs font-bold border border-teal-200">
              {activeEquip.badge}
            </span>
            <span className="text-xs font-bold text-teal-700 bg-white px-2 py-0.5 rounded border border-teal-100">
              {activeEquip.tag}
            </span>
          </div>

          <h3 className="text-lg font-black text-slate-900 mb-1">
            {activeEquip.name}
          </h3>
          <p className="text-xs text-teal-800 font-bold mb-3">
            "{activeEquip.title}"
          </p>

          {/* Photo if available */}
          {activeEquip.id === 'trios6' && (
            <div className="relative rounded-xl overflow-hidden border border-teal-200/80 mb-4 shadow-2xs">
              <img
                src="/images/trios6.jpg"
                alt="3D 구강스캐너 TRIOS 6"
                referrerPolicy="no-referrer"
                className="w-full h-48 sm:h-56 object-cover object-center"
              />
              <div className="absolute bottom-2 left-2 right-2 bg-slate-900/85 backdrop-blur-xs p-2 rounded-lg text-white text-[11px] font-medium border border-white/10">
                0.01mm 오차 최소화 초정밀 3D 입체 스캔 데이터 채득
              </div>
            </div>
          )}

          {/* Description Bullets */}
          <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 mb-4">
            <p className="text-xs text-slate-700 font-bold mb-2">
              {activeEquip.summary}
            </p>
            <ul className="space-y-1.5 text-xs text-slate-600">
              {activeEquip.description.map((desc, i) => (
                <li key={i} className="flex items-start gap-1.5 leading-relaxed">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                  <span>{desc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-2 mb-4">
            {activeEquip.features.map((feat, i) => (
              <div
                key={i}
                className="p-2.5 rounded-xl bg-white border border-teal-100/90 text-slate-800 text-xs font-semibold flex items-center gap-1.5 shadow-2xs"
              >
                <Sparkles className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>

          {/* Comparison Card (Traditional vs Misodam) */}
          <div className="bg-white rounded-xl p-3.5 border border-slate-200">
            <div className="flex items-center gap-1 text-xs font-bold text-slate-800 mb-2 pb-1 border-b border-slate-100">
              <Sliders className="w-3.5 h-3.5 text-teal-600" />
              <span>진료 방식 비교</span>
            </div>

            <div className="space-y-2 text-xs">
              {/* Traditional */}
              <div className="p-2 rounded-lg bg-rose-50/60 border border-rose-100 text-slate-700 flex items-start gap-2">
                <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-rose-800 text-[11px] block">기존 일반 방식</span>
                  <span className="text-[11px]">{activeEquip.comparison.traditional}</span>
                </div>
              </div>

              {/* Misodam */}
              <div className="p-2 rounded-lg bg-teal-50 border border-teal-200 text-slate-800 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-teal-800 text-[11px] block">안산미소담치과 프리미엄 방식</span>
                  <span className="text-[11px] font-semibold">{activeEquip.comparison.misodam}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
