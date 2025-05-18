import { FaCalendarDays } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import ErrorComponent from "../components/ui/ErrorComponent";
import Spinner from "../components/ui/Spinner";
import { useCurrentUser, useSignOut } from "../hooks/authHook";
import { useMyReservations } from "../hooks/propertyHook";
import { extractDate } from "../utils/helpers";

const UserPage = () => {
  const { currentUser, isLoading: userLoading } = useCurrentUser();
  const {
    myReservations,
    error,
    isLoading: reservationLoading,
  } = useMyReservations();
  const { handleSignOut } = useSignOut();

  if (userLoading) {
    return <Spinner />;
  }

  if (!currentUser) {
    return (
      <div>
        <h1>Please Log in first</h1>
        <Link to={"/signIn"}>login</Link>
      </div>
    );
  }

  if (error) {
    return <ErrorComponent message={error.message} />;
  }
  return (
    <section className="min-h-screen px-4 md:px-[8rem] py-8 bg-gray-50 space-y-8">
      <div className=" flex flex-col items-end gap-4">
        <p className="text-md uppercase"> {currentUser?.nickName}</p>
        <p className="text-sm text-gray-600">
          Since {extractDate(currentUser?.createdAt)}
        </p>
        <Button onClick={() => handleSignOut()}>Log out</Button>
      </div>
      {reservationLoading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col gap-2 md:px-[20rem] border-t pt-4">
          <h1 className="text-4xl py-2">
            My Reservations ( {myReservations?.length} )
          </h1>
          {/* reservation card */}
          {myReservations?.map((reservation) => (
            <div
              key={reservation.id}
              className="w-full h-auto  flex flex-row gap-2 p-2 justify-between items-center rounded-sm overflow-hidden  border border-gray-400/50 shadow-sm"
            >
              {/* description */}
              <div className=" w-[70%] h-full flex flex-col gap-2">
                <Link
                  to={`/${reservation.propertyId}`}
                  className="text-2xl font-bold hover:opacity-80"
                >
                  {reservation.property.name}
                </Link>
                <div className="flex items-center gap-1 text-sm text-gray-700">
                  <FaCalendarDays size={18} />
                  <span>{extractDate(reservation.startDate)}</span> -{" "}
                  {extractDate(reservation.endDate)}
                </div>
                <p className="text-sm text-gray-700">
                  number of guests: {reservation.guests}
                </p>
                <p className="text-sm text-accent">
                  {reservation.nights} nights
                </p>
                <p className="text-lg">
                  Total Paid:{" "}
                  <span className="underline font-bold text-primary">
                    ${reservation.totalPrice}
                  </span>
                </p>
                <p className="text-xs">
                  made on {extractDate(reservation.createdAt)}
                </p>
              </div>
              {/* image */}
              <div className="  overflow-hidden h-full w-[30%]">
                <img
                  src={reservation.property.images[0]}
                  alt={reservation.id}
                  className="object-cover h-full w-full"
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default UserPage;
