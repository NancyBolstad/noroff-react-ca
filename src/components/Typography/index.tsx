import * as React from 'react';
import styled, { StyledComponent, css } from 'styled-components';
import createFontStyles from '../../util/createFontStyles';
import { IFonts } from '../../types/theme';
import pixelsToRem from '../../util/pixelsToRem';

type Element = 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type Variant = keyof IFonts;

interface Space {
  top?: number;
  topDesktop?: number;
  bottom?: number;
  bottomDesktop?: number;
}

const Space = css<Space>`
  margin: 0 auto;
  ${props =>
    !!props.top &&
    css`
      margin-top: ${pixelsToRem(props.top)}rem;
    `};
  ${props =>
    !!props.topDesktop &&
    css`
      @media all and (min-width: ${props => props.theme.mediaQueries.small}) {
        margin-top: ${pixelsToRem(props.topDesktop)}rem;
      }
    `};
  ${props =>
    !!props.bottom &&
    css`
      margin-bottom: ${pixelsToRem(props.bottom)}rem;
    `};
  ${props =>
    !!props.bottomDesktop &&
    css`
      @media all and (min-width: ${props => props.theme.mediaQueries.small}) {
        margin-bottom: ${pixelsToRem(props.bottomDesktop)}rem;
      }
    `};
`;

interface Styles extends Space {
  variant: Variant;
  align?: 'center' | 'left' | 'right';
  maxWidth?: number;
  isPrimaryColor?: boolean;
}

interface HeadingProps extends Styles {
  element: Element;
  content: string;
}

const P = styled.p<Styles>`
margin: 0 auto;
${props =>
  !!props.top &&
  css`
    margin-top: ${pixelsToRem(props.top)}rem;
  `};
${props =>
  !!props.topDesktop &&
  css`
    @media all and (min-width: ${props => props.theme.mediaQueries.small}) {
      margin-top: ${pixelsToRem(props.topDesktop)}rem;
    }
  `};
${props =>
  !!props.bottom &&
  css`
    margin-bottom: ${pixelsToRem(props.bottom)}rem;
  `};
${props =>
  !!props.bottomDesktop &&
  css`
    @media all and (min-width: ${props => props.theme.mediaQueries.small}) {
      margin-bottom: ${pixelsToRem(props.bottomDesktop)}rem;
    }
  `};
  color: ${props =>
    props.isPrimaryColor ? props.theme.colors.primaryVariant : props.theme.colors.secondary};
  text-align:${props => (props.align ? props.align : 'left')};
  ${props =>
    props.variant === 'b1' &&
    css`
      ${props => createFontStyles(props.theme.fonts.b1)};
    `}
    ${props =>
      props.variant === 'b2' &&
      css`
        ${props => createFontStyles(props.theme.fonts.b2)};
      `}
   ${props =>
     props.variant === 'b3' &&
     css`
       ${props => createFontStyles(props.theme.fonts.b3)};
     `}
     ${props =>
       props.variant === 'h1' &&
       css`
         ${props => createFontStyles(props.theme.fonts.h1)};
       `}
    
    ${props =>
      props.variant === 'h2' &&
      css`
        ${props => createFontStyles(props.theme.fonts.h3)};
      `}
    
    ${props =>
      props.variant === 'h3' &&
      css`
        ${props => createFontStyles(props.theme.fonts.h4)};
      `}
    
    ${props =>
      props.variant === 'h4' &&
      css`
        ${props => createFontStyles(props.theme.fonts.h4)};
      `}
         
    ${props =>
      props.variant === 'h5' &&
      css`
        ${props => createFontStyles(props.theme.fonts.h5)};
      `}
         
    ${props =>
      props.variant === 'h6' &&
      css`
        ${props => createFontStyles(props.theme.fonts.h6)};
      `}
  ${props =>
    props.maxWidth &&
    css`
      max-width: ${props.maxWidth}px;
    `}
`;

const Span = P.withComponent('span');
const H1 = P.withComponent('h1');
const H2 = P.withComponent('h2');
const H3 = P.withComponent('h3');
const H4 = P.withComponent('h4');
const H5 = P.withComponent('h5');
const H6 = P.withComponent('h6');

const Typography: React.FC<HeadingProps> = ({ content, element, variant, ...rest }) => {
  let Elem: StyledComponent<any, any>;

  switch (element) {
    case 'h1':
      Elem = H1;
      break;

    case 'h2':
      Elem = H2;
      break;

    case 'h3':
      Elem = H3;
      break;

    case 'h4':
      Elem = H4;
      break;

    case 'h5':
      Elem = H5;
      break;

    case 'h6':
      Elem = H6;
      break;

    case 'span':
      Elem = Span;
      break;

    default:
      Elem = P;
      break;
  }

  return (
    <Elem variant={variant} element={element} {...rest}>
      {content}
    </Elem>
  );
};

export default Typography;
