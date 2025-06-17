import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import Grid from '@mui/material/Grid';
import LineGraph from "../accountComponents/LineGraph";
import SpendCardsGrid from "../accountComponents/SpendCardsGrid";
import AccountBarChart from "../accountComponents/AccountBarChart";
import { AccountContext } from "./AccountHomeLayout";



const AnalyticsDashboard: React.FC = () => {

const AccountGlobal = useContext(AccountContext);
    
  return (
    <Box sx={{padding: '2.5svw'}}>
        <Grid container spacing={0}>
            <Grid size={{xs: 12, md: 12}}>
                <Typography variant="h3"  sx={{padding: '1svh 0 0 0'}}>Welcome {AccountGlobal.userName}</Typography>
            </Grid>
            <Grid size={{xs: 12, md: 12}}>
                <SpendCardsGrid />
            </Grid>
            <Grid size={{xs: 12, md: 6}}>
                <LineGraph />
            </Grid>
            <Grid size={{xs: 12, md: 6}}>
                <AccountBarChart />
            </Grid>
        </Grid>
    </Box>
  );
};

export default AnalyticsDashboard;