import LandingImg from "../assets/searchImg.avif";
import GeneralSearch from "../features/SearchFunction/GeneralSearch";

const SearchPage = () => {
  return (
    <div className="w-full h-screen flex flex-col  md:flex-row lg:px-[5rem]">
      {/* Left section */}
      <div className="h-1/2 md:h-full w-full md:w-1/2 flex flex-col justify-center  px-6 md:px-16 gap-6">
        <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary">
          Find Your Perfect Place to Call Home
        </h1>
        <p className="text-sm text-gray-600">
          Explore homes, apartments, and properties tailored to your lifestyle.{" "}
          <br />
          Whether buying or renting, your dream space is just a search away.
        </p>

        <p className="text-xs text-red-700">
          *The mock data is collected by me, which contains following cities:
          London, Tbilisi, Istanbul, Paris, Lisbon, San Francisco, Austin. If
          you enter other cities no properties will be found, so do not
          struggle.
          <br />
          <br />
          *Otherwise just hit enter or click search and all properties will be
          shown
        </p>

        {/* Search bar */}
        <GeneralSearch />

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
      <div className="w-full  h-1/2 md:h-full md:w-1/2">
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
