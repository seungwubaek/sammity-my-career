'use client';

// Swiper는 아직 Next.js SSR을 지원하지 않는다.
// Swiper에서 공식적으로 React를 위해 추천하는 web component 방식은 잘 작동하지 않는다.
// Type Definition은 `types/swiper.d.ts`를 만들고 web component를 위한 type을 정의하는 것으로 해결했었다
// (Ref. https://github.com/nolimits4web/swiper/issues/6466#issuecomment-1478486837)
// 하지만 Next.js 때문인지 `register()` 메소드가 작동하지 않는다.
// 따라서 web component 방식으로 구현하지 못하고
// 아래 링크에 따라 기존의 React Component 방식을 그대로 사용하여 Client Side에서 렌더링하도록 한다
// https://swiperjs.com/react

import React from 'react';
import { Virtual, Autoplay } from 'swiper/modules';
import clsx from 'clsx';

import skills from '@/data/skills';
import useAllMediaQuery from '@/lib/hooks/useAllMediaQuery';

import 'swiper/css';
import 'swiper/css/virtual';
import 'swiper/css/autoplay';
import {
  StDivSkillLogoWrapper,
  StDivSkillName,
  StImageSkillLogo,
  StSwiper,
  StSwiperSlideSkillCard,
} from './SkillStackSwiper.styled';

const SkillStackSwiper: React.FC = () => {
  const swiperRef = React.useRef(null);
  const { isTablet, isMobile } = useAllMediaQuery();

  React.useEffect(() => {
    if (!isTablet || !isMobile) {
      console.log('Num of skills: ', skills.length);
    }
  }, [isTablet, isMobile]);

  // TODO: skills 개수가 충분치 않으면 autoplay 작동이 이상해짐
  // 필요한 개수가 어떻게 계산되는지 알 수 없음
  // 그럴때 autoplay를 off 하는 코드 필요
  return (
    <StSwiper
      ref={swiperRef}
      className={clsx('unselectable')}
      modules={[Virtual, Autoplay]}
      virtual={true}
      slidesPerView={isMobile ? 4 : isTablet ? 6 : 10}
      loop={true}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
      }}
      speed={1000}
      wrapperClass="swiper-wrapper skill-card-wrapper"
    >
      {skills.map((skill, idx) => {
        return (
          <StSwiperSlideSkillCard key={skill.name + idx} virtualIndex={idx}>
            <StDivSkillLogoWrapper
              $squareBorder={skill.logo.borderRadius === 'square'}
            >
              <StImageSkillLogo
                src={skill.logo.url}
                alt={`skill ${skill.name}`}
                width={skill.logo.width}
                height={skill.logo.height}
              />
            </StDivSkillLogoWrapper>
            <StDivSkillName>{skill.name}</StDivSkillName>
          </StSwiperSlideSkillCard>
        );
      })}
    </StSwiper>
  );
};

export default SkillStackSwiper;
