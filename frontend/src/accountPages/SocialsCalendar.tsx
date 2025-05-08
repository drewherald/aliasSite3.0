import { Box } from "@mui/material";
import { useState } from "react";
import dayjs, { Dayjs } from 'dayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import SocialsCalendarCard from "../accountComponents/SocialsCalendarCard";

type SocialCard = {
    date: Dayjs;
    title: string;
    descripton: string;
    platform: string;
}

const SocialsCalendar: React.FC = () => {

    const [value, setValue] = useState<Dayjs | null>(dayjs());

    const cards: SocialCard[] = [];

    cards.push({date: dayjs(), title: 'New Website Launch', descripton: 'Graphic to market the launch of new site', platform: 'Instagram'});

    const shownCards: SocialCard[] = cards.slice().filter((card) => card.date === value);

    return(
        <>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
                    <DateCalendar value={value} onChange={(newValue) => setValue(newValue)} sx={{margin: '0'}} />
                    <Box sx={{display: 'flex', flexDirection: 'column', width: '50%'}}>
                        {shownCards && shownCards.map((card) => <SocialsCalendarCard details={card} />)}
                    </Box>
                </Box>
            </LocalizationProvider>
        </>
    
    )
}

export default SocialsCalendar;