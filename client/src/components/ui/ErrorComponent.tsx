import { useNavigate } from "react-router-dom";

interface ErrorProps {
  statusCode?: number | string;
  message?: string;
}

const ErrorComponent = ({ statusCode, message }: ErrorProps) => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-8 pt-18">
      <p className="text-4xl font-semibold text-red-700">
        {statusCode || "404"}
      </p>
      <h1 className="font-bold text-3xl sm:text-5xl">
        {message || "Something went wrong"}
      </h1>

      <button
        onClick={() => navigate(-1)} 
        className="bg-accent p-3 text-white rounded-md hover:opacity-80 transition-all duration-200 cursor-pointer"
      >
        Go back
      </button>
    </div>
  );
};

export default ErrorComponent;