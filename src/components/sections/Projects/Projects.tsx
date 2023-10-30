import React from 'react';
import { useTranslations } from 'next-intl';

import { getProjectsFromServer } from '@/lib/helpers/data';

import {
  StSection,
  SectionTitle,
  SectionContent,
} from '@/components/sections/SectionBase';
import ProjectCards from './ProjectCards';

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
        <ProjectCards projects={projectsFromServer} />
      </SectionContent>
    </StSection>
  );
};

export default SectionProjects;
