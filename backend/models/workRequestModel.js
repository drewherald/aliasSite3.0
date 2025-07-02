const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const workRequestSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  requestType: {
    type: String,
    required: true,
  },
    requestBody: {
    type: String,
    required: true,
  },
   requestId: {
    type: String,
    required: true,
  },
});

var id = new mongoose.Types.ObjectId();

//static signup method
workRequestSchema.statics.createWorkRequest = async function (email, requestType, requestBody) {
  

  const workRequest = await this.create({ email, requestType, requestBody, requestId: id });

  return workRequest;
};


module.exports = mongoose.model("Work Request", workRequestSchema);
