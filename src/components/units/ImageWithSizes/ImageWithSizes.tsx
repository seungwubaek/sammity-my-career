'use client';

import React from 'react';
import Image from 'next/image';
import { useTheme } from 'styled-components';
import { getImageSizes } from '@/lib/helpers/styling';

type PropsImage = React.ComponentProps<typeof Image> & {
  mediaSizes: {
    desktop?: number;
    tablet?: number;
    mobile?: number;
  };
};

const ImageWithSizes: React.FC<PropsImage> = (props) => {
  const { mediaSizes, fill = true, priority = false, ...rest } = props;
  const theme = useTheme();

  return (
    <Image
      {...rest}
      alt={rest.alt || ''} // 원래는 안써도 됨 but for suppress eslint alt-text 규칙 경고
      fill={fill}
      sizes={getImageSizes(
        {
          desktop: mediaSizes.desktop,
          tablet: mediaSizes.tablet,
          mobile: mediaSizes.mobile,
        },
        theme.media
      )}
      priority={priority}
    />
  );
};

export default ImageWithSizes;
