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
