import { hotelModel } from "@/models/hotel-model";
import { replaceMongoIdInArray } from "@/utils/data-util";

export const getAllHotels = async () => {
  const hotels = await hotelModel.find().lean();
  return replaceMongoIdInArray(hotels);
};
