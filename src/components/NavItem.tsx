import { Variants, motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const Item = styled(motion(Link))<{ ishome: string }>`
  position: relative;
  text-decoration: none;
  margin-left: 1em;
  cursor: pointer;
  color: ${(props) =>
    props.ishome === "true" ? "white" : props.theme.textColor};
`;
const UnderLine = styled(motion.div)`
  position: absolute;
  bottom: 15px;
  width: 100%;
  height: 2px;
  background-color: ${(props) => props.theme.textColor};
`;
const itemVars: Variants = {
  initial: {
    opacity: 0.4,
  },
  animate: {
    opacity: 1,
  },
};
interface INavItem {
  text: string;
  path: string;
  basePath: string;
}

function NavItem({ text, path, basePath }: INavItem) {
  const router = useRouter();
  const isHome = router.pathname === "/";
  const rootPath = path.split("/")[1]; // 루트 다음 최상위 경로

  return (
    <Item
      href={`${path}`}
      variants={itemVars}
      whileHover="animate"
      initial="initial"
      ishome={String(isHome)}
    >
      {text}
      {basePath === `${rootPath}` ? <UnderLine layoutId="underline" /> : null}
    </Item>
  );
}

export default NavItem;
