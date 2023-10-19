import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../components/Home/Home/Home";
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
                loader : ()=> fetch('/brands.json')
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
                loader :() => fetch('https://a10-tech-source-server.vercel.app/cart')
            },
            {
                path : "/update/:id",
                element : <PrivateRoutes><Update></Update></PrivateRoutes>,
                loader : ({params})=> fetch(`https://a10-tech-source-server.vercel.app/product/${params.id}`)
            },
            {
                path : "/details/:_id",
                element : <PrivateRoutes><ProductDetails></ProductDetails></PrivateRoutes>,
                loader : ()=> fetch('https://a10-tech-source-server.vercel.app/product')
            }
        ]
    },
]);

export default router;