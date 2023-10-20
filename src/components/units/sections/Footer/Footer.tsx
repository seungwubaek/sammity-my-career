import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { personalInfo } from '@/data/personalInfo';

import {
  StDivFooterInner,
  StSectionFooter,
  StUlPersonalInfo,
} from './Footer.styled';
import SiteLogo from '@/components/units/Logo';

const Footer: React.FC = () => {
  const t = useTranslations();

  return (
    <StSectionFooter $wide>
      <StDivFooterInner>
        <SiteLogo colorScheme="white" />
        <div>
          <StUlPersonalInfo>
            <li>{t('Footer.name')}</li>
            <li>
              <Link href={`mailto: ${personalInfo.email}`}>
                E-Mail: {personalInfo.email}
              </Link>
            </li>
            <li>{t('Footer.location')}</li>
          </StUlPersonalInfo>
        </div>
        <div>
          <span>© 2023. Sammity. All Rights Reserved.</span>
        </div>
      </StDivFooterInner>
    </StSectionFooter>
  );
};

export default Footer;
