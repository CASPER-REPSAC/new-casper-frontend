import styled from "styled-components";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 230px;
  height: 400px;
  border-right: 1px solid ${(props) => props.theme.color2};
  border-left: 1px solid ${(props) => props.theme.color2};
  margin-right: 50px;
`;
const Item = styled.div`
  display: flex;
  padding: 1em;
  height: 70px;
  font-size: 2rem;

  align-items: center;
`;

interface SideBarProps {
  menus: string[];
}

function SideBar({ menus }: SideBarProps) {
  return (
    <Wrapper>
      {menus.map((menu, idx) => (
        <Item key={idx}>{menu}</Item>
      ))}
    </Wrapper>
  );
}

export default SideBar;
