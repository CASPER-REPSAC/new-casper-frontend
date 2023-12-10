function HomePage() {
  return (
    <div className="absolute-center flex w-full flex-col text-center">
      <h1 className="text-6xl font-bold">WELCOME !</h1>
      <div className="h-full w-full text-6xl font-bold text-sky-300">
        CASPER
      </div>

      {/* <div className="flex items-center text-2xl">
        <LightBulbIcon size={ICON_SIZE.medium} color="yellow" />
        <span className="font-thin dark:text-gray-200">
          신입생 모집 기간입니다.
        </span>
      </div> */}
    </div>
  );
}

export default HomePage;
