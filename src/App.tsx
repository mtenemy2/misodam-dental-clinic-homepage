import React, { useState } from 'react';
import { TopHeader } from './components/TopHeader';
import { HeroSection } from './components/HeroSection';
import { ChairsideSection } from './components/ChairsideSection';
import { EquipmentSection } from './components/EquipmentSection';
import { DigitalImplantSection } from './components/DigitalImplantSection';
import { HygieneSection } from './components/HygieneSection';
import { DoctorSection } from './components/DoctorSection';
import { LocationHoursSection } from './components/LocationHoursSection';
import { FaqSection } from './components/FaqSection';
import { StickyBottomBar } from './components/StickyBottomBar';
import { QuickInquiryModal } from './components/QuickInquiryModal';
import { MisodamLogo } from './components/MisodamLogo';
import { ShieldCheck, Phone, MapPin } from 'lucide-react';

export default function App() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-800 antialiased selection:bg-teal-200 selection:text-teal-900 pb-20">
      {/* Centered Mobile Layout Wrapper */}
      <div className="max-w-md mx-auto bg-white min-h-screen shadow-2xl relative overflow-x-hidden border-x border-slate-200">
        {/* Top Header */}
        <TopHeader onOpenInquiry={() => setIsInquiryOpen(true)} />

        {/* Main Content Sections (Top -> Bottom) */}
        <main>
          {/* Section 1: Hero & Realtime Operating Hours Widget */}
          <HeroSection onOpenInquiry={() => setIsInquiryOpen(true)} />

          {/* Section 2: Chairside 100% Doctor Diagnosis & Large TV Display */}
          <ChairsideSection />

          {/* Section 3: Digital Equipment (TRIOS 6, KaVo Motor, SONICflex) */}
          <EquipmentSection />

          {/* Section 3-2: 10-Year Experienced Digital Implant */}
          <DigitalImplantSection />

          {/* Section 4: Low-temp Plasma Sterilizer & Hygiene System */}
          <HygieneSection />

          {/* Section 5: Doctor Profile & 10-Year Promise */}
          <DoctorSection />

          {/* Section 6: Detailed Hours & One-Click Navigation (Naver / Kakao) */}
          <LocationHoursSection />

          {/* Additional FAQ Accordion Section */}
          <FaqSection />
        </main>

        {/* Footer */}
        <footer className="bg-slate-900 text-slate-300 py-9 px-6 text-xs text-center border-t border-slate-800 mb-12 flex flex-col items-center">
          <div className="mb-4 inline-flex items-center justify-center">
            <MisodamLogo className="h-16 sm:h-20" showText={false} darkTheme={true} invertImage={true} transparentBg={true} variant="stacked" />
          </div>
          <p className="text-xs text-teal-300 font-semibold mb-3">
            보건복지부 인증 통합치의학과 전문의 김지환 대표원장
          </p>

          <div className="space-y-1.5 text-xs text-slate-300 leading-relaxed mb-4 font-normal">
            <p>주소: 안산시 단원구 와동공원로 131</p>
            <p>대표전화: 031-401-2875</p>
            <p className="font-semibold text-slate-200">사업자등록번호:631-99-00093 | 미소담치과의원</p>
          </div>

          <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400">
            © 2026 MISODAM DENTAL CLINIC. All Rights Reserved.
          </div>
        </footer>

        {/* Fixed Bottom CTA Bar */}
        <StickyBottomBar onOpenInquiry={() => setIsInquiryOpen(true)} />

        {/* Quick Phone Call Callback Modal */}
        <QuickInquiryModal
          isOpen={isInquiryOpen}
          onClose={() => setIsInquiryOpen(false)}
        />
      </div>
    </div>
  );
}
