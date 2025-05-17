import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Calendar = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  return (
    <div className="flex gap-4 w-full max-w-xs mx-auto">
      <div>
        <label className="block text-sm font-medium mb-1">Start Date</label>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          maxDate={endDate || undefined}
          className="w-full border border-gray-300 rounded px-3 py-2"
          placeholderText="Select start date"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">End Date</label>
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate || undefined}
          className="w-full border border-gray-300 rounded px-3 py-2"
          placeholderText="Select end date"
        />
      </div>
    </div>
  );
};

export default Calendar;
