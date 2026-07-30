import React from 'react';
import defaultLogo from '../assets/images/logo-horizontal.png';

interface MisodamLogoProps {
  className?: string;
  showText?: boolean;
  variant?: 'horizontal' | 'stacked';
  darkTheme?: boolean;
  logoSrc?: string;
  invertImage?: boolean;
  transparentBg?: boolean;
}

export const MisodamLogo: React.FC<MisodamLogoProps> = ({
  className = 'h-12 sm:h-14',
  showText = false,
  variant = 'horizontal',
  darkTheme = false,
  logoSrc = defaultLogo,
  invertImage = false,
  transparentBg = false,
}) => {
  return (
    <div className={`inline-flex items-center gap-2.5 ${variant === 'stacked' ? 'flex-col text-center' : ''}`}>
      <div
        className={`relative shrink-0 transition-all ${
          transparentBg
            ? 'bg-transparent p-0 border-0 shadow-none'
            : darkTheme
            ? 'bg-slate-100 p-2 border border-slate-300/80 shadow-2xs rounded-xl'
            : 'bg-white/80 p-1 rounded-xl'
        }`}
      >
        <img
          src={logoSrc}
          alt="미소담치과 로고"
          className={`object-contain rounded-lg ${invertImage ? 'invert filter' : ''} ${className}`}
          referrerPolicy="no-referrer"
        />
      </div>

      {showText && (
        <div className={`flex flex-col ${variant === 'stacked' ? 'items-center' : 'items-start'}`}>
          <span className={`text-[10px] font-serif tracking-tight leading-tight ${darkTheme ? 'text-slate-300 font-medium' : 'text-slate-600'}`}>
            Dr. Kim's dental clinic
          </span>
          <span className={`text-base font-black tracking-tight leading-none mt-0.5 ${darkTheme ? 'text-white' : 'text-slate-900'}`}>
            미소담치과
          </span>
        </div>
      )}
    </div>
  );
};
