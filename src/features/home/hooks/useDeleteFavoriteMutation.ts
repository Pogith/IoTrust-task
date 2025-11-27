import type { FavoriteData } from '@/types/discovery';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const useDeleteFavoriteMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['deleteFavorites'],
    mutationFn: async (id: string) => id, // TODO: 실제 API 없으므로 추후에 교체 필요
    onMutate: (id) => {
      const prevFavorites = queryClient.getQueryData<FavoriteData[]>([
        'favorites',
      ]);

      if (!prevFavorites) return;

      queryClient.setQueryData<FavoriteData[]>(['favorites'], (prev) => {
        if (!prev) return;

        const filteredFavorites = prev.filter((item) => item.id !== id);

        return filteredFavorites;
      });

      return { prevFavorites };
    },
    onError: (_error, _variables, context) => {
      if (context?.prevFavorites) {
        queryClient.setQueryData(['favorites'], context.prevFavorites);
      }
    },
  });
};

export default useDeleteFavoriteMutation;
