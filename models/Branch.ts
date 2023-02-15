import mongoose from "mongoose";
import { model, Schema, Document } from "mongoose";

export interface IBranch extends Document {
    ubication: string;
    coordinates: string;
    booking: Array<[]>;
  };

const branchSchema = new Schema({

    ubication: {
      type: String,
      required: true,
    },
    coordinates: {
      type: String,
      required: true
    },
    booking: [
        {
          type: Schema.Types.ObjectId,
          ref: "Booking",
        },
      ],

  });
  
  export default model<IBranch>("User", branchSchema);
