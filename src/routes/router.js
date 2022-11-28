import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import Buyers from "../pages/admin/Buyers";
import ReportedItem from "../pages/admin/ReportedItem";
import Sellers from "../pages/admin/Sellers";
import Blog from "../pages/Blog";
import MyBuyingProduct from "../pages/buyerPage/MyBuyingProduct";
import ErrorPage from "../pages/Error/ErrorPage";
import Home from "../pages/home/Home";
import HomeCategory from "../pages/home/HomeCategory";
import Main from "../pages/layout/Main";
import Login from "../pages/Login/Login";
import Payment from "../pages/Payment";
import Products from "../pages/Products";
import Profile from "../pages/Profile";
import Register from "../pages/Register/Register";
import AddProduct from "../pages/sellerPages/AddProduct";
import MyProduct from "../pages/sellerPages/MyProduct";
import PrivateRouter from "./PrivateRouter";

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
        element: <Products/>,
      },
      {
        path:'category/:id',
        element:<HomeCategory/>
      },
      {
        path:'blog',
        element:<Blog/>
      },
      {
        path: "dashboard",
        element: <PrivateRouter><Dashboard /></PrivateRouter>,
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
          },
          {
            path:'allBuyers',
            element:<Buyers/>
          },
          {
            path:'myProduct',
            element:<MyProduct/>
          },
          {
            path:'reported',
            element:<ReportedItem/>
          },
          {
            path:'myOrder',
            element:<MyBuyingProduct/>            
          },
          {
            path: '/dashboard/payment/:id',
            element:<Payment/>,
            loader: ({params})=> fetch(`http://localhost:5000/payment/${params.id}`)
          }
        ],
      },
    ],
  },
]);
export default router;
