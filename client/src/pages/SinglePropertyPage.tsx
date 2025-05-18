import { FaLocationDot } from "react-icons/fa6";
import { LiaBathSolid } from "react-icons/lia";
import {
  MdOutlineBedroomParent,
  MdOutlineMeetingRoom,
  MdOutlinePets,
} from "react-icons/md";
import { PiMoneyWavy } from "react-icons/pi";
import { VscSettings } from "react-icons/vsc";
import { useParams } from "react-router-dom";
import ErrorComponent from "../components/ui/ErrorComponent";
import Spinner from "../components/ui/Spinner";
import GalleryMain from "../features/ImageGallery/GalleryMain";
import MapSmall from "../features/Map/MapSmall";
import MakeReservations from "../features/reservations/MakeReservations";
import { useGetSingleProperty } from "../hooks/propertyHook";
import { convertToSQMT } from "../utils/helpers";
import Footer from "../components/Footer";

const SinglePropertyPage = () => {
  const { id } = useParams();
  const { property, isLoading, error } = useGetSingleProperty(id!);

  if (isLoading) {
    return <Spinner />;
  }

  if (!property) {
    return <ErrorComponent message={error?.message} />;
  }

  return (
    <section className="min-h-screen w-full px-2 md:px-[8rem] flex flex-col gap-4 items-center justify-center">
      <div className="flex flex-col md:flex-row ">
        {/* Left: Gallery & Info */}
        <div className="w-full md:w-3/5 space-y-4">
          {/* Image gallery */}
          <GalleryMain images={property.images} isLoading={isLoading} />
          <div className=" rounded-sm w-full h-[9rem] flex justify-between">
            {/* Property Details */}
            <div className="flex flex-col justify-around w-2/3">
              <h1 className="text-2xl font-bold">{property?.name}</h1>
              <p className="text-gray-600 flex items-center gap-1">
                <FaLocationDot size={20} className="text-accent" />
                {property?.address}
              </p>
              <span className="text-xl font-semibold ">
                $ {property?.price.toFixed(2)}
              </span>
            </div>

            {/* Owner Info */}
            <div className="flex flex-col w-1/3 items-center justify-center gap-3 bg-accent text-white rounded-sm">
              <img
                src={property?.ownerPic}
                alt="Owner"
                className="w-16 h-16 rounded-full object-cover"
              />
              <p className="font-medium">{property?.ownerName}</p>
            </div>
          </div>
          {/* Description */}
          <p className="text-gray-700  leading-relaxed">
            {property?.description}
          </p>
        </div>
        {/* Right: Details Sidebar */}
        <div className="w-full md:w-2/5  px-4 rounded-sm space-y-4">
          {/* General */}
          <h2 className="text-lg font-semibold">General</h2>
          <div className="flex flex-col gap-3 ">
            <div className="flex items-center gap-3">
              <VscSettings className="text-accent" size={30} />
              <div>
                <h3 className="font-medium">Utilities</h3>
                <p className="text-sm text-gray-600">Renter is responsible</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MdOutlinePets className="text-accent" size={30} />
              <div>
                <h3 className="font-medium">Pets</h3>
                <p className="text-sm text-gray-600">
                  Pets are {property?.petsAllowed ? "allowed" : "not allowed"}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <PiMoneyWavy className="text-accent" size={30} />
              <div>
                <h3 className="font-medium">Extra Fees</h3>
                <p className="text-sm text-gray-600">
                  There are no extra fees of ${property?.extraFees}
                </p>
              </div>
            </div>
          </div>

          {/* Room Sizes */}
          <h2 className="text-lg font-semibold mt-4">Room Sizes</h2>
          <div className="flex flex- gap-2">
            <div className="flex  items-center gap-2 bg-gray-100 px-3 py-2 rounded">
              <MdOutlineMeetingRoom />{" "}
              <span className="text-xs text-gray-700">
                {property?.size}sqm ({convertToSQMT(property?.size)} sqft)
              </span>
            </div>
            <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded">
              <MdOutlineBedroomParent />{" "}
              <span className="text-sm text-gray-700">
                {property?.bedrooms} Bedrooms
              </span>
            </div>
            <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded">
              <LiaBathSolid />{" "}
              <span className="text-sm text-gray-700">
                {property?.bathroom} Bathroom
              </span>
            </div>
          </div>

          {/* Location */}
          <h2 className="text-lg font-semibold mt-4">Location</h2>
          <div className="bg-gray-200 h-[15rem] md:h-[35rem] rounded-sm overflow-hidden flex items-center justify-center">
            <MapSmall
              isLoading={isLoading}
              key={property?.id}
              property={property}
            />
          </div>
        </div>
      </div>

      {/* make reservation */}

      <MakeReservations propertyId={id!} price={property.price} />
      <Footer />
    </section>
  );
};

export default SinglePropertyPage;
