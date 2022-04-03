function AboutInfo() {
  return (
    <div className="mt-10 sm:mt-28 mb-10 flex ">
      <div className="flex-1 mx-auto max-w-[400px] sm:max-w-[850px] grid grid-cols-1 mobile:grid-rows-2 mobile:grid-cols-2 sm:flex  sm:justify-between ">
        <div className="mx-auto mb-4 sm:mb-0 aboutInfo-box bg-iblue mobile:row-start-1 mobile:row-end-2 mobile:col-start-1 col-end-2">
          <h1 className="aboutInfo-heading">99%</h1>
          <p className="aboutInfo-text">99% clean energy</p>
          <span className="hidden sm:block aboutInfo-dot top-[20%] -right-[10px]"></span>
          <span className="hidden sm:block aboutInfo-dot top-[50%] -right-[10px]"></span>
          <span className="hidden sm:block aboutInfo-dot top-[80%] -right-[10px]"></span>
        </div>

        <div className="mx-auto mb-4 sm:mb-0 aboutInfo-box bg-iyellow mobile:row-start-1 mobile:row-end-2 mobile:col-start-2 mobile:col-end-3">
          <h1 className="aboutInfo-heading">15+</h1>
          <p className="aboutInfo-text">15+ members in team</p>
          <span className="hidden sm:block aboutInfo-dot top-[20%] -right-[10px]"></span>
          <span className="hidden sm:block aboutInfo-dot top-[50%] -right-[10px]"></span>
          <span className="hidden sm:block aboutInfo-dot top-[80%] -right-[10px]"></span>
          <span className="hidden sm:block aboutInfo-dot top-[20%] -left-[10px]"></span>
          <span className="hidden sm:block aboutInfo-dot top-[50%] -left-[10px]"></span>
          <span className="hidden sm:block aboutInfo-dot top-[80%] -left-[10px]"></span>
        </div>

        <div className="mx-auto mb-4 sm:mb-0 aboutInfo-box bg-ired mobile:row-start-2 mobile:row-end-3 mobile:col-start-1 mobile:col-end-2">
          <h1 className="aboutInfo-heading">250+</h1>
          <p className="aboutInfo-text">250+ rooftop setups</p>
          <span className="hidden sm:block aboutInfo-dot top-[20%] -right-[10px]"></span>
          <span className="hidden sm:block aboutInfo-dot top-[50%] -right-[10px]"></span>
          <span className="hidden sm:block aboutInfo-dot top-[80%] -right-[10px]"></span>
          <span className="hidden sm:block aboutInfo-dot top-[20%] -left-[10px]"></span>
          <span className="hidden sm:block aboutInfo-dot top-[50%] -left-[10px]"></span>
          <span className="hidden sm:block aboutInfo-dot top-[80%] -left-[10px]"></span>
        </div>

        <div className="mx-auto aboutInfo-box bg-inavy mobile:row-start-2 mobile:row-end-3 mobile:col-start-2 mobile:col-end-3">
          <h1 className="aboutInfo-heading">4Yr</h1>
          <p className="aboutInfo-text">4 years Waranty</p>
          <span className="hidden sm:block aboutInfo-dot top-[20%] -left-[10px]"></span>
          <span className="hidden sm:block aboutInfo-dot top-[50%] -left-[10px]"></span>
          <span className="hidden sm:block aboutInfo-dot top-[80%] -left-[10px]"></span>
        </div>
      </div>
    </div>
  );
}

export default AboutInfo;
