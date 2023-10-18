import { useLoaderData, useParams } from "react-router-dom";

const Update = () => {

    const {_id} = useParams();
    const products = useLoaderData();
    const product = products.find(product => product._id === _id)
    console.log(product);

    return (
        <div>
            <h3>update </h3>
        </div>
    );
};

export default Update;