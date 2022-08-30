function Sidebar() {
  return (
    <section className="z-10 flex h-[105vh] w-20 flex-col flex-nowrap items-center justify-start gap-y-5 bg-black shadow-xl shadow-black lg:w-24 2xl:h-[120vh]">
      <span className="mt-40 h-16 w-16 rounded-md bg-white text-center 2xl:mt-[256px]  ">
        <div className="flex h-full w-full items-center justify-center ">
          <img
            src="https://sportsee.s3.amazonaws.com/yoga.svg"
            alt="Yoga"
            className="h-8 w-8"
          />
        </div>
      </span>
      <span className="h-16 w-16 rounded-md bg-white text-center">
        <div className="flex h-full w-full items-center justify-center ">
          <img
            src="https://sportsee.s3.amazonaws.com/swimming.svg"
            alt="Swimming"
            className="h-8 w-8 "
          />
        </div>
      </span>
      <span className="h-16 w-16 rounded-md bg-white text-center">
        <div className="flex h-full w-full items-center justify-center ">
          <img
            src="https://sportsee.s3.amazonaws.com/cycle.svg"
            alt="Cycle"
            className="h-16 w-16"
          />
        </div>
      </span>
      <span className="h-16 w-16 rounded-md bg-white text-center">
        <div className="flex h-full w-full items-center justify-center ">
          <img
            src="https://sportsee.s3.amazonaws.com/weight.svg"
            alt="Weight"
            className="h-8 w-8"
          />
        </div>
      </span>
      <p className="relative -bottom-40 -rotate-90 whitespace-nowrap text-xs text-white">
        Copiryght, SportSee 2020
      </p>
    </section>
  )
}

export default Sidebar
