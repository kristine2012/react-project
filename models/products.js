const mongoose = require('mongoose'); // since we are using mongoose we have to require it

const  userSchema = new mongoose.Schema({
  _id : mongoose.Schema.Types.ObjectId,
  name : String,
  price : Number,
  user_id :{
    type : mongoose.Schema.Types.ObjectId,
    ref : User
  }
});

module.exports = mongoose.model('Product', productSchema);
