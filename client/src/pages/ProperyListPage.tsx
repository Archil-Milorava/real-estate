import { useSearchParams } from "react-router-dom";
import Map from "../features/Map/Map";
import PropertyCardMain from "../features/property/PropertyCardMain";
import AdvancedSearch from "../features/SearchFunction/AdvancedSearch";
import { useGetProperty } from "../hooks/propertyHook";
import Spinner from "../components/ui/Spinner";
import ErrorComponent from "../components/ui/ErrorComponent";

const ProperyListPage = () => {
  const [searchParams] = useSearchParams();
  const city = searchParams.get("city");
  const filters = Object.fromEntries(searchParams.entries());
  const { properties, error, isLoading } = useGetProperty(filters);

  return (
    <section className="w-full px-4 mb-11 min-h-screen lg:px-[8rem]  ">
      <AdvancedSearch />

      {error ? (
        <ErrorComponent message={error.message} />
      ) : (
        <div className="flex flex-col gap-11 md:flex-row w-full h-full">
          <div className="h-full flex flex-col gap-8 w-full lg:w-[55%]">
            <p className="text-sm">
              {properties?.length} Properties found in {city || "world"}
            </p>
            {isLoading ? (
              <Spinner />
            ) : (
              properties?.map((property) => (
                <PropertyCardMain key={property.id} property={property} />
              ))
            )}
          </div>
          <div className="hidden lg:block w-[45%]">
            <Map />
          </div>
        </div>
      )}
    </section>
  );
};

export default ProperyListPage;
