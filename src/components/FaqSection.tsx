import React, { useState } from 'react';
import { HelpCircle, ChevronDown, CheckCircle2 } from 'lucide-react';
import { FAQ_LIST } from '../data/clinicData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-12 bg-white relative border-t border-slate-100">
      <div className="max-w-md mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-bold border border-teal-200/80 mb-2">
            <HelpCircle className="w-3.5 h-3.5 text-teal-700" /> 와동 주민 환자분들이 자주 묻는 질문
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug mb-1">
            자주 묻는 질문 (FAQ)
          </h2>
          <p className="text-xs text-slate-600 font-medium">
            원장 직접 진단과 정직한 치료비에 대해 안내해 드립니다.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {FAQ_LIST.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl border border-slate-200/90 overflow-hidden transition-all shadow-2xs"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 text-left flex items-start justify-between gap-3 font-bold text-xs sm:text-sm text-slate-900 hover:bg-slate-100/80 transition-colors"
                >
                  <div className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-md bg-teal-700 text-white font-extrabold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                      Q
                    </span>
                    <span className="leading-snug">{faq.question}</span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 mt-0.5 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-teal-700' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 pt-1 text-xs text-slate-700 leading-relaxed border-t border-slate-200/60 bg-white font-medium">
                    <div className="flex items-start gap-2 pt-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <div>{faq.answer}</div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
