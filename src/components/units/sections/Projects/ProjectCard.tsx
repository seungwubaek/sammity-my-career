import React from 'react';
import { useTranslations } from 'next-intl';
import clsx from 'clsx';

import { Project } from '@/types/projects';

import { StTableBase, StUlBase } from '@/components/units/sections/SectionBase';
import ProjectRepresentativeImage from './ProjectRepresentativeImage';
import { StDivProjectCard } from './ProjectCard.styled';

type PropsProjectCard = {
  project: Project;
};

const ProjectCard: React.FC<PropsProjectCard> = (props) => {
  const { project } = props;

  const t = useTranslations('');

  return (
    <StDivProjectCard key={project.title}>
      <ProjectRepresentativeImage project={project} />
      <h3>{project.title}</h3>
      <StTableBase>
        <tbody>
          <tr>
            <th>{t('Projects.whereHeader')}</th>
            <td>{`${project.where}`}</td>
          </tr>
          <tr>
            <th>{t('Projects.summaryHeader')}</th>
            <td>{`${project.summary}`}</td>
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
                  <li key={index}>{task}</li>
                ))}
              </StUlBase>
            </td>
          </tr>
        </tbody>
      </StTableBase>
    </StDivProjectCard>
  );
};

export default ProjectCard;
