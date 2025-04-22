import { Card, CardContent, Typography, Box, Link } from '@mui/material';
import Stripe from 'stripe';

type InvoiceCardProps = {
    invoiceInfo: Stripe.Invoice;
}

const InvoiceCard: React.FC<InvoiceCardProps> = ({invoiceInfo}) => {

    const formattedAmountDue = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(invoiceInfo.amount_due/100); 

   return(
        <>
        <Card
      elevation={3}
      sx={{
        padding: 2,
        margin: '1svh',
        backgroundColor: '#100F55',
      }}
    >
      <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Box>
        <Typography variant="h5" fontWeight="bold">
            {invoiceInfo.customer_name}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            Status: {invoiceInfo.status && invoiceInfo.status.charAt(0).toUpperCase() + invoiceInfo.status.slice(1)}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            Amount Due: {formattedAmountDue}
          </Typography>
         {invoiceInfo.hosted_invoice_url && <Link href= {invoiceInfo.hosted_invoice_url} variant="subtitle2" color="text.secondary">
            View Invoice
          </Link>}
        </Box>
      </CardContent>
    </Card>
        </>


)}

export default InvoiceCard;