import React from 'react';
import dynamic from 'next/dynamic';

import { StSectionHeroImage } from './HeroImage.styled';

const DynamicHeroImageByMedia = dynamic(() => import('./HeroImageByMedia'), {
  ssr: false,
});

const HeroImage: React.FC = () => {
  return (
    <StSectionHeroImage $wide>
      <DynamicHeroImageByMedia />
    </StSectionHeroImage>
  );
};

export default HeroImage;
