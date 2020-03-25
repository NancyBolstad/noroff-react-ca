import * as React from 'react';
import styled from 'styled-components';
import Typography from '../Typography';

const Wrapper = styled.footer`
  width: 100%;
  background-color: ${props => props.theme.colors.surface};
  height: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const FooterBottomWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;

  a {
    color: ${props => props.theme.colors.onSurface};
    text-decoration: none;
  }
  a:hover {
    opacity: 0.5;
  }
`;

export interface Props {}

export const Footer: React.FC<Props> = () => {
  return (
    <Wrapper>
      <FooterBottomWrapper>
        <a href="https://rawg.io/" title="Go to RAWG Video Games ">
          <Typography
            variant="b2"
            element="h6"
            content="Developed with RAWG Video Games Database API"
            isPrimaryColor
          />
        </a>
      </FooterBottomWrapper>
    </Wrapper>
  );
};

export default Footer;
