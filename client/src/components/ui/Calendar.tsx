import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./datepicker-overrides.css";


const Calendar = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);


  

  return (
    <div className="flex gap-4 w-full h-[4rem] max-w-xs mx-auto  bg-yellow-300">
      <div className="">
        <label className="block text-xs font-Inter mb-1">Start Date</label>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          popperPlacement="top-start"
          endDate={endDate}
          minDate={new Date()}
          maxDate={endDate || undefined}
          className="w-full border border-primary  text-xs rounded px-3 py-2"
          placeholderText="Select start date"
        />
      </div>
      <div>
        <label className="block text-xs font-Inter mb-1">End Date</label>
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          popperPlacement="top-start"
          startDate={startDate}
          endDate={endDate}
          minDate={startDate || new Date() || undefined}
          className="w-full border border-primary  text-xs rounded px-3 py-2"
          placeholderText="Select end date"
        />
      </div>
    </div>
  );
};

export default Calendar;
