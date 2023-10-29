import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import clsx from 'clsx';

import { getAssetUrl } from '@/lib/utils/url';

import {
  StDivHeroImageWrapper,
  StDivMobileHero,
  StDivMobileImageWrapper,
  StDivMobileName,
  StDivMobileTitle,
  StDivMobileTitleMain,
  StSectionHeroImage,
} from './HeroImage.styled';
import ImageWithSizes from '../../units/ImageWithSizes';

type PropsHeroImage = {
  locale: string;
};

const HeroImage: React.FC<PropsHeroImage> = (props) => {
  const { locale } = props;

  const t = useTranslations();
  const srcHero = getAssetUrl(`main_hero_${locale}.png`).toString();
  const srcMobile = getAssetUrl('profile_sammy_baek.png').toString();

  return (
    <StSectionHeroImage $wide>
      <StDivHeroImageWrapper className={clsx('responsive-only-desktop-tablet')}>
        <ImageWithSizes
          src={srcHero}
          alt="main hero"
          mediaSizes={{ desktop: 1920, tablet: 1024, mobile: 700 }}
          quality={100}
          priority
        />
      </StDivHeroImageWrapper>
      <div className={clsx('responsive-only-mobile')}>
        <StDivMobileHero>
          <StDivMobileImageWrapper>
            <Image
              src={srcMobile}
              alt="profile sammy baek"
              width={240}
              height={240}
              priority
              style={{ width: '120%', height: '120%' }}
            />
          </StDivMobileImageWrapper>
          <StDivMobileTitle>
            <StDivMobileTitleMain>FullStack</StDivMobileTitleMain>
            <StDivMobileTitleMain>Computer Engineer</StDivMobileTitleMain>
          </StDivMobileTitle>
          <StDivMobileName>{t('HeroImage.mobileName')}</StDivMobileName>
        </StDivMobileHero>
      </div>
    </StSectionHeroImage>
  );
};

export default HeroImage;
