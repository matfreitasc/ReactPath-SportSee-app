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

function RadarDisplay(props) {
  const kind = props.userPerformance.kind
  const PropsData = props.userPerformance

  const newData = {
    value: PropsData.data,
    kind: PropsData.kind,
  }

  const newDataArray = newData.value.map((item) => {
    return {
      value: item.value,
      kind: kind[item.kind],
    }
  })

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
        width="100%"
        height="100%"
        className="hidden xl:block"
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
      <ResponsiveContainer className="block h-full w-full xl:hidden">
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
