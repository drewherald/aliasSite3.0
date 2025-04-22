const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const getInvoices = async (req,res) => {
    
    try{
        const invoices = await stripe.invoices.list({
            limit: 10,
          });

          res.status(200).json(invoices);

    }catch (error) {
    res.status(400).json({ error: error.message });
  } 

}

module.exports = {getInvoices}
