import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';

import { personalInfo, siteInfo } from '@/data/commonInfo';

import {
  StDivFooterInner,
  StSectionFooter,
  StUlLinkList,
  StUlPersonalInfo,
} from './Footer.styled';
import SiteLogo from '@/components/units/Logo';

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
        <SiteLogo colorScheme="white" />
        <div>
          <StUlPersonalInfo>
            <li>{t('Footer.name')}</li>
            <li>{t('Footer.location')}</li>
          </StUlPersonalInfo>

          <StUlLinkList>
            <li>
              E-Mail:&nbsp;
              <Link
                className={clsx('underline')}
                href={`mailto: ${personalInfo.email}`}
              >
                {personalInfo.email}
              </Link>
            </li>
            <li>
              GitHub:&nbsp;
              <Link className={clsx('underline')} href={personalInfo.github}>
                {personalInfo.github}
              </Link>
            </li>
            <li>
              Blog:&nbsp;
              <Link className={clsx('underline')} href={personalInfo.gitblog}>
                {personalInfo.gitblog}
              </Link>
            </li>
          </StUlLinkList>
        </div>
        <div>
          <span>© {copyRightYear}. Sammity. All Rights Reserved.</span>
        </div>
      </StDivFooterInner>
    </StSectionFooter>
  );
};

export default Footer;
