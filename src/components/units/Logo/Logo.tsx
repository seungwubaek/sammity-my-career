import React from 'react';

import { getAssetUrl } from '@/lib/utils/url';

import { StDivLogoWrapper, StImageLogo, StSpanLogoSub } from './Logo.styled';

type PropsSiteLogo = {
  colorScheme: 'black' | 'white';
};

const SiteLogo: React.FC<PropsSiteLogo> = ({ colorScheme }) => {
  const logoSrc =
    colorScheme === 'black'
      ? '/assets/images/sammity_logo.png'
      : '/assets/images/sammity_logo_white.png';

  return (
    <StDivLogoWrapper>
      <StImageLogo
        src={getAssetUrl(logoSrc).toString()}
        alt={`sammity logo (${colorScheme} color)`}
        width="236"
        height="59"
        quality={100}
        priority
      />
      <StSpanLogoSub>Career</StSpanLogoSub>
    </StDivLogoWrapper>
  );
};

export default SiteLogo;
