import styled from "styled-components";

export const CharacterCard = styled.li`
  margin-bottom: 32px;

  border-radius: 4px;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12),
    0px 2px 4px rgba(0, 0, 0, 0.14);
  cursor: pointer;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const CharacterImage = styled.img`
  width: 100%;
  height: 232px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

export const CharacterInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
  margin: 12px 16px;
`;

export const CharacterName = styled.h2`
  font-size: 20px;
  line-height: 1.5;
`;

export const CharacterSpecies = styled.p`
  font-weight: 400;
  color: rgba(0, 0, 0, 0.6);
`;
