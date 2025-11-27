import { useQuery } from '@tanstack/react-query';

import { fetchBanners } from '../api';

const useBannersQuery = () => {
  return useQuery({
    queryKey: ['banners'],
    queryFn: fetchBanners,
  });
};

export default useBannersQuery;
