import { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from 'sweetalert2'


const ProductDetails = () => {

    const { _id } = useParams();
    const products = useLoaderData();
    const product = products.find(product => product._id === _id)

    const { user } = useContext(AuthContext)

    const { imageUrl, name, brand, type, price, rating, description } = product;
    const newProduct = { product, email: user.email }

    const handleAddCart = () => {
        fetch('https://a10-tech-source-server.vercel.app/cart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {

                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
            })

    }


    return (
        <div className="my-10">
            <div className='max-w-6xl mx-auto'>
                <div className='bg-zinc-200 rounded-lg space-y-4'>
                    <figure className='h-full'>
                        <img className='h-full w-full object-contain' src={imageUrl} alt="" />
                    </figure>
                    <div className=' text-lg font-semibold flex justify-between px-3'>
                        <h3>Name : {name}</h3>
                        <h3>Brand : {brand}</h3>
                    </div>
                    <div className=' text-lg font-semibold flex justify-between px-3'>
                        <h3>Price : {price}</h3>
                        <h3>Type : {type}</h3>
                    </div>
                    <div className='  flex justify-between px-3'>
                        <h3 className='text-lg font-semibold'>Rating : {rating}</h3>
                        <button onClick={handleAddCart} className='px-3 py-1 bg-slate-800 text-white rounded-lg'>Add to card</button>
                    </div>
                    <div className="px-3">
                        <h3 className="text-lg">Description : {description}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;