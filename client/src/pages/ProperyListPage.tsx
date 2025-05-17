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
    <section className="w-full px-4 mb-11 min-h-screen   ">
      <AdvancedSearch />

      {error ? (
        <ErrorComponent message={error.message} />
      ) : (
        <div className="flex flex-col gap-4 md:flex-row w-full h-full  lg:px-[8rem]">
          <div className="flex flex-col gap-4 w-full md:w-[65%]  ">
            <p className="text-lg py-2">
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
          <div className="hidden md:block w-[35%] h-[50rem] sticky top-11 rounded-md overflow-hidden">
            <Map properties={properties || []} isLoading={isLoading} />
          </div>
        </div>
      )}
    </section>
  );
};

export default ProperyListPage;
