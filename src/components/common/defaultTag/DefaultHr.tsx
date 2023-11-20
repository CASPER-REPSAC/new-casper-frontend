import styled from 'styled-components';

const DefaultHr = styled.hr`
  background: ${({ theme }) => theme.borderDefault};
  height: 1px;
  border: 0;
`;

export default DefaultHr;
