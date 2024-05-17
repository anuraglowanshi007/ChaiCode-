import mongoose from "mongoose"
const hospitalSchema = mongoose.Schema(
      {
            name:{
                  type:String,
                  required:true
            },
            address:{
                  type:String,
                  required:true
            },
            addressLine:{
                  type:String
            },
            city:{
                  type:String,
                  required:true
            },
            pincode:{
                  type:String,
                  required:true
            },
            specializedIn:[
                  {
                        type:String,
                  }
            ]
      }
      ,{timestamps:true});

      export const Hospital = mongoose.model("Hospital",hospitalSchema);