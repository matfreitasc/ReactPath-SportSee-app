import React from 'react'
import './radar.css'
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts'

const data = [
  {
    value: 'Cardio',
    kind: 1,
  },
  {
    value: 'Energy',
    kind: 2,
  },
  {
    value: 'Endurance',
    kind: 3,
  },
  {
    value: 'Strength',
    kind: 4,
  },
  {
    value: 'Speed',
    kind: 5,
  },
  {
    value: 'Intenrisy',
    kind: 6,
  },
]

function RadarDisplay() {
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
            dataKey="value"
            tick={{ fill: 'white', fontSize: 12, fontWeight: 500 }}
            tickSize={14}
            tickLine={false}
            domain={[0, 4]}
          />
          <Radar
            name="performance"
            dataKey="kind"
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
