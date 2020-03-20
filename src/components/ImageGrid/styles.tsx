import styled, { css } from 'styled-components';

export const ImageItem = styled.div<{ imageURL?: string }>`
  width: 100%;
  background-color: ${props => props.theme.colors.surface};
  ${props =>
    props.imageURL &&
    css`
      background-image: url(${props.imageURL});
      background-size: cover;
      background-position: center;
    `};
`;

export default ImageItem;
