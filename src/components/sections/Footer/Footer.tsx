import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';

import { personalInfo, siteInfo } from '@/data/commonInfo';

import {
  StDivFooterInner,
  StSectionFooter,
  StSectionFooterLogoAndLinkSet,
  StUlPersonalInfo,
} from './Footer.styled';
import SiteLogo from '@/components/units/Logo';
import LinkSet from '@/components/units/LinkSet';

const Footer: React.FC = () => {
  const t = useTranslations();

  const currentYear = new Date().getFullYear();
  const copyRightYear =
    currentYear === siteInfo.createdYear
      ? currentYear
      : `${siteInfo.createdYear}-${currentYear}`;

  return (
    <StSectionFooter $wide>
      <StDivFooterInner>
        <StSectionFooterLogoAndLinkSet>
          <SiteLogo colorScheme="white" />
          <LinkSet logoSize={16} githubColor="white" />
        </StSectionFooterLogoAndLinkSet>
        <StUlPersonalInfo>
          <li>{t('Footer.name')}</li>
          <li>{t('Footer.location')}</li>
          <li>
            E-Mail:&nbsp;
            <Link
              className={clsx('underline')}
              href={`mailto: ${personalInfo.email}`}
            >
              {personalInfo.email}
            </Link>
          </li>
        </StUlPersonalInfo>
        <div>
          <span>© {copyRightYear}. Sammity. All Rights Reserved.</span>
        </div>
      </StDivFooterInner>
    </StSectionFooter>
  );
};

export default Footer;
