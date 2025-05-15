import { Link } from "react-router-dom";

interface ErrorProps {
  statusCode?: number | string;
  message?: string;
}

const ErrorComponent = ({ statusCode, message }: ErrorProps) => {
  return (
    <div className=" w-full h-full flex flex-col items-center justify-center gap-8 pt-18">
      <p className="text-4xl font-semibold text-red-700">
        {statusCode || "404"}
      </p>
      <h1 className=" font-bold text-3xl sm:text-5xl">
        {message || "something went wrong"}
      </h1>
      <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <Link
        className="bg-accent p-3 text-white rounded-md hover:opacity-80 transition-all duration-200"
        to={"/"}
      >
        Go back home
      </Link>
    </div>
  );
};

export default ErrorComponent;
