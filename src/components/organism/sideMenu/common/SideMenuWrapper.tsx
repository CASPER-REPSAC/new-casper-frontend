import { styled } from 'styled-components';

const SideMenuWrapper = styled.div`
  display: inline;
  flex-direction: column;
  height: 100%;
  min-width: 230px;
  width: 230px;
  margin-right: 50px;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

export default SideMenuWrapper;
