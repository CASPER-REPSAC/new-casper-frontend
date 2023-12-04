import { ReactNode, useState } from 'react';
import SubMenu from './SubMenu';

interface Props {
  title: ReactNode;
  subMenus?: JSX.Element[];
}

function BarNavMenu({ title, subMenus }: Props) {
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
    </div>
  );
}

export default BarNavMenu;
