import { EquipmentItem, FaqItem, TreatmentEstimateItem } from '../types';

export const CLINIC_EQUIPMENT: EquipmentItem[] = [
  {
    id: 'trios6',
    name: '3D 구강스캐너 TRIOS 6',
    engName: 'TRIOS 6 Intraoral Scanner',
    category: '디지털 정밀 스캔',
    tag: '최고 사양 3D 스캔',
    badge: '3D 디지털 진단',
    title: '차갑고 거북한 인상재 없는 편안함',
    summary: '입안에 구토감을 유발하는 고무 인상재 대신 빠른 3D 레이저 스캔으로 0.01mm 오차 없는 정밀 채득',
    description: [
      '본을 뜰 때 입안에 고무 재료를 삼키듯 넣던 기존 방식의 거부감과 구토 반응을 완전히 없앴습니다.',
      '초당 초고속 초정밀 3D 레이저 광학 스캔으로 몇 초 만에 치아와 잇몸 라인을 풀컬러 3D 입체 데이터로 채득합니다.',
      '오차를 최소화하여 딱 맞는 맞춤형 보철(크라운, 인레이) 및 정확한 임플란트 시술이 가능합니다.',
    ],
    features: [
      '인상재(고무) 없는 이물감 Zero 진료',
      '3D 텍스처 풀컬러 치아 모델링',
      '크라운·보철 제작 기간 대폭 단축',
      '잇몸선 및 교합면 정밀 다차원 분석',
    ],
    comparison: {
      traditional: '차가운 고무 재료를 입에 물고 3~5분간 견뎌야 하며 이물감과 헛구역질 발생 위험',
      misodam: '소형 레이저 팁으로 1분 내외에 빠른 스캔, 헛구역질 없이 편안하고 깨끗한 3D 디지털 채득',
    },
  },
  {
    id: 'kavo-motor',
    name: '독일 KaVo 전기모터 핸드피스',
    engName: 'KaVo Dental Electric Motor Handpiece',
    category: '저소음·저진동 치아 형성',
    tag: '독일 명품 KaVo',
    badge: '치과 공포증 케어',
    title: '소음과 진동을 줄이는 프리미엄 저통증 진료',
    summary: '귀를 자극하는 "위잉~" 날카로운 에어 소음과 울림을 대폭 줄인 독일 프리미엄 전기모터',
    description: [
      '치과 특유의 날카로운 "위잉" 소음과 불쾌한 뼈 진동은 대부분 공기압(Air)으로 돌리는 에어 핸드피스 때문입니다.',
      '안산미소담치과는 독일 KaVo사의 정밀 전기모터를 도입하여 일정한 회전력과 극저소음, 극저진동을 구현했습니다.',
      '원하는 부위만 미세 조절하여 치아 삭제량을 최소화하고, 자연치아를 최대한 보존하면서 부드럽게 치료합니다.',
    ],
    features: [
      '에어 방식 대비 진동 및 소음 70% 이상 감소',
      '자연치아 아껴쓰기 (미세 조절 최소 삭제)',
      '안정적인 토크로 진료 시간 단축',
      '시림과 지린 느낌 대폭 완화',
    ],
    comparison: {
      traditional: '소리가 크고 회전력이 일정하지 않아 손끝 진동과 치아 열 자극, 불쾌한 뼈 울림 발생',
      misodam: '독일 KaVo 전기모터로 정숙하고 안정된 회전, 미세 제어로 자연치아 절삭 최소화',
    },
  },
  {
    id: 'sonicflex',
    name: '음파 스케일링 소닉플렉스',
    engName: 'KaVo SONICflex Scaling & Periodontal Care',
    category: '저통증 음파 스케일링',
    tag: '통증 완화 잇몸케어',
    badge: '안심 잇몸 진료',
    title: '통증을 낮춘 부드럽고 정밀한 잇몸 스케일링',
    summary: '독일 KaVo사의 공기 음파(Sonic) 진동 기구로 치아 표면 긁힘 없이 잇몸 자극 최소화',
    description: [
      '스케일링할 때 이가 시리고 아팠던 경험 때문에 치석 제거를 미루셨던 분들을 위해 도입했습니다.',
      '공기 음파(Sonic) 동력을 이용하여 치아 표면 충격을 부드럽게 완화하면서 타원형 진동을 일으킵니다.',
      '잇몸 속 좁은 타겟 부위와 미세 치석까지 치아 손상 없이 안전하게제거합니다.',
    ],
    features: [
      '시린 증상 및 통증 유발 최소화',
      '미세 입체 진동으로 잇몸 깊은 곳 치석 케어',
      '치아 표면 긁힘 없는 부드러운 스케일링',
      '잇몸 염증 및 임플란트 주위염 예방 케어',
    ],
    comparison: {
      traditional: '단방향 초음파 팁의 찌르는 진동으로 피가 나거나 찌릿한 잇몸 통증 유발',
      misodam: 'KaVo 공기 음파 진동으로 치아 겉면 손상 없이 잇몸 자극을 줄인 부드러운 케어',
    },
  },
];

