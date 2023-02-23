const { Schema, model } = require('mongoose');

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true
  },
  brand:
    {
      type: String,
      required: true
    },
  sizes: [
    {
    type: Number,
    required: true
  }
  ],
  category: [
    {
      type: String,
      required: true,
    },
  ],
  style: {
    type: String,
    required: true
  },
  color: [
    {
    type: String,
    required: true
    }
  ],
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  quantityInStock: {
    type: Number,
    required: true,
    default: 0
  },
});


const Product = model('Product', productSchema)

module.exports = Product





