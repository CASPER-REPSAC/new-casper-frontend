import styled from 'styled-components';
import CommonCenterWrapper from '../CommonCenterWrapper/CommonCenterWrapper';

export const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px;
  background-color: ${(props) => props.theme.color2};
  color: ${(props) => props.theme.textColor};
`;

export const Body = styled(CommonCenterWrapper)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

export const Sns = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100px;
`;
export const Info = styled.div`
  font-size: 1.2rem;
  font-weight: lighter;
  display: flex;
  text-align: right;
  flex-direction: column;
`;
export const Span = styled.span`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;
