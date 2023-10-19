import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShowProduct from "./ShowProduct";

const ShowProducts = () => {

    const { name } = useParams();
    // const {products} = useLoaderData();

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://a10-tech-source-server.vercel.app/product')
            .then(res => res.json())
            .then(data => setProducts(data));
    },[])


    const selected = products.filter(product => product.brand === name.toLocaleLowerCase());
    // console.log(selected);

    return (
        <div className="my-10">
            {/* <h3 className="text-5xl text-center my-5">Product of : {name}</h3> */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {
                    selected.map(product => <ShowProduct key={product._id} product={product}></ShowProduct>)
                }
            </div>
        </div>
    );
};

export default ShowProducts;