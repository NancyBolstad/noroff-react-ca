import * as React from 'react';
import {
  HeaderWrapper,
  HeaderNav,
  HeaderMenuLeft,
  HeaderMenuRight,
  HeaderNavLinkList,
  HeaderNavLink,
  SiteLogo,
  ModeSwitchButton,
  TogglerSlider,
  MobileMenuIcon,
  MobileMenuWrapper,
} from './styles';
//import ThemeWrapper from '../ThemeWrapper';
import { ContrastContext } from '../../context/Contrast';
import { Context } from '../../context/GlobalContext';
import { hamburger, cross } from '../../util/icons';
import useIsDesktop from '../../hooks/useIsDesktop';

const Header: React.FunctionComponent = () => {
  const { theme, toggleContrast } = React.useContext(ContrastContext);
  const { favorites } = React.useContext(Context);
  const isDesktop = useIsDesktop();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';

      return () => {
        document.body.style.overflow = 'unset';
      };
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <HeaderWrapper>
        <HeaderNav>
          <HeaderMenuLeft>
            <SiteLogo to="/">RAWG</SiteLogo>
            {isDesktop && (
              <HeaderNavLinkList>
                <li>
                  <HeaderNavLink to="/favorites">Favorites ({favorites.length})</HeaderNavLink>
                </li>
                <li>
                  <HeaderNavLink to="/contact">Contact</HeaderNavLink>
                </li>
              </HeaderNavLinkList>
            )}
          </HeaderMenuLeft>
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
            {!isDesktop && (
              <MobileMenuIcon
                variant="primary"
                size="small"
                onClick={e => {
                  e.preventDefault();
                  setIsMobileMenuOpen(!isMobileMenuOpen);
                }}
              >
                {isMobileMenuOpen ? cross : hamburger}
              </MobileMenuIcon>
            )}
          </HeaderMenuRight>
        </HeaderNav>
      </HeaderWrapper>
      {!isDesktop && isMobileMenuOpen && (
        <MobileMenuWrapper>
          <HeaderNavLink to="/favorites">Favorites ({favorites.length})</HeaderNavLink>
          <HeaderNavLink to="/contact">Contact</HeaderNavLink>
        </MobileMenuWrapper>
      )}
    </>
  );
};

export default Header;
