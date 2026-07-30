import { ClinicDayStatus, DailySchedule, RealtimeStatusInfo } from '../types';

export const CLINIC_SCHEDULE: Record<number, DailySchedule> = {
  0: {
    dayName: '일요일',
    dayIndex: 0,
    openTime: '00:00',
    closeTime: '00:00',
    hasLunch: false,
    isContinuous: false,
    note: '일요일 · 공휴일 정기 휴진',
  },
  1: {
    dayName: '월요일',
    dayIndex: 1,
    openTime: '09:00',
    closeTime: '18:00',
    hasLunch: true,
    lunchStart: '13:00',
    lunchEnd: '14:30',
    isContinuous: false,
    note: '09:00 ~ 18:00 (점심시간 13:00~14:30)',
  },
  2: {
    dayName: '화요일',
    dayIndex: 2,
    openTime: '09:00',
    closeTime: '18:00',
    hasLunch: true,
    lunchStart: '13:00',
    lunchEnd: '14:30',
    isContinuous: false,
    note: '09:00 ~ 18:00 (점심시간 13:00~14:30)',
  },
  3: {
    dayName: '수요일',
    dayIndex: 3,
    openTime: '09:00',
    closeTime: '13:00',
    hasLunch: false,
    isContinuous: false,
    note: '09:00 ~ 13:00',
  },
  4: {
    dayName: '목요일',
    dayIndex: 4,
    openTime: '09:00',
    closeTime: '18:00',
    hasLunch: true,
    lunchStart: '13:00',
    lunchEnd: '14:30',
    isContinuous: false,
    note: '09:00 ~ 18:00 (점심시간 13:00~14:30)',
  },
  5: {
    dayName: '금요일',
    dayIndex: 5,
    openTime: '09:00',
    closeTime: '18:00',
    hasLunch: true,
    lunchStart: '13:00',
    lunchEnd: '14:30',
    isContinuous: false,
    note: '09:00 ~ 18:00 (점심시간 13:00~14:30)',
  },
  6: {
    dayName: '토요일',
    dayIndex: 6,
    openTime: '09:00',
    closeTime: '13:00',
    hasLunch: false,
    isContinuous: false,
    note: '09:00 ~ 13:00',
  },
};

