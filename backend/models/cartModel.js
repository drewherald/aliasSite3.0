const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema({

cart:[{
    name: String,
    price: Number,
    description: String,
    id: String
  }],
   email: {
    type: String,
    required: true,
    unique: true,
  }
});



//static get method
cartSchema.statics.getItems = async function (email) {
    try{
        const items = await this.find({email: email}); // <-- empty filter: get all
        return items;
    }catch (err) {
        throw err;
  }
   
}

cartSchema.statics.postItems = async function (cart, email) {
    try {

    const exists = await this.findOne({ email: email });

    if(exists){

        const savedItem = await this.findOneAndUpdate({email: email}, {cart: cart}, { returnOriginal: false, returnDocument: "after" })
        return savedItem;

    }else{
        const savedItem = await this.create({cart, email})
        return savedItem;

    }
   
  } catch (err) {
    console.log(err)
    throw err;
  }
}




module.exports = mongoose.model("Cart", cartSchema);
