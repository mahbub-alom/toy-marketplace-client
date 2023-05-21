import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Blog from "../Pages/Home/Blog/Blog";
import LoadingSpinner from "../Pages/Shared/LoadingSpinner/LoadingSpinner";
import Login from "../Pages/Home/Login/Login";
import Registration from "../Pages/Home/Registration/Registration";
import AddToys from "../Pages/AddToys/AddToys";
import AllToys from "../Pages/AllToys/AllToys";
import MyToys from "../Pages/MyToys/MyToys";
import PrivateRoute from "./PrivateRoute";
import SeeDetails from "../Pages/AllToys/SeeDetails";
import UpdatedToys from "../Pages/UpdatedToys/UpdatedToys";
import ErrorPage from "../Pages/Shared/Errorpage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "loader",
        element: <LoadingSpinner></LoadingSpinner>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "registration",
        element: <Registration></Registration>,
      },
      {
        path: "addtoys",
        element: <AddToys></AddToys>,
      },
      {
        path: "alltoys",
        element:<AllToys></AllToys>,
      },
      {
        path: "mytoys",
        element: <PrivateRoute><MyToys></MyToys></PrivateRoute>,
      },
      {
        path:'seeDetails/:id',
        element:<PrivateRoute><SeeDetails></SeeDetails></PrivateRoute>,
        loader:({params})=> fetch (`https://barbie-doll-house-server-mahbub-alom.vercel.app/addtoys/${params.id}`)
      },
      {
        path:"updatedToys/:id",
        element:<UpdatedToys></UpdatedToys>,
        loader:({params})=> fetch (`https://barbie-doll-house-server-mahbub-alom.vercel.app/addtoys/${params.id}`)
      }
    ],
  },
]);

export default router;
