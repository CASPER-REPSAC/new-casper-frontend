import { useState } from 'react';
import styled from 'styled-components';
import CommonCenterWrapper from '@src/components/common/Layout/CommonCenterWrapper';
import TitelSection from '@src/components/templates/home/TitleSection';
import NoticeSection from '@src/components/templates/home/NoticeSection';
import PageInfoSection from '@src/components/templates/home/PageInfoSection';
import { useRecoilState } from 'recoil';
import { accessTokenState } from '@src/atoms';

function Home() {
  const [page, setPage] = useState(0);
  const bgImgs = ['background1.jpg', 'background2.jpg'];
  const maxPage = bgImgs.length;
  const [accessToken] = useRecoilState(accessTokenState);
  console.log(accessToken);
  return (
    <>
      <Background src={bgImgs[page]} />
      <CommonCenterWrapper>
        <Body>
          <NoticeSection />
          <TitelSection />
          <PageInfoSection page={page} setPage={setPage} maxPage={maxPage} />
        </Body>
      </CommonCenterWrapper>
    </>
  );
}
export default Home;

const Background = styled.img`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  filter: brightness(50%);
  z-index: -1;
  object-fit: cover;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10vh;
  position: absolute;
  top: 25vh;
  color: white;
`;
