import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-bottom: 3rem;
  margin: 0 auto;
`;

export const SearchFormWrapper = styled.div`
  form {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0 auto;
    width: 80vw;
    @media screen and (min-width: 768px) {
      width: 60vw;
    }
    @media screen and (min-width: 1080px) {
      width: 52vw;
    }
  }
  input[type='text'] {
    border: 2px solid  ${props => props.theme.colors.primaryVariant};
    background:  ${props => props.theme.colors.surface};
    white-space: nowrap;
    padding: 0.55rem 0.75rem;
    font-size: 1.1em;
    text-decoration: none;
    line-height: normal;
    height: 4rem;
    flex-grow: 1;
    width: 40vw;
  }
  button[type='submit'] {
    background-color: ${props => props.theme.colors.secondaryVariant};
    color: ${props => props.theme.colors.background};
    border: none;
    cursor: pointer;
    flex-grow: 1;
    width: 10vw;
    svg {
      height: 1.5rem;
      width: 1.5rem;
      fill: ${props => props.theme.colors.background};
    }
    @media screen and (min-width: 1080px) {
      width: 3rem;
    }
  }
  input[type='text']:focus {
    background: #ffffff;
    outline: none;
    border: 2px solid  ${props => props.theme.colors.secondaryVariant};
  }
  button[type='submit']:focus {
    outline: none;
  }
  button[type='submit']:hover {
    opacity: 0.7;
  }
`;