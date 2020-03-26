import React from 'react';
import Typography from '../Typography';
import { Result } from '../../types/data.d';
import { Wrapper } from './styles';
import SearchCards from './SearchCards';
import ResultsWrapper from './List';

export interface Props {
  listTitle?: string;
  cards: Result[];
}

export const CardsList: React.FunctionComponent<Props> = ({ listTitle, cards }) => {
  const [filtedData, setFilterData] = React.useState<Result[]>([]);
  const [isFullList, setIsFullList] = React.useState<boolean>(true);

  function filter(value: string) {
    const lowerCaseSearchValue = value.toLowerCase();
    const newArray: Result[] = cards.filter(element => {
      const lowerGameName = element.name.toLowerCase();
      return lowerGameName.startsWith(lowerCaseSearchValue);
    });
    setFilterData(newArray);
    setIsFullList(false);
  }

  return (
    <Wrapper>
      {!!listTitle && <Typography element="h2" variant="h2" content={listTitle} align="center" />}
       <SearchCards handler={filter} />
      <ResultsWrapper cards={isFullList ? cards : filtedData} />
    </Wrapper>
  );
};

export default CardsList;
