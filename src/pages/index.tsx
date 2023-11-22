import styled from 'styled-components';
import { usePagination } from '@src/hooks';
import { CommonCenterWrapper } from '@src/components/common/centerWrapper';
import NoticeSection from '@src/components/organism/home/NoticeSection';
import TitelSection from '@src/components/organism/home/TitleSection';
import PageInfoSection from '@src/components/organism/home/PageInfoSection';

function Home() {
  const bgImgs = ['background1.jpg', 'background2.jpg'];
  const maxPage = bgImgs.length;
  const { setNextPage, setPrevPage, page } = usePagination(maxPage);

  return (
    <>
      <Background src={bgImgs[page]} />
      <CommonCenterWrapper>
        <Body>
          <NoticeSection />
          <TitelSection />
          <PageInfoSection
            page={page}
            setPage={{ setNextPage, setPrevPage }}
            maxPage={maxPage}
          />
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
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 10vh;
  top: 25vh;
  color: white;
`;
