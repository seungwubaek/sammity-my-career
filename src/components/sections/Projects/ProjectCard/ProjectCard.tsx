'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import clsx from 'clsx';

import { Project } from '@/types/projects';

import { StUlBase } from '@/components/sections/SectionBase';
import {
  StDivProjectCard,
  StDivProjectCardOpenButtonWrapper,
  StDivProjectCardTitleWrapper,
  StH2ProjectCardTitle,
  StTableProjectCard,
} from './ProjectCard.styled';
import { IoChevronDown, IoChevronUp } from 'react-icons/io5';
import ProjectRepresentativeImage from '../ProjectRepresentativeImage';

type PropsProjectCard = {
  project: Project;
};

const ProjectCard: React.FC<PropsProjectCard> = (props) => {
  const { project } = props;

  const [isCardDetailOpen, setIsCardOpen] = React.useState(false);
  const tableRef = React.useRef<HTMLTableElement>(null);
  const t = useTranslations('');

  React.useEffect(() => {
    if (tableRef.current) {
      if (isCardDetailOpen) {
        tableRef.current.style.height = `${tableRef.current.scrollHeight}px`;
      } else {
        tableRef.current.style.height = '0';
      }
    }
  }, [isCardDetailOpen]);

  return (
    <StDivProjectCard
      key={project.title}
      onClick={() => setIsCardOpen((prev) => !prev)}
    >
      <StDivProjectCardTitleWrapper>
        <StH2ProjectCardTitle className={clsx('unselectable')}>
          {project.title}
        </StH2ProjectCardTitle>
        <StDivProjectCardOpenButtonWrapper className="card-btn-wrapper">
          {isCardDetailOpen ? (
            <IoChevronUp size={20} />
          ) : (
            <IoChevronDown size={20} />
          )}
        </StDivProjectCardOpenButtonWrapper>
      </StDivProjectCardTitleWrapper>
      <ProjectRepresentativeImage project={project} />
      <StTableProjectCard ref={tableRef} $showDetail={isCardDetailOpen}>
        <tbody>
          <tr>
            <th>{t('Projects.summaryHeader')}</th>
            <td>{`${project.summary}`}</td>
          </tr>
          <tr>
            <th>{t('Projects.whereHeader')}</th>
            <td>{`${project.where}`}</td>
          </tr>
          <tr>
            <th>{t('Projects.periodHeader')}</th>
            <td>{`${project.startedAt} ~ ${project.endedAt}`}</td>
          </tr>
          <tr>
            <th>{t('Projects.participationRateHeader')}</th>
            <td>{`${project.participationRate}%`}</td>
          </tr>
          <tr>
            <th>{t('Projects.useSkillHeader')}</th>
            <td>{project.usedSkills.join(', ')}</td>
          </tr>
          <tr>
            <td colSpan={2} className={clsx('replaceTh')}>
              {t('Projects.responsibilitiesHeader')}
            </td>
          </tr>
          <tr>
            <td colSpan={2} className={clsx('wide')}>
              <StUlBase>
                {project.tasks.map((task, index) => (
                  <li key={`projectCardTable_${index}`}>{task}</li>
                ))}
              </StUlBase>
            </td>
          </tr>
        </tbody>
      </StTableProjectCard>
    </StDivProjectCard>
  );
};

export default ProjectCard;
