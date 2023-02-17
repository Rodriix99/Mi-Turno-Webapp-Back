import mongoose from "mongoose";
import { IBooking } from "./Booking";
import { IBranch } from "./Branch";
import bcrypt from "bcrypt";
const Schema = mongoose.Schema;
const model = mongoose.model;

export interface IUser extends Document {
  fullName: string;
  email: string;
  password: string;
  dni: number;
  usertype: string;
  branch: Array<IBranch>;
  booking: Array<IBooking>;
  comparePassword: (password: string) => Promise<Boolean>;
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

  branch: [
    {
      type: Schema.Types.ObjectId,
      ref: "branch",
    },
  ],
  booking: [
    {
      type: Schema.Types.ObjectId,
      ref: "booking",
    },
  ],
});

userSchema.pre<IUser>("save", async function () {
  const user = this;

  const salt = await bcrypt.genSalt();
  const hash = await bcrypt.hash(user.password, salt);
  user.password = hash;
});

userSchema.methods.comparePassword = async function (
  password: string
): Promise<Boolean> {
  return await bcrypt.compare(password, this.password);
};

export default model<IUser>("Users", userSchema);
