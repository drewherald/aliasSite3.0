import { Box, Typography } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';


const AccountBarChart: React.FC = () => {

    return(
         <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
         <Typography variant="h5">Social Engagement Last 30 Days</Typography>
             <BarChart
                xAxis={[{ scaleType: 'band', data: ['Facebook', 'Instagram', 'X', 'LinkedIn'] }]}
                series={[{ data: [452, 233, 345, 158] }]}
                width={500}
                height={310}
                colors={['#0000FF']}
                />
        </Box> 
)}

export default AccountBarChart;