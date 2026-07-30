import React from 'react';
import { Phone, MapPin, Calendar, Clock } from 'lucide-react';

interface StickyBottomBarProps {
  onOpenInquiry: () => void;
}

export const StickyBottomBar: React.FC<StickyBottomBarProps> = ({ onOpenInquiry }) => {
  const handleScrollToLocation = () => {
    const locationEl = document.getElementById('location');
    if (locationEl) {
      locationEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-teal-200/80 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] py-2.5 px-3">
      <div className="max-w-md mx-auto grid grid-cols-2 gap-2">
        {/* 전화 바로 걸기 */}
        <a
          href="tel:031-401-2875"
          className="h-12 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md shadow-teal-100 transition-all active:scale-[0.98]"
        >
          <Phone className="w-4 h-4 text-white animate-bounce" />
          <span>031-401-2875</span>
        </a>

        {/* 길찾기 */}
        <button
          onClick={handleScrollToLocation}
          className="h-12 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md shadow-slate-200 transition-all active:scale-[0.98]"
        >
          <MapPin className="w-4 h-4 text-amber-400" />
          <span>원클릭 길찾기</span>
        </button>
      </div>
    </div>
  );
};
