import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { styled } from 'styled-components';
import { pageShadowState } from '@src/atoms';
import CommonCenterWrapper from '@src/components/common/CommonCenterWrapper';
import LoadingProgressBar from '@src/components/common/LoadingProgressBar';
import NavMenuSection from '@src/components/organism/Header/BarNavMenuSection';
import DefaultButton from '@src/components/common/DefaultButton';
import { MenuIcon } from '@src/components/common/Icons';
import { ICON_SIZE } from '@src/constants/size';
import Z_INDEX from '@src/constants/zIndex';
import SCREEN from '@src/constants/screenWidth';
import useScreenWidth from '@src/hooks/useScreenWidth';
import HambergerMenuSection from './HambergerMenuSection';
import LogoSection from './LogoSection';

function Navigation() {
  const setPageShadowShow = useSetRecoilState(pageShadowState);
  const screenWidth = useScreenWidth();
  const [isHambergerMenuOpen, setHambergerMenuOpen] = useState(false);

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
    <Wrapper>
      <CenterWrapper>
        {screenWidth < SCREEN.tablet && (
          <DefaultButton onClick={toggleMenu}>
            <MenuIcon size={ICON_SIZE.large} />
          </DefaultButton>
        )}
        {screenWidth < SCREEN.tablet && isHambergerMenuOpen && (
          <HambergerMenuSection onClick={closeMenu} />
        )}

        <LogoSection />

        {screenWidth >= SCREEN.tablet && (
          <NavMenuSection
            onMouseOver={showPageShadow}
            onMouseOut={hidePageShadow}
          />
        )}
      </CenterWrapper>
      <LoadingProgressBar />
    </Wrapper>
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

export default Navigation;
