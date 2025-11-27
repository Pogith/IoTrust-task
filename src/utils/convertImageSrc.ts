const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL;

export const convertImageSrc = (path: string) => {
  if (!path) return '';

  return `${IMAGE_BASE_URL}${path}`;
};
