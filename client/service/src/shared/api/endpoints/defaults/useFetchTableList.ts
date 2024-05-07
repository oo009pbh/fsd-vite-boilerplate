// Hooks & Utils
import { queryKeys, useQuery } from '@shared/api/reactQuery';
import * as RestApi from '@shared/api/api';

// Typings
import { PromiseFnType } from '@shared/api/reactQuery/typings/query';
import { ServerResponseDto } from '@shared/api/endpoints/typings/endpoints';
import {
  ApiParamsType,
  ListDto,
  TableListParamsType,
} from '@shared/api/endpoints/defaults/typings/defaults';

const fetchTableList: PromiseFnType<
  ServerResponseDto<ListDto>,
  ApiParamsType
> = ({ apiUrl, apiParams }) => {
  return RestApi.get<ServerResponseDto<ListDto>>(apiUrl, apiParams);
};

export const useFetchTableList = ({
  name,
  apiUrl,
  apiParams = {},
  options = {},
}: TableListParamsType<ServerResponseDto<ListDto>>) => {
  const { searchType } = apiParams;
  if (typeof searchType === 'string') {
    Object.assign(apiParams, {
      searchType: [searchType],
    });
  }
  return useQuery({
    queryKey: queryKeys.defaults.tableList({
      name,
      apiParams,
    }),
    queryFn: () => fetchTableList({ apiUrl, apiParams }),
    options,
  });
};
