import mongoose from "mongoose";
const Schema = mongoose.Schema;
const model = mongoose.model;


export interface IAdmin extends Document {
    fullName: string;
    dni: number;
    email: string;
    password: string;
    usertype: string;
   
  }

const adminSchema = new Schema(
  {
    fullName: {
      type: String,
      require: true,
    },
    dni: {
      type: Number,
      require: true,
      unique: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    usertype: {
      type: String,
      enum: ["user", "operator", "admin"],
      default: "admin",
      require: true,
    },
  
  }
);

export default model<IAdmin>("Admin", adminSchema);