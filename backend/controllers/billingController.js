const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const User = require("../models/userModel");

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

const subscriptionChange = async (req, res) => {
  const { cartItems, userItem } = req.body;

  try{

     
    const line_items = cartItems.map(item => ({
        price: item.price, 
        quantity: item.quantity,
      }));

     

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        mode: 'subscription',
        line_items,
        success_url: 'http://localhost:5173/account',
        cancel_url: 'http://localhost:5173/account',
      }); 

      const user = await User.findOneAndUpdate(
              { email: userItem.email },
              {
                tier: userItem.tier
              },
              { new: true }
            );
      console.log(user)

        res.json({ url: session.url});
  }catch(e){
    console.error(e);
    res.status(500).json({ error: 'Failed to create checkout session' });
  }
  
};


module.exports = {getInvoices, checkoutAddOn, subscriptionChange}
