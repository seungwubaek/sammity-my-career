import React from 'react';
import { useTranslations } from 'next-intl';

import { getProjectsFromServer } from '@/lib/helpers/data';

import {
  StSection,
  SectionTitle,
  SectionContent,
} from '@/components/sections/SectionBase';
import { StDivProjectsContainer } from './Projects.styled';
import ProjectCard from './ProjectCard';

type PropsSectionProjects = {
  locale: string;
};

const SectionProjects: React.FC<PropsSectionProjects> = (props) => {
  const { locale } = props;

  const t = useTranslations('');
  const projectsFromServer = getProjectsFromServer(locale);

  return (
    <StSection>
      <SectionTitle id="projects" hasMarginVertical={true}>
        {t('Projects.title')}
      </SectionTitle>
      <SectionContent>
        <StDivProjectsContainer>
          {projectsFromServer.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </StDivProjectsContainer>
      </SectionContent>
    </StSection>
  );
};

export default SectionProjects;
