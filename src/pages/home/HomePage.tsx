import AppLayout from '@/components/AppLayout';
import BannerSection from '@/features/home/components/BannerSection';
import FavoriteSection from '@/features/home/components/FavoriteSection';
import { cn } from '@/lib/utils';

function HomePage() {
  return (
    <AppLayout className={cn('flex', 'flex-col', 'gap-5')}>
      <BannerSection />
      <FavoriteSection />
    </AppLayout>
  );
}

export default HomePage;
