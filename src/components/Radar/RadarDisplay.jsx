// @ts-check
import React from 'react'
import Proptypes from 'prop-types'
import './radar.css'
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts'

/**
 * @component RadarDisplay
 * @returns Todays score with doughnut chart and percentage of goal achieved
 * @example <RadarDisplay userPerformance={userPerformance} />
 * @param {{ userPerformance: { kind: any; }; }} props
 */
function RadarDisplay(props) {
  /**
   * A user performance object
   * @typedef {Object} UserPerformance
   * @property {string} kind
   * @property {number} value
   */
  const kind = props.userPerformance.kind
  const PropsData = props.userPerformance

  const newData = {
    // @ts-ignore
    value: PropsData.data,
    kind: PropsData.kind,
  }

  /**
   * @typedef {Object} newDataArray
   * @description maps the kind and value of the user performance object to a new object with the correct keys
   */
  const newDataArray = newData.value.map(
    (/** @type {{ value: any; kind: string | number; }} */ item) => {
      return {
        value: item.value,
        kind: kind[item.kind],
      }
    }
  )

  const data = newDataArray

  const startAngle = 210
  return (
    <div
      className="relative flex h-52
      w-52
      content-center  items-center justify-center rounded-xl bg-[#282D30]  pr-2 shadow-md xl:h-[263px] xl:w-[263px] 
      "
    >
      <ResponsiveContainer
        className="hidden xl:block"
        width="100%"
        height={800}
      >
        <RadarChart
          data={data}
          outerRadius={78}
          startAngle={startAngle}
          endAngle={startAngle + 360}
        >
          <PolarGrid
            polarRadius={[5, 15, 35, 55, 75]}
            stroke="white"
            strokeWidth={4}
          />
          <PolarAngleAxis
            dataKey="kind"
            tick={{ fill: 'white', fontSize: 12, fontWeight: 500 }}
            tickSize={14}
            tickLine={false}
            domain={[0, 4]}
          />
          <Radar
            name="performance"
            dataKey="value"
            stroke="#FF0101"
            fill="#FF0101"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
      <ResponsiveContainer
        className="block h-full w-full xl:hidden"
        width="100%"
        height="100%"
      >
        <RadarChart
          data={data}
          outerRadius={55}
          startAngle={startAngle}
          endAngle={startAngle + 360}
        >
          <PolarGrid
            polarRadius={[1, 10, 20, 30, 52]}
            stroke="white"
            strokeWidth={4}
          />
          <PolarAngleAxis
            dataKey="kind"
            tick={{ fill: 'white', fontSize: 12, fontWeight: 500 }}
            tickSize={0}
            domain={[0, 4]}
          />
          <Radar
            name="performance"
            dataKey="value"
            stroke="#FF0101"
            fill="#FF0101"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}

RadarDisplay.propTypes = {
  id: Proptypes.string,
  keyData: Proptypes.object,
  userInfos: Proptypes.object,
  score: Proptypes.number,
  todayScore: Proptypes.number,
}

export default RadarDisplay
