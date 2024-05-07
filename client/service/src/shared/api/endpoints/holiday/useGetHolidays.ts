// Hooks & Utils
import * as RestApi from '@shared/api/api';
import { queryKeys, useQuery } from '@shared/api/reactQuery';
import { apiUrls } from '@util/config'; // Typings
import { PromiseFnType } from '@shared/api/reactQuery/typings/query';
import { PublicHoliday } from '@shared/api/endpoints/holiday/index';
import { VariablesQueryKeyType } from '@shared/api/reactQuery/typings/queryKeys';

const getHolidayList: PromiseFnType<
  PublicHoliday[],
  VariablesQueryKeyType
> = async () => {
  const currentYearHolidays = await RestApi.get<PublicHoliday[]>(
    apiUrls.holiday.holidayList,
    {
      year: 2024,
      countryCode: 'kr',
    },
  );
  const nextYearHolidays = await RestApi.get<PublicHoliday[]>(
    apiUrls.holiday.holidayList,
    {
      year: 2025,
      countryCode: 'kr',
    },
  );

  return currentYearHolidays.concat(nextYearHolidays);
};

export const useGetHolidays = () => {
  return useQuery({
    queryKey: queryKeys.holiday.list(),
    queryFn: getHolidayList,
  });
};
