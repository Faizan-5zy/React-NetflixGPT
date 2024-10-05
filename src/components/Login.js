import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
// import { Link } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { BACKROUND_URL } from "../utils/constants";




const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, seterrorMessage] = useState("");

  const email = useRef(null);
  const password = useRef(null);
  const username = useRef(null);


  // Validation
  const handleClick = () => {
    // console.log(email.current.value)
    // console.log(password.current.value)

    let message;

    isSignInForm
      ? (message = checkValidData(email.current.value, password.current.value))
      : (message = checkValidData(
          email.current.value,
          password.current.value,
          username.current.value
        ));

    seterrorMessage(message);

    if (message) return;

    // signin/signup

    if (!isSignInForm) {
      // signup logic

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // ...
          updateProfile(user, {
            displayName: username.current.value , photoURL: "https://example.com/jane-q-user/profile.jpg"
          }).then(() => {
            // Profile updated!
            // ...
          }).catch((error) => {
            // An error occurred
            // ...
          });
          // ...
          // console.log(user);
        })
        .catch((error) => {
          let errorCode = error.code;
          let errorMessage = error.message;
          // ..
          switch(errorCode){
            case 'auth/email-already-in-use':
            errorMessage = 'This email address is already associated with an account. Please log in or signup with another email.';
            break;
            default:
              errorMessage = 'An unknown error occurred. Please try again later.';
          }
          // seterrorMessage(errorCode + "-//-" + errorMessage);
          seterrorMessage(errorMessage);
        });
    } else {
      // signin logic

      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
          console.log(user)

        })
        .catch((error) => {
          let errorCode = error.code;
          let errorMessage = error.message;
          
          switch(errorCode){
            case 'auth/invalid-credential':
            errorMessage='User does not exist , Please signup';
            break;
            default:
              errorMessage('An unknown error occurred. Please try again later.')
          }
          seterrorMessage(errorMessage)
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />

      <div className="absolute">
        <img
          src={BACKROUND_URL}
          alt="logo"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="p-12 bg-black bg-opacity-70 absolute w-3/12 my-40 mx-auto left-0 right-0 rounded-lg "
      >
        <h1 className="text-white px-2 py-4 text-2xl font-bold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm ? (
          <input
            ref={username}
            type="text"
            className="p-2 m-2 text-white bg-black bg-opacity-70 border border-gray-800 rounded w-full"
            placeholder="Username"
          />
        ) : (
          ""
        )}
        <input
          ref={email}
          type="text"
          className="p-2 m-2 text-white bg-black bg-opacity-70 border border-gray-800 rounded w-full"
          placeholder="Email"
        />
        <input
          ref={password}
          type="text"
          className="p-2 m-2 text-white bg-black bg-opacity-70 border border-gray-800 rounded w-full"
          placeholder="Password"
        />
        <p className=" p-2 m-2 text-red-700 font-bold text-xs">
          {errorMessage}
        </p>
        <button
          className="p-2 m-2 bg-red-600 text-white rounded w-full hover:bg-red-800"
          onClick={handleClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        {isSignInForm ? (
          <div>
            <div className="p-2 m-2 text-gray-300 flex items-center justify-center w-full">
              OR
            </div>

            <button className="p-2 m-2 bg-gray-700 bg-opacity-70 text-white rounded w-full hover:bg-gray-800">
              Use a Sign-In Code
            </button>
          </div>
        ) : (
          ""
        )}

        {isSignInForm ? (
          <div className="flex justify-between text-xs py-2 px-2">
            <div className="flex  justify-center items-center  ml-2">
              <input type="checkbox" />
              <label className="text-white flex items-center mx-2 ">
                Remember me
              </label>
            </div>

            <div>
              <h1 className="text-white">Help?</h1>
            </div>
          </div>
        ) : (
          ""
        )}

        <div className="flex justify-evenly my-2 mx-2 p-2">
          <label className="text-white cursor-pointer">
            {isSignInForm ? "New to Netflix?" : "Already have an account?"}{" "}
          </label>

          {/* same form for signup  */}
          <label
            className="text-white font-bold cursor-pointer"
            onClick={toggleSignInForm}
          >
            {isSignInForm ? "Sign Up Now" : "Sign In"}
          </label>
          {/* new form for signup  */}
          {/* <label className="text-white font-bold"><Link to='/signup'>Sign up now</Link></label> */}
        </div>

        <div className="text-xs text-gray-400 mx-2 py-2">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          Learn more.
        </div>
      </form>
    </div>
  );
};

export default Login;
