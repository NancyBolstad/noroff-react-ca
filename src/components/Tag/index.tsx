import * as React from 'react';
import styled, { css } from 'styled-components';
import Typography from '../Typography';
import { Genre, Platform2 } from '../../types/details';
import Button from '../Button';

export interface Props {
  genres: Genre[];
  platforms: Platform2[];
}

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: ${props => props.theme.spacing.s}rem;

  ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
  }

  li {
    margin-bottom: ${props => props.theme.spacing.s}rem;
    background-color: ${props => props.theme.colors.primaryVariant};
    padding: ${props => props.theme.spacing.xs}rem ${props => props.theme.spacing.s}rem;
    border-radius: 10px;
    margin-right: ${props => props.theme.spacing.s}rem;
  }

  span {
    display: black;
    margin: 0 auto;
    color: ${props => props.theme.colors.background};
  }

  @media screen and (min-width: 1280px) {
    min-width: 480px;
  }
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const CategoriesButtonWrapper = styled.div`
  display: flex;
  border-bottom: 1px solid ${props => props.theme.colors.secondaryVariant};
  flex-wrap: wrap;
`;

const CategoriesButton = styled(Button)<{ active?: boolean }>`
  font-weight: bold;

  ${props =>
    props.active === true &&
    css`
    background-color: ${props => props.theme.colors.secondaryVariant};
    color: ${props => props.theme.colors.background};
    `}
`;

const Tag: React.FunctionComponent<Props> = ({ genres, platforms }) => {
  const [isAllActive, setIsAllActive] = React.useState(false);
  const [isGenres, setIsGenres] = React.useState(false);
  const [isPlatforms, setIsPlatforms] = React.useState(false);

  React.useEffect(() => {
    setIsAllActive(true);
  }, []);

  function handleAll() {
    setIsAllActive(true);
  }

  function handleGenres() {
    setIsGenres(true);
  }

  function handlePlatforms() {
    setIsPlatforms(true);
  }

  React.useEffect(() => {
    if (isAllActive) {
      setIsGenres(false);
      setIsPlatforms(false);
    }
  }, [isAllActive]);

  React.useEffect(() => {
    if (isGenres) {
      setIsAllActive(false);
      setIsPlatforms(false);
    }
  }, [isGenres]);

  React.useEffect(() => {
    if (isPlatforms) {
      setIsAllActive(false);
      setIsGenres(false);
    }
  }, [isPlatforms]);

  return (
    <Wrapper>
      <CategoriesButtonWrapper>
        <CategoriesButton size="small" variant="tertiary" active={isAllActive} onClick={handleAll}>
          All categories
        </CategoriesButton>
        <CategoriesButton size="small" variant="tertiary" active={isGenres} onClick={handleGenres}>
          Genres
        </CategoriesButton>
        <CategoriesButton
          size="small"
          variant="tertiary"
          active={isPlatforms}
          onClick={handlePlatforms}
        >
          Platforms
        </CategoriesButton>
      </CategoriesButtonWrapper>
      <ListWrapper>
        {isAllActive && (
          <ul>
            {genres.map((genre, index) => {
              return (
                <li key={index}>
                  <Typography element="span" variant="b2" content={genre.name} />
                </li>
              );
            })}
            {platforms.map((platform, index) => {
              return (
                <li key={index}>
                  <Typography element="span" variant="b2" content={platform.platform.name} />
                </li>
              );
            })}
          </ul>
        )}
        {isGenres && (
          <ul>
            {genres.map((genre, index) => {
              return (
                <li key={index}>
                  <Typography element="span" variant="b2" content={genre.name} />
                </li>
              );
            })}
          </ul>
        )}
        {isPlatforms && (
          <ul>
            {platforms.map((platform, index) => {
              return (
                <li key={index}>
                  <Typography element="span" variant="b2" content={platform.platform.name} />
                </li>
              );
            })}
          </ul>
        )}
      </ListWrapper>
    </Wrapper>
  );
};

export default Tag;
