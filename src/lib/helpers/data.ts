import skills from '@/data/skills';
import { ko as project_ko, en as project_en } from '@/data/projects';

import { getAssetUrl } from '../utils/url';

export const getSkillsFromServer = () => {
  // TODO: server-only 적용
  const urlPrefixedSkills = skills.map((skill) => {
    skill.logo.url = getAssetUrl(skill.logo.url).toString();
    return skill;
  });
  return urlPrefixedSkills;
};

export const getProjectsFromServer = (locale: string) => {
  // TODO: server-only 적용
  let project;
  if (locale === 'ko') {
    project = project_ko;
  } else if (locale === 'en') {
    project = project_en;
  } else {
    throw new Error('Unsupported locale');
  }

  const urlPrefixedProjects = project.map((project) => {
    project.representativeImageSrc = getAssetUrl(
      project.representativeImageSrc
    ).toString();
    return project;
  });

  return urlPrefixedProjects;
};
