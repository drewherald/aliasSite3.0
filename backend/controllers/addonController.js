const AddOn = require("../models/addonModel");

const Cart = require("../models/cartModel");



const getAddonItems = async (req, res) => {

  try {
    const items = await AddOn.getItems();


    res.status(200).json({items});
  } catch (e) {
    res.status(400).json({ error: e.message });
    console.log(e.message);
  }
};

const postAddOnItems = async (req, res) => {

    try{
        const {name, price, description} = req.body;

        const items = await AddOn.postItems(name, price, description);

         res.status(200).json({items});
  } catch (e) {
    res.status(400).json({ error: e.message });
    console.log(e.message);
  }
    

}

const getCartItems = async (req, res) => {

  try {
     const email = req.params.email

    const items = await Cart.getItems(email);


    res.status(200).json({items});
  } catch (e) {
    res.status(400).json({ error: e.message });
    console.log(e.message);
  }
};

const postCartItems = async (req, res) => {

    try{
        const {cart, email} = req.body;

        const items = await Cart.postItems(cart, email);
        console.log(items)

         res.status(200).json({items});
  } catch (e) {
    res.status(400).json({ error: e.message });
    console.log(e.message);
  }
    

}


module.exports = { getAddonItems, postAddOnItems, getCartItems, postCartItems};
