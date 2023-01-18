import styled from 'styled-components';

export const Photo = styled.img`
  width: 50px;
`;

export const CastItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100px;
`;

export const ActorName = styled.p`
  font-size: ${p => p.theme.space[4]}px;
`;
export const CharacterName = styled.p`
  font-size: ${p => p.theme.space[4] + 2}px;
`;
