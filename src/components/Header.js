import React, { useEffect } from "react";
// import { Link } from 'react-router-dom'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { removeUser } from "../utils/userSlice";
import { LOGO , USERLOGO } from "../utils/constants";


const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector((store)=>store.user)

  const handleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      // navigate('/') // onAuthStateChanged is called every time there is a change in auth
      // dispatch(removeUser()) all done by auth
    }).catch((error) => {
      // An error happened.
      navigate('/error')
    });
  }


      // so that it is called only once 
      useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            // console.log('user',user)
          if (user) {
            // User is signed in,
            const {uid,email,displayName} = user;
            dispatch(addUser({uid:uid, email:email, displayName:displayName})) //push this user in redux store 
            //signed in redirect user to browse , useNavigate hook
            navigate('/browse')

        } else {
            // User is signed out
            dispatch(removeUser()) //remove this user from redux store 
            navigate('/')
            
          }
        });

        return()=> unsubscribe()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])


  return (
    <div className="absolute w-full py-2 px-8 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44 " src={LOGO} alt='logo' />
    
    { user &&
    <div className="flex ">

      <img className="w-12 h-12   my-3 mx-3" src={USERLOGO} alt='logo' />
      <button onClick={handleSignOut} className="h-12  px-4 py-2 my-3 mx-3 cursor-pointer bg-red-800 text-white font-bold rounded z-10   ">
            {/* <Link to="/">Sign Out</Link> */}
            Sign Out
      </button>
    </div>
      }
    </div>
  );
};

export default Header;
