import { useTranslation } from 'react-i18next';
import type { DApp } from '@/types/discovery';

import { cn } from '@/lib/utils';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import DAppImage from './DAppImage';

type Props = {
  dapp: DApp | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

function DAppDetailSheet({ dapp, open, onOpenChange }: Props) {
  const { t } = useTranslation();

  const handleUrlNavigateButtonClick = (url?: string) => {
    if (!url) return;

    window.open(url, '_blank');
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="bottom"
        className={cn('flex', 'gap-5', 'p-7', 'h-150')}
      >
        <VisuallyHidden>
          <SheetHeader>
            <SheetTitle>{dapp?.title}</SheetTitle>
            <SheetDescription>{dapp?.description}</SheetDescription>
          </SheetHeader>
        </VisuallyHidden>

        <div className={cn('flex', 'flex-col', 'gap-2')}>
          <div className={cn('flex', 'gap-4', 'text-2xl', 'font-bold')}>
            <DAppImage src={dapp?.imageSrc ?? ''} alt={dapp?.title ?? ''} />
            <p>{dapp?.title}</p>
          </div>

          <p>{dapp?.url}</p>
        </div>

        <div className={cn('flex', 'flex-col', 'gap-3')}>
          <p className={cn('text-xl', 'font-bold')}>Description</p>
          <span className={cn('text-neutral-400')}>{dapp?.description}</span>
        </div>

        <SheetFooter className={cn('flex', 'justify-center', 'items-center')}>
          <Button
            type="button"
            className={cn(
              'w-65',
              'h-10',
              'bg-green-500',
              'rounded-3xl',
              'cursor-pointer',
            )}
            onClick={() => handleUrlNavigateButtonClick(dapp?.url)}
          >
            {t('go_to_dapp')}
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export default DAppDetailSheet;
