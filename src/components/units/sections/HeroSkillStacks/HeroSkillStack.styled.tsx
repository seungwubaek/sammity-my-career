'use client';

import React from 'react';
import styled, { css } from 'styled-components';

import { StSection } from '@/components/units/sections/Section/Section.styled';

export const StSectionHeroSkillStacks = styled(StSection)`
  width: 100%;
  // 각 media 별로 Skill Card들이 가장 빽빽하게 밀집했을 때,
  // Skill Name이 두줄로 표시되는 경우의 height를 측정한 것
  height: 125px;

  ${({ theme }) => css`
    // prettier-ignore
    @media (min-width: ${theme.media.tabletMinWidth}px) and
            (max-width: ${theme.media.tabletMaxWidth}px) {
      height: 110px;
    }

    @media (max-width: ${theme.media.mobileMaxWidth}px) {
      height: 100px;
    }
  `}
`;
