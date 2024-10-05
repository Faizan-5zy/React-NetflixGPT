import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div>
      <div>
        <div>
          <Header />
        </div>

        <div className="absolute top-5 right-10 z-10">
          <button className="px-4 py-2 cursor-pointer bg-red-600 text-white  rounded   ">
            <Link to="/">Sign In</Link>
          </button>
        </div>
      </div>

      <div className="absolute  ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/47c2bc92-5a2a-4f33-8f91-4314e9e62ef1/web/AE-en-20240916-TRIFECTA-perspective_0d16a60a-dae7-4284-9ffc-b58dc8ab8a0a_medium.jpg"
          alt="logo"
        />
      </div>

      <div className=" absolute py-12  font-sans bg-black bg-opacity-70 rounded-xl w-1/2 my-40 mx-auto left-0 right-0 text-white text-center">
        <h1 className="font-bold text-6xl">
          Unlimited movies, TV shows, and more.
        </h1>
        <h2 className="py-10 text-xl font-bold">Starts at AED 29. Cancel anytime.</h2>
        <h2 className=" text-l">
          Ready to watch? Enter your email to create or restart your membership.
        </h2>

        <div className="py-10 flex justify-center">
          <input
            type="text"
            className="p-2 m-2 text-white bg-black bg-opacity-70 border border-gray-800 rounded w-1/2"
            placeholder="Email"
          />

        <button className="p-2 m-2 bg-red-600 text-white rounded w-3/12">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
