import React from 'react';
import StyledComponentsRegistry from './styled-components';
import StyledComponentThemeProvider from './styled-components-theme';
import NextIntlClientProviderWrapper, {
  NextIntlClientProviderProps,
} from './next-intl';
import PortalProvider from './portals';

export type ProvidersProps = NextIntlClientProviderProps;

const Providers: React.FC<ProvidersProps> = (props) => {
  return (
    <StyledComponentsRegistry>
      <StyledComponentThemeProvider>
        <NextIntlClientProviderWrapper locale={props.locale}>
          <PortalProvider>{props.children}</PortalProvider>
        </NextIntlClientProviderWrapper>
      </StyledComponentThemeProvider>
    </StyledComponentsRegistry>
  );
};

export default Providers;
