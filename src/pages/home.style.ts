import styled from 'styled-components';

export const Background = styled.div<{ bgurl: string }>`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-image: url(${(props) => props.bgurl});
  background-position: center;
  background-size: cover;
  filter: brightness(50%);
  z-index: -1;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10vh;
  position: absolute;
  top: 25vh;
  left: 160px;
  color: white;
  @media screen and (max-width: 1440px) {
    left: 40px;
  }
`;
export const Notice = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  width: 500px;
  font-size: 2.5rem;
`;
export const Title = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`;
export const H1 = styled.div`
  font-size: 6rem;
  font-weight: bold;
  line-height: 0.9em;
  margin-bottom: 0.2em;
`;
export const H2 = styled.div`
  font-size: 2.5rem;
  opacity: 0.8;
  font-weight: lighter;
`;
export const PageBar = styled.div`
  display: flex;
  height: 3px;
  width: 210px;
  background-color: rgba(255, 255, 255, 0.4);
  margin-right: 2em;
`;
export const CurPageBar = styled.div`
  height: 3px;
  width: 100%;
`;
export const White = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
`;
export const Page = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 1em;
`;
export const All = styled.div`
  font-size: 2rem;
  opacity: 0.4;
`;
export const Cur = styled.div`
  font-size: 2.5rem;
  margin-right: 0.3em;
`;
export const Col = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const LeftButton = styled.div`
  cursor: pointer;
`;
export const RightButton = styled.div`
  cursor: pointer;
`;
