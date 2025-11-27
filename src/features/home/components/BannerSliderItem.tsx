import type { Banner } from '@/types/discovery';

import { Button } from '@/components/ui/button';
import { CarouselItem } from '@/components/ui/carousel';
import { cn } from '@/lib/utils';

type Props = Omit<Banner, 'id'> & {
  indexText?: string;
};

function BannerSlideItem({
  title,
  description,
  ctaText,
  imageSrc,
  link,
  indexText,
}: Props) {
  const handleLinkClick = () => {
    if (!link) return;

    window.open(link, '_blank');
  };

  return (
    <CarouselItem
      className={cn('relative', 'cursor-pointer')}
      onClick={handleLinkClick}
    >
      <img
        src={imageSrc}
        alt={`${title} 이미지`}
        className={cn('w-full', 'h-full')}
      />

      <div
        className={cn(
          'absolute',
          'top-8',
          'left-10',
          'flex',
          'flex-col',
          'gap-5',
        )}
      >
        {description && (
          <p className={cn('text-xl', 'text-white', 'whitespace-pre-line')}>
            {description}
          </p>
        )}

        {ctaText && (
          <Button
            onClick={(e) => {
              e.stopPropagation();
              handleLinkClick();
            }}
            type="button"
            className={cn(
              'w-fit',
              'bg-white',
              'text-black',
              'hover:bg-white/90',
              'cursor-pointer',
              'rounded-2xl',
              'text-lg',
            )}
          >
            {ctaText}
          </Button>
        )}
      </div>

      {indexText && (
        <span
          className={cn(
            'absolute',
            'right-4',
            'bottom-4',
            'text-xs',
            'text-white/70',
          )}
        >
          {indexText}
        </span>
      )}
    </CarouselItem>
  );
}

export default BannerSlideItem;
