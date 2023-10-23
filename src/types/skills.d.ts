export type SkillCategory =
  | 'Language'
  | 'FrontEnd'
  | 'BackEnd'
  | 'FullStack'
  | 'GUI'
  | 'DBMS'
  | 'DataEngineering'
  | 'Infrastructure'
  | 'DataScience'
  | 'Linux'
  | 'CodeManagement'
  | 'SEO'
  | 'Documentation';

export type Skill = {
  name: string;
  level: number;
  category: SkillCategory[];
  logo: {
    url: string;
    width: number;
    height: number;
    borderRadius?: LogoBorderRadius;
  };
};

export type LogoBorderRadius = 'round' | 'square';

export type ClientSkill = Skill & {
  defaultNo: number;
  isVisible: boolean;
  isActive: boolean;
};