export const SAMPLE_TREATMENT_ESTIMATES: TreatmentEstimateItem[] = [
  {
    id: 'est-1',
    toothNumber: '#16 (상악 우측 대구치)',
    diagnosis: '깊은 인접면 충치 및 기존 아말감 파절',
    treatmentType: '지르코니아 크라운 (치아색 강도 보철)',
    estimatedCost: 450000,
    insuranceCovered: false,
    notes: '대형 TV로 충치 범위 투명 확인 완료, 과잉치료 없이 최소 삭제 후 보철 진단',
  },
  {
    id: 'est-2',
    toothNumber: '#36, #37 (하악 좌측 구치부)',
    diagnosis: '잇몸 염증 및 미세 치석 착색',
    treatmentType: '소닉플렉스 저통증 잇몸 치료 & 스케일링',
    estimatedCost: 16200,
    insuranceCovered: true,
    notes: '건강보험 적용 본인부담금 기준 (1년에 1회 건강보험 혜택 적용)',
  },
  {
    id: 'est-3',
    toothNumber: '#46 (하악 우측 대구치)',
    diagnosis: '초기 법랑질 우식증',
    treatmentType: '정기 관찰 및 정밀 가이드 (치료 보류)',
    estimatedCost: 0,
    insuranceCovered: false,
    notes: '당장 깎지 않고 3D 스캔으로 저장 후 6개월 뒤 추적 관찰 (과잉진료 Zero 원칙)',
  },
];

export const FAQ_LIST: FaqItem[] = [
  {
    category: '진료',
    question: '정말 상담실장이 없나요? 원장님이 직접 상담해주시나요?',
    answer: '네, 그렇습니다. 안산미소담치과에는 영업 목적의 상담실장이 없습니다. 통합치의학과 전문의 김지환 대표원장이 진료실 체어에서 직접 환자분의 구강 상태를 대형 TV로 보여드리며 진단, 치료 계획, 세부 치료비 작성까지 100% 전담합니다.',
  },
  {
    category: '비용',
    question: '치료비 계획서는 어떻게 작성되며 과잉진료는 없나요?',
    answer: '체어사이드 대형 TV 화면을 환자분과 함께 보면서 당장 치료가 필요한 치아와 6개월 후 경과 관찰이 가능한 치아를 명확히 구분해 드립니다. 원장이 직접 항목별 투명한 치료비 계획서를 작성하여 서면으로 안내해 드립니다.',
  },
  {
    category: '진료',
    question: '수요일과 토요일 진료시간은 어떻게 되나요?',
    answer: '수요일과 토요일은 09:00부터 13:00까지 진료합니다.',
  },
  {
    category: '예약/방문',
    question: '예약 없이 당일 방문해도 진료를 받을 수 있나요?',
    answer: '당일 접수 진료도 가능합니다. 다만 대기 시간을 줄이고 쾌적한 원장 직접 체어사이드 진단을 원하실 경우 모바일 전화(031-401-2875)로 사전에 간단히 문의해 주시면 가장 원활한 시간에 안내해 드립니다.',
  },
  {
    category: '예약/방문',
    question: '주차는 어디에 하면 되나요?',
    answer: '인근 공영주차장을 이용해 주시기 바랍니다.',
  },
];
