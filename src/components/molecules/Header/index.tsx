import { useRouter } from 'next/router';
import { memo, useState } from 'react';
import { styled } from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import { CommonCenterWrapper } from '@src/components/common/centerWrapper';
import { DefaultButton } from '@src/components/common/defaultTag';
import { MenuIcon } from '@src/components/common/icons';
import { CasperLogo } from '@src/components/common';
import { useWindowSize } from '@src/hooks';
import { ICON_SIZE } from '@src/constants/size';
import SCREEN_SIZE from '@src/constants/screenWidth';
import Z_INDEX from '@src/constants/zIndex';
import { PATH } from '@src/constants/urls';
import LoadingProgressBar from './LoadingProgressBar';
import BarNaviagtion from './BarNavigation';
import HambergerNavigation from './HambergerNavigation';

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
        <CenterWrapper>
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
        </CenterWrapper>
        <LoadingProgressBar />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  z-index: ${Z_INDEX.header};
  width: 100vw;
  height: 60px;
  border-bottom: 1px solid ${({ theme }) => theme.borderDefault};
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
`;

const CenterWrapper = styled(CommonCenterWrapper)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

export default memo(Header);
