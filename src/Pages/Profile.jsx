import Sidebar from '../components/Sidebar'
import RadarDisplay from '../components/Radar/RadarDisplay'
import DoughnutChart from '../components/Doughnut/DoughnutChart'
import DailyActiveChart from '../components/DailyActive/DailyActiveChart'
import AverageSessions from '../components/AverageSpeed/AverageSessions'

import { useParams } from 'react-router-dom'
import { Fragment, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import axios from '../api/axios'

function Profile() {
  const { id } = useParams()

  const [loading, setLoading] = useState(true)

  const [userData, setUserData] = useState({
    userInfos: {
      firstName: '',
      lastName: '',
    },
    todayScore: {},
    keyData: {},
  })
  const [userActivity, setUserActivity] = useState({
    sessions: [],
  })
  const [avrageSess, setAvrageSess] = useState({
    sessions: [],
  })
  const [getPerformance, setGetPerformance] = useState({
    data: [],
    kind: [],
  })
  useEffect(() => {
    const controller = new AbortController()
    /**
     * @async
     * @function
     * @name Profile Page getUserData async function
     * @description Fetches the user data from the api asynchroniously
     * @returns {Promise<void>}
     * @throws {Error} If the request fails
     *
     */

    const getUserData = async () => {
      setLoading(true)
      try {
        const response = await axios.get(`${id}`)
        const activeRespobse = await axios.get(`${id}/activity`)
        const avrageResponse = await axios.get(`${id}/average-sessions`)
        const performanceResponse = await axios.get(`${id}/performance`, {
          signal: controller.signal,
        })
        setUserData(response.data.data)
        setAvrageSess(avrageResponse.data.data)
        setUserActivity(activeRespobse.data.data)
        setGetPerformance(performanceResponse.data.data)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

    getUserData()
    return () => controller.abort()
  }, [id])

  const data = userData
  const userInfos = data.userInfos
  const keyData = data.keyData
  const todayScore = data.todayScore || data.score

  const sessions = userActivity.sessions
  const userPerformance = getPerformance
  const averageSession = avrageSess.sessions

  return (
    <Fragment>
      {loading && (
        <div className="absolute z-50 flex h-screen w-screen flex-col items-center justify-center bg-white text-center">
          <svg className="... mr-3 h-20 w-20 animate-spin" viewBox="0 0 24 24">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12H19C19 15.866 15.866 19 12 19V22Z"
                fill="currentColor"
              />
              <path
                d="M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z"
                fill="currentColor"
              />
            </svg>
          </svg>
          Loading...
        </div>
      )}
      <div className="flex h-screen flex-row">
        <Sidebar />
        <div className="mt-8 h-full px-2 lg:mx-auto ">
          <div className=" max-h-[95%] w-full ">
            <section className="flex flex-col gap-6">
              <div className="flex flex-col gap-6">
                <h1 className="2xl::text-5xl text-sm font-bold	md:text-3xl">
                  Hello{' '}
                  <span className="text-[#FF0000]">{userInfos.firstName}</span>
                </h1>
                <p className="text-sm 2xl:text-lg">
                  Congratulations! You reached yesterday’s goal! 👏
                </p>
              </div>
            </section>
            <section className=" mt-1 flex h-full min-w-fit max-w-6xl flex-row gap-5 2xl:mt-14 ">
              <div className="grid h-full w-full grid-cols-3 content-between gap-[30px] align-middle ">
                <div className="col-span-3   ">
                  <DailyActiveChart sessions={sessions} />
                </div>
                <div className="col-span-1 ">
                  <AverageSessions averageSession={averageSession} />
                </div>
                <div className="col-span-1 ">
                  <RadarDisplay userPerformance={userPerformance} />
                </div>
                <div className="col-span-1 ">
                  <DoughnutChart todayScore={todayScore} />
                </div>
              </div>
              <div className="gap-auto flex h-[100%] flex-col justify-between gap-10 ">
                <div className="flex h-[7.15rem] w-56 flex-row items-center justify-start gap-[24px] bg-[#FBFBFB] shadow-md  xl:h-32 xl:w-64 ">
                  <div className="relative ml-[32px] h-[60px] w-[60px] rounded-md bg-[#FF0000]/10">
                    <img
                      src="https://sportsee.s3.amazonaws.com/calories-icon.svg"
                      alt="Protein"
                      className="h-full w-full "
                    />
                  </div>
                  <div className="text-sm">
                    <h1 className="text-xl font-bold">
                      {keyData.calorieCount}
                    </h1>
                    <span className="text-[#74798C]">calories</span>
                  </div>
                </div>
                <div className="flex h-[7.15rem] w-56 flex-row items-center justify-start gap-[24px] bg-[#FBFBFB] shadow-md  xl:h-32 xl:w-64 ">
                  <div className="relative ml-[32px] h-[60px] w-[60px] rounded-md bg-[#4AB8FF]/10">
                    <img
                      src="https://sportsee.s3.amazonaws.com/protein-icon.svg"
                      alt="Protein"
                      className="h-full w-full "
                    />
                  </div>
                  <div className="text-sm">
                    <h1 className="text-xl font-bold">
                      {keyData.proteinCount}
                    </h1>
                    <span className="text-[#74798C]">Proteins</span>
                  </div>
                </div>
                <div className="flex h-[7.15rem] w-56 flex-row items-center justify-start gap-[24px] bg-[#FBFBFB] shadow-md  xl:h-32 xl:w-64 ">
                  <div className="relative ml-[32px] h-[60px] w-[60px] rounded-md bg-[#FDCC0C]/10">
                    <img
                      src="https://sportsee.s3.amazonaws.com/carbs-icon.svg"
                      alt="Protein"
                      className="h-full w-full "
                    />
                  </div>
                  <div className="text-sm">
                    <h1 className="text-xl font-bold">
                      {keyData.carbohydrateCount}
                    </h1>
                    <span className="text-[#74798C]">Carbs</span>
                  </div>
                </div>
                <div className="flex h-[7.15rem] w-56 flex-row items-center justify-start gap-[24px] bg-[#FBFBFB] shadow-md  xl:h-32 xl:w-64 ">
                  <div className="relative ml-[32px] h-[60px] w-[60px] rounded-md bg-[#FDCC0C]/10">
                    <img
                      src="https://sportsee.s3.amazonaws.com/fat-icon.svg"
                      alt="Protein"
                      className="h-full w-full "
                    />
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
    </Fragment>
  )
}

Profile.propTypes = {
  id: PropTypes.string,
  userInfos: PropTypes.object,
  userActivity: PropTypes.object,
  userPerformance: PropTypes.object,
  keyData: PropTypes.object,
  todayScore: PropTypes.object,
  sessions: PropTypes.object,
  averageSession: PropTypes.object,
  loading: PropTypes.bool,
  getUserInfos: PropTypes.func,
  getUserActivity: PropTypes.func,
  getUserPerformance: PropTypes.func,
  getKeyData: PropTypes.func,
  getTodayScore: PropTypes.func,
  getSessions: PropTypes.func,
  getAverageSession: PropTypes.func,
}

export default Profile
