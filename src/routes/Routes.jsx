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
import MyCard from "../components/Mycard/MyCard";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
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
                element : <PrivateRoutes><MyCard></MyCard></PrivateRoutes>
            },
            {
                path : "/update/:_id",
                element : <Update></Update>,
                loader : ()=> fetch('http://localhost:5000/product')
            },
            {
                path : "/details/:_id",
                element : <ProductDetails></ProductDetails>,
                loader : ()=> fetch('http://localhost:5000/product')
            }
        ]
    },
]);

export default router;
                    