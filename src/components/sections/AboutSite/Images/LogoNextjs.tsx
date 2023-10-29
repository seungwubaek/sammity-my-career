import React from 'react';

import ImageWithSizes from '@/components/units/ImageWithSizes';
import { StDivImageWrapper } from './LogoNextjs.styled';

type PropsLogoNextjs = {
  imageSrc: string;
};

export const LogoNextjs: React.FC<PropsLogoNextjs> = (props) => {
  const { imageSrc } = props;

  return (
    <StDivImageWrapper>
      <ImageWithSizes
        src={imageSrc}
        alt="Logo Next.js"
        mediaSizes={{ desktop: 250 }}
        quality={100}
      />
    </StDivImageWrapper>
  );
};
