import mongoose, {Schema, Types} from "mongoose";

const bookingSchema = new Schema({
  hotelId: {
    required: true,
    type: Types.ObjectId
  },
  userId: {
    required: true,
    type: Types.ObjectId
  },
  checkin: {
    required: true,
    type: String
  },
  checkout: {
    required: true,
    type: String
  },
});


export const bookingModel = mongoose.models?.bookings ?? mongoose.model("bookings", bookingSchema);