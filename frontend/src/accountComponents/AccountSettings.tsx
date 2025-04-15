import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import { Avatar, Box } from '@mui/material';


const AccountSettings: React.FC = () => {

    const [expanded, setExpanded] = useState<string | false>(false);

    const handleChange =
      (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
      };

    return(
    <Box sx={{display: 'flex', flexDirection: 'column'}}>
        <Box sx={{padding: '2svh 2svw'}}>
        <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <Typography variant='h3' sx={{textAlign: 'left', padding: '2svh 0'}}>Account Settings</Typography>
        <Avatar src='https://aliasmediadesign.com/assets/aliasStudios-DCKii6Zp.png'  sx={{height: '8svh', width: '8svh'}}/>
        </Box>
        <Box sx={{padding: '2svh 0'}}>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                >
                <Typography component="span" sx={{ width: '33%', flexShrink: 0 }}>
                    Email
                </Typography>
                <Typography component="span" sx={{ color: 'text.secondary' }}>
                    drew@aliasmediadesign.com
                </Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    Change Email
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
                >
                <Typography component="span" sx={{ width: '33%', flexShrink: 0 }}>
                    Your Plan
                </Typography>
                <Typography component="span" sx={{ color: 'text.secondary' }}>
                    Alias +
                </Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    Modify your subscription.
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
                >
                <Typography component="span" sx={{ width: '33%', flexShrink: 0 }}>
                    Advanced settings
                </Typography>
                <Typography component="span" sx={{ color: 'text.secondary' }}>
                    Filtering has been entirely disabled for whole web server
                </Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
                >
                <Typography component="span" sx={{ width: '33%', flexShrink: 0 }}>
                    Personal data
                </Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
        </Box>
    </Box>
    )}

export default AccountSettings;