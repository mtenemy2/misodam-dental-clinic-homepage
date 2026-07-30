import React, { useState } from 'react';
import { Clock, MapPin, Navigation, Bus, Car, Copy, Check, ExternalLink, Calendar, Phone } from 'lucide-react';
import { CLINIC_SCHEDULE } from '../utils/clinicHours';

export const LocationHoursSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const address = '안산시 단원구 와동공원로 131';

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const naverMapUrl = `https://m.map.naver.com/search2/search.naver?query=${encodeURIComponent('안산시 단원구 와동공원로 131 안산미소담치과')}`;
  const kakaoMapUrl = `https://m.map.kakao.com/actions/searchView?q=${encodeURIComponent('안산시 단원구 와동공원로 131')}`;

  return (
    <section id="location" className="scroll-mt-28 py-12 bg-slate-50 border-t border-slate-200 relative">
      <div className="max-w-md mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold border border-teal-200/80 mb-2">
            <Clock className="w-3.5 h-3.5 text-teal-700" /> 진료시간 & 오시는 길
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug mb-2">
            진료시간 안내 & 원클릭 길찾기
          </h2>
          <p className="text-xs text-slate-600 font-medium">
            와동 주민을 위한 편안한 방문 경로 및 주차 안내
          </p>
        </div>

        {/* Operating Hours Table Card */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-md mb-8">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
            <span className="text-sm font-extrabold text-slate-900 flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-teal-600" /> 세부 진료시간 안내
            </span>
            <span className="text-[11px] font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-100">
              수·토 09:00~13:00
            </span>
          </div>

          <div className="space-y-2.5 text-xs">
            {/* Weekdays */}
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
              <div>
                <span className="font-extrabold text-slate-900 text-xs block">
                  월 · 화 · 목 · 금요일
                </span>
                <span className="text-[11px] text-slate-500">
                  점심시간 13:00 ~ 14:30
                </span>
              </div>
              <span className="font-black text-teal-800 text-xs bg-white px-2.5 py-1 rounded-lg border border-slate-200">
                09:00 ~ 18:00
              </span>
            </div>

            {/* Wednesday & Saturday */}
            <div className="p-3 rounded-xl bg-teal-50/90 border border-teal-200 flex items-center justify-between">
              <div>
                <span className="font-extrabold text-teal-900 text-xs block flex items-center gap-1">
                  수 · 토요일
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />
                </span>
                <span className="text-[11px] text-teal-700 font-medium">
                  09:00 ~ 13:00 진료
                </span>
              </div>
              <span className="font-black text-teal-900 text-xs bg-white px-2.5 py-1 rounded-lg border border-teal-300 shadow-2xs">
                09:00 ~ 13:00
              </span>
            </div>

            {/* Sunday & Holidays */}
            <div className="p-3 rounded-xl bg-rose-50/80 border border-rose-200 flex items-center justify-between">
              <div>
                <span className="font-extrabold text-rose-900 text-xs block">
                  일요일 · 공휴일
                </span>
                <span className="text-[11px] text-rose-700 font-medium">
                  매주 정기 휴진일
                </span>
              </div>
              <span className="font-bold text-rose-800 text-xs bg-white px-2.5 py-1 rounded-lg border border-rose-200">
                휴진
              </span>
            </div>
          </div>
        </div>

        {/* Address & One-Click Navigation Section */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-md mb-8">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-teal-600" />
              <span className="text-sm font-extrabold text-slate-900">
                치과 위치 안내
              </span>
            </div>
            <button
              onClick={handleCopyAddress}
              className="text-xs text-teal-700 font-bold flex items-center gap-1 bg-teal-50 px-2 py-1 rounded-md border border-teal-200/80 hover:bg-teal-100 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" /> 주소 복사 완료!
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" /> 주소 복사
                </>
              )}
            </button>
          </div>

          {/* Full Address */}
          <div className="p-3 rounded-xl bg-slate-900 text-white font-bold text-xs sm:text-sm mb-4 flex items-center justify-between border border-slate-800">
            <span>{address}</span>
            <span className="text-[11px] text-amber-300 font-normal shrink-0 ml-2">
              안산 와동
            </span>
          </div>

          {/* Large Deep Link Navigation Buttons */}
          <div className="space-y-2.5 mb-5">
            {/* Naver Map Button */}
            <a
              href={naverMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-xl bg-[#03C75A] hover:bg-[#02b350] text-white font-extrabold text-center text-sm flex items-center justify-center gap-2 shadow-sm transition-transform hover:scale-[1.01] active:scale-[0.99]"
            >
              <span className="w-5 h-5 rounded-full bg-white text-[#03C75A] font-black text-xs flex items-center justify-center">
                N
              </span>
              <span>🟢 네이버 지도로 길찾기</span>
              <ExternalLink className="w-4 h-4 ml-auto opacity-80" />
            </a>

            {/* Kakao Map Button */}
            <a
              href={kakaoMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-xl bg-[#FEE500] hover:bg-[#fada00] text-[#191919] font-extrabold text-center text-sm flex items-center justify-center gap-2 shadow-sm transition-transform hover:scale-[1.01] active:scale-[0.99]"
            >
              <span className="w-5 h-5 rounded-full bg-[#191919] text-[#FEE500] font-black text-xs flex items-center justify-center">
                K
              </span>
              <span>🟡 카카오맵으로 길찾기</span>
              <ExternalLink className="w-4 h-4 ml-auto opacity-80" />
            </a>
          </div>

          {/* Transportation & Parking Info */}
          <div className="space-y-2 text-xs">
            {/* Bus Info */}
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5">
              <Bus className="w-4 h-4 text-teal-700 shrink-0 mt-1" />
              <div className="space-y-2 text-xs w-full">
                <span className="font-extrabold text-slate-900 block text-sm">
                  버스 이용 안내
                </span>
                <div className="bg-white p-3 rounded-xl border border-slate-200/90 space-y-2">
                  <div className="flex items-center gap-1.5 text-slate-800 font-bold">
                    <span className="px-2 py-0.5 rounded bg-teal-100 text-teal-900 text-[11px] font-extrabold shrink-0">
                      하차 정류장
                    </span>
                    <span className="text-slate-900 font-extrabold">'와동체육공원사거리' 하차</span>
                  </div>
                  <div className="text-slate-700 leading-relaxed text-[11px] bg-slate-50/80 p-2 rounded-lg border border-slate-100">
                    <span className="font-bold text-slate-900 block mb-0.5">📍 오시는 길</span>
                    신협, 와동체육공원 반대쪽(북쪽)으로 약 100m 이동 (도보 1~2분)
                  </div>
                  <div className="pt-1.5 border-t border-slate-100 flex flex-wrap items-center gap-1.5 text-[11px]">
                    <span className="font-extrabold text-slate-700">🚌 운행 노선:</span>
                    <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-100 font-semibold">
                      시내버스 9, 101번
                    </span>
                    <span className="px-2 py-0.5 rounded bg-rose-50 text-rose-700 border border-rose-100 font-semibold">
                      좌석버스 1100번
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Parking Info */}
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5">
              <Car className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
              <div>
                <span className="font-extrabold text-slate-800 block mb-0.5">
                  주차 안내
                </span>
                <span className="text-slate-600 leading-relaxed">
                  인근 공영주차장을 이용해 주시기 바랍니다.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Phone Card */}
        <div className="bg-gradient-to-r from-teal-800 to-teal-900 rounded-2xl p-4 text-white text-center shadow-lg">
          <span className="text-xs font-bold text-teal-200 block mb-1">
            진료 예약 및 당일 내원 문의
          </span>
          <a
            href="tel:031-401-2875"
            className="text-2xl font-black tracking-wider text-white hover:text-teal-200 transition-colors inline-flex items-center gap-2"
          >
            <Phone className="w-6 h-6 text-teal-300" /> 031-401-2875
          </a>
          <p className="text-[11px] text-teal-200/80 mt-1">
            원장이 상담실장 없이 직접 정직하게 안내해 드립니다.
          </p>
        </div>
      </div>
    </section>
  );
};
