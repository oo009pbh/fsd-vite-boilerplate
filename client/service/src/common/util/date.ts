/**
 * @providesModule DateUtilService
 */
import dayjs from 'dayjs';
// eslint-disable-next-line import/extensions
import 'dayjs/locale/ko.js';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import IsBetween from 'dayjs/plugin/isBetween';

import 'intl';
import 'intl/locale-data/jsonp/ko';

import { DateUnitType, DateValueType } from '@typings/util/date';
import { DateArrayType, ParamsType } from '@typings/commonUseType';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(localizedFormat);
dayjs.extend(IsBetween);

/**
 * @description 서비스를 이용하는 사용자의 타임존
 * @type {string}
 */
const currentTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

/**
 * @description 서비스를 이용하는 사용자의 locale
 * @type {string}
 */
export const currentLocale = Intl.DateTimeFormat().resolvedOptions().locale;

/**
 * @description datePicker 라이브러리 로케일에 사용되는 값을 반환해주는 함수 다른 언어 추가가 필요하다면 case 추가할 것
 * @param {string} locale
 * @returns {keyof DateLocaleType}
 */
export const getCalendarLocale = (locale: string): 'ko' | 'enUS' => {
  switch (locale) {
    case 'ko':
    case 'ko-KR':
      return 'ko';
    case 'en':
    case 'en-US':
      return 'enUS';
    default:
      return 'enUS';
  }
};

/**
 * @description 날짜 형식을 서식화 해주는 함수
 *
 * @params  {string} fmt - 날짜 출력 format
 * @params  {timestamp} date - 포맷팅하려는 date
 * @params  {timestamp} [tz] - 적용하려는 timezone
 * @returns {string} date
 */
export const format = (format: string, timestamp: DateValueType) => {
  dayjs.locale(currentLocale || 'ko');
  const time = dayjs(timestamp).tz(currentTimeZone || 'Asia/Seoul');

  switch (format) {
    case 'LLLL':
      return time.format('LLLL'); // 2023년 2월 20일 월요일 오전 12:19
    case 'LLL':
      return time.format('LLL'); // 2023년 2월 20일 오전 12:20
    case 'LTS':
      return time.format('LTS'); // 오전 12:19:47
    case 'LT':
      return time.format('LT'); // 오전 12:19
    case 'L':
      return time.format('L'); // 2023.02.20.
    case 'llll':
      return time.format('llll'); // 2023년 2월 20일 월요일 오전 12:19
    case 'lll':
      return time.format('lll'); // 2023년 2월 20일 오전 12:24
    case 'll':
      return time.format('ll'); // 2023년 2월 20일
    case 'l':
      return time.format('l'); // 2023.02.20.
    case 'dash':
      return time.format('YYYY-MM-DD'); // 2023-02-20
    case 'point':
      return time.format('YYYY.MM.DD'); // 2023.02.20
    case 'pointShort':
      return time.format('YY.MM.DD'); // 23.02.20
    case 'time':
      return time.format('YYYY.MM.DD HH:mm'); // 2023.02.20 00:21
    case 'fullTime':
      return time.format('YYYY-MM-DD HH:mm:ss'); // 2023-02-20 00:22:07
    case 'longNumber':
      return time.format('YYYYMMDD'); // 20230220
    case 'number':
      return time.format('YYMMDD'); // 230220
    case 'year':
      return time.format('YYYY'); // 2023
    default:
      return time.format(format);
  }
};

/**
 * @description UTC 시간대로 date 변경하는 함수
 * @param {string} value : 변환할 string 값
 * @return {string}
 */
export const convertUTCDate = (value: DateValueType) => {
  return dayjs(value).toISOString();
};

/**
 * @description date 객체로 변경해주는 함수
 * @param {DateValueType} value : 변환할 date 객체
 * @return {string}
 */
export const convertDate = (value: DateValueType) => {
  return dayjs(value).toDate();
};

/**
 * @description dayjs 객체로 변경해주는 함수
 * @param {DateValueType} value : 변환할 date 객체
 * @return {dayjs}
 */
