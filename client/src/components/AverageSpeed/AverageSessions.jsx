import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  Rectangle,
} from 'recharts'

function AverageSessions() {
  const data = [
    {
      day: 1,
      sessionLength: 30,
    },
    {
      day: 2,
      sessionLength: 23,
    },
    {
      day: 3,
      sessionLength: 45,
    },
    {
      day: 4,
      sessionLength: 50,
    },
    {
      day: 5,
      sessionLength: 0,
    },
    {
      day: 6,
      sessionLength: 0,
    },
    {
      day: 7,
      sessionLength: 60,
    },
  ]

  const weekday = new Array(7)
  weekday[1] = 'M'
  weekday[2] = 'T'
  weekday[3] = 'W'
  weekday[4] = 'T'
  weekday[5] = 'F'
  weekday[6] = 'S'
  weekday[7] = 'S'

  const newData = data.map((item) => {
    const newItem = { ...item }
    newItem.dayOfWeek = weekday[item.day]
    return newItem
  })

  return (
    <div className="relative  h-[263px] w-[263px] rounded-2xl bg-[#FF0000]">
      <p className="absolute top-[34px] left-[29px] text-white ">
        Average speed of <br /> your sessions
      </p>
      <LineChart
        data={newData}
        width={263}
        height={263}
        margin={{ top: 0, right: 0, left: 0, bottom: 10 }}
      >
        <defs>
          <linearGradient id="colorGD" x1="0" y1="0" x2=".5" y2="0">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity={0.2} />
            <stop offset="95%" stopColor="#FFFFFF" stopOpacity={1} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="1" horizontal="" vertical="" />
        <XAxis
          dataKey="dayOfWeek"
          tickLine={false}
          axisLine={false}
          tick={<CustomizedAxisTick />}
          padding={{ left: 0, right: 0 }}
        />
        <YAxis
          hide={true}
          domain={['dataMin-20', 'dataMax+40']}
          tickLine={false}
          axisLine={false}
        />
        <Tooltip
          content={<CustomTooltip />}
          labelStyle={{ display: 'none' }}
          cursor={<CustomCursor />}
        />

        <Line
          type="monotone"
          dataKey="sessionLength"
          stroke="url('#colorGD')"
          strokeWidth={3}
          unit="min"
          dot={false}
          activeDot={{
            fill: 'white',
            stroke: 'white',
            strokeOpacity: 0.2,
            strokeWidth: 15,
            r: 5,
          }}
        />
      </LineChart>
    </div>
  )
}
function CustomTooltip({ payload, active }) {
  if (active) {
    return (
      <div
        className="m-o relative -top-10 flex h-5 w-8 
        flex-col
      items-center justify-center rounded-sm bg-white text-[8px]
      "
      >
        {payload[0].value} {payload[0].unit}
      </div>
    )
  }
  return null
}
const CustomCursor = (props) => {
  const { points, width } = props
  const { x, y } = points[0]
  return (
    <Rectangle
      fill="rgba(0, 0, 0, 0.05)"
      x={x}
      y={y}
      width={width - x}
      height={263}
      radius={20}
    />
  )
}

const CustomizedAxisTick = (props) => {
  const { x, y, payload } = props

  return (
    <g transform={`translate(${x},${y})`}>
      <text x={-15} y={15} dy={0} textAnchor="end" fill="white">
        {payload.value}
      </text>
    </g>
  )
}

export default AverageSessions
