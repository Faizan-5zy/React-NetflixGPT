import React, { useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";




const Login = () => {

  const [isSignInForm,setIsSignInForm]= useState(true)


  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm)
  }


  return (
    <div >
      <Header />

      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/47c2bc92-5a2a-4f33-8f91-4314e9e62ef1/web/AE-en-20240916-TRIFECTA-perspective_0d16a60a-dae7-4284-9ffc-b58dc8ab8a0a_medium.jpg"
          alt="logo"
        />
      </div>

      <form className="p-12 bg-black bg-opacity-70 absolute w-3/12 my-40 mx-auto left-0 right-0 rounded-lg ">
        <h1 className="text-white px-2 py-4 text-2xl font-bold">{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
        {!isSignInForm ? (
          <input
          type="text"
          className="p-2 m-2 text-white bg-black bg-opacity-70 border border-gray-800 rounded w-full"
          placeholder="Username"
          />
        ):''}
        <input
          type="text"
          className="p-2 m-2 text-white bg-black bg-opacity-70 border border-gray-800 rounded w-full"
          placeholder="Email"
        />
        <input
          type="text"
          className="p-2 m-2 text-white bg-black bg-opacity-70 border border-gray-800 rounded w-full"
          placeholder="Password"
        />
        <button className="p-2 m-2 bg-red-700 text-white rounded w-full">
        {isSignInForm ? 'Sign In' : 'Sign Up'}
        </button>
        
        {isSignInForm ? (
        <div>
        <div className="p-2 m-2 text-gray-300 flex items-center justify-center w-full">
        OR
        </div>
       
        <button className="p-2 m-2 bg-gray-700 bg-opacity-70 text-white rounded w-full">
        Use a Sign-In Code
        </button>
        </div>
         ) : ''}
       
        {isSignInForm ? (
        <div className="flex justify-between text-xs py-2 px-2">
            <div className='flex  justify-center items-center  ml-2'>
          <input type='checkbox'/>
          <label className='text-white flex items-center mx-2 '>Remember me</label>
        </div>

          <div>
            <h1 className="text-white">Help?</h1>
          </div>
        </div>
      ) : ''}

      <div className="flex justify-evenly my-2 mx-2 p-2">
          <label className="text-white cursor-pointer">{isSignInForm ? 'New to Netflix?' : 'Already have an account?'} </label>
          
          {/* same form for signup  */}
          <label className="text-white font-bold cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? 'Sign Up Now' : 'Sign In'}</label>
          {/* new form for signup  */}
          {/* <label className="text-white font-bold"><Link to='/signup'>Sign up now</Link></label> */}
          
      </div>


      <div className="text-xs text-gray-400 mx-2 py-2">
      This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
      </div>
      </form>
    </div>
  );
};

export default Login;
