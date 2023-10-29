import React from 'react';

import ImageWithSizes from '@/components/units/ImageWithSizes';
import { StDivImageWrapper } from './SiteArchitecture.styled';

type PropsSiteArchitecture = {
  imageSrc: string;
};

export const SiteArchitecture: React.FC<PropsSiteArchitecture> = (props) => {
  const { imageSrc } = props;

  return (
    <StDivImageWrapper>
      <ImageWithSizes
        src={imageSrc}
        alt="Site Architecture"
        mediaSizes={{ desktop: 800 }}
        quality={100}
      />
    </StDivImageWrapper>
  );
};
