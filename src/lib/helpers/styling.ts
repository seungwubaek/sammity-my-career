// styled-components와 SSR
// 본 파일에서 사용하는 styled-components API들은 'use client' indicator가 필요하다.
// 이는 styled-components의 다양한 API가 Client Side의 환경과 긴밀하게 연결되어 있기 때문이다.
// 그러나 styled-components는 Next.js SSR을 지원한다.
// CSR 처럼 작성한 styled-components 코드는 SSR 시점에 전부 extract 되고
// <head> 태그 내에 <style> 태그로 삽입된다.
// 이를 통해 SSR 시점에도 styled-components의 CSS가 적용되는 것이다.
// 따라서 아래의 유틸성 함수을 사용할 때, 이 점을 고려하면서 조심스럽게 사용한다면
// SSR 시점에도 안전하게 사용할 수 있다.

import { type RuleSet, css } from 'styled-components';

type ParamsMediaType = ('desktop' | 'tablet' | 'mobile')[];

// 함수 선언 시, styled-components의 `css`가 받아들이는 params에 대한
// 제네릭 타입(`cssProps`) 선언을 해주지 않으면 ts(2339) 에러가 발생한다.
//   Property '$someProperty' does not exist on type 'ExecutionContext'
// 빨간줄이 보기싫어서 해결하였지만, 사실 그대로 두거나 ignore 처리해도 실행에는 문제가 없다.
export const generateCssByMedia = <cssProps extends object>(
  cssByMedia: RuleSet<cssProps>,
  mediaTypes: ParamsMediaType
) => {
  if (!mediaTypes.length) {
    throw new Error('mediaTypes is empty');
  }

  const [cssOfDesktop, cssOfTablet, cssOfMobile] = mediaTypes.map(
    (mediaType) => {
      switch (mediaType) {
        case 'desktop':
          // prettier-ignore
          return css<cssProps>`
            @media (min-width: ${({ theme }) => theme.media.desktopMinWidth}px) {
              ${cssByMedia}
            }
          `;
        case 'tablet':
          // prettier-ignore
          return css<cssProps>`
            @media (min-width: ${({ theme }) => theme.media.tabletMinWidth}px) and
                    (max-width: ${({ theme }) => theme.media.tabletMaxWidth}px) {
              ${cssByMedia}
            }
          `;
        case 'mobile':
          return css<cssProps>`
            @media (max-width: ${({ theme }) => theme.media.mobileMaxWidth}px) {
              ${cssByMedia}
            }
          `;
        default:
          throw new Error(`mediaType ('${mediaType}') is not valid`);
      }
    }
  );

  return css`
    ${cssOfDesktop && cssOfDesktop}
    ${cssOfTablet && cssOfTablet}
    ${cssOfMobile && cssOfMobile}
  `;
};

type ParamImageSizes = {
  desktop?: number;
  tablet?: number;
  mobile?: number;
};

type ParamMedia = {
  tabletMaxWidth: number;
  mobileMaxWidth: number;
};

export const getImageSizes = (
  imageSizes: ParamImageSizes,
  mediaSizes: ParamMedia
) => {
  const { desktop, tablet, mobile } = imageSizes;

  if (!desktop && !tablet && !mobile) {
    throw new Error('imageSizes is empty');
  }

  const [desktopSize, tabletSize, mobileSize] = Object.keys(imageSizes).map(
    (imageSize) => {
      switch (imageSize) {
        case 'desktop':
          return desktop && `${desktop}px`;
        case 'tablet':
          return (
            tablet && `(max-width: ${mediaSizes.tabletMaxWidth}px) ${tablet}px`
          );
        case 'mobile':
          return (
            mobile && `(max-width: ${mediaSizes.mobileMaxWidth}px) ${mobile}px`
          );
        default:
          throw new Error(`imageSize ('${imageSize}') is not valid`);
      }
    }
  );

  let imageSizeString = desktopSize ? `${desktopSize}` : '';
  imageSizeString += tabletSize ? `, ${tabletSize}` : '';
  imageSizeString += mobileSize ? `, ${mobileSize}` : '';

  return imageSizeString;
};
