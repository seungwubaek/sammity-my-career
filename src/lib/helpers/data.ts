import skills from '@/data/skills';
import { ko as project_ko, en as project_en } from '@/data/projects';
import { ko as speech_ko, en as speech_en } from '@/data/speechCards';
import { ko as aboutSite_ko, en as aboutSite_en } from '@/data/aboutSite';

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

export const getSpeechesFromServer = (locale: string) => {
  // TODO: server-only 적용
  let speech;
  if (locale === 'ko') {
    speech = speech_ko;
  } else if (locale === 'en') {
    speech = speech_en;
  } else {
    throw new Error('Unsupported locale');
  }

  return speech;
};

export const getAboutSiteMessagesFromServer = (locale: string) => {
  // TODO: server-only 적용
  let aboutSiteMessages;
  if (locale === 'ko') {
    aboutSiteMessages = aboutSite_ko;
  } else if (locale === 'en') {
    aboutSiteMessages = aboutSite_en;
  } else {
    throw new Error('Unsupported locale');
  }

  return aboutSiteMessages;
};
