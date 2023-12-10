'use client';

import { ReactNode, useState } from 'react';
import { motion } from 'framer-motion';
import SubMenu from './SubMenu';

interface Props {
  title: ReactNode;
  subMenus?: JSX.Element[];
  highlight?: boolean;
}

function BarNavMenu({ title, subMenus, highlight }: Props) {
  const [isSubMenuOpen, setSubMenuOpen] = useState(false);

  return (
    <div
      className="relative h-full"
      onMouseEnter={() => setSubMenuOpen(true)}
      onMouseLeave={() => setSubMenuOpen(false)}
    >
      <div className="flex-center relative left-0 top-0 h-full px-4">
        {title}
      </div>
      <div className="absolute left-1/2 -translate-x-1/2">
        {subMenus && isSubMenuOpen && <SubMenu menus={subMenus} />}
      </div>
      {highlight && (
        <motion.div
          layoutId="nav_highlight"
          className="absolute bottom-0 w-full "
          style={{ originY: '0px' }}
        >
          <motion.div className="mx-auto h-0.5 w-1/3 rounded bg-sky-400 dark:bg-sky-600 " />
        </motion.div>
      )}
    </div>
  );
}

export default BarNavMenu;
