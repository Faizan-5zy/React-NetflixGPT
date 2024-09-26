import React, { useEffect } from 'react'
import Browse from './Browse'
import Login from './Login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Signup from './Signup'
import {onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase'
import { useDispatch } from 'react-redux'
import  {addUser, removeUser } from '../utils/userSlice'
import { Error } from './Error'

const Body = () => {
    const dispatch = useDispatch()


    const appRouter = createBrowserRouter([
        {
            path:'/',
            element:<Login/>
        },
        {
            path:'/browse',
            element:<Browse/>
        },
        {
            path:'/signup',
            element:<Signup/>
        },
        {
            path:'/error',
            element:<Error/>
        },
    ])

    // so that it is called only once 
        useEffect(()=>{
            onAuthStateChanged(auth, (user) => {
                console.log('user',user)
              if (user) {
                // User is signed in,
                const {uid,email,displayName} = user;
                dispatch(addUser({uid:uid, email:email, displayName:displayName})) //push this user in redux store 
                //signed in redirect user to browse , useNavigate hook
                // navigate('/browse')

            } else {
                // User is signed out
                dispatch(removeUser()) //remove this user from redux store 
                // navigate('/')
                
              }
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
        },[])

  return (
    <div>
        <RouterProvider router = {appRouter}/>
    </div>

  )
}

export default Body