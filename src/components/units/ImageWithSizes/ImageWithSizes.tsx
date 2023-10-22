'use client';

import React from 'react';
import Image from 'next/image';
import { useTheme } from 'styled-components';
import { getImageSizes } from '@/lib/helpers/styling';

type PropsImage = {
  src: string;
  alt: string;
  quality?: number;
  sizes: {
    desktop?: number;
    tablet?: number;
    mobile?: number;
  };
};

const ImageWithSizes: React.FC<PropsImage> = (props) => {
  const { src, alt, quality, sizes } = props;
  const theme = useTheme();

  return (
    <Image
      src={src}
      alt={alt}
      quality={quality}
      fill
      sizes={getImageSizes(
        { desktop: sizes.desktop, tablet: sizes.tablet, mobile: sizes.mobile },
        theme.media
      )}
    />
  );
};

export default ImageWithSizes;
