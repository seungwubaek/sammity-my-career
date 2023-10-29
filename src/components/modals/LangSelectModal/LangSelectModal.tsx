import React from 'react';

import { locales, usePathname, useRouter } from '@/intl-navigation';

import { StLiLangMenuItem, StUlLangMenu } from './LangSelectModal.styled';
import { useModalPortal } from '@/components/units/Portal';

// Modal 구현체는 Portal로 이미 구현해 놓았으므로 Content만 채우면 됨
const LangSelectModal: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();

  const { closeModal } = useModalPortal();

  return (
    <StUlLangMenu>
      {locales.map((locale) => (
        <StLiLangMenuItem
          key={locale}
          onClick={() => {
            closeModal();
            router.replace(pathname, { scroll: false, locale });
          }}
        >
          {locale}
        </StLiLangMenuItem>
      ))}
    </StUlLangMenu>
  );
};

export default LangSelectModal;
