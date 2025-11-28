export type BannerData = {
  id: string;
  title: string;
  imageSrc: string;
  description_ko?: string;
  description_en?: string;
  link_ko: string;
  link_en: string;
  cta_ko?: string;
  cta_en?: string;
};

export type Banner = {
  id: string;
  title: string;
  imageSrc: string;
  link: string;
  description?: string;
  ctaText?: string;
};

export type FavoriteData = {
  id: string;
  title: string;
  imageSrc: string;
  link: string;
};

export type DAppsData = {
  id: number;
  title: string;
  imageSrc: string;
  url: string;
  description_ko?: string;
  description_en?: string;
  note?: string;
  supported_network?: string;
};

export type DApp = {
  id: number;
  title: string;
  imageSrc: string;
  description?: string;
  url: string;
  pngSrc?: string;
  jpgSrc?: string;
  note?: string;
  supported_network?: string;
};
