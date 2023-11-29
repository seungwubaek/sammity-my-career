'use client';

import React from 'react';
import { useLocale } from 'next-intl';
import { useTheme } from 'styled-components';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

import { Speech } from '@/types/speech';
// import {
//   koAttitudeOfLearning,
//   koProblemSolvingAbility,
//   koSuperpowerMeticulousness,
//   enAttitudeOfLearning,
//   enProblemSolvingAbility,
//   enSuperpowerMeticulousness,
// } from '@/data/speechCards';
import MDXSpeechCards from '@/data/speechCards';
import { StDivSpeechCard } from './SpeechCards.styled';

type PropsSpeechCards = {
  locale: string;
};

const SpeechCards: React.FC<PropsSpeechCards> = (props) => {
  const { locale } = props;

  const theme = useTheme();

  const MDXSpeechCardsByLocale = MDXSpeechCards[locale];
  const mdxNameOrder = [
    'AttitudeOfLearning',
    'ProblemSolvingAbility',
    'SuperpowerMeticulousness',
  ];

  return (
    <ResponsiveMasonry
      columnsCountBreakPoints={{
        [theme.media.tabletMaxWidth]: 1,
        [theme.media.desktopMinWidth]: 2,
      }}
    >
      <Masonry gutter={'20px'}>
        {mdxNameOrder.map((mdxName, index) => {
          const MDXSpeechCard = MDXSpeechCardsByLocale[mdxName];
          return (
            <StDivSpeechCard key={`introductionSpeechCard_${mdxName}`}>
              <MDXSpeechCard />
            </StDivSpeechCard>
          );
        })}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default SpeechCards;
