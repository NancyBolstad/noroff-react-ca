import * as React from 'react';
import styled from 'styled-components';
import Typography from '../Typography';
import { Genre, Platform2 } from '../../types/details';

export interface Props {
  genres: Genre[];
  platforms: Platform2[];
}

const Wrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: ${props => props.theme.spacing.s}rem;
  background-color: ${props => props.theme.colors.surface};

  ul {
    list-style-type: none;
  }

  span {
    margin: 0;
  }
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Tag: React.FunctionComponent<Props> = ({ genres, platforms }) => {
  return (
    <Wrapper>
      <ListWrapper>
        <Typography element="span" variant="h4" content="Genres:" />
        <ul>
          {genres.map((genre, index) => {
            return (
              <li key={index}>
                <Typography element="span" variant="h4" content={genre.name} />
              </li>
            );
          })}
        </ul>
      </ListWrapper>
      <ListWrapper>
        <Typography element="span" variant="h4" content="Platforms:" />
        <ul>
          {platforms.map((platform, index) => {
            return (
              <li key={index}>
                <Typography element="span" variant="h4" content={platform.platform.name} />
              </li>
            );
          })}
        </ul>
      </ListWrapper>
    </Wrapper>
  );
};

export default Tag;
