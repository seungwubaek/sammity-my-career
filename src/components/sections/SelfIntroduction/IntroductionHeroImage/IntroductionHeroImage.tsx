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
          sizes={{ desktop: 1920 }}
        />
      </StSectionIntroductionHeroFixer>
    </StSectionIntroductionHeroWrapper>
  );
};

export default IntroductionHeroImage;
