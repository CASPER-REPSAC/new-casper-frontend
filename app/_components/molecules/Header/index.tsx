import { memo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import { MenuIcon } from 'app/_components/icons';
import { ICON_SIZE } from 'app/_constants/size';
import { PATH } from 'app/_constants/urls';
import BarNaviagtion from './BarNavigation';
import HambergerNavigation from './HambergerNavigation';
import { CasperLogo, DefaultButton } from '../../common';

function Header() {
  const { push } = useRouter();
  const [isHambergerMenuOpen, setHambergerMenuOpen] = useState(false);

  const toggleMenu = () => {
    setHambergerMenuOpen((cur) => !cur);
  };

  const closeMenu = () => {
    setHambergerMenuOpen(false);
  };

  return (
    <>
      <AnimatePresence>
        {isHambergerMenuOpen && <HambergerNavigation onBgClick={closeMenu} />}
      </AnimatePresence>
      <div className="sticky top-0 z-header flex h-14 w-screen border-b border-solid border-gray-600  backdrop-blur-lg">
        <div className="common-center flex h-full items-center justify-between">
          <DefaultButton className="block lg:hidden" onClick={toggleMenu}>
            <MenuIcon size={ICON_SIZE.large} />
          </DefaultButton>

          <CasperLogo
            className="h-10 w-24 cursor-pointer"
            onClick={() => push(PATH.home.url)}
          />

          <BarNaviagtion className="hidden lg:flex" />
        </div>
      </div>
    </>
  );
}

export default memo(Header);
