import React from 'react';
import Typography from '../Typography';
import { ButtonExternal } from '../Button';
import { Result } from '../../types/data.d';
import { Card as Wrapper, CardImage, LikeButton } from './styles';
import { Context } from '../../context/GlobalContext';
import { Types } from '../../context/reducers';
import { heart } from '../../util/icons';

export interface Props {
  card: Result;
}

export const Card: React.FunctionComponent<Props> = ({ card }) => {
  const { dispatch } = React.useContext(Context);
  const [like, setLike] = React.useState(false);

  React.useEffect(() => {
    if (like === true) {
      dispatch({
        type: Types.Like,
        payload: card,
      });
    } else {
      dispatch({
        type: Types.Dislike,
        payload: {
          id: card.id,
        },
      });
    }
  }, [like, card, dispatch]);
  return (
    <Wrapper>
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
        <Typography element="span" variant="h4" content={`Rating: ${card.rating}`} bottom={16} />
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
      <LikeButton
        variant="primary"
        size="medium"
        onClick={e => {
          e.preventDefault();
          setLike(like ? false : true);
        }}
        isLiked={like}
      >
        {heart}
      </LikeButton>
    </Wrapper>
  );
};

export default Card;
