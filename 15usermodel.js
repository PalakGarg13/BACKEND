const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/testdb");
const userSchema = mongoose.Schema({ //method that accepts an object
   name: String,
   username: String,
   email: String
})
//create a model for create,read and update
module.exports = mongoose.model("user",userSchema);
//module ko export krna important hai if humne koi route mein kaam krna hai
