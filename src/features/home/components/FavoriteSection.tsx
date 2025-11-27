import { Bookmark } from 'lucide-react';

import { cn } from '@/lib/utils';
import useFavoritesQuery from '../hooks/useFavoritesQuery';
import type { FavoriteData } from '@/types/discovery';
import { convertImageSrc } from '@/utils/convertImageSrc';

import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Separator } from '@/components/ui/separator';

function FavoriteSection() {
  const { data: favoritesData, isLoading } = useFavoritesQuery();

  const favorites: FavoriteData[] = (favoritesData ?? []).map((favorite) => {
    const imageSrc = convertImageSrc(favorite.imageSrc);

    return {
      ...favorite,
      imageSrc,
    };
  });

  return (
    <section className={cn('ml-4', 'mr-4')}>
      <h2 className={cn('text-lg', 'mb-1')}>즐겨찾기</h2>

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
          <>
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
                  // onClick={() => setIsOpenDeleteDialog(true)}
                >
                  <Bookmark className={cn('w-9', 'h-9', 'text-gray-400')} />
                  삭제
                </Button>
              </div>
            </div>
            <Separator />
          </>
        ))}
    </section>
  );
}

export default FavoriteSection;
