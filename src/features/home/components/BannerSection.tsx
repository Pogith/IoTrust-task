import i18next from 'i18next';

import type { Banner } from '@/types/discovery';
import { convertImageSrc } from '@/utils/convertImageSrc';
import useBannersQuery from '../hooks/useBannersQuery';

import BannerSlideItem from './BannerSliderItem';
import { Carousel, CarouselContent } from '@/components/ui/carousel';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';

const DEFAULT_LANGUAGE = 'ko';

function BannerSection() {
  const { data: bannersData, isLoading } = useBannersQuery();

  const lang = i18next.language;
  const isKoLng = lang === DEFAULT_LANGUAGE;

  const banners: Banner[] = (bannersData ?? []).map((banner) => {
    const imageSrc = convertImageSrc(banner.imageSrc);

    const description = isKoLng ? banner.description_ko : banner.description_en;
    const link = isKoLng ? banner.link_ko : banner.link_en;
    const ctaText = isKoLng ? banner.cta_ko : banner.cta_en;

    return {
      ...banner,
      imageSrc,
      link,
      description,
      ctaText,
    };
  });

  if (isLoading) {
    return (
      <section className={cn('w-full', 'h-full', 'relative')}>
        <Skeleton className={cn('w-full', 'min-h-45')} />

        <div
          className={cn(
            'absolute',
            'top-8',
            'left-7',
            'flex',
            'flex-col',
            'gap-5',
          )}
        >
          <Skeleton className={cn('h-14', 'w-66', 'bg-gray-300/40')} />
          <Skeleton className={cn('h-9', 'w-23.5', 'bg-gray-300/30')} />
        </div>
      </section>
    );
  }

  return (
    <section>
      <Carousel>
        <CarouselContent>
          {banners.map((banner, index) => (
            <BannerSlideItem
              key={banner.id}
              title={banner.title}
              imageSrc={banner.imageSrc}
              link={banner.link}
              description={banner.description}
              ctaText={banner.ctaText}
              indexText={`${index + 1} / ${banners.length}`}
            />
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}

export default BannerSection;
