import * as React from 'react';
import {
  HeaderWrapper,
  HeaderNav,
  HeaderMenuRight,
  HeaderNavLinkList,
  HeaderNavLink,
  SiteLogo,
} from './styles';
import ThemeWrapper from '../ThemeWrapper';
import Button from '../Button';
import { ContrastContext } from '../../context/Contrast';
import { sun, moon } from '../../util/icons';

const Header: React.FunctionComponent = () => {
  const { theme, toggleContrast } = React.useContext(ContrastContext);
  return (
    <ThemeWrapper>
      <HeaderWrapper>
        <HeaderNav>
          <HeaderNavLinkList>
            <SiteLogo to="/">RAWG</SiteLogo>
            <li>
              <HeaderNavLink to="/favorites">Favorites</HeaderNavLink>
            </li>
            <li>
              <HeaderNavLink to="/contact">Contact</HeaderNavLink>
            </li>
          </HeaderNavLinkList>
          <HeaderMenuRight>
            <Button variant="secondary" size="small" onClick={() => toggleContrast()}>
              {theme === 'default' ? sun : moon}
            </Button>
          </HeaderMenuRight>
        </HeaderNav>
      </HeaderWrapper>
    </ThemeWrapper>
  );
};

export default Header;
