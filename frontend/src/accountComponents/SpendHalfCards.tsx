import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

type SpendHalfCardsProps = {
  details: [string, number];
}

const SpendHalfCards: React.FC<SpendHalfCardsProps> = ({details}) => {

    const title = details[0];
    const adSpend = details[1]; 

    return(
        <>
        <Card
      elevation={3}
      sx={{
        padding: 2,
        backgroundColor: '#100F55',
      }}
    >
      <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Box>
          <Typography variant="subtitle2" color="text.secondary">
            {title}
          </Typography>
          <Typography variant="h5" fontWeight="bold">
            {adSpend}
          </Typography>
        </Box>
      </CardContent>
    </Card>
        </>


)}

export default SpendHalfCards;