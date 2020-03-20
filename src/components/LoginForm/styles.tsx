import styled from 'styled-components';
import createFontStyles from '../../util/createFontStyles';

export const Form = styled.form`
  max-width: 480px;
  margin: 0 auto;
  padding: ${props => props.theme.spacing.s}rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
    margin-top: ${props => props.theme.spacing.s}rem;
  }
`;

export const Label = styled.label`
  ${props => createFontStyles(props.theme.fonts.b2)};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: ${props => props.theme.spacing.s}rem 0;
`;

export const StyledLabelText = styled.span`
  width: 40%;
  border: 1px solid ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.secondary};
  padding: 0 32px;
  height: 40px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  ${props => createFontStyles(props.theme.fonts.b2)};
`;

export const StyledInput = styled.input`
  height: 40px;
  width: 60%;
  background-color: ${props => props.theme.colors.background};
  border: 1px solid ${props => props.theme.colors.primaryVariant};
  border-bottom: 2px solid ${props => props.theme.colors.primary};
  padding: 0 32px;
  outline: none;
  transition: border-color 0.1s ease-in-out;
  ${props => createFontStyles(props.theme.fonts.b1)};

  &::placeholder {
    color: ${props => props.theme.colors.primaryVariant};
  }
  &:active,
  &:focus {
    border-bottom: 2px solid ${props => props.theme.colors.secondary};
  }
  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
  &:placeholder-shown {
    border: 1px solid ${props => props.theme.colors.primaryVariant};
  }

  @media all and (min-width: ${props => props.theme.mediaQueries.small}px) {
    min-width: 150px;
  }
`;

export const ErrorMessage = styled.span`
  ${props => createFontStyles(props.theme.fonts.b2)};
`;
