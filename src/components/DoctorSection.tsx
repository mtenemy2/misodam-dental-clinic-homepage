import React from 'react';
import { Award, Heart, Shield, CheckCircle2, Quote, Sparkles } from 'lucide-react';

export const DoctorSection: React.FC = () => {
  const credentials = [
    '보건복지부 인증 통합치의학과 전문의',
    '안산 와동 10년+ 지역 주민 평생 진료',
    '대한통합치과학회 정회원',
    '안산시치과의사회 재무이사 역임',
  ];

  const promises = [
    { title: '100% 원장 직접 진단', desc: '상담실장 없이 체어에서 원장이 직접 상태 설명' },
    { title: '과잉진료 Zero 원칙', desc: '당장 필요한 치료와 정기 관찰 항목을 투명 분리' },
    { title: '대학병원급 장비', desc: '트리오스 6, KaVo 전기모터, 플라즈마 멸균' },
    { title: '평생 안심 사후관리', desc: '10년을 이어온 와동 이웃의 평생 주치의' },
  ];

  return (
    <section id="doctor" className="scroll-mt-28 py-12 bg-white relative">
      <div className="max-w-md mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-bold border border-teal-200/80 mb-2">
            <Award className="w-3.5 h-3.5 text-teal-700" /> 대표원장 소개 & 10년의 약속
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug mb-2">
            와동에서 10년, 이웃의 부담을 덜어주는<br />
            <span className="text-teal-700">'가장 가까운 전문의'</span>
          </h2>
          <p className="text-xs text-slate-600 font-medium">
            김지환 대표원장 (보건복지부 인증 통합치의학과 전문의)
          </p>
        </div>

        {/* Doctor Profile Card */}
        <div className="bg-gradient-to-b from-teal-50/60 to-white rounded-3xl p-5 border border-teal-100 shadow-md mb-8">
          {/* Portrait Image */}
          <div className="relative rounded-2xl overflow-hidden mb-5 border border-teal-200/80 shadow-sm group">
            <img
              src="/src/assets/images/원장사진.jpg"
              alt="안산미소담치과 김지환 대표원장"
              referrerPolicy="no-referrer"
              className="w-full h-64 sm:h-80 object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent p-4 text-white">
              <span className="text-xs font-bold text-teal-300 block mb-0.5">
                보건복지부 인증 통합치의학과 전문의
              </span>
              <span className="text-lg font-black tracking-tight">
                김지환 대표원장
              </span>
            </div>
          </div>

          {/* Quote Speech Bubble */}
          <div className="bg-white p-4 rounded-2xl border border-teal-100 shadow-2xs relative mb-5">
            <Quote className="w-6 h-6 text-teal-200 absolute top-3 right-3" />
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-semibold italic relative z-10">
              "2015년부터 와동에서 환자분들을 모신 지 어느덧 10년이 넘었습니다.<br /><br />
              비용 부담 때문에 필요한 치과 치료를 미루시는 일이 없도록, <strong className="text-teal-800 not-italic bg-teal-100/70 px-1 rounded">과잉진료 없이 꼭 필요한 치료만 정직하게</strong> 권해드립니다.<br /><br />
              대학병원급 최신 디지털 장비 투자와 체어사이드 직접 상담을 통해, 동네 치과에서도 가장 높은 수준의 진료를 편안하게 받으실 수 있도록 매 순간 최선을 다하겠습니다."
            </p>
          </div>

          {/* Key Credentials Badges */}
          <div className="mb-5">
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2.5 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-teal-600" /> 원장 약력 및 이력
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-700">
              {credentials.map((cred, i) => (
                <li key={i} className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span className="font-semibold">{cred}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 10-Year Promises Grid */}
        <div className="bg-slate-900 rounded-2xl p-5 text-white shadow-xl">
          <h3 className="text-sm font-extrabold text-teal-300 mb-3 text-center flex items-center justify-center gap-1.5">
            <Shield className="w-4 h-4 text-emerald-400" /> 와동 주민과의 10년 약속
          </h3>

          <div className="grid grid-cols-1 gap-2.5">
            {promises.map((prom, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-slate-800/90 border border-slate-700/80 flex items-start gap-2.5"
              >
                <div className="w-6 h-6 rounded-lg bg-teal-500/20 text-teal-300 font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5 border border-teal-500/30">
                  0{idx + 1}
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-white mb-0.5">
                    {prom.title}
                  </h4>
                  <p className="text-[11px] text-slate-300 leading-tight">
                    {prom.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
