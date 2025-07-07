const AddOn = require("../models/addonModel");


//login user
const getAddonItems = async (req, res) => {

 // const { email, password } = req.body;

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
    console.log(e.message+"addOnController.28");
  }
    

}


module.exports = { getAddonItems, postAddOnItems};
