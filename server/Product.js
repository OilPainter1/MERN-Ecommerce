const { Schema } = require('mongoose');

const productSchema = new Schema({
  brands: [
    {
      type: String,
      required: true
    },
  ],
   size: {
     type: Num,
     required: true
   },
   styles: [
     {
       type: String,
       required: true,
     },
   ],  
   colors: {
     type: String,
     required: true
   },
   price: {
     type: Num,
     required: true
   },
   description: {
     type: String,
     required: true
   },
   image: {
     type: String,
     required: true
   },
);
  
module.exports = productSchema;   
     
                                 
   
     
     
