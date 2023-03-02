import mongoose from "mongoose";
import bcrypt from "bcrypt";

const Schema = mongoose.Schema;

export interface IAdmin extends mongoose.Document {
  fullName: string;
  dni: number;
  email: string;
  password: string;
  usertype: string;
  comparePassword: (password: string) => Promise<Boolean>;
}

const adminSchema = new Schema({
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
});

adminSchema.pre<IAdmin>("save", async function () {
  const user = this;

  const salt = await bcrypt.genSalt();
  const hash = await bcrypt.hash(user.password, salt);
  user.password = hash;
});

adminSchema.methods.comparePassword = async function (
  password: string
): Promise<Boolean> {
  return await bcrypt.compare(password, this.password);
};

const Admin = mongoose.model<IAdmin>("Admin", adminSchema);

export default Admin;
