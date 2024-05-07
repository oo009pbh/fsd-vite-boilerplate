import { QueryClient } from '@tanstack/react-query';
import { CACHE_TIME, STALE_TIME } from '@util/const';

/**
 * @description QueryClient 객체 생성
 */
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: CACHE_TIME,
      staleTime: STALE_TIME,
    },
  },
});
