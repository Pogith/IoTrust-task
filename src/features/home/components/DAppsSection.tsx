/* eslint-disable react-hooks/incompatible-library */
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import { Fragment, useEffect, useRef } from 'react';

import { cn } from '@/lib/utils';
import { useVirtualizer } from '@tanstack/react-virtual';
import useDAppsQuery from '../hooks/useDAppsQuery';

import { Skeleton } from '@/components/ui/skeleton';
import { Separator } from '@/components/ui/separator';
import { convertImageSrc } from '@/utils/convertImageSrc';
import DAppImage from './DAppImage';

const DEFAULT_LANGUAGE = 'ko';

function DAppsSection() {
  const lang = i18next.language;
  const isKoLng = lang === DEFAULT_LANGUAGE;

  const { t } = useTranslation();

  const parentRef = useRef<HTMLDivElement>(null);

  const {
    data: dappsData,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useDAppsQuery();

  const allRows = dappsData ? dappsData.pages.flatMap((d) => d.rows) : [];
  const dapps = allRows.map((row) => {
    const imageSrc = convertImageSrc(row.imageSrc);
    const description = isKoLng ? row.description_ko : row.description_en;

    return {
      ...row,
      imageSrc,
      description,
    };
  });

  const rowVirtualizer = useVirtualizer({
    count: hasNextPage ? allRows.length + 1 : allRows.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 100,
    overscan: 5,
  });

  const [lastItem] = [...rowVirtualizer.getVirtualItems()].reverse();

  useEffect(() => {
    if (!lastItem) {
      return;
    }

    if (
      lastItem.index >= allRows.length - 1 &&
      hasNextPage &&
      !isFetchingNextPage
    ) {
      fetchNextPage();
    }
  }, [
    hasNextPage,
    fetchNextPage,
    allRows.length,
    isFetchingNextPage,
    lastItem,
  ]);

  return (
    <section className={cn('ml-4', 'mr-4')}>
      <h2 className={cn('text-lg', 'mb-1')}>{t('dapp_list_title')}</h2>

      <Separator />

      {isLoading && (
        <div className={cn('flex', 'flex-col', 'gap-5', 'py-4')}>
          {Array.from({ length: 4 }).map((_, index) => (
            <Skeleton
              key={index}
              className={cn('h-14', 'w-full', 'bg-gray-300/40')}
            />
          ))}
        </div>
      )}

      {!isLoading && dapps.length === 0 && (
        <p className={cn('text-gray-500', 'text-sm', 'py-10', 'text-center')}>
          서비스가 없습니다.
        </p>
      )}

      {!isLoading && dapps.length > 0 && (
        <div
          ref={parentRef}
          className={cn('h-100', 'overflow-auto', 'relative')}
        >
          <div
            className={cn('relative', 'w-full')}
            style={{ height: `${rowVirtualizer.getTotalSize()}px` }}
          >
            {rowVirtualizer.getVirtualItems().map((virtual) => {
              const item = dapps[virtual.index];

              const isLoaderRow = virtual.index > allRows.length - 1;

              return (
                <div
                  key={virtual.key}
                  className={cn('absolute', 'top-0', 'left-0', 'w-full')}
                  style={{ transform: `translateY(${virtual.start}px)` }}
                >
                  {isLoaderRow ? (
                    hasNextPage ? (
                      <Skeleton
                        className={cn('h-14', 'w-full', 'bg-gray-300/40')}
                      />
                    ) : null
                  ) : (
                    <Fragment key={item.id}>
                      <div
                        className={cn(
                          'flex',
                          'items-center',
                          'justify-between',
                          'py-4',
                          'cursor-pointer',
                        )}
                      >
                        <div
                          className={cn(
                            'flex',
                            'items-center',
                            'gap-4',
                            'flex-1',
                          )}
                        >
                          <DAppImage src={item.imageSrc} alt={item.title} />

                          <div
                            className={cn(
                              'flex',
                              'flex-col',
                              'overflow-hidden',
                              'max-w-70',
                            )}
                          >
                            <p className={cn('text-2xl', 'truncate')}>
                              {item.title}
                            </p>
                            <p
                              className={cn(
                                'text-sm',
                                'text-gray-500',
                                'truncate',
                              )}
                            >
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                      <Separator />
                    </Fragment>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}

export default DAppsSection;
