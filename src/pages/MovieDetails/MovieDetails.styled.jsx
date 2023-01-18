import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Poster = styled.img`
  max-width: 150px;
`;

export const Title = styled.h2`
  margin-bottom: ${p => p.theme.space[3]}px;

  font-weight: 700;
  font-style: italic;
`;

export const MovieCaption = styled.span`
  font-weight: 700;
`;
export const MovieParagraph = styled.p`
  :not(:last-child) {
    margin-bottom: ${p => p.theme.space[3]}px;
  }
`;

export const NavItem = styled(NavLink)`
  padding: ${p => p.theme.space[2]}px;
  color: ${p => p.theme.colors.text};
  text-decoration: none;
  border-radius: ${p => p.theme.space[2]}px;

  :not(:last-child) {
    margin-right: ${p => p.theme.space[3]}px;
  }

  &.active {
    color: ${p => p.theme.colors.primary};
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.primary};
    background-color: ${p => p.theme.colors.background_secondary};
  }
`;
