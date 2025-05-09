const AdvancedSearch = () => {
  return (
    <div className="my-4 w-full  rounded-md">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Left: City Search */}
        <div className="flex-1 ">
          <label className="block text-sm font-medium mb-1" htmlFor="city">
            City
          </label>
          <input
            type="text"
            id="city"
            placeholder="Enter city"
            className="w-full border border-gray-300 rounded px-3 py-1"
          />
        </div>

        {/* Right: Advanced Filters */}
        <div className="flex-1 grid  grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="minPrice"
            >
              Min Price
            </label>
            <input
              type="number"
              id="minPrice"
              placeholder="$"
              className="w-full border border-gray-300 rounded px-3 py-1"
            />
          </div>

          <div>
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="maxPrice"
            >
              Max Price
            </label>
            <input
              type="number"
              id="maxPrice"
              placeholder="$"
              className="w-full border border-gray-300 rounded px-3 py-1"
            />
          </div>

          <div>
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="bedrooms"
            >
              Bedrooms
            </label>
            <select
              id="bedrooms"
              className="w-full border border-gray-300 rounded px-3 py-1"
            >
              <option value="">Any</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
            </select>
          </div>

          <div>
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="propertyType"
            >
              Property Type
            </label>
            <select
              id="propertyType"
              className="w-full border border-gray-300 rounded px-3 py-1"
            >
              <option value="">Any</option>
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
              <option value="condo">Condo</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedSearch;
