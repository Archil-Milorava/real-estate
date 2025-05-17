import { useState, type ChangeEvent, type FormEvent } from "react";
import { useSearchParams } from "react-router-dom";
import Button from "../../components/ui/Button";

const AdvancedSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    city: searchParams.get("city") || "",
    minPrice: Number(searchParams.get("minPrice")),
    maxPrice: Number(searchParams.get("maxPrice")),
    bedrooms: searchParams.get("bedrooms") || "",
    propertyType: searchParams.get("propertyType") || "",
  });

  function handleSearch(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const params = new URLSearchParams();

    if (filters.city) params.set("city", filters.city);
    if (filters.minPrice > 0)
      params.set("minPrice", filters.minPrice.toString());
    if (filters.maxPrice > 0)
      params.set("maxPrice", filters.maxPrice.toString());
    if (filters.bedrooms) params.set("bedrooms", filters.bedrooms);
    if (filters.propertyType) params.set("propertyType", filters.propertyType);

    setSearchParams(params);
  }

  function handleClear() {
    setSearchParams();

    setFilters({
      city: "",
      minPrice: 0,
      maxPrice: 0,
      bedrooms: "",
      propertyType: "",
    });
  }

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: name.includes("Price") ? Number(value) : value,
    }));
  };

  return (
    <form onSubmit={handleSearch} className="my-11 w-full rounded-md mx-4 lg:px-[8rem]">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Left: City Search */}
        <div className="flex-1">
          <label className="block text-xs font-medium mb-1" htmlFor="city">
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={filters.city}
            placeholder="Enter city"
            className="w-full border border-gray-300 rounded px-3 py-1"
            onChange={handleChange}
          />
        </div>

        {/* Right: Advanced Filters */}
        <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <label
              className="block text-xs font-medium mb-1"
              htmlFor="minPrice"
            >
              Min Price
            </label>
            <input
              min={0}
              type="number"
              id="minPrice"
              name="minPrice"
              value={filters.minPrice === 0 ? "" : filters.minPrice}
              placeholder="$"
              className="w-full border border-gray-300 rounded px-3 py-1"
              onChange={handleChange}
            />
          </div>

          <div>
            <label
              className="block text-xs font-medium mb-1"
              htmlFor="maxPrice"
            >
              Max Price
            </label>
            <input
              min={0}
              type="number"
              id="maxPrice"
              name="maxPrice"
              value={filters.maxPrice === 0 ? "" : filters.maxPrice}
              placeholder="$"
              className="w-full border border-gray-300 rounded px-3 py-1"
              onChange={handleChange}
            />
          </div>

          <div>
            <label
              className="block text-xs font-medium mb-1"
              htmlFor="bedrooms"
            >
              Bedrooms
            </label>
            <select
              id="bedrooms"
              name="bedrooms"
              value={filters.bedrooms}
              className="w-full border border-gray-300 rounded px-3 py-1"
              onChange={handleChange}
            >
              <option value="">Any</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
            </select>
          </div>
        </div>
        <Button variant="primary" type="submit">
          Search
        </Button>
        <Button variant="outline" type="button" onClick={handleClear}>
          Clear
        </Button>
      </div>
    </form>
  );
};

export default AdvancedSearch;
