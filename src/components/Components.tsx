import { motion } from "framer-motion";
import styled from "styled-components";

export const DefaultInput = styled.input`
  :focus {
    border-color: ${({ theme }) => theme.textColor};
    outline: none;
  }
  background-color: ${(props) => props.theme.bgColor};
  border: 1px solid ${(props) => props.theme.color2};
  color: ${(props) => props.theme.textColor};
  padding-left: 10px;
  padding-right: 10px;
  font-size: 1.5rem;
  box-sizing: border-box;
`;

export const DefaultButton = styled(motion.button)`
  width: 80px;
  height: 40px;
  background-color: ${({ theme }) => theme.color2};
  border: 0;
  color: ${({ theme }) => theme.textColor};
  cursor: pointer;
  font-size: 1.6rem;
`;
