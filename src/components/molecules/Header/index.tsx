import { memo, useState } from 'react';
import { styled } from 'styled-components';
import { CommonCenterWrapper } from '@src/components/common/centerWrapper';
import { DefaultButton } from '@src/components/common/defaultTag';
import { MenuIcon } from '@src/components/common/icons';
import { PageShadow } from '@src/components/common';
import { useWindowSize } from '@src/hooks';
import { ICON_SIZE } from '@src/constants/size';
import SCREEN_SIZE from '@src/constants/screenWidth';
import Z_INDEX from '@src/constants/zIndex';
import HambergerMenuSection from './HambergerMenuSection';
import LogoSection from './LogoSection';
import LoadingProgressBar from './LoadingProgressBar';
import BarNavMenuSection from './BarNavMenuSection';

function Header() {
  const [pageShadow, setPageShadowShow] = useState(false);
  const [isHambergerMenuOpen, setHambergerMenuOpen] = useState(false);
  const { width } = useWindowSize();

  const toggleMenu = () => {
    setHambergerMenuOpen((cur) => !cur);
  };

  const closeMenu = () => {
    setHambergerMenuOpen(false);
  };

  const showPageShadow = () => {
    setPageShadowShow(true);
  };

  const hidePageShadow = () => {
    setPageShadowShow(false);
  };
  return (
    <>
      {pageShadow && <PageShadow />}
      <Wrapper>
        <CenterWrapper>
          {width < SCREEN_SIZE.tablet && (
            <DefaultButton onClick={toggleMenu}>
              <MenuIcon size={ICON_SIZE.large} />
            </DefaultButton>
          )}
          {width < SCREEN_SIZE.tablet && isHambergerMenuOpen && (
            <HambergerMenuSection onClick={closeMenu} />
          )}

          <LogoSection />

          {width >= SCREEN_SIZE.tablet && (
            <BarNavMenuSection
              onMouseEnter={showPageShadow}
              onMouseLeave={hidePageShadow}
            />
          )}
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
