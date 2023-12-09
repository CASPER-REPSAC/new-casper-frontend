import { memo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { MenuIcon } from 'app/_components/icons';
import { ICON_SIZE } from 'app/_constants/size';
import { PATH } from 'app/_constants/urls';
import BarNaviagtion from './BarNavigation';
import HambergerNavigation from './HambergerNavigation';
import { CasperLogo, DefaultButton } from '../../common';
import ThemeToggle from './ThemeToggle';

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
      <motion.div
        className="sticky top-0 z-header flex h-14 w-screen bg-white shadow 
        backdrop-blur
        dark:border-b
        dark:border-solid
        dark:border-b-slate-300/10
        dark:bg-slate-900/10
        "
      >
        <div className="common-center flex h-full items-center justify-between">
          <DefaultButton className="block lg:hidden" onClick={toggleMenu}>
            <MenuIcon size={ICON_SIZE.large} />
          </DefaultButton>

          <button
            type="button"
            aria-label="logo"
            className="cursor-pointer"
            onClick={() => push(PATH.home.url)}
          >
            <CasperLogo />
          </button>
          <ThemeToggle />

          <BarNaviagtion className="hidden lg:flex" />
        </div>
      </motion.div>
    </>
  );
}

export default memo(Header);
