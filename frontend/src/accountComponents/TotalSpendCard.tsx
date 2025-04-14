import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

const TotalSpendCard: React.FC = () => {

    const adSpend = '$12,430.25'; 
    const date = new Date();
    const year = date.getFullYear();

    return(
        <>
        <Card
      elevation={3}
      sx={{
        padding: 2,
        minWidth: 250,
        backgroundColor: '#100F55',
      }}
    >
      <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Box
          sx={{
            backgroundColor: '#0000FF',
            color: '#1976d2',
            padding: 1.5,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <MonetizationOnIcon fontSize="large" sx={{backgroundColor: '#0000FF', color: 'white'}} />
        </Box>
        <Box>
          <Typography variant="subtitle2" color="text.secondary">
            {`Total Ad Spend (`+year+`)`}
          </Typography>
          <Typography variant="h5" fontWeight="bold">
            {adSpend}
          </Typography>
        </Box>
      </CardContent>
    </Card>
        </>


)}

export default TotalSpendCard;