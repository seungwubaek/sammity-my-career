export type Project = {
  title: string;
  representativeImageSrc: string;
  imageBorderRadius?: 'square' | 'round';
  where: string;
  summary: string;
  startedAt: string;
  endedAt: string;
  participationRate: number;
  usedSkills: string[];
  tasks: string[];
};
