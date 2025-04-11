import * as React from "react";
import { LineChart } from '@mui/x-charts/LineChart';
import { Box, Typography } from "@mui/material";


const LineGraph: React.FC = () => {


  return (
    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Typography variant="h5">Monthly Followers</Typography>
        <LineChart
        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
        series={[
            {
            data: [2, 5.5, 2, 8.5, 1.5, 5],
            area: true,
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
