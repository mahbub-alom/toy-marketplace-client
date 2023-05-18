import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Blog from "../Pages/Home/Blog/Blog";
import ErrorPage from "../Pages/Shared/Errorpage/Errorpage";
import LoadingSpinner from "../Pages/Shared/LoadingSpinner/LoadingSpinner";

/* eslint-disable no-unused-vars */
const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'blog',
          element:<Blog></Blog>
        },
        {
          path:'loader',
          element:<LoadingSpinner></LoadingSpinner>
        }
      ]
    },
  ]);

export default router;