import { RuleSet, css } from 'styled-components';

type ParamsGenerateCssByMedia = {
  desktop?: RuleSet<object>;
  tablet?: RuleSet<object>;
  mobile?: RuleSet<object>;
};

export const generateCssByMedia = (cssByMedia: ParamsGenerateCssByMedia) => {
  const {
    desktop: cssOfDesktop,
    tablet: cssOfTablet,
    mobile: cssOfMobile,
  } = cssByMedia;
  return css`
    @media (min-width: ${({ theme }) => theme.media.tabletMinWidth}px) {
      ${cssOfDesktop}
    }

    // prettier-ignore
    @media (min-width: ${({ theme }) => theme.media.tabletMinWidth}px) and
            (max-width: ${({ theme }) => theme.media.tabletMaxWidth}px) {
      ${cssOfTablet}
    }

    @media (max-width: ${({ theme }) => theme.media.mobileMaxWidth}px) {
      ${cssOfMobile}
    }
  `;
};
