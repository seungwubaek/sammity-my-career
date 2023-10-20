import React from 'react';
import Image from 'next/image';

import { StDivLogoWrapper, StSpanLogoSub } from './Logo.styled';

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
      <Image
        src={logoSrc}
        alt={`sammity logo (${colorScheme} color)`}
        width="236"
        height="59"
        style={{ width: '120px', height: 'auto' }}
        quality={100}
        priority
      />
      <StSpanLogoSub>Career</StSpanLogoSub>
    </StDivLogoWrapper>
  );
};

export default SiteLogo;
