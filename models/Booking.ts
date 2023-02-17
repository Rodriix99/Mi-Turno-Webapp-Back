import { model, Schema, Document } from "mongoose";
import { IBranch } from "./Branch";
import { IUser } from "./Users";

export interface IBooking extends Document {
  branchId: IBranch['_id'];
  reservationDate: String;
  userId: IUser;
  fullName: String;
  phone: Number;
  email: String;
  available: Boolean;
}
const bookingSchema = new Schema({
  branchId: {
    type: Schema.Types.ObjectId,
    ref: "Branch",
  },
  reservationDate: {
    type: String,
    require: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "Users",
  },
  fullName: {
    type: String,
    require: true,
  },
  phone: {
    type: Number,
    require: true,
  },
  email: {
    type: String,
    require: true,
    lowercase: true,
    trim: true,
  },
  available: {
    type: Boolean,
    default: false,
  },
});

export default model<IBooking>("Booking", bookingSchema);
