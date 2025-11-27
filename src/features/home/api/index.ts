import { clientHttp } from '@/lib/axios';
import type { BannerData } from '@/types/discovery';
import { delay } from '@/utils/delay';

const APP_ENV = import.meta.env.VITE_APP_ENV;
const isDev = APP_ENV === 'dev';

const fetchMockBanners = async (): Promise<BannerData[]> => {
  await delay(2000);

  const response = await fetch('/mock-api/banners.json');

  const data: BannerData[] = await response.json();

  return data;
};

const fetchBanners = async (): Promise<BannerData[]> => {
  if (isDev) {
    return fetchMockBanners();
  }

  const response = await clientHttp.get<BannerData[]>({ path: '/banners' });

  return response.data;
};

export { fetchBanners };
