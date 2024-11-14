import BookingCard from "./BookingCard";

const PastBooking = ({ bookings }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">🕛️ Past Bookings</h2>

      {bookings.length > 0 &&
        bookings?.map((booking) => (
          <div  key={booking.id} className="bg-[#ebf6e9] p-4 rounded-md">
            <BookingCard {...booking} />
          </div>
        ))}
    </div>
  );
};

export default PastBooking;
