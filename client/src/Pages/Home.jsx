import Sidebar from '../components/Sidebar'

import RadarDisplay from '../components/Radar/RadarDisplay'
import DoughnutChart from '../components/Doughnut/DoughnutChart'
import DailyActiveChart from '../components/DailyActive/DailyActiveChart'
import AverageSessions from '../components/AverageSpeed/AverageSessions'

function Home() {
  return (
    <div className="flex h-full flex-row">
      <Sidebar />
      <div className="mx-auto mt-16 h-full ">
        <div className=" max-h-[95%] w-full ">
          <section className="flex flex-col gap-6">
            <div className="flex flex-col gap-6">
              <h1 className="text-5xl font-bold	">
                Hello <span className="text-[#FF0000]">Thomas</span>
              </h1>
              <p className="text-lg">
                Congratulations! You reached yesterday’s goal! 👏
              </p>
            </div>
          </section>
          <section className=" mt-14 flex h-full min-w-fit max-w-6xl flex-row  gap-5">
            <div className="grid h-full w-full grid-cols-3 content-between gap-[30px] align-middle ">
              <div className="col-span-3  h-[340px] w-full  ">
                <DailyActiveChart />
              </div>
              <div className="col-span-1 ">
                <AverageSessions />
              </div>
              <div className="col-span-1 rounded-xl bg-[#282D30] shadow-md">
                <RadarDisplay />
              </div>
              <div className="col-span-1 ">
                <DoughnutChart />
              </div>
            </div>
            <div className="gap-auto flex h-[100%] flex-col justify-between gap-[40px]">
              <div className="h-32 w-64 bg-[#FBFBFB] shadow-md"></div>
              <div className="h-32 w-64 bg-[#FBFBFB] shadow-md"></div>
              <div className="h-32 w-64 bg-[#FBFBFB] shadow-md"></div>
              <div className="h-32 w-64 bg-[#FBFBFB] shadow-md"></div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Home
