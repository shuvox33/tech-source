import { useLoaderData } from "react-router-dom";
import ShowCardProduct from "./ShowCartProduct";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const MyCart = () => {

    const {user} = useContext(AuthContext);

    const cartProduct = useLoaderData();
    const userCartProduct = cartProduct.filter(product => product.email === user.email);


    return (
        <div className="max-w-6xl mx-auto my-10">
            <h3 className="text-4xl text-center my-5">Product in Cart</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {
                    userCartProduct.map(product => <ShowCardProduct key={product._id} product={product}></ShowCardProduct>)
                }
            </div>
        </div>
    );
};

export default MyCart;