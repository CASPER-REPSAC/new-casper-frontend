import styled from 'styled-components';

export const ButtonWrapper = styled.button`
  width: 90px;
  height: 40px;
  color: ${({ theme }) => theme.textDefault};
  background-color: inherit;
  border: 1px solid ${({ theme }) => theme.borderDefault};
  cursor: pointer;
  font-size: 1.6rem;
  :hover {
    background-color: ${({ theme }) => theme.surfacePointAlt};
    border: 1px solid ${({ theme }) => theme.borderBold};
  }
`;
