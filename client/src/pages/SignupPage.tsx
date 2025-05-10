import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";

const SignupPage = () => {
  const [inputElement, setInputelement] = useState({
    nickName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  //   const { signUp, error, isPending, isError } = useSignUp();

  function handleSignUp(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // signUp(inputElement);
  }

  return (
    <main className="w-full h-screen flex flex-col items-center justify-center ">
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
            onChange={(e) =>
              setInputelement((prev) => ({ ...prev, nickName: e.target.value }))
            }
          />
        </div>
        <div className="w-5/6 flex flex-col gap-1">
          <label htmlFor="password">password</label>
          <input
            type="password"
            placeholder="password"
            onChange={(e) =>
              setInputelement((prev) => ({ ...prev, password: e.target.value }))
            }
          />
        </div>

        {/* {isError && <p className="text-xs text-red-700">{error?.message}</p>} */}

        <Button type="submit">sign up</Button>
        <Link to={"/login"} className="text-sm underline ">
          Already have an Acoount?
        </Link>
      </form>
    </main>
  );
};

export default SignupPage;
