import Sidebar from '../components/Sidebar'
import RadarDisplay from '../components/Radar/RadarDisplay'
import DoughnutChart from '../components/Doughnut/DoughnutChart'
import DailyActiveChart from '../components/DailyActive/DailyActiveChart'
import AverageSessions from '../components/AverageSpeed/AverageSessions'
import Protein from '../assets/protein-icon.svg'
import Calories from '../assets/calories-icon.svg'
import Carbs from '../assets/carbs-icon.svg'
import Lipids from '../assets/fat-icon.svg'
import PropTypes from 'prop-types'
import {
  defaultUserData,
  defaultUserActivity,
  defaultAverageSession,
  defaultUserPerformance,
} from '../api/data'

function Home() {
  const data = defaultUserData[0].data
  const userInfos = data.userInfos
  const todayScore = data.todayScore
  const keyData = data.keyData
  const sessions = defaultUserActivity[0].data.sessions
  const averageSession = defaultAverageSession[0].data.sessions
  const userPerformance = defaultUserPerformance.data

  return (
    <div className="flex h-full flex-row">
      <Sidebar />
      <div className="mx-auto mt-16 h-full ">
        <div className=" max-h-[95%] w-full ">
          <section className="flex flex-col gap-6">
            <div className="flex flex-col gap-6">
              <h1 className="text-5xl font-bold	">
                Hello{' '}
                <span className="text-[#FF0000]">{userInfos.firstName}</span>
              </h1>
              <p className="text-lg">
                Congratulations! You reached yesterday’s goal! 👏
              </p>
            </div>
          </section>
          <section className=" mt-14 flex h-full min-w-fit max-w-6xl flex-row  gap-5">
            <div className="grid h-full w-full grid-cols-3 content-between gap-[30px] align-middle ">
              <div className="col-span-3  h-[340px] w-full  ">
                <DailyActiveChart sessions={sessions} />
              </div>
              <div className="col-span-1 ">
                <AverageSessions averageSession={averageSession} />
              </div>
              <div className="col-span-1 rounded-xl bg-[#282D30] shadow-md">
                <RadarDisplay userPerformance={userPerformance} />
              </div>
              <div className="col-span-1 ">
                <DoughnutChart todayScore={todayScore} />
              </div>
            </div>
            <div className="gap-auto flex h-[100%] flex-col justify-between gap-[40px]">
              <div className="flex h-32 w-64 flex-row items-center justify-start gap-[24px]  bg-[#FBFBFB] shadow-md ">
                <div className="relative ml-[32px] h-[60px] w-[60px] rounded-md bg-[#FF0000]/10">
                  <img
                    src={Calories}
                    alt="Protein"
                    className="h-full w-full "
                  />
                </div>
                <div className="text-sm">
                  <h1 className="text-xl font-bold">{keyData.calorieCount}</h1>
                  <span className="text-[#74798C]">calories</span>
                </div>
              </div>
              <div className="flex h-32 w-64 flex-row items-center justify-start gap-[24px]  bg-[#FBFBFB] shadow-md ">
                <div className="relative ml-[32px] h-[60px] w-[60px] rounded-md bg-[#4AB8FF]/10">
                  <img src={Protein} alt="Protein" className="h-full w-full " />
                </div>
                <div className="text-sm">
                  <h1 className="text-xl font-bold">{keyData.proteinCount}</h1>
                  <span className="text-[#74798C]">Proteins</span>
                </div>
              </div>
              <div className="flex h-32 w-64 flex-row items-center justify-start gap-[24px]  bg-[#FBFBFB] shadow-md ">
                <div className="relative ml-[32px] h-[60px] w-[60px] rounded-md bg-[#FDCC0C]/10">
                  <img src={Carbs} alt="Protein" className="h-full w-full " />
                </div>
                <div className="text-sm">
                  <h1 className="text-xl font-bold">
                    {keyData.carbohydrateCount}
                  </h1>
                  <span className="text-[#74798C]">Carbs</span>
                </div>
              </div>
              <div className="flex h-32 w-64 flex-row items-center justify-start gap-[24px]  bg-[#FBFBFB] shadow-md ">
                <div className="relative ml-[32px] h-[60px] w-[60px] rounded-md bg-[#FDCC0C]/10">
                  <img src={Lipids} alt="Protein" className="h-full w-full " />
                </div>
                <div className="text-sm">
                  <h1 className="text-xl font-bold">{keyData.lipidCount}</h1>
                  <span className="text-[#74798C]">Carbs</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

Home.propTypes = {
  data: PropTypes.object,
  userInfos: PropTypes.object,
  todayScore: PropTypes.object,
  keyData: PropTypes.object,
  sessions: PropTypes.object,
  averageSession: PropTypes.object,
  userPerformance: PropTypes.object,
}

export default Home
