import Map from "../features/Map/Map";
import PropertyCardMain from "../features/property/PropertyCardMain";
import AdvancedSearch from "../features/SearchFunction/AdvancedSearch";

const ProperyListPage = () => {
  return (
    <section className="w-full h-full md:px-[10rem] px-2 ">
      {/* main div */}
      {/* advancedSearch */}
      <div className="">
        <AdvancedSearch />
      </div>
      <div className="flex flex-col gap-2 md:flex-row w-full h-full">
        {/* list container */}
        <div className=" w-full md:w-[60%] h-full flex flex-col gap-4 ">
          <PropertyCardMain />
          <PropertyCardMain />
          <PropertyCardMain />
          <PropertyCardMain />
          <PropertyCardMain />
          {/* <PropertyCardMain /> */}
        </div>
        {/* map */}
        <div className="h-full w-[40%]">
          <Map />
        </div>
      </div>
    </section>
  );
};

export default ProperyListPage;
