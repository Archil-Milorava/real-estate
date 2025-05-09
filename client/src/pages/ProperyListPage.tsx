import Map from "../features/Map/Map";
import PropertyListContainer from "../features/property/PropertyListContainer";
import AdvancedSearch from "../features/SearchFunction/AdvancedSearch";

const ProperyListPage = () => {
  return (
    <section className="w-full min-h-screen md:px-[8rem] px-2 ">
      <div className="">
        <AdvancedSearch />
      </div>
      <div className="flex flex-col gap-2 md:flex-row w-full h-full">
        <div className="h-full w-[60%]">
          <PropertyListContainer />
        </div>
        <div className="w-[40%]">
          <Map />
        </div>
      </div>
    </section>
  );
};

export default ProperyListPage;
