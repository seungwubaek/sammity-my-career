import React from 'react';
import NextIntlClientProviderWrapper, {
  NextIntlClientProviderProps,
} from './next-intl';

export type ProvidersProps = NextIntlClientProviderProps;

const Providers: React.FC<ProvidersProps> = (props) => {
  return (
    <NextIntlClientProviderWrapper locale={props.locale}>
      {props.children}
    </NextIntlClientProviderWrapper>
  );
};

export default Providers;
