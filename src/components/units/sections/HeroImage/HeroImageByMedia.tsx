'use client';

import Image from 'next/image';

import useAllMediaQuery from '@/lib/hooks/useAllMediaQuery';
import {
  StDivMobileHero,
  StDivMobileImageWrapper,
  StDivMobileName,
  StDivMobileTitle,
  StDivMobileTitleMain,
} from './HeroImageByMedia.styled';

const HeroImageByMedia = () => {
  const { isDesktop, isTablet, isMobile } = useAllMediaQuery();

  const heroWidth = isDesktop ? 1920 : 1024;
  const heroHeight = isDesktop ? 648 : 345;

  if (isDesktop) {
    return (
      <Image
        src="/assets/images/main_hero.png"
        alt="main hero"
        width={heroWidth}
        height={heroHeight}
        style={{
          display: 'block',
          width: '100%',
          height: 'auto',
          marginTop: isTablet ? '30px' : 0,
        }}
        quality={100}
        priority
      />
    );
  } else if (isTablet) {
    return (
      <Image
        src="/assets/images/main_hero.png"
        alt="main hero"
        width={heroWidth}
        height={heroHeight}
        style={{
          display: 'block',
          width: '100%',
          height: 'auto',
        }}
        quality={100}
        priority
      />
    );
  } else if (isMobile) {
    return (
      <StDivMobileHero>
        <StDivMobileImageWrapper>
          <Image
            src="/assets/images/profile_sammy_baek.png"
            alt="profile sammy baek"
            width={452}
            height={452}
            priority
            style={{ width: '120%', height: '120%' }}
          />
        </StDivMobileImageWrapper>
        <StDivMobileTitle>
          <StDivMobileTitleMain>7년차 FullStack</StDivMobileTitleMain>
          <StDivMobileTitleMain>Computer Engineer</StDivMobileTitleMain>
        </StDivMobileTitle>
        <StDivMobileName>백 승 우</StDivMobileName>
      </StDivMobileHero>
    );
  } else {
    return null;
  }
};

export default HeroImageByMedia;
