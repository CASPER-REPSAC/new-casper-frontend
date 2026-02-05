'use client';

import FuzzyText from '@app/_shadcn/components/ui/FuzzyText';
import LetterGlitch from '@app/_shadcn/components/ui/LetterGlitch';

function HomePage() {
  return (
    <>
      <div className=" w-screen h-screen flex-center">
        <div className="absolute top-0 left-0 w-full h-full opacity-50">
          <LetterGlitch
            characters="Welcome to Casper!"
            glitchSpeed={100}
            centerVignette={false}
            outerVignette={true}
            smooth={true}
          />
        </div>
        <div className="flex flex-col gap-2">
          <FuzzyText className="relative z-10">Welcome to</FuzzyText>
          <FuzzyText className="relative z-10">Casper!</FuzzyText>
        </div>
      </div>
    </>
  );
}

export default HomePage;
