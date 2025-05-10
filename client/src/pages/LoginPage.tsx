import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";

const LoginPage = () => {
  //   const { signIn, error, isPending, isError } = useSignIn();

  const [inputElement, setInputelement] = useState({
    nickName: "",
    password: "",
  });

  function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // signIn(inputElement);
  }

  return (
    <main className="w-full h-screen flex flex-col items-center justify-center bg-">
      <h1 className="text-accent-foreground text-4xl font-semibold uppercase">
        Sign In
      </h1>
      <form
        onSubmit={handleLogin}
        className="min-h-[10rem] h-auto w-[25rem]  flex flex-col gap-6 items-center py-3"
      >
        <div className="w-5/6 flex flex-col gap-1">
          <label htmlFor="email">Nickname </label>
          <input
            type="text"
            placeholder="enter nickname"
            onChange={(e) =>
              setInputelement((prev) => ({ ...prev, nickName: e.target.value }))
            }
          />
        </div>
        <div className="w-5/6 flex flex-col gap-1">
          <label htmlFor="email">password</label>
          <input
            type="password"
            placeholder="password"
            onChange={(e) =>
              setInputelement((prev) => ({ ...prev, password: e.target.value }))
            }
          />
        </div>

        {/* {isError && <p className="text-xs text-red-700">{error?.message}</p>} */}

        <Button type="submit">login</Button>
        <Link to={"/signup"} className="text-sm underline ">
          dont have an Account?
        </Link>
      </form>
    </main>
  );
};

export default LoginPage;
