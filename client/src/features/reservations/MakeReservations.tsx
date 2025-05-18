import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import Button from "../../components/ui/Button";
import { useCurrentUser } from "../../hooks/authHook";
import { useMakeReservation } from "../../hooks/propertyHook";
import { calculateNights } from "../../utils/helpers";
import "./datepicker-overrides.css";

interface MakeReservationsProps {
  propertyId: string;
  price: number;
}

const MakeReservations = ({ propertyId, price }: MakeReservationsProps) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [guests, setGuests] = useState(1);
  const nights = calculateNights(endDate, startDate);
  const totalPrice = nights * price;
  const { userId } = useCurrentUser();
  const { createReservations, isPending } = useMakeReservation();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!startDate || !endDate) return;
    createReservations({
      propertyId,
      startDate,
      endDate,
      guests,
      nights,
      totalPrice,
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="h-full w-full border-gray-400/60 p-4 rounded-sm shadow-lg my-8 flex flex-col gap-4 md:items-start"
    >
      {/* dates */}
      <div className="flex gap-4 w-full h-[4rem] z-[9999]">
        {/* Start */}
        <div>
          <label className="block text-xs font-Inter mb-1">Start Date</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate!}
            endDate={endDate!}
            minDate={new Date()}
            maxDate={endDate ?? undefined}
            popperPlacement="top-start"
            placeholderText="Select start date"
            className="w-full border border-primary text-xs rounded px-3 py-2"
          />
        </div>

        {/* End */}
        <div>
          <label className="block text-xs font-Inter mb-1">End Date</label>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate!}
            endDate={endDate!}
            minDate={startDate ?? new Date()}
            popperPlacement="top-start"
            placeholderText="Select end date"
            className="w-full border border-primary text-xs rounded px-3 py-2"
          />
        </div>
      </div>

      {/* guests */}
      <div className="w-full md:w-[4rem]">
        <label htmlFor="guests" className="block text-xs font-medium mb-1">
          Guests
        </label>
        <select
          id="guests"
          value={guests}
          onChange={(e) => setGuests(Number(e.target.value))}
          className="w-full border border-primary rounded-sm text-sm bg-transparent focus:outline-none py-2"
        >
          {[1, 2, 3, 4].map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>
      </div>

      {/* total preview */}
      {nights > 0 && (
        <span className="text-xl font-light tracking-wider">
          <span className="underline font-medium">${totalPrice} </span> for{" "}
          {nights} night{nights > 1 ? "s" : ""}
        </span>
      )}

      {/* reserve buttons */}
      {!userId ? (
        <Link
          className="w-full bg-accent text-white text-center p-2 rounded-sm"
          to={"/signIn"}
        >
          Sign In
        </Link>
      ) : (
        <Button
          className="w-full disabled:opacity-40"
          type="submit"
          disabled={!totalPrice || !nights}
        >
          {isPending ? "Loading..." : "Reserve"}
        </Button>
      )}
    </form>
  );
};

export default MakeReservations;
