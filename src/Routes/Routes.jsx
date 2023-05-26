import {createBrowserRouter} from "react-router-dom";
import Main from "../LayOut/Main";
import Error from "../Error";
import Home from "../Pages/Home/Home/Home";
import OurMenu from "../Pages/OurMenu/OurMenu/OurMenu";

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
        }
      ]
    },
  ]);