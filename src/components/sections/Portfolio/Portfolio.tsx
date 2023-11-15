import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { IoOpenOutline } from 'react-icons/io5';
import {
  SectionContent,
  SectionTitle,
  StSection,
} from '@/components/sections/SectionBase';
import { StPortfolioTable } from './Portfolio.styled';

type PropsSectionPortfolio = {
  locale: string;
};

const Portfolio: React.FC<PropsSectionPortfolio> = (props) => {
  const t = useTranslations('');

  return (
    <StSection>
      <SectionTitle id="portfolio">{t('Portfolio.title')}</SectionTitle>
      <SectionContent>
        <StPortfolioTable>
          <tbody>
            <tr>
              <td className="external-link-header" colSpan={2}>
                <Link
                  href="https://drive.google.com/drive/folders/19VjlNcZaMVRkel8qQSciYsAJmVXn8RAr?usp=drive_link"
                  target="_blank"
                >
                  포트폴리오 드라이브 바로가기&nbsp;
                  <IoOpenOutline size={20} />
                </Link>
              </td>
            </tr>
            {/* TODO: 포트폴리오에 속한 프로젝트 간단히 리스팅 */}
            {/* <tr>
              <td>모비젠</td>
              <td>모세피플</td>
            </tr> */}
          </tbody>
        </StPortfolioTable>
      </SectionContent>
    </StSection>
  );
};

export default Portfolio;
