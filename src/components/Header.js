import React from "react";
// import { Link } from 'react-router-dom'
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { removeUser } from "../utils/userSlice";


const Header = () => {

  const user = useSelector((store)=>store.user)

  const navigate = useNavigate()
  // const dispatch = useDispatch()

  const handleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate('/')
      // dispatch(removeUser()) all done by auth
    }).catch((error) => {
      // An error happened.
      navigate('/error')
    });
  }

  return (
    <div className="absolute w-full py-2 px-8 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='logo' />
    
    { user &&
      <button onClick={handleSignOut} className="h-12  px-4 py-2 my-3 mx-3 cursor-pointer bg-red-800 text-white font-bold rounded z-10   ">
            {/* <Link to="/">Sign Out</Link> */}
            Sign Out
      </button>
      }
    </div>
  );
};

export default Header;
