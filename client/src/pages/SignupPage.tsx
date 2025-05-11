import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import { useSignUp } from "../hooks/authHook";

const SignupPage = () => {
  const [inputElement, setInputelement] = useState({
    nickName: "",
    password: "",
  });

  const { mutate: signUp, error, isPending, isError } = useSignUp();

  function handleSignUp(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    signUp(inputElement);
  }

  return (
    <main
      className={`w-full h-screen flex flex-col items-center justify-center ${
        isPending && "opacity-80"
      }`}
    >
      <h1 className="text-accent-foreground text-4xl font-semibold uppercase">
        Register
      </h1>
      <form
        onSubmit={handleSignUp}
        className="min-h-[10rem] h-auto w-[25rem]  flex flex-col gap-6 items-center py-3"
      >
        <div className="w-5/6 flex flex-col gap-1">
          <label htmlFor="nickName">Nickname</label>
          <input
            type="text"
            placeholder="enter nickname"
            className={`w-full px-4 py-2 border ${
              isError ? "border-red-700" : "border-gray-300"
            } rounded-md focus:outline-none focus:ring-2 
              "focus:ring-accent"
             focus:border-transparent transition-all  duration-500`}
            onChange={(e) =>
              setInputelement((prev) => ({ ...prev, nickName: e.target.value }))
            }
          />
        </div>
        <div className="w-5/6 flex flex-col gap-1">
          <label htmlFor="password">password</label>
          <input
            className={`w-full px-4 py-2 border ${
              isError ? "border-red-700" : "border-gray-300"
            } rounded-md focus:outline-none focus:ring-2 
              "focus:ring-accent"
             focus:border-transparent transition-all  duration-500`}
            type="password"
            placeholder="password"
            onChange={(e) =>
              setInputelement((prev) => ({ ...prev, password: e.target.value }))
            }
          />
        </div>

        {isError && <p className="text-xs text-red-700">{error?.message}</p>}

        <Button disabled={isPending} type="submit">
          {isPending ? "loading.." : "sign up"}
        </Button>
        <Link to={"/signIn"} className="text-sm underline ">
          Already have an Acoount?
        </Link>
      </form>
    </main>
  );
};

export default SignupPage;
