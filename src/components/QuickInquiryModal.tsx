import React, { useState } from 'react';
import { X, Phone, CheckCircle, ShieldCheck, UserCheck } from 'lucide-react';

interface QuickInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuickInquiryModal: React.FC<QuickInquiryModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [symptom, setSymptom] = useState('검진 및 구강 3D 스캔');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setPhone('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-sm w-full p-6 shadow-2xl border border-slate-200 relative animate-fadeIn">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full bg-slate-100 text-slate-500 hover:text-slate-800 hover:bg-slate-200 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="p-2 rounded-xl bg-teal-50 text-teal-700">
                <Phone className="w-5 h-5" />
              </span>
              <div>
                <h3 className="text-lg font-black text-slate-900">
                  간단 상담 / 내원 문의
                </h3>
                <span className="text-[11px] font-bold text-teal-700">
                  원장이 직접 확인 후 연락드립니다
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-600 mb-4 leading-relaxed font-medium">
              영업 실장 없이 김지환 대표원장이 체어사이드에서 직접 정직하게 안내해 드립니다.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  성함 <span className="text-teal-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="예: 홍길동"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs font-medium focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  연락처 <span className="text-teal-600">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="예: 010-1234-5678"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs font-medium focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  희망 진료 / 불편하신 부위
                </label>
                <select
                  value={symptom}
                  onChange={(e) => setSymptom(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-xs font-medium focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none bg-white"
                >
                  <option value="검진 및 구강 3D 스캔">검진 및 3D 스캔 상담</option>
                  <option value="저통증 스케일링 / 잇몸치료">저통증 소닉플렉스 스케일링</option>
                  <option value="충치 및 지르코니아 보철">충치 / 지르코니아 보철</option>
                  <option value="임플란트 및 수술">맞춤 임플란트 시술</option>
                  <option value="기타 진료 문의">기타 진료 문의</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-sm shadow-md transition-colors flex items-center justify-center gap-2"
                >
                  <UserCheck className="w-4 h-4" /> 상담 신청하기
                </button>
              </div>
            </form>

            <div className="mt-3 text-center">
              <a
                href="tel:031-401-2875"
                className="text-xs text-slate-500 underline hover:text-teal-700 font-medium"
              >
                전화로 바로 연결하기 (031-401-2875)
              </a>
            </div>
          </div>
        ) : (
          <div className="text-center py-4">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-base font-black text-slate-900 mb-1">
              상담 신청이 접수되었습니다!
            </h3>
            <p className="text-xs text-slate-600 mb-4 leading-relaxed font-medium">
              김지환 대표원장이 진료 시간 중 직접 확인 후 빠르게 안내드리겠습니다.
            </p>

            <button
              onClick={handleReset}
              className="w-full py-2.5 px-4 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-colors"
            >
              확인 (닫기)
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
