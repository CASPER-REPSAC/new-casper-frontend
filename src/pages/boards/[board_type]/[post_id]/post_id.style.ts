import styled from 'styled-components';

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 200px;
`;
export const Hr = styled.hr`
  background: ${({ theme }) => theme.color2};
  border: 0;
  width: 100%;
  height: 1px;
  margin-top: 50px;

  margin-bottom: 50px;
`;
export const AuthorInfo = styled.div`
  display: flex;
  margin-top: 200px;
  align-items: center;
`;
export const Avatar = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${({ theme }) => theme.color1};
  margin-right: 50px;
`;
export const Info = styled.div`
  display: flex;

  flex-direction: column;
`;
export const AuthorName = styled.h1`
  font-size: 2.4rem;
  margin-bottom: 0.5em;
`;
export const Desc = styled.div`
  font-size: 2rem;
`;

export const H1 = styled.h1`
  font-size: 3rem;
  margin-bottom: 1em;
`;
