import { memo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { styled } from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import { MenuIcon } from 'app/_components/icons';
import { useWindowSize } from 'app/_hooks';
import { ICON_SIZE } from 'app/_constants/size';
import SCREEN_SIZE from 'app/_constants/screenWidth';
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
    <>
      <Wrapper>
        <div className="common-center flex h-full items-center justify-between">
          {width < SCREEN_SIZE.tablet && (
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

          {width >= SCREEN_SIZE.tablet && <BarNaviagtion />}
        </div>
        <LoadingProgressBar />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 60px;
  border-bottom: 1px solid ${({ theme }) => theme.borderDefault};
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
`;

export default memo(Header);
