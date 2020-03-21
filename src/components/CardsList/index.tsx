import React from 'react';
import Typography from '../Typography';
import { ButtonExternal } from '../Button';
import { Result } from '../../types/data.d';
import { Wrapper, List, Card as Item, CardImage } from './styles';
import SearchCards from '../SearchCards';

export interface Props {
  listTitle?: string;
  cards: Result[];
}

export const CardsList: React.FunctionComponent<Props> = ({ listTitle, cards }) => {
  const [filtedData, setFilterData] = React.useState<Result[]>([]);
  const [isFullList, setIsFullList] = React.useState<boolean>(true);

  function filter(value: string) {
    const newArray: Result[] = cards.filter(function(element) {
      const lowerCaseName = element.name.toLowerCase();
      if (lowerCaseName.startsWith(value)) {
        return true;
      }
      return false;
    });
    setFilterData(newArray);
    setIsFullList(false);
  }

  return (
    <Wrapper>
      {!!listTitle && <Typography element="h2" variant="h2" content={listTitle} align="center" />}
      <SearchCards handler={filter} />
      {isFullList ? (
        <List>
          {(cards || []).map((card, index) => (
            <Item
              key={`${card.id}-${index}`}
              href={`/details/${card.id}`}
              title={`Go to details about card ${card.name}`}
              aria-label={`Go to details about card ${card.name}`}
            >
              <Typography element="h3" variant="h3" content={card.name} bottom={22} top={16} />
              {!!card.background_image && <CardImage src={card.background_image} alt={card.name} />}
              {!!card.released && (
                <Typography
                  element="span"
                  variant="h4"
                  content={`Released: ${card.released}`}
                  bottom={16}
                  top={16}
                />
              )}
              {!!card.rating && (
                <Typography
                  element="span"
                  variant="h4"
                  content={`Rating: ${card.rating}`}
                  bottom={16}
                />
              )}
              <ButtonExternal href={`/details/${card.id}`} variant="primary" size="medium">
                View Details
              </ButtonExternal>
            </Item>
          ))}
        </List>
      ) : (
        <List>
          {(filtedData || []).map((card, index) => (
            <Item
              key={`${card.id}-${index}`}
              href={`/details/${card.id}`}
              title={`Go to details about card ${card.name}`}
              aria-label={`Go to details about card ${card.name}`}
            >
              <Typography element="h3" variant="h3" content={card.name} bottom={22} top={16} />
              {!!card.background_image && <CardImage src={card.background_image} alt={card.name} />}
              {!!card.released && (
                <Typography
                  element="span"
                  variant="h4"
                  content={`Released: ${card.released}`}
                  bottom={16}
                  top={16}
                />
              )}
              {!!card.rating && (
                <Typography
                  element="span"
                  variant="h4"
                  content={`Rating: ${card.rating}`}
                  bottom={16}
                />
              )}
              <ButtonExternal href={`/details/${card.id}`} variant="primary" size="medium">
                View Details
              </ButtonExternal>
            </Item>
          ))}
        </List>
      )}
    </Wrapper>
  );
};

export default CardsList;
