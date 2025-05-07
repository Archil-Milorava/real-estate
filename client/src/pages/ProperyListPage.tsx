import PropertyCardMain from "../features/property/PropertyCardMain";

const ProperyListPage = () => {
  return (
    <section className="w-full h-full md:px-14 ">
      {/* main div */}
      <div className="flex flex-col gap-2 md:flex-row w-full h-full">
        {/* list container */}
        <div className=" w-full md:w-2/3 h-full flex flex-col gap-4 ">
          <PropertyCardMain />
          <PropertyCardMain />
          <PropertyCardMain />
          <PropertyCardMain />
          <PropertyCardMain />
          {/* <PropertyCardMain /> */}
        </div>
        {/* map */}
        <div className="bg-amber-700 hidden md:block w-1/3 h-full">d</div>
      </div>
    </section>
  );
};

export default ProperyListPage;
