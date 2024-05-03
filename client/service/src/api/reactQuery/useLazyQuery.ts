import { AxiosError } from 'axios';
import {
  useQuery as useQueryOrigin,
  UseQueryResult,
} from '@tanstack/react-query';

// Typings
import { UseQueryType } from '@api/reactQuery/typings/query';
import { useCallback, useState } from 'react';

export default function useLazyQuery<
  TQueryFnData = unknown,
  TData = TQueryFnData,
>({
  queryKey,
  queryFn,
  options = {},
}: UseQueryType<TQueryFnData, TData>): [
  () => void,
  UseQueryResult<unknown, unknown>,
] {
  const [enabled, setEnabled] = useState(false);

  const query = useQueryOrigin<TQueryFnData, AxiosError, TData>(
    queryKey,
    queryFn,
    options,
  );

  const trigger = useCallback(() => {
    if (!enabled) {
      setEnabled(true);
    }
  }, [queryFn, enabled]);

  return [trigger, query];
}
