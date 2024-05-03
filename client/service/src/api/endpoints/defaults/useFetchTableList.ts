// Hooks & Utils
import { queryKeys, useQuery } from '@api/reactQuery';
import * as RestApi from '@api/api';

// Typings
import { PromiseFnType } from '@api/reactQuery/typings/query';
import { ServerResponseDto } from '@api/endpoints/typings/endpoints';
import {
  ApiParamsType,
  ListDto,
  TableListParamsType,
} from '@api/endpoints/defaults/typings/defaults';

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