export const generateDayJs = () => {
  dayjs.locale(currentLocale || 'en');
  return dayjs();
};

/**
 * @description 문자열이 date 형식인지 판별
 * @param {string} value : 확인할 문자열
 * @param {string} format : 확인할 형식
 * @return {string}
 */
export const isValidDateString = (value: string, format?: string) => {
  // console.log(value);
  // console.log(dayjs(value, format || 'YYYY-MM-DD', true).isValid());
  return dayjs(value, format || 'YYYY-MM-DD', true).isValid();
};

export const formatDate = (
  inputDate: string,
  separator: string = '-',
  format: string = 'YYYY-MM-DD',
): string => {
  // 날짜 변환 로직 (입력 형식에 따라 조정 필요)
  let formattedDate = inputDate.replace(/[^0-9]/g, ''); // 숫자가 아닌 문자 제거
  const formatChunk = format.split(separator);
  const separatorFirstPoint = formatChunk[0]?.length || 4;
  const separatorSecondPoint =
    separatorFirstPoint + (formatChunk[1]?.length || 2);
  // const separatorPositionFirst =
  if (formattedDate.length > 8) {
    formattedDate = formattedDate.slice(0, 8); // 최대 길이 초과 시 자르기
  }

  // YYYYMMDD 형식으로 재구성
  if (formattedDate.length >= separatorFirstPoint) {
    formattedDate =
      `${formattedDate.slice(0, separatorFirstPoint)}` +
      `${formattedDate.length > separatorFirstPoint ? `${separator}${formattedDate.slice(separatorFirstPoint, separatorSecondPoint)}` : ''}` +
      `${formattedDate.length > separatorSecondPoint ? `${separator}${formattedDate.slice(separatorSecondPoint, 8)}` : ''}`;
  }
  return formattedDate;
};

/**
 * @description API 호출 시, 파라미터 값의 date 타입을 UTC 기준으로 변환해주는 함수
 * @param params
 * @return {Object}
 */
export const convertDateForParams = (params: ParamsType): ParamsType => {
  const regExp1 = /(\d{4})-(\d{2})-(\d{2})/;
  const regExp2 = /(\d{4}).(\d{2}).(\d{2}) (\d{2}):(\d{2})/;

  const apiParams = { ...params };
  Object.entries(apiParams).forEach(([key, value]) => {
    if (
      dayjs(value).isValid() &&
      (regExp1.test(value) || regExp2.test(value))
    ) {
      apiParams[key] = convertUTCDate(value);
    }
  });
  return apiParams;
};
/**
 * @description 날짜 및 시간을 빼주는 함수
 *
 * @params {timestamp} date - 기준이 되는 시간
 * @params {number} days - 빼려는 시간
 * @params {string} unit - 빼려는 시간의 단위 ('years', 'months', 'days', 'hours', 'minutes', 'seconds', 'milliseconds')
 *
 * @returns {string} date
 */
export const subtractDate = (
  date: DateValueType,
  days: number,
  unit: DateUnitType = 'day',
) => {
  return dayjs(date).subtract(days, unit);
};
/**
 * @description 날짜 및 시간을 더하는 함수
 *
 * @params {timestamp} date - 기준이 되는 시간
 * @params {number} days - 빼려는 시간
 * @params {string} unit - 빼려는 시간의 단위 ('years', 'months', 'days', 'hours', 'minutes', 'seconds', 'milliseconds')
 *
 * @returns {string} date
 */
export const addDate = (
  date: DateValueType,
  days: number,
  unit: DateUnitType = 'day',
) => {
  return dayjs(date).add(days, unit);
};

export const getWeekDates = (date: string) => {
  const weekStart = dayjs(date).startOf('week');
  const weekStartUtc = dayjs(weekStart).locale('en');
  const days = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i <= 6; i++) {
    days.push({
      date: weekStartUtc.add(i, 'day'),
      day: weekStartUtc.add(i, 'day').format('DD'),
      dayOfWeek: weekStartUtc.add(i, 'day').format('ddd'),
    });
  }

  return days;
};

