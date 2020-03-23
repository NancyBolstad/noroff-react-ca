import React from 'react';
import Typography from '../Typography';
import Button, { ButtonExternal } from '../Button';
import { Result } from '../../types/data.d';
import { List, Card as Item, CardImage } from './styles';
import { Context } from '../../pages/GlobalContext';
import { Types } from '../../context/reducers';

export interface Props {
  cards: Result[];
}

export const ResultsWrapper: React.FunctionComponent<Props> = ({ cards }) => {
  const { favorites, dispatch } = React.useContext(Context);
  const [like, setLike] = React.useState<boolean>(false);

  console.log(favorites);
  return (
    <List>
      {(cards || []).map((card, index) => (
        <Item key={`${card.id}-${index}`}>
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
          <ButtonExternal
            variant="primary"
            size="medium"
            href={`/details/${card.id}`}
            title={`Go to details about card ${card.name}`}
            aria-label={`Go to details about card ${card.name}`}
          >
            View Details
          </ButtonExternal>
          <Button
            variant="primary"
            size="medium"
            onClick={() => {
              setLike(!like);
              dispatch({
                type: like ? Types.Like : Types.Dislike,
                payload: card,
              });
            }}
          >
            Like
          </Button>
        </Item>
      ))}
    </List>
  );
};

export default ResultsWrapper;
