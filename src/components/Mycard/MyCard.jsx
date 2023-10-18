import { useLoaderData } from "react-router-dom";

const MyCard = () => {

    const cartProduct = useLoaderData();
    console.log(cartProduct);
    return (
        <div>
            
        </div>
    );
};

export default MyCard;