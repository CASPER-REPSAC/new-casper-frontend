import styled from 'styled-components';

export const Main = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Cards = styled.div`
  margin-left: 30px;
  margin-right: 30px;
  height: 23vw;
  width: 100%;
  display: grid;
  gap: 3px;
  grid-template-columns: repeat(6, 1fr);
  box-sizing: border-box;
`;
export const MemberCard = styled.div`
  transform: skewX(-18deg);
  height: 100%;
  width: 100%;

  background-color: ${({ theme }) => theme.color1};
  opacity: 0.4;
  margin: 0;
`;
