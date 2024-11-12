import Image from "next/image";
import HotelSummaryInfo from "./HotelSummaryInfo";

const HotelCard = ({ hotelInfo, checkin, checkout }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-2 lg:gap-6 border border-gray/20 p-4 rounded-md">
      <div className="relative">

      <Image
        src={hotelInfo?.thumbNailUrl}
        className="lg:max-h-[162px] lg:max-w-[240px] w-full object-cover"
        alt={hotelInfo?.name}
        width={240}
        height={162}
      />
      </div>
      <HotelSummaryInfo fromListPage={true} info={hotelInfo} checkin={checkin} checkout={checkout} />
    </div>
  );
};

export default HotelCard;
