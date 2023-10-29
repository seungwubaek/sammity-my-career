'use client';

/*
# Issue 1 - Swiper Web Component 사용불가

Swiper는 아직 Next.js SSR을 지원하지 않는다.
Swiper에서 공식적으로 React를 위해 추천하는 Web Component 방식은 잘 작동하지 않는다.
Web Component의 Type Definition 관련 이슈는 `types/swiper.d.ts`를 만들고 Web Component를 위한
type을 직접 정의하는 것으로 해결했었다.
(Ref. https://github.com/nolimits4web/swiper/issues/6466#issuecomment-1478486837)
하지만 Next.js 때문인지 `register()` 메소드가 작동하지 않는다.
따라서 Web Component 방식으로 구현하지 못하고
아래 링크에 따라 기존의 React Component 방식을 그대로 사용하여 Client Side에서 렌더링하도록 한다
https://swiperjs.com/react

# Issue 2 - Swiper의 CommonJS (이하 CJS) 지원불가

`$ next dev` (이하 개발 실행) 를 하면 Swiper가 정상작동하지만,
`$ next build && next start` (이하 배포 실행) 를 하면 Swiper가 정상작동하지 않는다.
Swiper는 Swiper가 초기화 될 때, Swiper 컴포넌트 하위에 <div class="swiper-wrapper"> (이하 SwiperWrapper 컴포넌트)를
자동 생성하다. 그리고 그 하위에 SwiperSlide들이 자식 컴포넌트로 들어간다.
그러나 배포 실행에서 비정상 HTML을 뜯어보면 SwiperSlide가 SwiperWrapper 컴포넌트 외부에(=동일한 레벨에)
위치하고 있는 것을 볼 수 있다. 그러니 css, js 들이 정상적으로 적용되지 않았겠지.
이는 Swiper가 CJS을 지원하지 않기 때문에 발생하는 내부적인 버그라고 한다.
Ref: https://fe-developers.kakaoent.com/2023/230420-beyond-solving-problem-part-1/#첫-번째-문제---기존-코드는-왜-복잡하게-짜여있었을까

## 해결책 공통

Swiper를 styled-components의 `styled()`로 감싸서 사용할 수 없다.

## 해결 1

ESM의 `import` 대신 CommonJS (이하 CJS)의 `require`를 직접 사용하는 코드를 넣는다.

## 해결 2 (보다 근원적인 해결책)

Swiper의 ESM 코드를 CJS로 Transpiling 한다. `next.config.js`에 간단히 설정을 추가하면 된다.
*/

import React from 'react';
import path from 'path';

/*
// Issue 2 해결 1의 방법을 적용하려면 아래 코드를 주석 해제
import type {
  Swiper as TypeSwiper,
  SwiperSlide as TypeSwiperSlide,
} from 'swiper/react';
const Swiper = require('swiper/react');
const SwiperComponent: typeof TypeSwiper = Swiper.Swiper;
const SwiperSlide: typeof TypeSwiperSlide = Swiper.SwiperSlide;
require('swiper/css');
require('swiper/css/virtual');
require('swiper/css/autoplay');
*/

// Issue 2 해결 2의 방법 (next.config.js 참조)
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/virtual';
import 'swiper/css/autoplay';

// TODO:
// Issue 2 해결 1의 방법에서 swiper module은 require를 써지 않아도 되는지 확인 필요
import { Virtual, Autoplay } from 'swiper/modules';
import { useTheme } from 'styled-components';
import clsx from 'clsx';

import type { Skill } from '@/types/skills';
import useAllMediaQuery from '@/lib/hooks/useAllMediaQuery';

import {
  StDivSkillLogoWrapper,
  StDivSkillName,
  StDivSkillCard,
} from './SkillStackSwiper.styled';
import ImageWithSizes from '@/components/units/ImageWithSizes/ImageWithSizes';

type PropsSkillStackSwiper = {
  skills: Skill[];
};

const SkillStackSwiper: React.FC<PropsSkillStackSwiper> = (props) => {
  const { skills } = props;

  const swiperRef = React.useRef(null);
  const { isTablet, isMobile } = useAllMediaQuery();
  const theme = useTheme();

  React.useEffect(() => {
    if (!isTablet || !isMobile) {
      console.log('Num of skills: ', skills.length);
    }
  }, [isTablet, isMobile, skills.length]);

  // TODO: skills 개수가 충분치 않으면 autoplay 작동이 이상해짐
  // 필요한 개수가 어떻게 계산되는지 알 수 없음
  // 그럴때 autoplay를 off 하는 코드 필요
  return (
    <SwiperComponent
      ref={swiperRef}
      className={clsx('unselectable')}
      modules={[Virtual, Autoplay]}
      virtual={true}
      slidesPerView={4}
      breakpoints={{
        [theme.media.mobileMinWidth]: {
          slidesPerView: theme.layout.heroSkillStacksNumOfSkillPerRow.mobile,
        },
        [theme.media.tabletMinWidth]: {
          slidesPerView: theme.layout.heroSkillStacksNumOfSkillPerRow.tablet,
        },
        [theme.media.desktopMinWidth]: {
          slidesPerView: theme.layout.heroSkillStacksNumOfSkillPerRow.desktop,
        },
      }}
      loop={true}
      autoplay={{
        delay: 500,
        disableOnInteraction: false,
      }}
      speed={1000}
    >
      {skills.map((skill, idx) => {
        return (
          <SwiperSlide
            key={skill.name + idx}
            virtualIndex={idx}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <StDivSkillCard>
              <StDivSkillLogoWrapper
                $squareBorder={skill.logo.borderRadius === 'square'}
              >
                <ImageWithSizes
                  src={skill.logo.url}
                  alt={`skill ${skill.name}`}
                  mediaSizes={{ desktop: 75, tablet: 60, mobile: 55 }}
                />
              </StDivSkillLogoWrapper>
              <StDivSkillName>{skill.name}</StDivSkillName>
            </StDivSkillCard>
          </SwiperSlide>
        );
      })}
    </SwiperComponent>
  );
};

export default SkillStackSwiper;
