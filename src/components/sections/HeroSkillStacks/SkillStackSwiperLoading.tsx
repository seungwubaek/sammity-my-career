'use client';

import React from 'react';
import styled, { css, useTheme } from 'styled-components';
import clsx from 'clsx';

import { generateCssByMedia } from '@/lib/helpers/styling';

type PropsSkillStackSwiperRow = {
  mediaType?: 'mobile' | 'tablet' | 'desktop';
  numSlides: number;
};

const StDivSwiperLoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const StDivSkillStackRowWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const StDivSkillCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StDivSkillLogoWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.lightBorder};
  border-radius: 15px;
  aspect-ratio: 1/1;
  width: ${({ theme }) => theme.layout.heroSkillStacksLogoWidth.desktop};

  ${generateCssByMedia(
    css`
      width: ${({ theme }) => theme.layout.heroSkillStacksLogoWidth.tablet};
    `,
    ['tablet']
  )}

  ${generateCssByMedia(
    css`
      width: ${({ theme }) => theme.layout.heroSkillStacksLogoWidth.mobile};
    `,
    ['mobile']
  )}
`;

const StDivSkillName = styled.div`
  background-color: ${({ theme }) => theme.color.border};
  width: 100%;
  min-height: 20px;
  margin-top: 10px;
  border-radius: 7px;
  background-color: ${({ theme }) => theme.color.border};
`;

const SkillStackRowByMedia: React.FC<PropsSkillStackSwiperRow> = (props) => {
  const { mediaType, numSlides } = props;

  return (
    <StDivSkillStackRowWrapper
      className={clsx(
        { 'responsive-only-mobile': mediaType === 'mobile' },
        { 'responsive-only-tablet': mediaType === 'tablet' },
        { 'responsive-only-desktop': mediaType === 'desktop' }
      )}
    >
      {Array.from({ length: numSlides }).map((_, index) => {
        return (
          <StDivSkillCard key={index}>
            <StDivSkillLogoWrapper />
            <StDivSkillName />
          </StDivSkillCard>
        );
      })}
    </StDivSkillStackRowWrapper>
  );
};

const SkillStackSwiperLoading: React.FC = () => {
  const theme = useTheme();

  const numSwiperSlidesRef = React.useRef({
    mobile: theme.layout.heroSkillStacksNumOfSkillPerRow.mobile,
    tablet: theme.layout.heroSkillStacksNumOfSkillPerRow.tablet,
    desktop: theme.layout.heroSkillStacksNumOfSkillPerRow.desktop,
  });

  return (
    <StDivSwiperLoadingWrapper>
      <SkillStackRowByMedia
        mediaType="mobile"
        numSlides={numSwiperSlidesRef.current.mobile}
      />
      <SkillStackRowByMedia
        mediaType="tablet"
        numSlides={numSwiperSlidesRef.current.tablet}
      />
      <SkillStackRowByMedia
        mediaType="desktop"
        numSlides={numSwiperSlidesRef.current.desktop}
      />
    </StDivSwiperLoadingWrapper>
  );
};

export default SkillStackSwiperLoading;
