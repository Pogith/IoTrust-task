import { cn } from '@/lib/utils';
import type { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  className?: string;
}>;

function AppLayout({ children, className }: Props) {
  return <div className={cn('w-dvw', 'min-h-dvh', className)}>{children}</div>;
}

export default AppLayout;
