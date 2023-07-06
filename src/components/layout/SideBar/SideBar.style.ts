import { motion } from 'framer-motion';
import Link from 'next/link';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: inline;
  flex-direction: column;
  float: left;
  height: 100%;
  min-width: 230px;
  width: 230px;
  border-right: 1px solid ${(props) => props.theme.color2};
  border-left: 1px solid ${(props) => props.theme.color2};
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
export const Highlight = styled(motion.div)`
  position: absolute;
  left: -1px;
  background-color: rgba(0, 0, 0, 0.2);
  border-right: 1px solid ${(props) => props.theme.textColor};
  border-left: 1px solid ${(props) => props.theme.textColor};
  width: 100%;
  height: 100%;
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.textColor};
`;
