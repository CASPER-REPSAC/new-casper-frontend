import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px;
  background-color: ${(props) => props.theme.color2};
  color: ${(props) => props.theme.textColor};
`;

export const Sns = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 160px;
  width: 100px;
  @media screen and (max-width: 1440px) {
    margin-left: 40px;
  }
`;
export const Info = styled.div`
  margin-right: 160px;
  font-size: 1.2rem;
  font-weight: lighter;
  display: flex;
  text-align: right;
  flex-direction: column;
  @media screen and (max-width: 1440px) {
    margin-right: 40px;
  }
`;
export const Span = styled.span`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;
