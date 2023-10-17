'use client';

import React from 'react';
import Image from 'next/image';

import styles from './HeroImage.module.scss';

import useAllMediaQuery from '@/lib/hooks/useAllMediaQuery';

const HeroImage: React.FC = () => {
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
      // null
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
  } else {
    return (
      <div className={styles['mobile-hero']}>
        <div className={styles['mobile-image-wrapper']}>
          <Image
            src="/assets/images/profile_sammy_baek.png"
            alt="profile sammy baek"
            width={452}
            height={452}
            priority
            style={{ width: '120%', height: '120%' }}
          />
        </div>
        <div className={styles['mobile-title']}>
          <div className={styles['mobile-title__main']}>7년차 FullStack</div>
          <div className={styles['mobile-title__main']}>Computer Engineer</div>
        </div>
        <div className={styles['mobile-name']}>백 승 우</div>
      </div>
    );
  }
};

export default HeroImage;
