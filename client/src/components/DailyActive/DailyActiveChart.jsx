import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts'

function DailyActiveChart() {
  const data = [
    {
      day: '2020-07-01',
      kilogram: 80,
      calories: 240,
    },
    {
      day: '2020-07-02',
      kilogram: 80,
      calories: 220,
    },
    {
      day: '2020-07-03',
      kilogram: 81,
      calories: 280,
    },
    {
      day: '2020-07-04',
      kilogram: 81,
      calories: 290,
    },
    {
      day: '2020-07-05',
      kilogram: 80,
      calories: 160,
    },
    {
      day: '2020-07-06',
      kilogram: 78,
      calories: 162,
    },
    {
      day: '2020-07-07',
      kilogram: 76,
      calories: 390,
    },
  ]
  const modifiedData = data.map((item, index) => {
    const newItem = { ...item }

    newItem.index = index
    return newItem
  })

  return (
    <div className="relative h-[340px] w-full rounded-xl bg-[#FBFBFB] shadow-md">
      <ResponsiveContainer width="95%" height="100%">
        <BarChart
          data={modifiedData}
          margin={{
            top: 80,
            right: 0,
            left: 0,
            bottom: 2,
          }}
          barGap={5}
          barSize={10}
        >
          <CartesianGrid vertical={false} strokeDasharray="4" />
          <Legend
            verticalAlign="top"
            height={36}
            align="right"
            iconType="circle"
            iconSize={12}
            wrapperStyle={{
              top: '24px',
              right: '10px',
            }}
            payload={[
              {
                value: 'Weight (kg)',
                id: 'Kilogram',
                type: 'cicle',
                color: '#282D30',
              },
              {
                value: 'Burned calories (kCal)',
                id: 'Calories',
                type: 'circle',
                color: '#FF0000',
              },
            ]}
          />

          <YAxis yAxisId="left" orientation="left" stroke="#FBFBFB" />
          <YAxis
            yAxisId="right"
            orientation="right"
            stroke="#9B9EAC"
            tickCount={3}
            tickLine={false}
            axisLine={false}
            tickMargin={20}
          />

          <XAxis dataKey="index" />
          <Tooltip
            content={<CustomTooltip />}
            labelStyle={{ display: 'none' }}
          />
          <Bar
            yAxisId="left"
            dataKey="kilogram"
            fill="#282D30"
            radius={[5, 5, 0, 0]}
          />
          <Bar
            yAxisId="right"
            dataKey="calories"
            fill="#E60000"
            radius={[5, 5, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

function CustomTooltip({ payload, active }) {
  console.log(payload)
  if (active) {
    return (
      <div
        className="m-o relative -top-12 flex h-[60px] flex-col items-center
      justify-around rounded-sm bg-primary-color p-2 text-[10px] text-white
      "
      >
        <p>{payload[0].value} Kg</p>

        <p>{payload[1].value} kCal</p>
      </div>
    )
  }
  return null
}

export default DailyActiveChart
