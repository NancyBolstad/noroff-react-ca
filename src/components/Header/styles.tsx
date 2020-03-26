import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderWrapper = styled.header`
  width: 100%;
  background: ${props => props.theme.colors.secondaryVariant};
  color: ${props => props.theme.colors.onSecondary};
`;

export const HeaderNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${props => props.theme.spacing.xs}rem;
`;

export const HeaderNavLinkList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  padding: 0;
`;

export const HeaderNavLink = styled(Link)`
  color: ${props => props.theme.colors.onSecondary};
  font-size: 1.25rem;
  font-weight: bold;
  margin-right: ${props => props.theme.spacing.s}rem;
  text-decoration: none;

  &:hover {
    opacity: 0.8;
  }

  @media (min-width: ${props => props.theme.mediaQueries.large}px) {
    padding: 0.5rem 1rem;
  }
`;

export const SiteLogo = styled(HeaderNavLink)`
  color: yellow;
  font-weight: 900;
  font-size: 2rem;
`;

export const HeaderButton = styled(HeaderNavLink)`
  border: 2px solid ${props => props.theme.colors.onSecondary};
  list-text-style: none;
  padding: 0.2rem 0.5rem;

  @media (min-width: ${props => props.theme.mediaQueries.large}px) {
    padding: 0.5rem 1rem;
  }
`;

export const HeaderMenuLeft = styled.div`
  display: flex;
`;

export const HeaderMenuRight = styled.div`
  list-style-type: none;
`;
