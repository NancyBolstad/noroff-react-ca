import styled from 'styled-components';

export const LoaderWrapper = styled.div`
width: 100%;
top: 50%;
position: fixed;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

svg {
  fill: ${props => props.theme.colors.secondary};
}
`;