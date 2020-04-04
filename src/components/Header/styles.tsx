import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderWrapper = styled.header`
  width: 100%;
  background: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.onSecondary};
  position: fixed;
`;

export const HeaderNav = styled.nav`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${props => props.theme.spacing.s}rem;

  @media (min-width: ${props => props.theme.mediaQueries.large}px) {
    padding: 0 ${props => props.theme.spacing.l}rem;
    height: 68px;
  }
`;

export const HeaderNavLinkList = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  list-style-type: none;
  -webkit-padding-start: 0;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;
`;

export const HeaderNavLink = styled(Link)`
  color: ${props => props.theme.colors.onSecondary};
  font-size: 1.25rem;
  font-weight: bold;
  margin-right: ${props => props.theme.spacing.s}rem;
  text-decoration: none;
  display: flex;
  justify-items: center;
  align-items: center;

  &:hover {
    opacity: 0.8;
  }
  @media (min-width: ${props => props.theme.mediaQueries.large}px) {
    padding: 0.5rem 1rem;
  }
`;

export const SiteLogo = styled(HeaderNavLink)`
  color: white;
  font-weight: bold;
  font-size: 2rem;
  text-shadow: 2px 2px;
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
  display: flex;
`;

export const ModeSwitchButton = styled.a`
  display: flex;
  justify-content: space-between;
  padding: 0;
  background-color: black;
  border-radius: 20px;
  position: relative;
  width: 5rem;
  height: 2.1rem;
  min-width: none;
  font-size: 1.5rem;
  padding: 0 0.5rem;
  cursor: pointer;

  &:hover,
  &:active,
  &:focus {
    background-color: black;
  }
`;

export const TogglerSlider = styled.span<{ mode: string }>`
  width: 2.6rem;
  height: 2.1rem;
  position: absolute;
  top: 0;
  background-color: #f7f8f6;
  box-shadow: 1px 2px 4px black;
  border-radius: 20px;
  transition: transform 0.1s ease-in-out;

  ${props =>
    props.mode === 'default' &&
    css`
      right: 0;
    `}

  ${props =>
    props.mode === 'dark' &&
    css`
      left: 0;
    `}
`;
