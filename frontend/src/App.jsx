

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './component/shared/Navbar'

import Login from './component/auth/Login'
import Signup from './component/auth/Signup'
import Home from './component/Home'

function App() {
  
 const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/login',
    element:<Login/>

  },
  {
    path:'/signup',
    element:<Signup/>
  }
 ])

 return (
  <>
  <RouterProvider router={appRouter}></RouterProvider>
  </>
 )
 }
 export default App