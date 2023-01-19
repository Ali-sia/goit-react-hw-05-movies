import styled from 'styled-components';

export const Photo = styled.img`
  height: 250px;
  width: 100%;
  object-fit: cover;
`;

export const CastList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: -${p => p.theme.space[4]}px;
  text-align: center;
`;

export const CastItem = styled.li`
  width: 150px;
  min-heght: 200px;
  margin: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.sm};
  overflow: hidden;
  box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.3);
`;

export const ActorName = styled.p`
  // font-size: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[0]}px;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: 600;
`;
export const CharacterName = styled.p`
  font-size: ${p => p.theme.fontSizes.s};
`;
