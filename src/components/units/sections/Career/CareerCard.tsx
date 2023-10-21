import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';

import {
  StDivCareerCard,
  StDivCompanyLogoWrapper,
  StDivCompanyName,
  StTableCareerInfo,
  StUlProjectList,
} from './CareerCard.styled';

type PropsCareerCard = {
  locale: string;
  careerCardWidth?: number;
  representativeColor?: string;
  companyLogoSrc?: string;
  companyLogoWidth?: number;
  companyLogoHeight?: number;
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
    companyLogoWidth = 150,
    companyLogoHeight = 40,
    companyLogoStyle,
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
    if (periodDiffInYears === 1) {
      periodDiffString = `1 year`;
    } else if (periodDiffInYears > 1) {
      periodDiffString = `${periodDiffInYears} years`;
    }
    if (periodDiffInMonthsRemainder === 1) {
      periodDiffString += ` 1 month`;
    } else if (periodDiffInMonthsRemainder > 1) {
      periodDiffString += ` ${periodDiffInMonthsRemainder} months`;
    }
  } else {
    throw new Error(`Unsupported locale: ${locale}`);
  }

  periodDiffString = `${periodDiffInYears}년 ${periodDiffInMonthsRemainder}개월`;
  // prettier-ignore
  const period = `(${periodDiffString}) ${periodFrom.getFullYear()}. ${periodFrom.getMonth() + 1} ~
                  ${periodTo.getFullYear()}. ${periodTo.getMonth() + 1}`;

  return (
    <StDivCareerCard
      $representativeColor={representativeColor}
      $careerCardWidth={careerCardWidth}
    >
      <StDivCompanyLogoWrapper>
        {companyLogoSrc ? (
          <Image
            src={companyLogoSrc}
            alt={companyName}
            width={companyLogoWidth}
            height={companyLogoHeight}
            style={companyLogoStyle}
          />
        ) : (
          <div
            style={{ width: companyLogoWidth, height: companyLogoHeight }}
          ></div>
        )}
      </StDivCompanyLogoWrapper>
      <StDivCompanyName>{companyName}</StDivCompanyName>
      <StTableCareerInfo>
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
              <StUlProjectList>
                {projectArray.map((project, index) => (
                  <li key={index}>{project}</li>
                ))}
              </StUlProjectList>
            </td>
          </tr>
        </tbody>
      </StTableCareerInfo>
    </StDivCareerCard>
  );
};

export default CareerCard;
