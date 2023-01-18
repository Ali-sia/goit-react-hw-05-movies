import styled from 'styled-components';
import { NavLink, Outlet } from 'react-router-dom';

export const NavItem = styled(NavLink)`
  padding: ${p => p.theme.space[2]}px;
  color: ${p => p.theme.colors.text};
  text-decoration: none;
  &.active {
    color: ${p => p.theme.colors.primary};
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.primary};
  }
`;
