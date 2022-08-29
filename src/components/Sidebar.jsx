import Swimming from '../assets/swimming.svg'
import Weight from '../assets/weight.svg'
import Yoga from '../assets/yoga.svg'

function Sidebar() {
  return (
    <section className="z-10 flex h-full w-28 flex-col flex-nowrap items-center justify-start gap-5 bg-black shadow-xl shadow-black">
      <span className="mt-[256px] h-16 w-16 rounded-md bg-white text-center  ">
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