import BookingCard from "./BookingCard";

const UpcomingBooking = ({ bookings }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">⌛️ Upcomming Bookings</h2>

      {bookings.length > 0 &&
        bookings?.map((booking) => (
          <div className="bg-[#F6F3E9] p-4 rounded-md">
            <BookingCard key={booking.id} {...booking} />
          </div>
        ))}
    </div>
  );
};

export default UpcomingBooking;
