import TestImg from "../../assets/test.avif";
import { CiLocationOn, CiBookmark } from "react-icons/ci";
import { MdOutlineBedroomParent, MdOutlineBathroom } from "react-icons/md";

const PropertyCardMain = () => {
  return (
    <div className="w-full  h-[14rem] flex rounded-md overflow-hidden shadow-sm">
      {/* Image */}
      <div className="w-1/3 h-full rounded-xl overflow-hidden">
        <img
          src={TestImg}
          alt="property"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="w-2/3 p-4 flex flex-col justify-between">
        {/* Top Section */}
        <div className="flex flex-col items-start h-full justify-between">
          <h1 className="text-lg font-semibold text-gray-800">
            A Great Apartment Near the Park
          </h1>
          <p className="flex items-center text-sm text-gray-500">
            <CiLocationOn className="mr-1 text-lg" />
            456 Park Avenue, London
          </p>
          <span className="text-base font-medium bg-amber-200 px-2 py-1 inline-block rounded">
            $ 1000
          </span>
        </div>

        {/* Bottom Section */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-1 bg-gray-100 rounded-md px-2 py-1 text-xs ">
              <MdOutlineBedroomParent className="text-lg" />
              <span>2 Bedroom</span>
            </div>
            <div className="flex items-center gap-1 bg-gray-100 rounded-md px-2 py-1 text-xs ">
              <MdOutlineBathroom className="text-lg" />
              <span>1 Bathroom</span>
            </div>
          </div>
          <button className="text-gray-500 hover:text-gray-800 transition">
            <CiBookmark className="text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCardMain;
