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
