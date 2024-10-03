import Browse from './Browse'
import Login from './Login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Signup from './Signup'
import { Error } from './Error'

const Body = () => {

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

  return (
    <div>
        <RouterProvider router = {appRouter}/>
    </div>

  )
}

export default Body