import * as React from 'react';
import {
  HeaderWrapper,
  HeaderNav,
  HeaderMenuRight,
  HeaderNavLinkList,
  HeaderNavLink,
  SiteLogo,
  ModeSwitchButton,
  TogglerSlider,
} from './styles';
import ThemeWrapper from '../ThemeWrapper';
import { ContrastContext } from '../../context/Contrast';
import { Context } from '../../context/GlobalContext';

const Header: React.FunctionComponent = () => {
  const { theme, toggleContrast } = React.useContext(ContrastContext);
  const { favorites } = React.useContext(Context);
  return (
    <ThemeWrapper>
      <HeaderWrapper>
        <HeaderNav>
          <HeaderNavLinkList>
            <SiteLogo to="/">RAWG</SiteLogo>
            <li>
              <HeaderNavLink to="/favorites">
                Favorites {favorites.length >= 1 ? favorites.length : null}
              </HeaderNavLink>
            </li>
            <li>
              <HeaderNavLink to="/contact">Contact</HeaderNavLink>
            </li>
          </HeaderNavLinkList>
          <HeaderMenuRight>
            <ModeSwitchButton onClick={() => toggleContrast()}>
              <span role="img" aria-label="default mode">
                🌞
              </span>
              <span role="img" aria-label="dark mode">
                🌛
              </span>
              <TogglerSlider mode={theme} />
            </ModeSwitchButton>
          </HeaderMenuRight>
        </HeaderNav>
      </HeaderWrapper>
    </ThemeWrapper>
  );
};

export default Header;
