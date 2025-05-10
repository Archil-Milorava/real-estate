import PropertyCardMain from "../features/property/PropertyCardMain";
import ProfilePic from "../assets/profilePic.avif";

const UserPage = () => {
  return (
    <section className="min-h-screen px-4 md:px-[8rem] py-8 bg-gray-50 space-y-8">
      {/* User Info */}
      <div className="flex items-center gap-4">
        <img
          src={ProfilePic}
          alt="User Avatar"
          className="w-16 h-16 rounded-full object-cover"
        />
        <h1 className="text-2xl font-bold">user name</h1>
      </div>

      {/* Saved Properties */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Saved Properties</h2>
        <div className="flex flex-col gap-8 md:px-[8rem]">
          <PropertyCardMain />
          <PropertyCardMain />
          <PropertyCardMain />
          <PropertyCardMain />
          <PropertyCardMain />
        </div>
      </div>
    </section>
  );
};

export default UserPage;
