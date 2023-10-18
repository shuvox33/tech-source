import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const ShowCartProduct = ({ product }) => {

    const { _id, imageUrl, name, brand, price, rating } = product.product;

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
                    <NavLink to={`/details/${_id}`}>
                        <button className='px-3 py-1 bg-red-600 text-white rounded-lg'>Delete</button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

ShowCartProduct.propTypes = {
    product: PropTypes.object
}
export default ShowCartProduct;