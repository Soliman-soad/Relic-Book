import { createBrowserRouter } from "react-router-dom";
import AllBooks from "../pages/allBooks/AllBooks";
import ErrorPage from "../pages/Error/ErrorPage";
import Home from "../pages/home/Home";
import Main from "../pages/layout/Main";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddProduct from "../pages/sellerPages/AddProduct";
import MyProduct from "../pages/sellerPages/MyProduct";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'login',
                element:<Login/>
            },
            {
                path:'register',
                element:<Register/>
            },
            {
                path:'addProduct',
                element:<AddProduct/>
            },
            {
                path:'books',
                element:<AllBooks/>
            },
            {
                path: 'myProduct',
                element:<MyProduct/>
            }
        ]
    }
])
export default router;