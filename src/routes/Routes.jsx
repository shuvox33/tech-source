import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";
import AddProduct from "../components/AddProduct/AddProduct";
import PrivateRoutes from "./PrivateRoute";
import ShowProducts from "../components/Home/ShowProducts";
import Update from "../components/Home/Update";

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
                path : "/addproduct",
                element : <PrivateRoutes><AddProduct></AddProduct></PrivateRoutes>
            },
            {
                path : "/:name",
                element : <ShowProducts></ShowProducts>,
                loader : ()=> fetch('http://localhost:5000/product')
            },
            {
                path : "/:_id",
                element : <Update></Update>,

            }
        ]
    },
]);

export default router;