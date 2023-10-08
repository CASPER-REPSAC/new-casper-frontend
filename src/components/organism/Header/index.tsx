import { isDarkState, pageShadowState } from '@src/atoms';
import CommonCenterWrapper from '@src/components/common/Layout/CommonCenterWrapper';
import NavItems from '@src/components/molecules/NavItems';
import { PATH } from '@src/utils/urls';
import Z_INDEX from '@src/utils/zIndex';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { styled } from 'styled-components';

function Header() {
  const [isDark] = useRecoilState(isDarkState);
  const setShadow = useSetRecoilState(pageShadowState);
  const router = useRouter();

  const isHome = router.pathname === '/';
  const isDarkHome = isDark || isHome;
  const logoSrc = isDarkHome
    ? '/casper_logo_white.png'
    : '/casper_logo_black.png';

  return (
    <Wrapper>
      <CenterWrapper>
        <Logo onClick={() => router.push(PATH.home.url)}>
          <LogoImg src={logoSrc} alt="logo" fill />
        </Logo>

        <NavItems
          onMouseOver={() => setShadow(true)}
          onMouseOut={() => setShadow(false)}
        />
      </CenterWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  position: relative;
  z-index: ${Z_INDEX.header};

  width: 100vw;
  height: 60px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
`;

const CenterWrapper = styled(CommonCenterWrapper)`
  display: flex;
  justify-content: space-between;
`;
const Logo = styled.div`
  position: relative;
  width: 100px;
  height: 100%;
  cursor: pointer;
`;
const LogoImg = styled(Image)`
  object-fit: contain;
`;

export default Header;
