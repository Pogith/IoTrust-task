import { Fragment, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Bookmark } from 'lucide-react';

import { cn } from '@/lib/utils';
import useFavoritesQuery from '../hooks/useFavoritesQuery';
import type { FavoriteData } from '@/types/discovery';
import { convertImageSrc } from '@/utils/convertImageSrc';

import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Separator } from '@/components/ui/separator';
import FavoriteDeleteDialog from './FavoriteDeleteDialog';
import useDeleteFavoriteMutation from '../hooks/useDeleteFavoriteMutation';

function FavoriteSection() {
  const { t } = useTranslation();

  const [selectedFavorite, setSelectedFavorite] = useState<FavoriteData | null>(
    null,
  );

  const { data: favoritesData, isLoading } = useFavoritesQuery();

  const { mutateAsync: deleteFavorite } = useDeleteFavoriteMutation();

  const favorites: FavoriteData[] = (favoritesData ?? []).map((favorite) => {
    const imageSrc = convertImageSrc(favorite.imageSrc);

    return {
      ...favorite,
      imageSrc,
    };
  });

  const handleDeleteButtonClick = (favorite: FavoriteData) => {
    setSelectedFavorite(favorite);
  };

  const handleDeleteDialogOpenChange = (open: boolean) => {
    if (!open) {
      setSelectedFavorite(null);
    }
  };

  const handleDeleteFavorite = async () => {
    if (!selectedFavorite) return;

    await deleteFavorite(selectedFavorite.id);

    setSelectedFavorite(null);
  };

  return (
    <section className={cn('ml-4', 'mr-4')}>
      <h2 className={cn('text-lg', 'mb-1')}>{t('dapp_favorite_title')}</h2>

      <Separator />

      {isLoading && (
        <div className={cn('flex', 'flex-col', 'gap-5', 'py-4')}>
          {Array.from({ length: 2 }).map((_, index) => (
            <Skeleton
              key={index}
              className={cn('h-14', 'w-full', 'bg-gray-300/40')}
            />
          ))}
        </div>
      )}

      {!isLoading && favorites.length === 0 && (
        <p className={cn('text-gray-500', 'text-sm', 'py-10', 'text-center')}>
          즐겨찾기된 서비스가 없습니다.
        </p>
      )}

      {!isLoading &&
        favorites.map((favorite) => (
          <Fragment key={favorite.id}>
            <div
              className={cn(
                'flex',
                'items-center',
                'justify-between',
                'py-4',
                'cursor-pointer',
              )}
            >
              <div className={cn('flex', 'items-center', 'gap-4', 'flex-1')}>
                <img
                  src={favorite.imageSrc}
                  alt={favorite.title}
                  className={cn(
                    'w-12',
                    'h-12',
                    'rounded-lg',
                    'object-contain',
                    'bg-white',
                    'shadow',
                  )}
                />

                <div
                  className={cn(
                    'flex',
                    'flex-col',
                    'overflow-hidden',
                    'max-w-68',
                  )}
                >
                  <p className={cn('text-2xl', 'truncate')}>{favorite.title}</p>
                  <p className={cn('text-sm', 'text-gray-500', 'truncate')}>
                    {favorite.link}
                  </p>
                </div>
              </div>

              <div
                className={cn(
                  'flex',
                  'flex-col',
                  'items-center',
                  'justify-center',
                  'w-12',
                  'gap-1',
                )}
              >
                <Button
                  className={cn(
                    'flex',
                    'flex-col',
                    'items-center',
                    'gap-1',
                    'p-0',
                    'hover:bg-transparent',
                    'hover:text-inherit',
                    'transition-none',
                    'cursor-pointer',
                    'text-neutral-500',
                  )}
                  variant="ghost"
                  onClick={() => handleDeleteButtonClick(favorite)}
                >
                  <Bookmark className={cn('w-9', 'h-9', 'text-gray-400')} />
                  {t('dapp_favorite_delete')}
                </Button>
              </div>
            </div>
            <Separator />
          </Fragment>
        ))}

      <FavoriteDeleteDialog
        open={!!selectedFavorite}
        onOpenChange={handleDeleteDialogOpenChange}
        onDeleteFavorite={handleDeleteFavorite}
      />
    </section>
  );
}

export default FavoriteSection;
