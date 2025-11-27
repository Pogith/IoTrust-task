import { useQuery } from '@tanstack/react-query';

import { fetchFavorites } from '../api';

const useFavoritesQuery = () => {
  return useQuery({
    queryKey: ['favorites'],
    queryFn: fetchFavorites,
  });
};

export default useFavoritesQuery;
