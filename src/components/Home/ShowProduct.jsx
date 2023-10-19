import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
const ShowProduct = ({ product }) => {


    const { _id, imageUrl, name, brand, type, price, rating } = product;


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
                    <h3>Type : {type}</h3>
                </div>
                <div className='  flex justify-between px-3'>
                    <h3 className='text-lg font-semibold'>Rating : {rating}</h3>
                    <Link to={`/update/${_id}`}>
                        <button className='px-3 py-1 bg-slate-800 text-white rounded-lg'>Update</button>
                    </Link>
                </div>
                <div className=' text-center px-3 pb-3'>
                    <NavLink to={`/details/${_id}`}>
                        <button className='px-3 py-1 bg-orange-600 text-white rounded-lg'>Details</button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

ShowProduct.propTypes = {
    product: PropTypes.object
}
export default ShowProduct;