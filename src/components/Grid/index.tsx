import styled, { css } from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-gap: ${props => props.theme.spacing.xs}rem;
  grid-auto-rows: 260px;
  grid-template-columns: 1fr;

  @media all and (min-width: ${props => props.theme.mediaQueries.medium}px) {
    grid-auto-rows: 306px;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: ${props => props.theme.spacing.s}rem;
  }
`;

interface GridItemProps {
  column?: string;
  row?: string;
  background?: string;
}

const GridItem = styled.div<GridItemProps>`
  background-color: ${props => props.theme.colors.surface};
  display: flex;
  ${props =>
    props.column &&
    css`
      @media all and (min-width: ${props => props.theme.mediaQueries.medium}px) {
        grid-column: ${props.column};
      }
    `};
  ${props =>
    props.row &&
    css`
      grid-row: ${props.row};
    `};
  ${props =>
    props.background &&
    css`
      background-image: url(${props.background});
      background-position: center;
      background-size: cover;
    `};
`;

export default Grid;
export { GridItem };
