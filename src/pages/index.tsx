import { usePagination } from '@src/hooks';
import { HomeTemplate } from '@src/components/templates';
import {
  Background,
  NoticeSection,
  PageInfoSection,
} from '@src/components/organism/home';
import TitelSection from '@src/components/organism/home/TitleSection';

function Home() {
  const bgImgs = ['background1.webp', 'background2.webp'];
  const maxPage = bgImgs.length;
  const { page, direction, paginate } = usePagination(maxPage);

  return (
    <HomeTemplate
      backgroundSection={
        <Background src={bgImgs[page]} direction={direction} />
      }
      noticeSection={<NoticeSection />}
      titleSection={<TitelSection />}
      pageSection={
        <PageInfoSection page={page} paginate={paginate} maxPage={maxPage} />
      }
    />
  );
}
export default Home;
