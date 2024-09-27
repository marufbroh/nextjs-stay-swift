import { getReviewsForAHotel } from "@/database/queries";

const HolesReviewsPage = async ({ params: { id } }) => {
  const reviews = await getReviewsForAHotel(id);
  //   console.log(reviews);
  return (
    <>
      <section className="bg-[url('/hero-bg.jpg')] bg-cover bg-no-repeat bg-center pt-[100px] pb-[60px]"></section>
      <section className="container mt-5">
        {reviews?.map((review, index) => (
          <p key={review?.id} className="p-2 rounded-md shadow-md">
            <span className="p-1 px-2 bg-green-500 rounded-full block w-fit">{index+1}</span>
            {review?.review}
            Great place to stay. Rooms were clean, the lawn was great. We loved
            all the amenities. The food seems to be on the higher rate side.
            Great place to stay. Rooms were clean, the lawn was great. We loved
            all the amenities. The food seems to be on the higher rate side.
            Great place to stay. Rooms were clean, the lawn was great. We loved
            all the amenities. The food seems to be on the higher rate side.
            Great place to stay. Rooms were clean, the lawn was great. We loved
            all the amenities. The food seems to be on the higher rate side.
            Great place to stay. Rooms were clean, the lawn was great. We loved
            all the amenities. The food seems to be on the higher rate side.
            Great place to stay. Rooms were clean, the lawn was great. We loved
            all the amenities. The food seems to be on the higher rate side.
          </p>
        ))}
      </section>
    </>
  );
};

export default HolesReviewsPage;
