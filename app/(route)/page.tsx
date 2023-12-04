import { Background, NoticeSection, TitleSection } from './_components';

function HomePage() {
  const bgImgs = ['/background1.webp', '/background2.webp'];

  return (
    <div className="common-center mt-28 flex flex-col gap-16 text-white">
      <NoticeSection />
      <TitleSection />
      <Background backgroundImages={bgImgs} />
    </div>
  );
}

export default HomePage;
