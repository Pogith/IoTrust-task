import { clientHttp } from '@/lib/axios';
import type { BannerData, DAppsData, FavoriteData } from '@/types/discovery';
import { delay } from '@/utils/delay';
import { mockDApps } from '@/mocks/mockDApps';

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

const fetchMockFavorites = async () => {
  await delay(2000);

  const response = await fetch('/mock-api/favorites.json');

  const data: FavoriteData[] = await response.json();

  return data;
};

const fetchFavorites = async () => {
  if (isDev) {
    return fetchMockFavorites();
  }

  const response = await clientHttp.get<FavoriteData[]>({ path: '/favorites' });

  return response.data;
};

const fetchMockDApps = async (
  limit: number,
  page: number,
): Promise<{ rows: DAppsData[]; nextPage: number | null }> => {
  const start = page * limit;
  const end = start + limit;

  // NOTE: mockDApps 반복해서 1000개로 확장
  const repeatedDApps = Array.from({ length: 250 }).flatMap(() => mockDApps);

  // NOTE: 이번 page에 해당하는 실제 rows 구하기
  const selectedDApps = repeatedDApps.slice(start, end);

  const rows = selectedDApps.map((item, i) => {
    const id = start + i;
    return {
      ...item,
      id,
    };
  });

  await delay(500);

  const hasMore = page < 1001;

  return {
    rows,
    nextPage: hasMore ? page + 1 : null,
  };
};

export { fetchBanners, fetchFavorites, fetchMockDApps };
