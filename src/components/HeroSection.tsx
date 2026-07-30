import React, { useState, useEffect } from 'react';
import { Clock, CheckCircle2, Phone, MapPin, Sparkles, AlertCircle, RefreshCw } from 'lucide-react';
import { getRealtimeClinicStatus } from '../utils/clinicHours';
import { RealtimeStatusInfo } from '../types';

interface HeroSectionProps {
  onOpenInquiry: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenInquiry }) => {
  const [testDayOffset, setTestDayOffset] = useState<number | null>(null);
  const [testHourOverride, setTestHourOverride] = useState<number | null>(null);
  const [statusInfo, setStatusInfo] = useState<RealtimeStatusInfo>(getRealtimeClinicStatus());

  // Update realtime status every minute or on custom date change
  useEffect(() => {
    const updateStatus = () => {
      let targetDate = new Date();
      if (testDayOffset !== null) {
        // Find date for target day of week (0..6)
        const currentDay = targetDate.getDay();
        const diff = testDayOffset - currentDay;
        targetDate.setDate(targetDate.getDate() + diff);
      }
      if (testHourOverride !== null) {
        targetDate.setHours(testHourOverride, 30, 0);
      }
      setStatusInfo(getRealtimeClinicStatus(targetDate));
    };

    updateStatus();
    const interval = setInterval(updateStatus, 30000);
    return () => clearInterval(interval);
  }, [testDayOffset, testHourOverride]);

  const resetTestMode = () => {
    setTestDayOffset(null);
    setTestHourOverride(null);
  };

  return (
    <section className="pt-32 sm:pt-36 pb-8 bg-gradient-to-b from-teal-900/5 via-teal-50/50 to-white relative overflow-hidden">
      {/* Background Subtle Accent Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-md h-64 bg-teal-500/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-md mx-auto px-4 sm:px-6 relative z-10">
        {/* Top Badge */}
        <div className="text-xs font-bold text-teal-600 mb-2 uppercase tracking-tighter flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-teal-600" />
          <span>10 YEARS OF TRUST · 와동 주민의 평생 주치의</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-snug mb-3">
          10년을 이어온 정직함,<br />
          <span className="text-teal-600 underline decoration-teal-600 decoration-4 underline-offset-4">
            와동 주민의 평생
          </span><br />
          치아 건강을 지킵니다.
        </h1>

        {/* Sub Copy */}
        <p className="text-sm text-slate-700 leading-relaxed font-medium mb-6">
          과잉진료 없는 <strong className="text-teal-800 font-extrabold bg-teal-100/60 px-1 rounded">상담실장 없는 치과</strong>.<br />
          최고 사양 디지털 장비와 엄격한 소독 관리로 문턱은 낮추고 진료의 질은 높였습니다.
        </p>

        {/* 🟢 Real-time Operating Hours Widget */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-teal-100 shadow-md mb-6 relative">
          <div className="flex items-center justify-between mb-2 pb-2 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-teal-50 text-teal-700">
                <Clock className="w-4 h-4" />
              </span>
              <span className="text-xs font-bold text-slate-800 uppercase tracking-wide">
                실시간 진료시간 안내
              </span>
            </div>
            <span className="text-[11px] font-mono font-medium text-slate-500">
              {statusInfo.currentTimeFormatted} 현재
            </span>
          </div>

          {/* Dynamic Status Badge */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold shadow-2xs ${statusInfo.statusBadgeColor}`}
            >
              <span className="w-2 h-2 rounded-full bg-white animate-ping" />
              {statusInfo.statusBadgeText}
            </span>

            <span className="text-xs font-bold text-slate-800">
              {statusInfo.dayName}
            </span>
          </div>

          {/* Today Message Box */}
          <div className={`p-3 rounded-xl text-xs sm:text-sm font-semibold leading-relaxed mb-3 border ${statusInfo.statusBg}`}>
            {statusInfo.todayMessage}
          </div>

          {/* Secondary Info & Next Schedule */}
          <div className="flex flex-col gap-1 text-xs text-slate-600 bg-slate-50/80 p-2.5 rounded-xl border border-slate-100">
            <div className="flex justify-between items-center">
              <span className="text-slate-500">오늘 진료시간:</span>
              <span className="font-bold text-slate-800">{statusInfo.timeRangeText}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-500">다음 일정:</span>
              <span className="font-medium text-teal-700">{statusInfo.nextStatusText}</span>
            </div>
          </div>


        </div>

        {/* Hero Visual Card with Hospital Chairside Banner */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 mb-6 group">
          <img
            src="/src/assets/images/explanation.jpg"
            alt="안산미소담치과 체어사이드 3D 스캔 및 진단 시스템"
            referrerPolicy="no-referrer"
            className="w-full h-48 object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent flex flex-col justify-end p-4">
            <span className="text-white/90 text-xs font-semibold flex items-center gap-1 mb-0.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
              진료실 체어사이드 대형 스크린 완비
            </span>
            <p className="text-white text-sm font-bold tracking-tight">
              상담실 이동 없이 원장이 내 눈앞에서 직접 설명하는 진료
            </p>
          </div>
        </div>

        {/* Quick CTAs in Hero */}
        <div className="grid grid-cols-2 gap-2.5">
          <a
            href="tel:031-401-2875"
            className="py-3 px-4 rounded-xl bg-teal-700 text-white font-bold text-center text-sm flex items-center justify-center gap-2 shadow-sm hover:bg-teal-800 transition-colors"
          >
            <Phone className="w-4 h-4" /> 전화 바로 걸기
          </a>

          <a
            href="#location"
            className="py-3 px-4 rounded-xl bg-slate-900 text-white font-bold text-center text-sm flex items-center justify-center gap-2 shadow-sm hover:bg-slate-800 transition-colors"
          >
            <MapPin className="w-4 h-4 text-amber-400" /> 길찾기 (와동)
          </a>
        </div>
      </div>
    </section>
  );
};
