import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import { useSignIn } from "../hooks/authHook";

const LoginPage = () => {
  const { mutate: signIn, error, isPending, isError } = useSignIn();

  const [inputElement, setInputelement] = useState({
    nickName: "",
    password: "",
  });

  function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    signIn(inputElement);
  }

  return (
    <main
      className={`w-full h-screen flex flex-col items-center justify-center ${
        isPending && "opacity-80"
      }`}
    >
      <h1 className="text-accent-foreground text-4xl font-semibold uppercase">
        Sign In
      </h1>
      <p className="text-sm text-red-800">
        *lazy to sign up, use following credentials username: achi | password:
        123123
      </p>
      <form
        onSubmit={handleLogin}
        className="min-h-[10rem] h-auto w-[25rem]  flex flex-col gap-6 items-center py-3"
      >
        <div className="w-5/6 flex flex-col gap-1">
          <label htmlFor="email">Nickname </label>
          <input
            type="text"
            placeholder="enter nickname"
            className={`w-full px-4 py-2 border ${
              isError ? "border-red-700" : "border-gray-300"
            } rounded-md focus:outline-none focus:ring-2 
              "focus:ring-accent"
             focus:border-transparent transition-all  duration-500`}
            onChange={(e) =>
              setInputelement((prev) => ({
                ...prev,
                nickName: e.target.value.trim(),
              }))
            }
          />
        </div>
        <div className="w-5/6 flex flex-col gap-1">
          <label htmlFor="email">password</label>
          <input
            type="password"
            placeholder="password"
            className={`w-full px-4 py-2 border ${
              isError ? "border-red-700" : "border-gray-300"
            } rounded-md focus:outline-none focus:ring-2 
              "focus:ring-accent"
             focus:border-transparent transition-all  duration-500`}
            onChange={(e) =>
              setInputelement((prev) => ({
                ...prev,
                password: e.target.value.trim(),
              }))
            }
          />
        </div>

        {isError && <p className="text-xs text-red-700">{error?.message}</p>}

        <Button disabled={isPending} type="submit">
          {isPending ? "Loading..." : "Sign In"}
        </Button>
        <Link to={"/signup"} className="text-sm underline ">
          dont have an Account?
        </Link>
      </form>
    </main>
  );
};

export default LoginPage;