/**
 * D-Day를 계산하는 함수
 * @param {string} targetDate - 목표 날짜
 * @param {string} [baseDate] - 기준 날짜 , 기본값은 오늘 날짜
 * @return {number} 기준 날짜부터 목표 날짜까지 남은 일수
 */
export const calculateDDay = (
  targetDate: DateValueType,
  baseDate: DateValueType = dayjs().startOf('day'),
) => {
  const base = dayjs(baseDate);
  const target = dayjs(targetDate);
  return target.diff(base, 'day');
};

/**
 * D-Day 문자열을 생성하는 함수
 * @param {number} dDayNumber - 날짜 사이에 일수 차이
 * @return {string} "D-xx" 또는 "D+xx" 형식의 문자열
 */
export const formatDDayString = (dDayNumber: number) => {
  if (dDayNumber < 0) {
    return `D+${Math.abs(dDayNumber)}`;
  }
  if (dDayNumber > 0) {
    return `D-${dDayNumber}`;
  }
  return 'D-Day';
};

/**
 * @description 현재 날짜와, 시작/종료 날짜를 비교해서 진행상태를 반환해주는 함수
 *
 * @params {현재 날짜} date -
 * @params {시작 날짜} date -
 * @params {종료 날짜} date -
 *
 * @returns {string} date
 */

export const checkEventStatus = (
  targetDate: string,
  startDate: string,
  endDate: string,
): string => {
  const now = dayjs(targetDate);
  const start = dayjs(startDate);
  const end = dayjs(endDate);

  if (now.isBefore(start)) {
    return '진행 예정';
  }
  if (now.isAfter(end)) {
    return '마감';
  }
  return '진행 중';
};

/**
 * @description 주어진 날짜의 시작 시간을 UTC 형식으로 반환하는 함수
 * @param {DateValueType} value - 변환할 날짜 값
 * @return {string} - UTC 형식의 시작 시간
 */
export const startOfDateUTC = (value: DateValueType): string => {
  return dayjs(value).startOf('day').toISOString();
};

/**
 * @description 주어진 날짜의 끝 시간을 UTC 형식으로 반환하는 함수
 * @param {DateValueType} value - 변환할 날짜 값
 * @return {string} - UTC 형식의 끝 시간
 */
export const endOfDateUTC = (value: DateValueType): string => {
  return dayjs(value).endOf('day').toISOString();
};

/**
 * @description 주어진 날짜로부터 만 나이를 계산하는 함수
 * @param {DateValueType} value - 변환할 날짜 값
 * @param {string} format - 날짜 포맷 (기본값 YYYY-MM-DD)
 * @return {number} - 만 나이
 */
export const getAge = (
  value: DateValueType,
  format: string = 'YYYY-MM-DD',
): number => {
  const today = dayjs(Date.now());
  const inputDate = dayjs(value, format);
  return today.diff(inputDate, 'year');
};

/**
 * @description 두 년도 간 일자를 반환해주는 함수
 * @param startYear
 * @param endYear
 */
export function generateDatesBetweenYears(startYear: number, endYear: number) {
  const result: DateArrayType = {};

  let currentDate = dayjs(`${startYear}-01-01`);
  const endDate = dayjs(`${endYear}-12-31`);

  while (currentDate.isBefore(endDate) || currentDate.isSame(endDate, 'day')) {
    const monthKey = currentDate.format('YYYY-MM'); // '2024-01', '2024-02', ...
    if (!result[monthKey]) {
      result[monthKey] = [];
    }

    result[monthKey].push({
      date: currentDate.format('YYYY-MM-DD'), // '2024-01-01', '2024-01-02', ...
    });

    // 다음 날짜로 이동
    currentDate = currentDate.add(1, 'day');
  }

  return result;
}

export const isBetween = (
  currentDay: string,
  startDate: string,
  endDate: string,
) => {
  return dayjs(currentDay).isBetween(startDate, endDate, 'day', '[]');
};
