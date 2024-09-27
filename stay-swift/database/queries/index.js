import { hotelModel } from "@/models/hotel-model";
import { ratingModel } from "@/models/rating-model";
import { reviewModel } from "@/models/review-model";
import {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from "@/utils/data-util";

export const getAllHotels = async () => {
  const hotels = await hotelModel
    .find()
    .select([
      "thumbNailUrl",
      "name",
      "highRate",
      "lowRate",
      "city",
      "propertyCategory",
    ])
    .lean();
  return replaceMongoIdInArray(hotels);
};

export const getHotelById = async (hotelId) => {
  const hotel = await hotelModel.findById(hotelId).lean();
  return replaceMongoIdInObject(hotel);
};

export const getRatingsForAHotel = async (hotelId) => {
  const ratings = await ratingModel.find({ hotelId: hotelId }).lean();

  return replaceMongoIdInArray(ratings);
};

export const getReviewsForAHotel = async (hotelId) => {
  const reviews = await reviewModel.find({ hotelId: hotelId }).lean();

  return replaceMongoIdInArray(reviews);
};
