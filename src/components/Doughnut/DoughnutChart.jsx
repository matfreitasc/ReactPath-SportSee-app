import React from 'react'
import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts'
import PropTypes from 'prop-types'

function DoughnutChart(props) {
  const score = [{ value: props.todayScore * 100, fill: '#FF0000' }]

  return (
    <div className="relative flex h-[263px]  w-[263px] content-center items-center justify-center rounded-xl bg-[#FBFBFB] shadow-md">
      <h2 className="absolute top-[24px] left-[30px] text-sm font-medium">
        Score
      </h2>
      <div className="absolute flex h-[160px] w-[160px] flex-col place-items-center  justify-center rounded-full bg-white text-center ">
        <span className="text-[26px] font-bold text-[#282D30]">
          {score[0].value}%
        </span>
        <p className="text-base font-medium text-[#74798C]">
          of your
          <br />
          goal
        </p>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          data={score}
          innerRadius={80}
          outerRadius={100}
          barSize={10}
          background={{ fill: 'white' }}
          startAngle={90}
          deprecated
          endAngle={450}
        >
          <PolarAngleAxis
            type="number"
            domain={[0, 100]}
            angleAxisId={0}
            tick={false}
          />
          <RadialBar
            dataKey="value"
            cornerRadius={10}
            background={{ fill: '#fbfbfb' }}
            clockwise
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  )
}

DoughnutChart.propTypes = {
  todayScore: PropTypes.number,
}

export default DoughnutChart
