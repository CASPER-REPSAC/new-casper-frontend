import { motion } from 'framer-motion';
import Link from 'next/link';
import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  position: relative;
  top: 0;
  width: 100vw;
  height: 70px;
  line-height: 70px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  background-color: rgba(255, 255, 255, 0);
  z-index: 10;
  font-size: 2rem;
`;
export const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Img = styled.img`
  width: 170px;
  height: 36px;
  cursor: pointer;
`;
export const NavItems = styled.div`
  display: flex;
  align-items: center;
`;

export const DarkModeButton = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

// NavItem
export const NavItemWrapper = styled.div`
  display: flex;
`;
export const Item = styled(motion.div)<{ ishome: string }>`
  position: relative;
  text-decoration: none;
  cursor: pointer;
  margin: 0 1.5em 0 1.5em;
  color: ${(props) =>
    props.ishome === 'true' ? 'white' : props.theme.textDefault};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  opacity: 0.4;
`;
export const UnderLine = styled(motion.div)`
  position: absolute;
  bottom: 15px;
  width: 100%;
  height: 1px;
  background-color: ${(props) => props.theme.borderBold};
`;
export const NavSubMenu = styled(motion.div)`
  background-color: ${({ theme }) => theme.surfaceAlt};
  position: absolute;
  top: 70px;
  color: ${({ theme }) => theme.textDefault};
  transform-origin: top;
  display: flex;
  flex-direction: column;
`;
export const StyledLink = styled(motion(Link))`
  text-decoration: none;
  color: ${({ theme }) => theme.textDefault};
  width: 100%;
  height: 100%;
  line-height: 4rem;
  font-size: 1.6rem;
  padding-left: 1.2em;
  padding-right: 1.2em;
  &:hover {
    background-color: ${({ theme }) => theme.surfacePointAlt};
  }
  border-bottom: 1px solid ${({ theme }) => theme.borderDefault};
  z-index: 100;
`;
export const StyledA = styled(motion.a)`
  text-decoration: none;
  color: ${({ theme }) => theme.textDefault};
  width: 100%;
  height: 100%;
  line-height: 4rem;
  font-size: 1.6rem;
  padding-left: 1.2em;
  padding-right: 1.2em;
  &:hover {
    background-color: ${({ theme }) => theme.surfacePointAlt};
  }
  border-bottom: 1px solid ${({ theme }) => theme.borderDefault};
  z-index: 100;
`;
export const Div = styled.div`
  display: flex;
  width: 7em;
  height: 4rem;
  line-height: 4rem;
`;