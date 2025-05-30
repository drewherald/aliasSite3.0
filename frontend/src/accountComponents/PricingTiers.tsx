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

interface Tier {
  title: string;
  price: string;
  description: string[];
  buttonText: string;
  buttonVariant: "outlined" | "contained";
}

const tiers: Tier[] = [
  {
    title: "Community",
    price: "Free",
    description: [
      "Basic support",
      "No Analytics",
      "Alias Portal Access",
    ],
    buttonText: "Get started",
    buttonVariant: "outlined",
  },
  {
    title: "Alias Pro",
    price: "$15/mo",
    description: [
      "Advanced analytics",
      "Priority support",
      "Commercial license",
    ],
    buttonText: "Buy Pro",
    buttonVariant: "contained",
  },
  {
    title: "Alias +",
    price: "$149/mo",
    description: [
      "All Pro features",
      "On-Demand Designs",
      "Advanced Interations",
    ],
    buttonText: "Buy Alias +",
    buttonVariant: "contained",
  },
];

const PricingTiers: React.FC = () => {
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
                <ul>
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
                </ul>
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
