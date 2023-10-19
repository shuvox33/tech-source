import PropTypes from 'prop-types';
import Swal from 'sweetalert2'

const ShowCartProduct = ({ product }) => {

    const {_id} = product;
    const { imageUrl, name, brand, price, rating } = product.product;

    const handleDelete = _id => {
        console.log(_id);
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
                fetch(`http://localhost:5000/cart/${_id}`, {
                    method: 'DELETE'

                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
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
                    <h3 className=''>Rating : {rating}</h3>
                </div>

                <div className=' text-center px-3 pb-3'>
                    <button onClick={() => handleDelete(_id)} className='px-3 py-1 bg-red-600 text-white rounded-lg'>Delete</button>
                </div>
            </div>
        </div>
    );
};

ShowCartProduct.propTypes = {
    product: PropTypes.object
}
export default ShowCartProduct;