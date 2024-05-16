import mongoose from "mongoose"

const userSchema = new mongoose.Schema(        // mongooseSchema is method give two object 
      {
            username:{
                  type:String,
                  required:true,
                  lowercase:true,
                  unique:true
            },
            email:{
                  type:String,
                  required:true,
                  lowercase:true,
                  unique:true,
            },
            password:{
                  type:String,
                  required:true,
                  unique:true
            }
     }
,{timestamps:true}   //It takes two fileds CreateAt, UpdateAt
);

export const User = mongoose.model("User",userSchema);