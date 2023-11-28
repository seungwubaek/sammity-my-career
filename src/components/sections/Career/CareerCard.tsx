import React from 'react';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';

import { StTableBase, StUlBase } from '@/components/sections/SectionBase';
import {
  StDivCareerCard,
  StDivCompanyLogoLocator,
  StDivCompanyLogoWrapper,
  StDivCompanyName,
} from './CareerCard.styled';

import ImageWithSizes from '@/components/units/ImageWithSizes';

type PropsCareerCard = {
  locale: string;
  careerCardWidth?: number;
  representativeColor?: string;
  companyLogoSrc?: string;
  companyLogoMaxWidth?: number;
  companyLogoStyle?: React.CSSProperties;
  companyName: string;
  periodFrom: Date;
  periodTo: Date;
  team: string;
  position: string;
  projectArray?: string[];
};

const CareerCard: React.FC<PropsCareerCard> = (props) => {
  const {
    locale = 'ko',
    careerCardWidth = 420,
    representativeColor = 'black',
    companyLogoSrc,
    companyLogoMaxWidth = 240,
    companyName,
    periodFrom,
    periodTo,
    team,
    position,
    projectArray = [],
  } = props;

  const t = useTranslations('');

  const periodDiffInMonths =
    periodTo.getMonth() -
    periodFrom.getMonth() +
    12 * (periodTo.getFullYear() - periodFrom.getFullYear());
  const periodDiffInYears = Math.floor(periodDiffInMonths / 12);
  const periodDiffInMonthsRemainder = periodDiffInMonths % 12;
  let periodDiffString = '';
  if (locale === 'ko') {
    if (periodDiffInYears > 0) {
      periodDiffString = `${periodDiffInYears}년`;
    }
    if (periodDiffInMonthsRemainder > 0) {
      periodDiffString += ` ${periodDiffInMonthsRemainder}개월`;
    }
  } else if (locale === 'en') {
    if (periodDiffInYears > 0) {
      periodDiffString = `${periodDiffInYears}Y`;
    }
    if (periodDiffInMonthsRemainder > 0) {
      periodDiffString += ` ${periodDiffInMonthsRemainder}M`;
    }
  } else {
    throw new Error(`Unsupported locale: ${locale}`);
  }

  // prettier-ignore
  const period =
    `(${periodDiffString})
      ${periodFrom.getFullYear()}. ${String(periodFrom.getMonth() + 1).padStart(2, '0')} ~
      ${periodTo.getFullYear()}. ${String(periodTo.getMonth() + 1).padStart(2, '0')}`;

  return (
    <StDivCareerCard
      $representativeColor={representativeColor}
      $careerCardWidth={careerCardWidth}
    >
      <StDivCompanyLogoLocator>
        <StDivCompanyLogoWrapper $companyLogoMaxWidth={companyLogoMaxWidth}>
          {companyLogoSrc ? (
            <ImageWithSizes
              src={companyLogoSrc}
              alt={companyName}
              mediaSizes={{ desktop: companyLogoMaxWidth }}
            />
          ) : (
            <div style={{ width: companyLogoMaxWidth, height: 120 }}></div>
          )}
        </StDivCompanyLogoWrapper>
      </StDivCompanyLogoLocator>
      <StDivCompanyName>{companyName}</StDivCompanyName>
      <StTableBase>
        <tbody>
          <tr>
            <th>{t('Career.periodHeader')}</th>
            <td>{period}</td>
          </tr>
          <tr>
            <th>{t('Career.teamHeader')}</th>
            <td>{team}</td>
          </tr>
          <tr>
            <th>{t('Career.positionHeader')}</th>
            <td>{position}</td>
          </tr>
          <tr>
            <td colSpan={2} className={clsx('replaceTh')}>
              {t('Career.projectHeader')}
            </td>
          </tr>
          <tr>
            <td colSpan={2} className={clsx('wide')}>
              <StUlBase>
                {projectArray.map((project, index) => (
                  <li key={`projectInCareer_${index}`}>{project}</li>
                ))}
              </StUlBase>
            </td>
          </tr>
        </tbody>
      </StTableBase>
    </StDivCareerCard>
  );
};

export default CareerCard;
