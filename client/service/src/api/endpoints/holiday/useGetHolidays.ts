// Hooks & Utils
import * as RestApi from '@api/api';
import { queryKeys, useQuery } from '@api/reactQuery';
import { apiUrls } from '@util/config'; // Typings
import { PromiseFnType } from '@api/reactQuery/typings/query';
import { PublicHoliday } from '@api/endpoints/holiday';
import { VariablesQueryKeyType } from '@api/reactQuery/typings/queryKeys';

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
