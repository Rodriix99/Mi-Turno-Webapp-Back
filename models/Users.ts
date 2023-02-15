import mongoose from "mongoose";
const Schema = mongoose.Schema;
const model = mongoose.model;

export interface IUser extends Document {
  name: string;
  lastname: string;
  email: string;
  password: string;
  dni: number;
  usertype: string;
  branch: Array<[]>;
  booking: Array<[]>;
}

const userSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  lastname: {
    type: String,
    unique: true,
    require: true,
    lowercase: true,
    trim: true,
  },

  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  dni: {
    type: Number,
    require: true,
    unique: true,
  },
  usertype: {
    type: String,
    enum: ["admin", "operator", "user"],
    require: true,
  },

  branch: {
    type: Schema.Types.ObjectId,
    ref: "branch",
  },
  booking: {
    type: Schema.Types.ObjectId,
    ref: "booking",
  },
});

export default model<IUser>("User", userSchema);
