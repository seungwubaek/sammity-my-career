import { RuleSet, css } from 'styled-components';

type ParamsMediaType = ('desktop' | 'tablet' | 'mobile')[];

export const generateCssByMedia = (
  cssByMedia: RuleSet<object>,
  mediaTypes: ParamsMediaType
) => {
  if (!mediaTypes.length) {
    throw new Error('mediaTypes is empty');
  }

  const [cssOfDesktop, cssOfTablet, cssOfMobile] = mediaTypes.map(
    (mediaType) => {
      switch (mediaType) {
        case 'desktop':
          return css`
            @media (min-width: ${({ theme }) => theme.media.tabletMinWidth}px) {
              ${cssByMedia}
            }
          `;
        case 'tablet':
          // prettier-ignore
          return css`
            @media (min-width: ${({ theme }) => theme.media.tabletMinWidth}px) and
                    (max-width: ${({ theme }) => theme.media.tabletMaxWidth}px) {
              ${cssByMedia}
            }
          `;
        case 'mobile':
          return css`
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
