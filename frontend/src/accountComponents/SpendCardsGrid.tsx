import { Box } from "@mui/material";
import React from "react";
import Grid from '@mui/material/Grid';
import TotalSpendCard from "./TotalSpendCard";
import SpendHalfCards from "./SpendHalfCards";

type Analytics = [string, number];

const SpendCardsGrid: React.FC = () => {


    const analytics: Analytics[] = [['Impressions', 9264], ['Engagements', 2243], ['Clicks', 356], ['Follower Growth',488]]

  return (
    <Box sx={{padding: '2.5svw'}}>
        <Grid container spacing={.5}>
            <Grid size={{xs: 12, md: 12}}>
                <TotalSpendCard />
            </Grid>
           
            {analytics.map((item) =>  <Grid size={{xs: 12, md: 6}}> <SpendHalfCards details = {item}/>  </Grid>)}
           
        </Grid>
    </Box>
  );
};

export default SpendCardsGrid;