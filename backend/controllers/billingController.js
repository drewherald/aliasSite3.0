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

const checkoutAddOn = async (req, res) => {
  const { cartItems } = req.body;

  const line_items = cartItems.map(item => ({
    price_data: {
      currency: 'usd',
      product_data: {
        name: item.name,
        description: item.description,
      },
      unit_amount: item.price * 100, // Stripe expects cents
    },
    quantity: item.quantity,
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    mode: 'payment',
    line_items,
    success_url: 'http://localhost:5173/account',
    cancel_url: 'http://localhost:5173/account',
  });

  res.json({ url: session.url});
};

module.exports = {getInvoices, checkoutAddOn}
