import {createBrowserRouter} from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import OurMenu from "../Pages/OurMenu/OurMenu/OurMenu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login&Register/Login";
import Register from "../Pages/Login&Register/Register";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      // errorElement: <Error></Error>,
      children: [
        {
            path:'/',
            element: <Home></Home>
        },
        {
          path: '/ourmenu',
          element: <OurMenu></OurMenu>
        },
        
        {
          path: '/order/:category',
          element: <Order></Order>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        
      ]
    },
    {
      path: '/signup',
      element: <Register></Register>
    }
    
  ]);