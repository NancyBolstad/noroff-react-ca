import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.header`
  width: 100%;
  background: ${props => props.theme.colors.secondaryVariant};
  color: ${props => props.theme.colors.onSecondary};
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavLinkList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  }
`;

export const NavLink = styled(Link)`
  color: ${props => props.theme.colors.onSecondary};
  font-size: 1.75rem;
  font-weight: bold;
  margin-right: ${props => props.theme.spacing.s}rem;
  text-decoration: none;
  padding: 0.5rem 1.5rem;

  &:hover {
    opacity: 0.8;
  }
`;

export const LoginButton = styled(NavLink)`
  border: 2px solid ${props => props.theme.colors.onSecondary};
  list-text-style: none;
  padding: 0.5rem 1.5rem;
`;

export const MenuLeft = styled.div`
  flex: 1;
  display: flex;
`;

export const MenuRight = styled.div`
  list-style-type: none;
`;
