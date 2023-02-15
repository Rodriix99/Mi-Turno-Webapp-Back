import { model, Schema, Document } from "mongoose";

export interface IBooking extends Document {
  branchId: Number;
  reservationDate: String;
  date: String;
  userId: String;
  name: String;
  lastName: String;
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
  date: {
    type: String,
    require: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "Users",
  },
  name: {
    type: String,
    require: true,
  },
  lastName: {
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
