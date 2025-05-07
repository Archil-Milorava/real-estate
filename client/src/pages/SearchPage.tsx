import LandingImg from "../assets/searchImg.avif";

const SearchPage = () => {
  return (
    <div className="w-full h-screen flex flex-col md:flex-row">
      {/* Left section */}
      <div className="h-1/2 md:h-full w-full md:w-1/2 flex flex-col justify-center  px-6 md:px-16 gap-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
          Find Your Perfect Place to Call Home
        </h1>
        <p className="text-sm text-gray-600">
          Explore homes, apartments, and properties tailored to your lifestyle.{" "}
          <br />
          Whether buying or renting, your dream space is just a search away.
        </p>

        {/* Search bar */}
        <div className="border border-black/20 p-3 rounded-lg flex w-full mt-2">
          <input
            type="text"
            placeholder="Search by location or property"
            className="flex-grow px-3 py-2 outline-none text-sm"
          />
          <button className="bg-black text-white px-5 py-2 rounded-md hover:bg-gray-800 transition">
            Search
          </button>
        </div>

        {/* Stats */}
        <div className="w-full md:flex flex-col hidden gap-6 md:flex-row md:justify-between mt-6">
          <div>
            <h1 className="text-2xl font-bold">10+</h1>
            <p className="text-xs text-gray-500">Years of Experience</p>
          </div>
          <div>
            <h1 className="text-2xl font-bold">Top 10</h1>
            <p className="text-xs text-gray-500">Top Accommodations</p>
          </div>
          <div>
            <h1 className="text-2xl font-bold">200+</h1>
            <p className="text-xs text-gray-500">Listed Properties</p>
          </div>
        </div>
      </div>

      {/* Right image section */}
      <div className=" w-full md:w-1/2 h-1/2 md:h-full">
        <img
          src={LandingImg}
          alt="landing"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default SearchPage;
