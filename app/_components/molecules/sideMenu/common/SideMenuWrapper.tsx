import { motion } from 'framer-motion';
import { styled } from 'styled-components';

const SideMenuWrapper = styled(motion.div).attrs(() => ({
  layoutRoot: true,
  layout: true,
}))`
  position: sticky;
  top: 200px;

  display: inline;
  flex-direction: column;
  height: 100%;
  min-width: 230px;
  width: 230px;
  margin-right: 50px;

  @media screen and (max-width: 1024px) {
    width: 100%;
    position: static;
  }
`;

export default SideMenuWrapper;
