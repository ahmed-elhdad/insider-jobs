"use client";

import { use } from "react";
import { useNavigate } from "react-router";
import { AppContext } from "../contexts/AppContext";
import { Link } from "react-router";
function NavBar() {
  const navigate = useNavigate();

  const { setShowRecruiterLogin } = use(AppContext);

  return (
    <nav className="shadow py-4 ">
      <div className="flex w-100 justify-content-between px-4 2xl:px-20 mx-auto container">
        <img
          onClick={() => {
            navigate(`/`);
          }}
          src="../../public/vite.svg"
          className="cursor-pointer"
        />
        {/* {user ? (
          <div>
            <Link to={"/"}>Aplied Jobs</Link>
            <p>|</p>
            <p>Hi, {user.firstName + " " + user.lastName}</p>
            <UserButton />
          </div>
        ) : (
          <div className="flex gap-4 max-sm:text-xs">
          <button
          onClick={openSignIn}
          className="bg-blue-600 text-white px-6 sm:px-9 py-2 rounded-full"
          >
          Login
          </button>
          </div>
          )} */}
        <button
          onClick={() => setShowRecruiterLogin(true)}
          className="text-gray-600"
        >
          recruiter Login
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
