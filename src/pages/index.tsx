import { usePagination } from '@src/hooks';
import { HomeTemplate } from '@src/components/templates';
import { NoticeSection, PageInfoSection } from '@src/components/organism/home';
import TitelSection from '@src/components/organism/home/TitleSection';

function Home() {
  const bgImgs = ['background1.jpg', 'background2.jpg'];
  const maxPage = bgImgs.length;
  const { setNextPage, setPrevPage, page } = usePagination(maxPage);

  return (
    <HomeTemplate
      backgroundImg={bgImgs[page]}
      noticeSection={<NoticeSection />}
      titleSection={<TitelSection />}
      pageSection={
        <PageInfoSection
          page={page}
          setPage={{ setNextPage, setPrevPage }}
          maxPage={maxPage}
        />
      }
    />
  );
}
export default Home;
