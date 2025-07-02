import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Button,
  Container,
} from "@mui/material";
import { useAuthContext } from "../hooks/useAuthContext";

interface Tier {
  title: string;
  price: string;
  description: string[];
  buttonText: string;
  buttonVariant: "outlined" | "contained";
}

  type TierString = [string, 'outlined' | 'contained'];


const PricingTiers: React.FC = () => {

    const { user } = useAuthContext();

    console.log(user?.tier)


    const webString: TierString = user?.tier === 'Web' ? ["Current Plan", "outlined"] : ["Get Started", "contained"]
    const communityString: TierString = user?.tier === 'Network' ? ["Current Plan", "outlined"] : ["Get Started", "contained"]
    const execString: TierString = user?.tier === 'Executive' ? ["Current Plan", "outlined"] : ["Get Started", "contained"]
    const baseString: TierString = user?.tier === 'Community' ? ["Current Plan", "outlined"] :["Get Started", "contained"]



    const tiers: Tier[] = [
  {
    title: "Alias + Web",
    price: "$179/mo",
    description: [
      "Website Creation",
      "Site Management",
      "Hosting & SEO",
      "Live Statistics",
      "Custom Design",
      "Unimited Revisions"
    ],
    buttonText: webString[0],
    buttonVariant: webString[1],
  },
  {
    title: "Alias + Network",
    price: "$149/mo/account",
    description: [
      "Social Media Management",
      "Graphic Generation",
      "Scheduled Posts",
      "Custom Copywriting",
      "Real-time Analytics",
      "3 Posts/week"
    ],
    buttonText: communityString[0],
    buttonVariant: communityString[1],
  },
  {
    title: "Alias + Executive",
    price: "$500/mo",
    description: [
      "All features from Web + Community",
      "Custom assets, fonts, brand guide",
      "Highest priority",
      "3 free 'a la carte' designs/month",
      "Real-time Analytics",
      "3 Posts/week"
    ],
    buttonText: execString[0],
    buttonVariant: execString[1],
  },
    {
    title: "Community",
    price: "Free",
    description: [
      "Basic support",
      "No Analytics",
      "Alias Portal Access",
    ],
    buttonText: baseString[0],
    buttonVariant: baseString[1],
  },
];
  


  return (
    <Container maxWidth="md" sx={{ mt: 6, mb: 6 }}>
      <Box  sx={{display: "flex", flexDirection: 'column'}}>
        {tiers.map((tier) => (
          <Box key={tier.title}>
            <Card sx={{margin: '1svh 0'}}>
              <CardHeader
                title={tier.title}
                titleTypographyProps={{ align: "center" }}
                sx={{ backgroundColor: (theme) => theme.palette.grey[200], color: '#100F55 !important' }}
              />
              <CardContent>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "baseline", mb: 2 }}>
                  <Typography component="h2" variant="h3" color="text.primary">
                    {tier.price}
                  </Typography>
                </Box>
                <Box sx={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridTemplateRows: "repeat(2, 1fr)", gap:'10px', justifyContent: 'center'}}>
                    
                        {tier.description.map((line) => (
                          <Typography
                            component="li"
                            variant="subtitle1"
                            align="center"
                            key={line}
                          >
                            {line}
                          </Typography>
                        ))}
                    
                </Box>
                
                <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
                  <Button variant={tier.buttonVariant} fullWidth>
                    {tier.buttonText}
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default PricingTiers;
