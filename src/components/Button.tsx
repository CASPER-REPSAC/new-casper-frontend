import { MotionStyle, Variants, motion } from "framer-motion";
import { MouseEventHandler } from "react";
import styled from "styled-components";

const Wrapper = styled(motion.button)`
  width: 80px;
  height: 30px;
  background-color: ${({ theme }) => theme.color2};
  border: 0;
  color: ${({ theme }) => theme.textColor};
  cursor: pointer;
  font-size: 1.6rem;
`;

interface IButton {
  text: string;
  style?: MotionStyle;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
const buttonVars: Variants = {
  hover: {
    filter: "brightness(0.9)",
  },
};

function Button({ text, style, onClick }: IButton) {
  return (
    <Wrapper
      variants={buttonVars}
      onClick={onClick}
      whileHover={"hover"}
      style={style}
    >
      {text}
    </Wrapper>
  );
}

export default Button;
