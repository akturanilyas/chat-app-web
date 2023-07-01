// Import moment.js
import moment, { DurationInputArg1, Moment, MomentInput } from 'moment';
import { DATE_FORMAT } from '../constants/dateTime.constant';

// Types
export type DateType = MomentInput;

export type DurationInputArgType = DurationInputArg1;

interface DateMathOperation {
  startDate?: DateType;
  count: number;
}

interface GetDateDiffParams {
  startDate: DateType;
  endDate: DateType;
  unitOfTime?: moment.unitOfTime.Diff;
}

// GetDays
export const getToday = (): Moment => moment();
export const getSubtractDays = (count: number): Moment => moment().subtract(count, 'days');

// Get Dates
export const getDate = (date: MomentInput): Date => moment(date).toDate();
export const getDuration = (millisecond: DurationInputArgType) => moment.duration(millisecond);

// Add Date
export const addDay = (params: DateMathOperation): Moment =>
  moment(params?.startDate || moment()).add(params.count, 'days');
export const addMonth = (params: DateMathOperation): Moment =>
  moment(params?.startDate || moment()).add(params.count, 'months');
export const addYear = (params: DateMathOperation): Moment =>
  moment(params?.startDate || moment()).add(params.count, 'years');

// Remove Date
export const subtractDay = (params: DateMathOperation): Moment =>
  moment(params?.startDate || moment()).subtract(params.count, 'days');
export const subtractWeek = (params: DateMathOperation): Moment =>
  moment(params?.startDate || moment()).subtract(params.count, 'week');
export const subtractMonth = (params: DateMathOperation): Moment =>
  moment(params?.startDate || moment()).subtract(params.count, 'months');
export const subtractYear = (params: DateMathOperation): Moment =>
  moment(params?.startDate || moment()).subtract(params.count, 'years');

// Formatted Dates
export const getFormattedDate = (date: DateType | string, format?: string): string =>
  moment(date).format(format || DATE_FORMAT);

export const getDateDiff = (params: GetDateDiffParams) => {
  const { startDate, endDate, unitOfTime } = params;

  return moment(endDate).diff(startDate, unitOfTime || 'days');
};

export const getDateDiffByMinute = ({ startDate, endDate }: { startDate: DateType; endDate: DateType }) => {
  const getTimeDiff = moment.duration(moment(endDate).diff(moment(startDate)));
  const getDiffMinutes = getTimeDiff.seconds() === 59 ? getTimeDiff.minutes() + 1 : getTimeDiff.minutes();

  return (
    getDiffMinutes
    + getTimeDiff.hours() * 60
    + getTimeDiff.days() * (60 * 24)
    + getTimeDiff.months() * (60 * 24 * 30)
    + getTimeDiff.years() * (60 * 24 * 365)
  );
};

// Get Lists
export const getYearsList = (count?: number) => {
  const max = new Date().getFullYear();
  const min = max - (count || 9);
  const years: number[] = [];

  for (let i = max; i >= min; i--) {
    years.push(i);
  }

  return years;
};

// Convert Days
export const convertToUnix = (date: DateType | string) => moment(date).unix();
export const convertToDate = (unixTimestamp: number): Moment => moment.unix(unixTimestamp);
