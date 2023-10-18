import React from 'react';
import StyledComponentsRegistry from '@/lib/initializers/styled-components';
import NextIntlClientProviderWrapper, {
  NextIntlClientProviderProps,
} from './next-intl';

export type ProvidersProps = NextIntlClientProviderProps;

const Providers: React.FC<ProvidersProps> = (props) => {
  return (
    <StyledComponentsRegistry>
      <NextIntlClientProviderWrapper locale={props.locale}>
        {props.children}
      </NextIntlClientProviderWrapper>
    </StyledComponentsRegistry>
  );
};

export default Providers;
