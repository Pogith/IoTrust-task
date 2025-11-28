import { cn } from '@/lib/utils';

type Props = {
  src: string;
  alt: string;
  className?: string;
  pngSrc?: string;
  jpgSrc?: string;
};

function DAppImage({ className, src, jpgSrc, pngSrc, alt }: Props) {
  return (
    <picture>
      <source srcSet={src} type="image/webp" />
      <source srcSet={jpgSrc} type="image/jpeg" />
      <source srcSet={pngSrc} type="image/png" />

      <img
        src={src}
        alt={alt}
        className={cn(
          'w-12',
          'h-12',
          'rounded-lg',
          'object-contain',
          'bg-white',
          'shadow',
          className,
        )}
        loading="lazy"
      />
    </picture>
  );
}

export default DAppImage;
