import React, { useState } from "react";
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
  apiPrice: string;
  description: string[];
  buttonText: string;
  buttonVariant: "outlined" | "contained";
}

  type TierString = [string, 'outlined' | 'contained'];

   


const PricingTiers: React.FC = () => {

    const { user } = useAuthContext();

    let webString: TierString = user?.tier === 'Alias + Web' ? ["Current Plan", "outlined"] : ["Get Started", "contained"]
    let networkString: TierString = user?.tier === 'Alias + Network' ? ["Current Plan", "outlined"] : ["Get Started", "contained"]
    let execString: TierString = user?.tier === 'Alias + Executive' ? ["Current Plan", "outlined"] : ["Get Started", "contained"]
    let baseString: TierString = user?.tier === 'Alias + Community' ? ["Current Plan", "outlined"] :["Get Started", "contained"]

  const tiers: Tier[] = [
  {
    title: "Alias + Web",
    price: "$179/mo",
    apiPrice: 'price_1RnL5aF0z1V4Mqo2JPjoujDI',
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
    apiPrice: 'price_1RnL6DF0z1V4Mqo2hbxcxOjT',
    description: [
      "Social Media Management",
      "Graphic Generation",
      "Scheduled Posts",
      "Custom Copywriting",
      "Real-time Analytics",
      "3 Posts/week"
    ],
    buttonText: networkString[0],
    buttonVariant: networkString[1],
  },
  {
    title: "Alias + Executive",
    price: "$500/mo",
    apiPrice: 'price_1RnL6ZF0z1V4Mqo2JBAQfokq',
    description: [
      "All features from Web + Network",
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
    title: "Alias + Community",
    price: "Free",
    apiPrice: 'price_1RnL90F0z1V4Mqo2Gc4taSzO',
    description: [
      "Basic support",
      "No Analytics",
      "Alias Portal Access",
    ],
    buttonText: baseString[0],
    buttonVariant: baseString[1],
  },
];

    const [currentQuantity, setCurrentQuantity] = useState(1);


    

    const postCheckOut = async (currentTier: Tier) => {
    try{

       const cartItems = [{
        name: currentTier.title,
        price: currentTier.apiPrice,
        description: currentTier.description.toString(),
        quantity: currentQuantity
      }]

      const userItem = {
        email: user?.email,
        tier: currentTier.title
      }

      
      const res = await fetch('http://localhost:3000/api/billing/create-sub-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cartItems, userItem }),
      });
      const { url } = await res.json();
      window.location.href = url;


    }catch (err) {
        //setError(err.message);
        console.log(err)
      }
  }

  const handleSubmit = (tier: string) => {

    if(tier?.includes('Web') ){
        webString = ["Current Plan", "outlined"];
        networkString =  ["Get Started", "contained"];
        execString = ["Get Started", "contained"];
        baseString = ["Get Started", "contained"];
        setCurrentQuantity(1)
        postCheckOut(tiers[0])
      }else if(tier?.includes('Network')){

         webString = ["Get Started", "contained"];
        networkString =  ["Current Plan", "outlined"];
        execString = ["Get Started", "contained"];
        baseString = ["Get Started", "contained"];
        setCurrentQuantity(1)
         postCheckOut(tiers[1])
      }else if(tier?.includes('Executive')){

         webString = ["Get Started", "contained"];
        networkString =  ["Get Started", "contained"];
        execString = ["Current Plan", "outlined"];
        baseString = ["Get Started", "contained"];
        setCurrentQuantity(1)
         postCheckOut(tiers[2])
      }else{

         webString = ["Get Started", "contained"];
        networkString =  ["Get Started", "contained"];
        execString = ["Get Started", "contained"];
        baseString = ["Current Plan", "outlined"];
        setCurrentQuantity(1)
         postCheckOut(tiers[3])
      }

    
  }
    
  


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
                  <Button variant={tier.buttonVariant} onClick={() => handleSubmit(tier.title)} fullWidth>
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
