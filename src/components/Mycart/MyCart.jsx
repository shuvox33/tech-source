import { useLoaderData } from "react-router-dom";
// import ShowCardProduct from "./ShowCartProduct";
import {  useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";

const MyCart = () => {

    const { user } = useContext(AuthContext);

    const products = useLoaderData();

    const userProducts = products.filter(product => product.email === user.email);

    const [finalProducts, setFinalProducts] = useState(userProducts)


    const handleDelete = _id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://a10-tech-source-server.vercel.app/cart/${_id}`, {
                    method: 'DELETE'

                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            const remainingProducts = finalProducts.filter(product => product._id != _id);
                            setFinalProducts(remainingProducts);
                            Swal.fire(
                                'Deleted!',
                                'Your product has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }


    return (
        <div className="max-w-6xl mx-auto my-10">
            {/* <h3 className="text-4xl text-center my-5">Product in Cart</h3> */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {
                    finalProducts.map(product => <div key={product.product._id}>
                        <div className='max-w-6xl mx-auto'>
                            <div className='bg-zinc-200 rounded-lg space-y-4'>
                                <figure className='h-full'>
                                    <img className='h-full w-full object-contain' src={product.product.imageUrl} alt="" />
                                </figure>
                                <div className=' text-lg font-semibold  justify-between px-3'>
                                    <h3>Name : {product.product.name}</h3>
                                    <h3>Brand : {product.product.brand}</h3>
                                </div>
                                <div className=' text-lg font-semibold  justify-between px-3'>
                                    <h3>Price : {product.product.price}</h3>
                                    <h3 className=''>Rating : {product.product.rating}</h3>
                                </div>

                                <div className=' text-center px-3 pb-3'>
                                    <button onClick={() => handleDelete(product._id)} className='px-3 py-1 bg-red-600 text-white rounded-lg'>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            {
                (finalProducts.length == 0) && <h3 className="text-4xl text-center">No Product in Cart</h3>
            }
        </div>
    );
};

export default MyCart;