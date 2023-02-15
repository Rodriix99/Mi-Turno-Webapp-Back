import { model, Schema, Document } from "mongoose";

export interface IBooking extends Document {
  branchId: Number;
  schedule: Date;
  date: Date;
  userId: String;
  name: String;
  lastName: String;
  phone: Number;
  email: String;
  available: Boolean;
}
const bookingSchema = new Schema({
  branchId: {
    type: Number,
    require: true,
  },
  schedule: {
    type: Date,
    require: true,
  },
  date: {
    type: Date,
    require: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
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
    unique: true,
    trim: true,
  },
  available: {
    type: Boolean,
    default: false,
  },
});

export default model<IBooking>("Booking", bookingSchema);
