import * as React from "react";
import { LineChart } from '@mui/x-charts/LineChart';
import { Box, Typography } from "@mui/material";


const LineGraph: React.FC = () => {

  const xLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June']


  return (
    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Typography variant="h5">Monthly Followers (All Socials)</Typography>
        <LineChart
        xAxis={[{ scaleType: 'point', data: xLabels }]}
        series={[
            {
            data: [255, 333, 756, 833, 950, 1550],
            area: false,
            color: '#0000FF',
            showMark: true,
        
            },
        ]}
        width={500}
        height={300}
        />
    </Box>
  );
};

export default LineGraph;
