import { VscSettings } from "react-icons/vsc";
import {
  MdOutlinePets,
  MdOutlineMeetingRoom,
  MdOutlineBedroomParent,
} from "react-icons/md";
import { PiMoneyWavy } from "react-icons/pi";
import { LiaBathSolid } from "react-icons/lia";
import { CiBookmark } from "react-icons/ci";
import profilePic from "../assets/profilePic.avif"

const SinglePropertyPage = () => {
  return (
    <section className="min-h-screen px-4 md:px-[8rem] py-6  flex flex-col md:flex-row gap-3">
      {/* Left: Gallery & Info */}
      <div className="w-full md:w-3/5 space-y-4">
        {/* Image gallery */}
        <div className="grid grid-cols-3 gap-2">
          <div className="col-span-3 h-[25rem] bg-gray-300 rounded">
            Main Image
          </div>
          <div className="h-24 bg-gray-200 rounded">Image 1</div>
          <div className="h-24 bg-gray-200 rounded">Image 2</div>
          <div className="h-24 bg-gray-200 rounded">Image 3</div>
        </div>

        <div className=" rounded-sm w-full h-[9rem] flex justify-between">
          {/* Property Details */}
          <div className="flex flex-col justify-around w-2/3">
            <h1 className="text-2xl font-bold">
              A Great Apartment Next to the Park
            </h1>
            <p className="text-gray-600">123 Broadway St</p>
            <span className="text-xl font-semibold ">
              $ 1000 
            </span>
          </div>

          {/* Owner Info */}
          <div className="flex flex-col w-1/3 items-center justify-center gap-3 bg-accent text-white rounded-sm">
            <img
              src={profilePic}
              alt="Owner"
              className="w-16 h-16 rounded-full object-cover"
            />
            <p className="font-medium">John Doe</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-700  leading-relaxed">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt sapiente dolore similique, consequatur necessitatibus provident animi temporibus tempora ipsam, error quisquam! Amet aliquam aspernatur ullam magnam dolores atque cupiditate? Exercitationem similique dicta aspernatur ea voluptatibus veritatis quas atque dolores delectus sunt, facilis maxime cum libero? Molestias ea soluta fugiat dolores minima ipsam, ut facere mollitia adipisci velit nobis voluptate optio quam voluptates necessitatibus accusantium, deserunt cupiditate eveniet a. Doloribus, vel nemo, amet repellendus nam provident rem optio incidunt aperiam, ad laboriosam asperiores quaerat molestias excepturi. Ratione eos nisi recusandae minima. Aperiam molestias atque explicabo nostrum ipsam consectetur illo debitis quae eligendi asperiores. Ullam dolores ut, voluptatem esse optio ab animi quis iusto, reprehenderit incidunt alias, assumenda at? Mollitia alias facilis dolor laborum ratione unde tempore dolorem voluptatibus quia cupiditate similique laboriosam assumenda accusantium adipisci qui, velit ullam dolorum? Deserunt veritatis quo fugit omnis maiores praesentium ratione quos? Nulla, error tempore.
        </p>
      </div>

      {/* Right: Details Sidebar */}
      <div className="w-full md:w-2/5 shadow-sm p-4 rounded-sm space-y-4">
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
              <p className="text-sm text-gray-600">Pets are allowed</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <PiMoneyWavy className="text-accent" size={30} />
            <div>
              <h3 className="font-medium">Extra Fees</h3>
              <p className="text-sm text-gray-600">There are no extra fees</p>
            </div>
          </div>
        </div>

        {/* Room Sizes */}
        <h2 className="text-lg font-semibold mt-4">Room Sizes</h2>
        <div className="flex flex- gap-2">
          <div className="flex  items-center gap-2 bg-gray-100 px-3 py-2 rounded">
            <MdOutlineMeetingRoom /> <span className="text-sm text-gray-700">80sqm (861 sqft)</span>
          </div>
          <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded">
            <MdOutlineBedroomParent /> <span className="text-sm text-gray-700">2 Bedrooms</span>
          </div>
          <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded">
            <LiaBathSolid /> <span className="text-sm text-gray-700">1 Bathroom</span>
          </div>
        </div>

        {/* Location */}
        <h2 className="text-lg font-semibold mt-4">Location</h2>
        <div className="bg-gray-200 h-40 rounded flex items-center justify-center">
          <span className="text-gray-500">Map placeholder</span>
        </div>

        {/* Save button */}
        <button className="mt-4 flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded text-sm font-medium cursor-pointer">
          <CiBookmark /> Save Place
        </button>
      </div>
    </section>
  );
};

export default SinglePropertyPage;
