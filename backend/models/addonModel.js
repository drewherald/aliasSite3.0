const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { v4: uuidv4 } = require('uuid');

const addOnSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  }
});



//static get method
addOnSchema.statics.getItems = async function (email) {
    try{
        const items = await this.find({}); // <-- empty filter: get all
        return items;
    }catch (err) {
        throw err;
  }
   
}

addOnSchema.statics.postItems = async function (name, price, description) {
    try {

   // const newItem = new Item({ name, price, description });

    const savedItem = await this.create({name, price, description, id: uuidv4()})

    return savedItem;
  } catch (err) {
    console.log(err)
    throw err;
  }
}




module.exports = mongoose.model("AddOn", addOnSchema);
