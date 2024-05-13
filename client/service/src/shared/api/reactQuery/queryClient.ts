import { QueryClient } from '@tanstack/react-query';
import { Const } from '@shared';

/**
 * @description QueryClient 객체 생성
 */
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: Const.CACHE_TIME,
      staleTime: Const.STALE_TIME,
    },
  },
});
