import { CiLocationOn } from "react-icons/ci";
import { MdOutlineBathroom, MdOutlineBedroomParent } from "react-icons/md";
import { Link } from "react-router-dom";
import type { Property } from "../../types/property.type";

interface PropertyCardMainProps {
  property: Property;
}

const PropertyCardMain = ({ property }: PropertyCardMainProps) => {
  return (
    <div className="w-full h-[15rem] lg:h-[15rem]  flex rounded-sm overflow-hidden p-2 border border-gray-400/50">
      {/* Image */}
      <div className="w-1/3 h-full rounded-sm overflow-hidden">
        <img
          src={property.images[0]}
          alt={property.name}
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Content */}
      <div className="w-2/3 pl-4 flex flex-col justify-between">
        {/* Top Section */}
        <div className="flex flex-col items-start h-full justify-between ">
          <Link
            to={`/${property.id}`}
            className="text-3xl font-semibold text-gray-900 hover:text-gray-900/70 transition-all duration-200 overflow-hidden"
          >
            {property.name}
          </Link>
          <p className="flex items-center text-sm text-gray-500">
            <CiLocationOn className="mr-1 text-lg" />
            {property.address}
          </p>
          <span className="text-base font-medium bg-orange-200 px-2 py-1 inline-block rounded">
            $ {property.price}
          </span>
        </div>

        {/* Bottom Section */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-1 bg-gray-100 rounded-md px-2 py-1 text-xs ">
              <MdOutlineBedroomParent className="text-lg" />
              <span>
                {property.bedrooms}{" "}
                {property.bedrooms > 1 ? "bedrooms" : "bedroom"}
              </span>
            </div>
            <div className="flex items-center gap-1 bg-gray-100 rounded-md px-2 py-1 text-xs ">
              <MdOutlineBathroom className="text-lg" />
              <span>
                {property.bathroom}{" "}
                {property.bathroom > 1 ? "bedrooms" : "bedroom"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCardMain;
