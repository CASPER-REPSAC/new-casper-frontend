import { memo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import { MenuIcon } from 'app/_components/icons';
import { useWindowSize } from 'app/_hooks';
import { ICON_SIZE } from 'app/_constants/size';
import Z_INDEX from 'app/_constants/zIndex';
import { PATH } from 'app/_constants/urls';
import LoadingProgressBar from './LoadingProgressBar';
import BarNaviagtion from './BarNavigation';
import HambergerNavigation from './HambergerNavigation';
import { CasperLogo, DefaultButton } from '../../common';

function Header() {
  const { push } = useRouter();
  const [isHambergerMenuOpen, setHambergerMenuOpen] = useState(false);
  const { width } = useWindowSize();

  const toggleMenu = () => {
    setHambergerMenuOpen((cur) => !cur);
  };

  const closeMenu = () => {
    setHambergerMenuOpen(false);
  };

  return (
    <div
      className={`relative ${Z_INDEX.header} flex h-14 w-screen border-b border-solid border-gray-600  backdrop-blur-lg`}
    >
      <div className="common-center flex h-full items-center justify-between">
        {width < 1024 && (
          <>
            <DefaultButton onClick={toggleMenu}>
              <MenuIcon size={ICON_SIZE.large} />
            </DefaultButton>

            <AnimatePresence>
              {isHambergerMenuOpen && (
                <HambergerNavigation onClick={closeMenu} />
              )}
            </AnimatePresence>
          </>
        )}

        <CasperLogo size="small" onClick={() => push(PATH.home.url)} />

        {width >= 1024 && <BarNaviagtion />}
      </div>
      <LoadingProgressBar />
    </div>
  );
}

export default memo(Header);
