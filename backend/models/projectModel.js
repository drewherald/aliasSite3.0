const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  projStatus: {
    type: String,
    required: true,
  },
  email: {
    type: [String],
    required: true,
  },
  update: [{
    userName: String,
    body: String,
    date: String
  }]
});



//static get method
projectSchema.statics.getItems = async function (email) {
    try{

        
        const items = await this.find({email: email}); // <-- empty filter: get all
    
       
        return items;
    }catch (err) {
        throw err;
  }
   
}

projectSchema.statics.postItems = async function (name, projStatus, email, update) {
    try {

   // const newItem = new Item({ name, price, description });

    const savedItem = await this.create({name, projStatus, email, update})

    return savedItem;
  } catch (err) {
    console.log(err)
    throw err;
  }
}




module.exports = mongoose.model("Project", projectSchema);
