import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.color1};
  height: 120px;
  width: 100vw;
  border-top: 1px solid ${(props) => props.theme.textColor};
  border-bottom: 1px solid ${(props) => props.theme.textColor};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;
  margin-bottom: 110px;
  position: relative;
  left: -160px;

  @media screen and (max-width: 1440px) {
    margin-bottom: 50px;
    left: -40px;
  }
`;
export const Title = styled.div`
  font-size: 4.8rem;
`;
export const Sub = styled.div`
  font-size: 1.6rem;
  font-weight: lighter;
`;