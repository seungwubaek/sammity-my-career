import React from 'react';

import { pixelLightGrayBase64 } from '@/data/loading';

import ImageWithSizes from '@/components/units/ImageWithSizes';
import { StDivImageWrapper } from './LighthouseScore.styled';

type PropsLighthouseScore = {
  imageSrc: string;
};

export const LighthouseScore: React.FC<PropsLighthouseScore> = (props) => {
  const { imageSrc } = props;

  return (
    <StDivImageWrapper>
      <ImageWithSizes
        src={imageSrc}
        alt="Lighthouse Score"
        mediaSizes={{ desktop: 700 }}
        quality={100}
      />
    </StDivImageWrapper>
  );
};
