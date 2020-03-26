import * as React from 'react';
import {
  HeaderWrapper,
  HeaderNav,
  HeaderMenuRight,
  HeaderNavLinkList,
  HeaderNavLink,
  HeaderButton,
  SiteLogo,
} from './styles';
import ThemeWrapper from '../ThemeWrapper';

const Header: React.FunctionComponent = () => {
  return (
    <ThemeWrapper>
      <HeaderWrapper>
        <HeaderNav>
          <HeaderNavLinkList>
            <li>
              <HeaderNavLink to="/favorites">Favorites</HeaderNavLink>
            </li>
          </HeaderNavLinkList>
          <SiteLogo to="/">RAWG</SiteLogo>
          <HeaderMenuRight>
            <HeaderButton to="/contact">Contact</HeaderButton>
          </HeaderMenuRight>
        </HeaderNav>
      </HeaderWrapper>
    </ThemeWrapper>
  );
};

export default Header;
