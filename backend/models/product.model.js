import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price : {
        type: Number,
        required: true
    },
    image:{
        type: String,
        required: true
    },
}, {
    timestamps: true
});

const userSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
      unique: true, 
      trim: true 
    },
    email: {
      type: String,
      required: true,
      unique: true, 
      trim: true
    },
    password: {
      type: String,
      required: true
    }
  });
  
const Product = mongoose.model('Product', productSchema);

export default Product