import React from 'react';

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
        sizes={{ desktop: 450 }}
        quality={100}
      />
    </StDivImageWrapper>
  );
};
