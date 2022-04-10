import React from 'react'
import CustomAreaChart from './CustomAreaChart';
import Box from '@mui/material/Box';
import ChartContainer from './ChartContainer';

export default function ThirdRow() {
  return (
    <div className="ThirdRowContainer">
        <div className="AreaChart">
          <div className="AreaChartTitle">
            <Box />
          </div>
          <ChartContainer>
            <CustomAreaChart/>
          </ChartContainer>
        </div>
        <div className="PieChart"></div>
    </div>
  )
}
