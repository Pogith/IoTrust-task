import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchMockDApps } from '../api';

const useDAppsQuery = () => {
  return useInfiniteQuery({
    queryKey: ['DApps'],
    queryFn: ({ pageParam }) => fetchMockDApps(10, pageParam),
    getNextPageParam: (lastGroup) => lastGroup.nextPage,
    initialPageParam: 0,
  });
};

export default useDAppsQuery;
