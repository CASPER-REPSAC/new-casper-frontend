import { motion, useAnimationControls } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styled from "styled-components";

const Item = styled(motion(Link))<{ ishome: string }>`
  position: relative;
  text-decoration: none;
  cursor: pointer;
  margin: 0 1.5em 0 1.5em;
  color: ${(props) =>
    props.ishome === "true" ? "white" : props.theme.textColor};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  opacity: 0.4;
`;
const UnderLine = styled(motion.div)`
  position: absolute;
  bottom: 15px;
  width: 100%;
  height: 1px;
  background-color: ${(props) => props.theme.textColor};
`;

interface INavItem {
  path: string;
  children?: React.ReactNode;
}

function NavItem({ path, children }: INavItem) {
  const router = useRouter();
  const isHome = router.pathname === "/";
  const rootPath = path.split("/")[1]; // nav가 가리키는 경로
  const basePath = router.pathname.split("/")[1]; // 현재 경로
  const controls = useAnimationControls();

  useEffect(() => {
    if (rootPath === basePath) {
      controls.start({
        opacity: 1,
      });
    } else {
      controls.start({
        opacity: 0.4,
      });
    }
  }, [controls, basePath, rootPath]);

  return (
    <Item
      href={`${path}`}
      animate={controls}
      ishome={String(isHome)}
      onMouseOver={() => {
        controls.start({
          opacity: 1,
        });
      }}
      onMouseOut={() => {
        if (rootPath !== basePath) {
          controls.start({
            opacity: 0.4,
          });
        }
      }}
    >
      {children}
      {basePath === `${rootPath}` ? <UnderLine layoutId="underline" /> : null}
    </Item>
  );
}

export default NavItem;
