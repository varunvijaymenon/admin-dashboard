import React from 'react'

export default function ChartContainer(props) {
    const Comp = props.children.CustomAreaChart
    return (
    <div>
        <Comp/>
    </div>
  )
}
