'use client';

import React from 'react';

import {
  StSectionIntroductionHeroFixer,
  StSectionIntroductionHeroWrapper,
} from './IntroductionHeroImage.styled';
import ImageWithSizes from '@/components/units/ImageWithSizes';

type PropsIntroductionHeroImage = {
  imageSrc: string;
};

const IntroductionHeroImage: React.FC<PropsIntroductionHeroImage> = (props) => {
  const { imageSrc } = props;
  return (
    <StSectionIntroductionHeroWrapper>
      <StSectionIntroductionHeroFixer>
        <ImageWithSizes
          src={imageSrc}
          alt="Self Introduction Hero Image"
          mediaSizes={{ desktop: 1920 }}
          priority
        />
      </StSectionIntroductionHeroFixer>
    </StSectionIntroductionHeroWrapper>
  );
};

export default IntroductionHeroImage;
