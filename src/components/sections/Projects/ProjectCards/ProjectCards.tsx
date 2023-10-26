'use client';

import React from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { useTheme } from 'styled-components';

import { Project } from '@/types/projects';

import ProjectCard from '../ProjectCard';

type PropsProjectCards = {
  projects: Project[];
};

const ProjectCards: React.FC<PropsProjectCards> = (props) => {
  const { projects } = props;

  const theme = useTheme();

  return (
    <ResponsiveMasonry
      columnsCountBreakPoints={{
        [theme.media.tabletMaxWidth]: 1,
        [theme.media.desktopMinWidth]: 2,
      }}
    >
      <Masonry gutter={'20px'}>
        {projects.map((project, index) => (
          <ProjectCard key={`projectCard_${index}`} project={project} />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default ProjectCards;
