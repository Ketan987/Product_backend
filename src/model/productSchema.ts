import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  id : {
      type : String,
      unique : true

  },
  productName : {
      type : String,
  },
  productCode : {
      type: String,
  },
  description : {
      type : String
  },
  releaseDate : {
      type : Date,
  },
  price : {
      type : Number
  },
  rating : {
      type : Number
  },
  imageUrl : {
      type : String
  }

},{collection : "ProductData", timestamps:true})


export default mongoose.model("ProductData", productSchema);