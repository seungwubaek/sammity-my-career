import { MDXContent } from 'mdx/types';

// Korean
import koAttitudeOfLearning from './ko/attitude_of_learning.mdx';
import koProblemSolvingAbility from './ko/problem_solving_ability.mdx';
import koSuperpowerMeticulousness from './ko/superpower_meticulousness.mdx';

// English
import enAttitudeOfLearning from './en/attitude_of_learning.mdx';
import enProblemSolvingAbility from './en/problem_solving_ability.mdx';
import enSuperpowerMeticulousness from './en/superpower_meticulousness.mdx';

type MDXCards = { [lang: string]: { [MDXName: string]: MDXContent } };

const MDXSpeechCards: MDXCards = {
  ko: {
    AttitudeOfLearning: koAttitudeOfLearning,
    ProblemSolvingAbility: koProblemSolvingAbility,
    SuperpowerMeticulousness: koSuperpowerMeticulousness,
  },
  en: {
    AttitudeOfLearning: enAttitudeOfLearning,
    ProblemSolvingAbility: enProblemSolvingAbility,
    SuperpowerMeticulousness: enSuperpowerMeticulousness,
  },
};

export default MDXSpeechCards;
