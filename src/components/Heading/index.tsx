import * as React from 'react';
import styled from 'styled-components';
import createFontStyles from '../../util/createFontStyles';

interface HeadingProps {
  content: string;
  isPrimaryColor?: boolean;
}

const Element = styled.h1<{ isPrimaryColor?: boolean }>`
  margin: ${props => props.theme.spacing.m}rem auto;
  color: ${props =>
    props.isPrimaryColor ? props.theme.colors.primary : props.theme.colors.secondary};
  ${props => createFontStyles(props.theme.fonts.h1)};
  text-align: center;

  @media all and (min-width: 600px) {
    margin: ${props => props.theme.spacing.l}rem 0;
  }
`;

const Heading: React.FC<HeadingProps> = ({ content, isPrimaryColor }) => {
  return <Element isPrimaryColor={isPrimaryColor}>{content}</Element>;
};

export default Heading;
