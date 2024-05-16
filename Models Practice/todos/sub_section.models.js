import mongoose from "mongoose"
import { User } from "./user.models";
const subtodosSchema = new mongoose.Schema(
  {
    content:{
      type:String,
      required:true,
    },
    complete:{
      type:Boolean,
      default:false
    },
    createdBy:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"User"
    },
    subTodos:[
      {
        type:mongoose.Schema.Types.ObjectId,
        ref:"SubTodos"
      }
    ]   //array of SubTodos 

  },{timestamps:true})

  export const SubTodos = mongoose.model("SubTodos",SubtodpSchema);