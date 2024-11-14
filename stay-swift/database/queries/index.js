import { bookingModel } from "@/models/booking-model";
import { hotelModel } from "@/models/hotel-model";
import { ratingModel } from "@/models/rating-model";
import { reviewModel } from "@/models/review-model";
import { userModel } from "@/models/user-model";
import {
  isDateInbetween,
  isDateOverlapping,
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from "@/utils/data-util";

export const getAllHotels = async (
  destination,
  checkin,
  checkout,
  category
) => {
  const regex = new RegExp(destination, "i");

  const hotelsByDestination = await hotelModel
    .find({ city: { $regex: regex } })
    .select([
      "thumbNailUrl",
      "name",
      "highRate",
      "lowRate",
      "city",
      "propertyCategory",
    ])
    .lean();

  let allHotels = hotelsByDestination;

  if (category) {
    const categoriesToMatch = category.split("|");
    allHotels = allHotels.filter((hotel) => {
      return categoriesToMatch.includes(hotel.propertyCategory.toString());
    });
  }

  if (checkin && checkout) {
    allHotels = await Promise.all(
      allHotels.map(async (hotel) => {
        const found = await findBooking(hotel._id, checkin, checkout);

        if (found) {
          hotel["isBooked"] = true;
        } else {
          hotel["isBooked"] = false;
        }

        return hotel;
      })
    );
  }

  return replaceMongoIdInArray(allHotels);
};

const findBooking = async (hotelId, checkin, checkout) => {
  const matches = await bookingModel
    .find({ hotelId: hotelId.toString() })
    .lean();

  const found = matches.find((match) => {
    // isDateInbetween(checkin, match.checkin, match.checkout) ||
    // isDateInbetween(checkout, match.checkin, match.checkout)

    return isDateOverlapping(checkin, checkout, match.checkin, match.checkout);
  });

  return found;
};

export const getHotelById = async (hotelId, checkin, checkout) => {
  const hotel = await hotelModel.findById(hotelId).lean();

  if (checkin && checkout) {
    const found = await findBooking(hotel._id, checkin, checkout);
    if (found) {
      hotel["isBooked"] = true;
    } else {
      hotel["isBooked"] = false;
    }
  }

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

export const getUserByEmail = async (email) => {
  const user = await userModel.findOne({ email }).lean();
  return replaceMongoIdInObject(user);
};

export const getBookingsByUser = async (userId) => {
  const bookings = await bookingModel.find({ userId }).lean();

  return replaceMongoIdInArray(bookings);
};
