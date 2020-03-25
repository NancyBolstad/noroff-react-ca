import * as React from 'react';
import { Wrapper, Nav, MenuRight, NavLinkList, NavLink, SubmitButton } from './styles';
import ThemeWrapper from '../ThemeWrapper';

const Header: React.FC = () => {
  return (
    <ThemeWrapper>
      <Wrapper>
        <Nav>
          <NavLinkList>
            <NavLink to="/">GA-ME</NavLink>
            <NavLink to="/favorites">Favorites</NavLink>
          </NavLinkList>
          <MenuRight>
            <li>
              <SubmitButton to="/contact">Contact</SubmitButton>
            </li>
          </MenuRight>
        </Nav>
      </Wrapper>
    </ThemeWrapper>
  );
};

export default Header;
