import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {

    const product = useLoaderData();
    const {_id, imageUrl, name, brand, type, price, rating} = product;

    const handleUpdate = e=> {
        e.preventDefault();

        const result = e.target;
        const imageUrl = result.image.value;
        const name = result.name.value;
        const brand = result.brand.value;
        const type = result.type.value;
        const price = result.price.value;
        const rating = result.rating.value;

        const updatedProduct = { imageUrl, name, brand, type, price, rating }

        //send data to server
        fetch(`https://a10-tech-source-server.vercel.app/product/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
            })
    }

    return (
        <div className="mt-8 w-full max-w-6xl mx-auto">
            <h3 className="text-center text-4xl">Update Product </h3>
            <form onSubmit={handleUpdate}>
                <div className="max-w-4xl mx-auto flex flex-col gap-3">
                    <label className="text-xl" htmlFor="image">Image url : </label>
                    <input className=" w-full h-10 rounded-lg border border-orange-200 border-" type="text" name="image" id="image" defaultValue={imageUrl} placeholder="  Image url" />
                </div>
                <div className="max-w-4xl mx-auto flex flex-col gap-3">
                    <label className="text-xl" htmlFor="name">Name : </label>
                    <input className=" w-full h-10 rounded-lg border border-orange-200 border-" type="text" name="name" id="name" defaultValue={name} placeholder="  Name" />
                </div>
                <div className="max-w-4xl mx-auto flex flex-col gap-3">
                    <label className="text-xl" htmlFor="brand">Brand Name : </label>
                    <input className=" w-full h-10 rounded-lg border border-orange-200 border-" type="text" name="brand" id="brand" defaultValue={brand} placeholder="  Brand Name" />
                </div>
                <div className="max-w-4xl mx-auto flex flex-col gap-3">
                    <label className="text-xl" htmlFor="type">Type : </label>
                    <input className=" w-full h-10 rounded-lg border border-orange-200 border-" type="text" name="type" id="type" defaultValue={type} placeholder="  Type" />
                </div>
                <div className="max-w-4xl mx-auto flex flex-col gap-3">
                    <label className="text-xl" htmlFor="price">Price : </label>
                    <input className=" w-full h-10 rounded-lg border border-orange-200 border-" type="text" name="price" id="price" defaultValue={price} placeholder="  price" />
                </div>

                <div className="max-w-4xl mx-auto flex flex-col gap-3">
                    <label className="text-xl" htmlFor="rating">Rating : </label>
                    <input className=" w-full h-10 rounded-lg border border-orange-200 border-" type="text" name="rating" id="rating" defaultValue={rating} placeholder="  rating" />
                </div>
                <div className="text-center mt-5">
                    <button className=" text-white bg-orange-500 px-4 py-2 rounded-lg ">Update Product</button>
                </div>
            </form>
        </div>
    );
};

export default Update;