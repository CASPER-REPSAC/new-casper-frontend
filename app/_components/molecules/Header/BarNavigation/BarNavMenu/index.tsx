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
      <div className="flex-center relative left-0 top-0 h-full px-8">
        {title}
      </div>
      <div className="absolute left-1/2 w-full -translate-x-1/2">
        {subMenus && isSubMenuOpen && <SubMenu menus={subMenus} />}
      </div>
      {highlight && (
        <div className="absolute bottom-0 left-1/2 w-full -translate-x-1/2">
          <motion.div
            layoutId="nav_highlight"
            className="mx-auto h-0.5 w-1/3 rounded bg-sky-400 dark:bg-sky-600 "
          />
        </div>
      )}
    </div>
  );
}

export default BarNavMenu;
