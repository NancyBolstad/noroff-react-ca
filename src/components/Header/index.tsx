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
            <HeaderNavLink to="/favorites">Favorites</HeaderNavLink>
          </HeaderNavLinkList>
          <SiteLogo to="/">RAWG</SiteLogo>
          <HeaderMenuRight>
            <li>
              <HeaderButton to="/contact">Contact</HeaderButton>
            </li>
          </HeaderMenuRight>
        </HeaderNav>
      </HeaderWrapper>
    </ThemeWrapper>
  );
};

export default Header;
