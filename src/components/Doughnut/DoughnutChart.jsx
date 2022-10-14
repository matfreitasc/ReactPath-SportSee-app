import React from 'react'
import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts'
import PropTypes from 'prop-types'
/**
 * @componet DoughnutChart
 * @param {string} props
 * @description todays score with doughnut chart and percentage of goal achieved
 * @example
 * <DoughnutChart todayScore={0.5} />
 */

function DoughnutChart(props) {
  const score = [{ value: props.todayScore * 100, fill: '#FF0000' }]

  return (
    <div className="relative  flex h-52 w-52 content-center  items-center justify-center rounded-xl bg-[#FBFBFB] shadow-md xl:h-[263px] xl:w-[263px] ">
      <h2 className="absolute text-sm font-medium lg:top-[24px] lg:left-[30px]">
        Score
      </h2>
      <div className="absolute flex h-[50%] w-[50%]  flex-col place-items-center justify-center rounded-full  bg-white text-center xl:h-[160px] xl:w-[160px] ">
        <span className="text-[24px] font-bold text-[#282D30] xl:text-[26px]">
          {score[0].value}%
        </span>
        <p className="text-xs font-medium text-[#74798C] xl:text-base">
          of your
          <br />
          goal
        </p>
      </div>
      <ResponsiveContainer
        className="flipHorizontal hidden h-full w-full xl:block"
        width="100%"
        height={1000}
      >
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
      <ResponsiveContainer className="block h-full w-full xl:hidden">
        <RadialBarChart
          data={score}
          innerRadius={80}
          outerRadius={60}
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
  todayScore: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
}

export default DoughnutChart
