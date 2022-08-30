import React from 'react'
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
      className=" h-[263px]  w-[258px] rounded-xl bg-[#282D30] pr-2
      shadow-md"
    >
      <ResponsiveContainer width="100%" height="100%">
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
    </div>
  )
}
export default RadarDisplay
