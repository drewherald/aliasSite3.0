import { Box, Typography } from "@mui/material";
import PricingTiers from "../accountComponents/PricingTiers";

const YourPlan: React.FC = () => {
    return(
        <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <Typography variant="h2"  sx={{padding: '2svh 0 0 0'}}>Your Plan</Typography>
            <PricingTiers />
        </Box>
    )
}

export default YourPlan;