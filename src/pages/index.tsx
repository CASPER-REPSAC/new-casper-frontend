import styled from 'styled-components';
import CommonCenterWrapper from '@src/components/common/CommonCenterWrapper';
import TitelSection from '@src/components/templates/home/TitleSection';
import NoticeSection from '@src/components/templates/home/NoticeSection';
import PageInfoSection from '@src/components/templates/home/PageInfoSection';
import usePagination from '@src/hooks/usePagination';

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
