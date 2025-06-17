import { useEffect, useState } from 'react';
import { Box, Typography } from "@mui/material";
import Stripe from 'stripe';
import InvoiceCard from '../accountComponents/InvoiceCard';
import { v4 as uuidv4 } from 'uuid';
import { useAuthContext } from '../hooks/useAuthContext';

type Response = {
    object: string;
    data: Stripe.Invoice[];
    has_more: boolean;
    url: string;
}


const ManageInvoices: React.FC = () => {

        const { user } = useAuthContext();
  
        const [invoices, setInvoices] = useState<Stripe.Invoice[]>([]);
        const [loading, setLoading] = useState(true);
      
        useEffect(() => {
          fetch('http://localhost:3000/api/billing')
            .then((res) => res.json())
            .then((data: Response) => {
              setInvoices(data.data);
              setLoading(false);
              console.log(invoices);
            })
            .catch((err) => {
              console.error('API error:', err);
              setLoading(false);
            });
        }, []);
    
    
        const activeInvoiceList: Stripe.Invoice[] = invoices.slice().filter((item) => item.status === "open" && item.customer_email == user?.email);
       
        const inactiveInvoiceList: Stripe.Invoice[] = invoices.slice().filter((item) => item.status === "paid" && item.customer_email == user?.email);
      
        if (loading) return <p>Loading...</p>;
    
        return(
        
        <>
           <Box sx={{display: "flex", flexDirection: "column", padding: '2svh 10svw'}}>
                <Typography variant="h3"  sx={{padding: '5svh 0'}}>Your Invoices</Typography>
                <Typography variant="h5"  sx={{padding: '2.5svh 0'}}>Active</Typography>
                {activeInvoiceList && activeInvoiceList.map((item) => <InvoiceCard invoiceInfo={item} key={uuidv4()}/>)}
    
                <Typography variant="h5"  sx={{padding: '10svh 0 2.5svh 0'}}>Completed Work</Typography>
                {inactiveInvoiceList && inactiveInvoiceList.map((item) => <InvoiceCard invoiceInfo={item} key={uuidv4()}/>)}
            </Box>
        </>
    
    )}
    
      

export default ManageInvoices;