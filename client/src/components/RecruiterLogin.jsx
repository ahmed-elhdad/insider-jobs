"use client";

import { Lock, PersonStanding } from "lucide-react";
import { useState } from "react";

const RecruiterLogin = () => {
  const [state, setState] = useState("login"),
    [name, setName] = useState(""),
    [password, setPassword] = useState(""),
    [email, setEmail] = useState(""),
    [image, setImage] = useState(false),
    [isTextDataSubmited, setisTextDataSubmited] = useState(false);
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (state == "sign up" && !isTextDataSubmited) {
      setisTextDataSubmited(true);
    }
  };
  return (
    <div className="absolute top-0 right-0 left-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center ">
      <form
        onSubmit={onSubmitHandler}
        className="relative bg-white p-10 rounded-xl text-slate-500"
      >
        <h1 className="text-center text-2xl text-neutral-700 font-medium">
          Recruiter {state}
        </h1>
        <p className="text-sm">Welcome back! Please sign in to continue</p>
        {state == "sign up" && isTextDataSubmited ? (
          <></>
        ) : (
          <>
            <>
              {state !== "login" && (
                <div className="border px-4 py-2 flex items-center gap-2 rounded-full mt-5">
                  <PersonStanding />
                  <input
                    className="outline-none text-sm"
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    value={name}
                    placeholder="Company Name"
                    required
                  />
                </div>
              )}
              <p className="text-sm text-blue-600">Forgot Password?</p>
            </>
          </>
        )}

        <div className="border px-4 py-2 flex items-center gap-2 rounded-full mt-5">
          M
          <input
            className="outline-none text-sm"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            value={email}
            placeholder="Email Id"
            required
          />
        </div>
        <div className="border px-4 py-2 flex items-center gap-2 rounded-full mt-5">
          <Lock />
          <input
            className="outline-none text-sm"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            value={password}
            placeholder="password"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 w-full text-white py-2 rounded-full"
        >
          {state == "login"
            ? "login"
            : isTextDataSubmited
            ? "create acount"
            : "next"}
        </button>
        {state == "login" ? (
          <p className="mt-5 text-center">
            Don't have and acount?
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => {
                setState("signup");
              }}
            >
              Sign Up
            </span>
          </p>
        ) : (
          <p className="mt-5 text-center">
            Already have an acount?{" "}
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => {
                setState("login");
              }}
            >
              Login
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default RecruiterLogin;
