import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  padding-bottom: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.liquid};
  margin-bottom: 10px;
`;
export const Avatar = styled.div`
  background-color: ${({ theme }) => theme.color1};
  width: 70px;
  height: 70px;
  flex-shrink: 0;
`;
export const Body = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 5px 20px 5px 20px;
`;
export const Header = styled.div`
  display: flex;
  font-size: 1.2rem;
  align-items: flex-end;
  margin-bottom: 1em;
`;
export const Content = styled.div`
  font-size: 1.6rem;
  justify-self: center;
`;
export const Name = styled.div`
  font-size: 1.1em;
  margin-right: 0.5em;
`;
export const Date = styled.div`
  opacity: 0.8;
`;
export const Buttons = styled.div`
  margin-left: auto;
`;

export const Button = styled.button`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.textColor};
  background-color: inherit;
  border: 0;
  cursor: pointer;
`;
