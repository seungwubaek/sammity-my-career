import skills from '@/data/skills';

import { getAssetUrl } from '../utils/url';

export const getSkillsFromServer = () => {
  const urlPrefixedSkills = skills.map((skill) => {
    skill.logo.url = getAssetUrl(skill.logo.url).toString();
    return skill;
  });
  return urlPrefixedSkills;
};
