import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import './CustomAreaChart.css'
import ChartContainer from './ChartContainer';

const data = [
    {
      "name": "Jan",
      "Earnings": '0'
    },
    {
      "name": "Feb",
      "Earnings": '10000'
    },
    {
      "name": "Mar",
      "Earnings": '5000'
    },
    {
      "name": "Apr",
      "Earnings": '15000'
    },
    {
      "name": "May",
      "Earnings": '10000'
    },
    {
      "name": "Jun",
      "Earnings": '20000'
    },
    {
      "name": "Jul",
      "Earnings": '15000'
    },
    {
        "name": "Aug",
        "Earnings": '25000'
      },
      {
        "name": "Sep",
        "Earnings": '20000'
      },
      {
        "name": "Oct",
        "Earnings": '30000'
      },
      {
        "name": "Nov",
        "Earnings": '25000'
      },
      {
        "name": "Dec",
        "Earnings": '35000'
      },
  ]

  const formatYaxis = (tickItem) => {
    return '$'+ new Intl.NumberFormat().format(tickItem);
  }

export default function CustomAreaChart() {
  return (
    <div>
        <AreaChart width={800} height={350} data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4E73DF" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#4E73DF" stopOpacity={0}/>
                </linearGradient>
            </defs>
            <XAxis dataKey="name" axisLine={false} tickLine={false} fontSize={12.75}/>
            <YAxis type='number' axisLine={false} tickLine={false} domain={[0,40000]} tickFormatter={formatYaxis} fontSize={12.75}/>
            <CartesianGrid  vertical={false} strokeDasharray='1.5'/>
            <Tooltip />
            <Area type="monotone" dataKey="Earnings" stroke="#4E73DF" fillOpacity={0.25} fill="url(#colorPv)" strokeWidth={3} dot={true}/>
        </AreaChart>
        </div>
  )
}
