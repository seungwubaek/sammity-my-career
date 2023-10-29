'use client';

import React from 'react';
import { useTheme } from 'styled-components';
import clsx from 'clsx';

import { Project } from '@/types/projects';

import { StDivProjectRepresentativeImageWrapper } from './ProjectRepresentativeImage.styled';
import ImageWithSizes from '@/components/units/ImageWithSizes';

type PropsProjectCard = {
  project: Project;
};

const ProjectRepresentativeImage: React.FC<PropsProjectCard> = (props) => {
  const { project } = props;

  const theme = useTheme();

  return (
    <StDivProjectRepresentativeImageWrapper
      className={clsx('unselectable')}
      $borderType={project.imageBorderRadius ?? 'square'}
    >
      <ImageWithSizes
        src={project.representativeImageSrc}
        alt={project.title}
        mediaSizes={{ desktop: theme.layout.projectCardMaxWidth }}
        quality={100}
      />
    </StDivProjectRepresentativeImageWrapper>
  );
};

export default ProjectRepresentativeImage;
