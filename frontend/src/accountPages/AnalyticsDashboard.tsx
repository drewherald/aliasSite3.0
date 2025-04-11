import { Box } from "@mui/material";
import React from "react";
import Grid from '@mui/material/Grid';
import LineGraph from "./accountComponents/LineGraph";
import AccountGauge from "./accountComponents/AccountGauge";

const AnalyticsDashboard: React.FC = () => {
  return (
    <Box sx={{padding: '2.5svw'}}>
        <Grid container spacing={0}>
            <Grid size={{xs: 12, md: 8}}>
                <LineGraph />
            </Grid>
            <Grid size={{xs: 12, md: 4}}>
                <AccountGauge />
            </Grid>
            <Grid size={{xs: 12, md: 4}}>
                <div>size=4</div>
            </Grid>
            <Grid size={{xs: 12, md: 8}}>
                <div>size=8</div>
            </Grid>
        </Grid>
    </Box>
  );
};

export default AnalyticsDashboard;