export function getRealtimeClinicStatus(customDate?: Date): RealtimeStatusInfo {
  const now = customDate || new Date();
  const dayIndex = now.getDay();
  const schedule = CLINIC_SCHEDULE[dayIndex];

  const hours = now.getHours();
  const minutes = now.getMinutes();
  const currentTotalMins = hours * 60 + minutes;

  const pad = (n: number) => n.toString().padStart(2, '0');
  const currentTimeFormatted = `${pad(hours)}:${pad(minutes)}`;

  // Parse time helper
  const timeToMins = (timeStr: string) => {
    const [h, m] = timeStr.split(':').map(Number);
    return h * 60 + m;
  };

  const openMins = timeToMins(schedule.openTime);
  const closeMins = timeToMins(schedule.closeTime);
  const lunchStartMins = schedule.lunchStart ? timeToMins(schedule.lunchStart) : 0;
  const lunchEndMins = schedule.lunchEnd ? timeToMins(schedule.lunchEnd) : 0;

  let status: ClinicDayStatus = 'CLOSED';
  let statusBadgeText = '';
  let statusBadgeColor = 'bg-slate-500 text-white';
  let statusBg = 'bg-slate-50 border-slate-200 text-slate-700';
  let todayMessage = '';
  let timeRangeText = '';
  let nextStatusText = '';

  const dayName = schedule.dayName;

  if (dayIndex === 0) {
    status = 'HOLIDAY';
    statusBadgeText = '🔴 오늘 정기 휴진';
    statusBadgeColor = 'bg-rose-500 text-white';
    statusBg = 'bg-rose-50 border-rose-200 text-rose-800';
    todayMessage = `오늘은 [${dayName}]입니다. 정기 휴진일입니다.`;
    timeRangeText = '일요일 · 공휴일 휴진';
    nextStatusText = '내일(월요일) 오전 09:00부터 정상 진료합니다.';
    return {
      status,
      statusBadgeText,
      statusBadgeColor,
      statusBg,
      todayMessage,
      timeRangeText,
      nextStatusText,
      currentTimeFormatted,
      dayName,
      isTodayOpen: false,
    };
  }

  // Check if current time falls within open hours
  if (currentTotalMins < openMins) {
    status = 'CLOSED';
    statusBadgeText = '⚪ 진료 전';
    statusBadgeColor = 'bg-amber-600 text-white';
    statusBg = 'bg-amber-50 border-amber-200 text-amber-900';
    todayMessage = `오늘은 [${dayName}]입니다. ${schedule.closeTime}까지 진료합니다.`;
    timeRangeText = `${schedule.openTime} ~ ${schedule.closeTime}`;
    nextStatusText = `오늘 오전 ${schedule.openTime}부터 진료 시작합니다.`;
  } else if (schedule.hasLunch && currentTotalMins >= lunchStartMins && currentTotalMins < lunchEndMins) {
    status = 'LUNCH';
    statusBadgeText = '🟠 점심시간 (13:00~14:30)';
    statusBadgeColor = 'bg-amber-500 text-white';
    statusBg = 'bg-amber-50 border-amber-300 text-amber-900';
    todayMessage = `오늘은 [${dayName}]입니다. 14:30부터 오후 진료가 재개됩니다.`;
    timeRangeText = '점심시간 13:00 ~ 14:30';
    nextStatusText = '오후 14:30부터 오후 진료 접수를 시작합니다.';
  } else if (currentTotalMins >= closeMins - 30 && currentTotalMins < closeMins) {
    status = 'CLOSING_SOON';
    statusBadgeText = `🟡 진료 마감 임박 (${schedule.closeTime} 마감)`;
    statusBadgeColor = 'bg-yellow-500 text-slate-950 font-bold';
    statusBg = 'bg-yellow-50 border-yellow-300 text-yellow-950';
    todayMessage = `오늘은 [${dayName}]입니다. ${schedule.closeTime} 진료 마감 예정입니다.`;
    timeRangeText = `오늘 진료 마감: ${schedule.closeTime}`;
    nextStatusText = '접수 마감 전 빠른 방문 또는 전화 문의를 권장합니다.';
  } else if (currentTotalMins >= openMins && currentTotalMins < closeMins) {
    status = 'OPEN';
    statusBadgeText = '🟢 현재 정상 진료 중';
    statusBadgeColor = 'bg-emerald-600 text-white';
    statusBg = 'bg-emerald-50 border-emerald-200 text-emerald-900';
    todayMessage = `오늘은 [${dayName}]입니다. ${schedule.closeTime}까지 진료합니다.`;
    timeRangeText = schedule.hasLunch 
      ? `${schedule.openTime} ~ ${schedule.closeTime} (점심 13:00~14:30)` 
      : `${schedule.openTime} ~ ${schedule.closeTime}`;
    nextStatusText = `오늘 ${schedule.closeTime}까지 원장 직접 접수 가능합니다.`;
  } else {
    // Current time is after closeMins
    status = 'CLOSED';
    statusBadgeText = '🔴 오늘 진료 마감';
    statusBadgeColor = 'bg-slate-600 text-white';
    statusBg = 'bg-slate-100 border-slate-200 text-slate-800';
    todayMessage = `오늘 [${dayName}] 진료는 마감되었습니다.`;
    timeRangeText = '진료 마감';
    
    // Determine next open day
    const nextDayIndex = (dayIndex + 1) % 7;
    const nextSchedule = CLINIC_SCHEDULE[nextDayIndex];
    if (nextDayIndex === 0) {
      nextStatusText = '내일(일요일)은 정기 휴진일입니다. 월요일 오전 09:00 개원합니다.';
    } else {
      nextStatusText = `다음 진료: 내일(${nextSchedule.dayName}) 오전 ${nextSchedule.openTime}부터`;
    }
  }

  return {
    status,
    statusBadgeText,
    statusBadgeColor,
    statusBg,
    todayMessage,
    timeRangeText,
    nextStatusText,
    currentTimeFormatted,
    dayName,
    isTodayOpen: status === 'OPEN' || status === 'CLOSING_SOON',
  };
}
