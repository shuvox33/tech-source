import { useLoaderData } from "react-router-dom";
import ShowCardProduct from "./ShowCartProduct";

const MyCart = () => {

    const cartProduct = useLoaderData();


    return (
        <div className="max-w-6xl mx-auto my-10">
            <h3 className="text-4xl text-center my-5">Product in Cart</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {
                    cartProduct.map(product => <ShowCardProduct key={product._id} product={product}></ShowCardProduct>)
                }
            </div>
        </div>
    );
};

export default MyCart;