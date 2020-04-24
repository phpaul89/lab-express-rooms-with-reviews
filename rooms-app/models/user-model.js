// 'Mongoose': solution to model data for MongoDB which
// handles 'validation', 'casting', 'query building' and 'business logic hooks', see google
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// 'schema': blueprint for object model
const userSchema = new Schema(
  {
    email: String,
    password: String,
    fullName: String,
    //Bonus: slackID: String
  },
  {
    timestamps: true,
  }
);

// 'User' is an object with database functionality -> MongoDB can process it
// '.model' to add above mentioned functionality
const User = mongoose.model("user", userSchema);

// export to make 'User'-logic available to other scripts in this web application
module.exports = User;
