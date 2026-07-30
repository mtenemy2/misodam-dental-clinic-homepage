export type ClinicDayStatus = 'OPEN' | 'LUNCH' | 'CLOSING_SOON' | 'CLOSED' | 'HOLIDAY';

export interface DailySchedule {
  dayName: string;
  dayIndex: number; // 0 = Sun, 1 = Mon, ..., 6 = Sat
  openTime: string; // e.g. "09:00"
  closeTime: string; // e.g. "18:00"
  hasLunch: boolean;
  lunchStart?: string; // e.g. "13:00"
  lunchEnd?: string; // e.g. "14:30"
  isContinuous: boolean;
  note: string;
}

export interface RealtimeStatusInfo {
  status: ClinicDayStatus;
  statusBadgeText: string;
  statusBadgeColor: string;
  statusBg: string;
  todayMessage: string;
  timeRangeText: string;
  nextStatusText: string;
  currentTimeFormatted: string;
  dayName: string;
  isTodayOpen: boolean;
}

export interface EquipmentItem {
  id: string;
  name: string;
  engName: string;
  category: string;
  tag: string;
  image?: string;
  badge: string;
  title: string;
  summary: string;
  description: string[];
  features: string[];
  comparison: {
    traditional: string;
    misodam: string;
  };
}

export interface TreatmentEstimateItem {
  id: string;
  toothNumber: string;
  diagnosis: string;
  treatmentType: string;
  estimatedCost: number;
  insuranceCovered: boolean;
  notes: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: '진료' | '비용' | '예약/방문';
}
