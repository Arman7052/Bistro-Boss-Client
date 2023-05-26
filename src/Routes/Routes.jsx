import {createBrowserRouter} from "react-router-dom";
import Main from "../LayOut/Main";
import Error from "../Error";
import Home from "../Pages/Home/Home/Home";

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
      ]
    },
  ]);