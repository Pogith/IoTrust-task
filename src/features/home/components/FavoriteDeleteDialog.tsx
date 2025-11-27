import { useTranslation } from 'react-i18next';

import { cn } from '@/lib/utils';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onDeleteFavorite: () => void;
};

function FavoriteDeleteDialog({ open, onOpenChange, onDeleteFavorite }: Props) {
  const { t } = useTranslation();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={cn('gap-0')}>
        <DialogHeader>
          <DialogTitle className={cn('text-xl', 'font-normal')}>
            {t('dapp_favorite_title')} {t('dapp_favorite_delete')}
          </DialogTitle>

          <div
            className={cn(
              'w-full',
              'border-t-3',
              'border-dotted',
              'border-gray-300',
              'mt-2',
            )}
          />

          <DialogDescription
            className={cn('text-base', 'text-gray-700', 'leading-relaxed')}
          >
            {t('dapp_favorite_delete_confirm')}
          </DialogDescription>
        </DialogHeader>

        <DialogFooter
          className={cn(
            'flex',
            'flex-row',
            'justify-between',
            'w-full',
            'mt-6',
            'gap-3',
          )}
        >
          <Button
            variant="outline"
            className={cn(
              'flex-1',
              'h-10',
              'rounded-lg',
              'text-base',
              'border-gray-300',
            )}
            onClick={() => onOpenChange(false)}
          >
            {t('button_cancel')}
          </Button>

          <Button
            variant="outline"
            className={cn(
              'flex-1',
              'h-10',
              'rounded-lg',
              'text-base',
              'border-gray-300',
            )}
            onClick={onDeleteFavorite}
          >
            {t('button_confirm')}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default FavoriteDeleteDialog;
