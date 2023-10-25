import React from 'react';
import styled from 'styled-components';

export const StSectionIntroductionHeroWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 570px;
  overflow: hidden;
  clip-path: inset(0 0 0 0);
`;

export const StSectionIntroductionHeroFixer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  img {
    width: 100%;
    height: 100%;
    object-position: top;
    object-fit: cover;
  }
`;
