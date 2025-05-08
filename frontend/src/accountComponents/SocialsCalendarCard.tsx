import React from 'react';
import { Dayjs } from 'dayjs';
import { Card, CardContent, Typography, Box } from '@mui/material';

type SocialCard = {
    date: Dayjs;
    title: string;
    descripton: string;
    platform: string;
}

type SocialsCalendarCardProps = {
  details: SocialCard;
}

const SocialsCalendarCard: React.FC<SocialsCalendarCardProps> = ({details}) => {


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
            {details.date.toString()}
          </Typography>
          <Typography variant="h5" fontWeight="bold">
            {details.title}
          </Typography>
        </Box>
      </CardContent>
    </Card>
        </>


)}

export default SocialsCalendarCard;