import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";
import AddProduct from "../components/AddProduct/AddProduct";
import PrivateRoutes from "./PrivateRoute";
import ShowProducts from "../components/Home/ShowProducts";
import Update from "../components/Home/Update";
import ProductDetails from "../components/Home/ProductDetails";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import MyCart from "../components/Mycart/MyCart";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children : [
            {
                path : "/",
                element : <Home></Home>,
                loader : ()=> fetch('../../public/brands.json')
            },
            {
                path : "/login",
                element : <Login></Login>
            },
            {
                path : "/signup",
                element : <SignUp></SignUp>
            },
            {
                path : "/:name",
                element : <ShowProducts></ShowProducts>
            },
            {
                path : "/addproduct",
                element : <PrivateRoutes><AddProduct></AddProduct></PrivateRoutes>
            },
            {
                path : "/mycart",
                element : <PrivateRoutes><MyCart></MyCart></PrivateRoutes>,
                loader :() => fetch('http://localhost:5000/cart')
            },
            {
                path : "/update/:_id",
                element : <PrivateRoutes><Update></Update></PrivateRoutes>,
                loader : ()=> fetch('http://localhost:5000/product')
            },
            {
                path : "/details/:_id",
                element : <PrivateRoutes><ProductDetails></ProductDetails></PrivateRoutes>,
                loader : ()=> fetch('http://localhost:5000/product')
            }
        ]
    },
]);

export default router;
                    