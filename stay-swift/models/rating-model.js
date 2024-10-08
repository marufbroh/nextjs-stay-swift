import mongoose, {Schema, Types} from "mongoose";

const ratingSchema = new Schema({
  hotelId: {
    required: true,
    type: Types.ObjectId
  },
  userId: {
    required: true,
    type: Types.ObjectId
  },
  rating: {
    required: true,
    type: Number
  },
});


export const ratingModel = mongoose.models?.ratings ?? mongoose.model("ratings", ratingSchema);