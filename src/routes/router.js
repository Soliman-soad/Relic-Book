import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import Sellers from "../pages/admin/Sellers";
import AllBooks from "../pages/allBooks/AllBooks";
import ErrorPage from "../pages/Error/ErrorPage";
import Home from "../pages/home/Home";
import Main from "../pages/layout/Main";
import Login from "../pages/Login/Login";
import Profile from "../pages/Profile";
import Register from "../pages/Register/Register";
import AddProduct from "../pages/sellerPages/AddProduct";
import MyProduct from "../pages/sellerPages/MyProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "books",
        element: <AllBooks />,
      },

      {
        path: "dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "addProduct",
            element: <AddProduct />,
          },
          {
            path: "",
            element: <Profile />,
          },
          {
            path:'allSellers',
            element:<Sellers/>
          }
        ],
      },
    ],
  },
]);
export default router;
