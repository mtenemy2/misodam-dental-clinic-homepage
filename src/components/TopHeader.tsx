import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Menu, X, ChevronRight, ShieldCheck } from 'lucide-react';
import { MisodamLogo } from './MisodamLogo';

interface TopHeaderProps {
  onOpenInquiry: () => void;
}

export const TopHeader: React.FC<TopHeaderProps> = ({ onOpenInquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '원장직접상담', href: '#chairside' },
    { name: '최신장비', href: '#equipment' },
    { name: '디지털임플란트', href: '#digital-implant' },
    { name: '위생소독', href: '#hygiene' },
    { name: '원장소개', href: '#doctor' },
    { name: '오시는길', href: '#location' },
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-teal-100/60 py-2.5'
          : 'bg-white border-b border-slate-100 py-3'
      }`}
    >
      <div className="max-w-md mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 group py-0.5">
          <MisodamLogo className="h-9 sm:h-11" showText={false} logoSrc="/images/logo-horizontal.png" />
        </a>

        {/* Action Buttons & Mobile Menu Toggle */}
        <div className="flex items-center gap-1.5">
          <a
            href="tel:031-401-2875"
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-teal-50 text-teal-800 text-xs font-semibold hover:bg-teal-100 transition-colors border border-teal-200/60"
            title="전화 연결"
          >
            <Phone className="w-3.5 h-3.5 text-teal-600" />
            <span className="hidden sm:inline">031-401-2875</span>
            <span className="sm:hidden">전화</span>
          </a>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-1.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            aria-label="메뉴 열기"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Quick Nav Bar below header for mobile scroll ease */}
      <div className="max-w-md mx-auto px-4 pt-2 pb-1 overflow-x-auto no-scrollbar border-t border-slate-100/80 flex items-center gap-2 text-xs font-medium text-slate-600">
        {navLinks.map((link) => (
          <button
            key={link.href}
            onClick={() => handleNavClick(link.href)}
            className="whitespace-nowrap px-2.5 py-1 rounded-full bg-slate-100 hover:bg-teal-50 hover:text-teal-700 transition-colors border border-slate-200/60"
          >
            {link.name}
          </button>
        ))}
      </div>

      {/* Expanded Mobile Menu Drawer */}
      {isMenuOpen && (
        <div className="bg-white border-b border-slate-200 shadow-xl px-5 py-4 max-w-md mx-auto animate-fadeIn">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              빠른 섹션 이동
            </span>
            <span className="text-xs text-teal-700 font-medium flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" /> 상담실장 없는 정직한 치과
            </span>
          </div>

          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="flex items-center justify-between w-full py-2.5 px-3 rounded-lg text-left text-sm font-semibold text-slate-800 hover:bg-teal-50 hover:text-teal-800 transition-colors"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            ))}
          </nav>

          <div className="mt-4 pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href="tel:031-401-2875"
              className="w-full py-2.5 px-4 rounded-xl bg-teal-700 text-white font-bold text-center text-sm flex items-center justify-center gap-2 shadow-sm hover:bg-teal-800 transition-colors"
            >
              <Phone className="w-4 h-4" /> 031-401-2875 바로 전화걸기
            </a>
            <button
              onClick={() => {
                setIsMenuOpen(false);
                onOpenInquiry();
              }}
              className="w-full py-2 px-4 rounded-xl bg-slate-100 text-slate-700 font-medium text-center text-xs hover:bg-slate-200 transition-colors"
            >
              간단 전화상담 / 빠른 문의 남기기
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
