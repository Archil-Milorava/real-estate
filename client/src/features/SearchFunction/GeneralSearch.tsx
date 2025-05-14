import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button";

const GeneralSearch = () => {
  const [params, setParams] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  function handleSearch() {
    if (!params.trim()) {
      return setError(true);
    }
    navigate(`/list?city=${params}`);
  }

  return (
    <div
      className={`border ${
        error && "border-red-700"
      } border-black/20 p-3 rounded-lg flex w-full mt-2`}
    >
      <input
        type="text"
        placeholder={error ? `enter a city...` : "Search by location..."}
        className={`flex-grow px-3 py-2 outline-none   text-sm`}
        onChange={(e) => setParams(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
      />
      <Button onClick={() => handleSearch()} variant="primary">
        search
      </Button>
    </div>
  );
};
export default GeneralSearch;
