import Link from 'next/link';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: inline;
  flex-direction: column;
  float: left;
  height: 100%;
  min-width: 230px;
  width: 230px;
  border-right: 1px solid ${(props) => props.theme.borderDefault};
  border-left: 1px solid ${(props) => props.theme.borderDefault};
  margin-right: 50px;
`;
export const Item = styled.div`
  position: relative;
  display: flex;
  padding: 1em;
  height: 30px;
  font-size: 2rem;
  align-items: center;
`;
export const Highlight = styled.div`
  position: absolute;
  left: -1px;
  background-color: ${({ theme }) => theme.surfacePointAlt};
  border-right: 1px solid ${(props) => props.theme.borderDefault};
  border-left: 1px solid ${(props) => props.theme.borderDefault};
  width: 100%;
  height: 100%;
  z-index: -1;
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.textDefault};
`;
