import { Background, NoticeSection, TitleSection } from './_components';

function HomePage() {
  const bgImgs = ['/background1.webp', '/background2.webp'];

  return (
    <div className="mt-28 flex flex-col gap-16">
      <NoticeSection />
      <TitleSection />
      <Background backgroundImages={bgImgs} />
    </div>
  );
}

export default HomePage;
