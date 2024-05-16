import mongoose from "mongoose"
const productsSchema = new mongoose.Schema(
   {
      description:{
            type:String,
            required:true
      },
      name:{
            type:String,
            required:true
      },
      productImage:{
            type:String,  // because of we add image on cloudinary and taking url (string)
            required:true
      },
      price:{
            type:Number,
            default:0
      },
      stock:{
            type:Number,
            default:0
      },
      category:{
            type:mongoose.Schema.Type.ObjectId,
            ref:"Category",
            required:true
      },
      owner:{
            type:mongoose.Schema.Type.ObjectId,
            ref:"User",
            required:true
      }

      
   }
,{timestamps:true}
);

export const Product = mongoose.model("Product",productsSchema);