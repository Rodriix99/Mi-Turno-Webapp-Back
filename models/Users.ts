import mongoose from "mongoose";
import { IBooking } from "./Booking";
import { IBranch } from "./Branch";
const Schema = mongoose.Schema;
const model = mongoose.model;

export interface IUser extends Document {
  fullName: string;
  email: string;
  password: string;
  dni: number;
  usertype: string;
  branch: IBranch;
  booking: IBooking;
}

const userSchema = new Schema({
  fullName: {
    type: String,
    require: true,
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

export default model<IUser>("Users", userSchema);
