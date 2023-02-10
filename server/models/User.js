const { Schema, model } = require('mongoose')

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: "A username is required",
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: "An email is required",
      unique: true,
      match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    password: {
      type: String,
      required: "A password is required",
      minlength: 5,
    },
  });

const User = model('User', userSchema)

module.exports = User;    
