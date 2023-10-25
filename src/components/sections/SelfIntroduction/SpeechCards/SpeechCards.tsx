'use client';

import React from 'react';
import { useTheme } from 'styled-components';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

import { Speech } from '@/types/speech';
import {
  StDivSpeechCard,
  StDivSpeechCardMessage,
  StH2SpeechCardTitle,
} from './SpeechCards.styled';

type PropsSpeechCards = {
  speeches: Speech[];
};

const SpeechCards: React.FC<PropsSpeechCards> = (props) => {
  const { speeches } = props;

  const theme = useTheme();

  return (
    <ResponsiveMasonry
      columnsCountBreakPoints={{
        [theme.media.tabletMaxWidth]: 1,
        [theme.media.desktopMinWidth]: 2,
      }}
    >
      <Masonry gutter={'20px'}>
        {speeches.map((speech) => (
          <StDivSpeechCard key={speech.title}>
            <StH2SpeechCardTitle>{speech.title}</StH2SpeechCardTitle>
            <StDivSpeechCardMessage>
              {speech.message.map((message, index) => (
                <p key={speech.title + index}>{message}</p>
              ))}
            </StDivSpeechCardMessage>
          </StDivSpeechCard>
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default SpeechCards;
