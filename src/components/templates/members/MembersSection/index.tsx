import { styled } from 'styled-components';

function MembersSection() {
  return (
    <Cards>
      <MemberCard />
      <MemberCard />
      <MemberCard />
      <MemberCard />
      <MemberCard />
      <MemberCard />
      <MemberCard />
      <MemberCard />
    </Cards>
  );
}

export default MembersSection;

const Cards = styled.div`
  margin-left: 30px;
  margin-right: 30px;
  display: grid;
  gap: 3px;
  grid-template-columns: repeat(2, 1fr);
  box-sizing: border-box;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;
const MemberCard = styled.div`
  transform: skewX(-18deg);
  height: 200px;
  width: 210px;

  background-color: ${({ theme }) => theme.surfaceAlt};
  opacity: 0.4;
  margin: 0;
`;
