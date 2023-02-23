const { Schema, model } = require('mongoose')
const bcrypt = require('bcrypt')

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

  userSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10
      this.password = await bcrypt.hash(this.password, saltRounds)
    }
  
    next()
  })
  //custom method to check passwords
  userSchema.methods.isCorrectPassword = function(password) {
    return bcrypt.compare(password, this.password)
  }

const User = model('User', userSchema)

module.exports = User;    
