import { useState } from "react";

const Counter = () => {
  const [guests, setGuest] = useState(1);
  return (
    <div className=" w-[3rem] h-[4rem] bg-yellow-200">
      <label className="block text-xs font-medium mb-1" htmlFor="bedrooms">
        Guests
      </label>
      <select
        id="bedrooms"
        name="bedrooms"
        value={guests}
        onChange={(e) => setGuest(Number(e.target.value))}
        className="w-full border border-primary  rounded-sm
             text-sm bg-transparent 
             focus:outline-none py-2"
      >
        <option value="1">1</option>
        <option value="1">2</option>
        <option value="2">3</option>
        <option value="4">4</option>
      </select>
    </div>
  );
};

export default Counter;
