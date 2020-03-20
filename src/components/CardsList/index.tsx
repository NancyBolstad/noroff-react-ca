import React from 'react';
import Typography from '../Typography';
import { ButtonExternal } from '../Button';
import { Result } from '../../types/data.d';
import { Wrapper, List, Card as Item, CardImage } from './styles';

export interface Props {
  listTitle?: string;
  cards?: Result[];
}

export const CardsList: React.FunctionComponent<Props> = ({ listTitle, cards }) => {
  const PLACEHOLDER =
    'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png';
  return (
    <Wrapper>
      {!!listTitle && <Typography element="h2" variant="h2" content={listTitle} align="center" />}
      <List>
        {(cards || []).map(card => (
          <Item
            key={card.id}
            title={`Details about card ${card.name}`}
            aria-label={`Details about card ${card.name}`}
          >
            <Typography element="h3" variant="h3" content={card.name} bottom={22} top={16} />
            <CardImage
              src={card.background_image ? card.background_image : PLACEHOLDER}
              alt={card.name}
            />
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
            <ButtonExternal href={`./${card.id}`} variant="primary" size="medium">
              View Details
            </ButtonExternal>
          </Item>
        ))}
      </List>
    </Wrapper>
  );
};

export default CardsList;
