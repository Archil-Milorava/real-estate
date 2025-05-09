import PropertyCardMain from "./PropertyCardMain";

const PropertyListContainer = () => {
  return (
    <div className=" w-full h-full flex flex-col gap-8 ">
      <PropertyCardMain />
      <PropertyCardMain />
      <PropertyCardMain />
      <PropertyCardMain />
      <PropertyCardMain />
    </div>
  );
};

export default PropertyListContainer;
