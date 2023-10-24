import React from 'react';
import { useTranslations } from 'next-intl';

import { getProjectsFromServer } from '@/lib/helpers/data';

import {
  StSection,
  SectionTitle,
  SectionContent,
} from '@/components/units/sections/SectionBase';
import { StDivProjectsContainer, StDivProjectCard } from './Projects.styled';
import ProjectRepresentativeImage from './ProjectRepresentativeImage';

type PropsSectionProjects = {
  locale: string;
};

const SectionProjects: React.FC<PropsSectionProjects> = (props) => {
  const { locale } = props;

  const t = useTranslations('');
  const projectsFromServer = getProjectsFromServer(locale);

  return (
    <StSection>
      <SectionTitle id="projects">{t('Projects.title')}</SectionTitle>
      <SectionContent>
        <StDivProjectsContainer>
          {projectsFromServer.map((project) => (
            <StDivProjectCard key={project.title}>
              <ProjectRepresentativeImage project={project} />
              <h3>{project.title}</h3>
              <div>{`${project.where}`}</div>
              <div>{`${project.summary}`}</div>
              <div>{`${project.startedAt}`}</div>
              <div>{`${project.endedAt}`}</div>
              <div>{`${project.participationRate}`}</div>
              <div>{`${project.usedSkills}`}</div>
              <div>{`${project.tasks}`}</div>
            </StDivProjectCard>
          ))}
        </StDivProjectsContainer>
      </SectionContent>
    </StSection>
  );
};

export default SectionProjects;
