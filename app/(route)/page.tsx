import {
  Background,
  NoticeSection,
  TitleSection,
  Wrapper,
} from './_components';

function Home() {
  const bgImgs = ['background1.webp', 'background2.webp'];

  return (
    <Wrapper>
      <NoticeSection />
      <TitleSection />
      <Background backgroundImages={bgImgs} />;
    </Wrapper>
  );
}

export default Home;
