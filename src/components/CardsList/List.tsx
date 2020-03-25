import React from 'react';
import { Result } from '../../types/data.d';
import { List } from './styles';
import Card from './Card';

export interface Props {
  cards: Result[];
}

export const ResultsWrapper: React.FunctionComponent<Props> = ({ cards }) => {
  return (
    <List>
      {(cards || []).map((card, index) => (
        <Card key={index} card={card} />
      ))}
    </List>
  );
};

export default ResultsWrapper;
