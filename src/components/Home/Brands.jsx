import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Brands = ({ brands }) => {

    const { image_url, name } = brands;
    return (
        <div className='shadow-lg my-8'>
            <div className='h-full'>
                <NavLink to={`/${name}`}>
                    <div className='h-full '>
                        <img className='w-full h-full object-contain' src={image_url} alt="" />
                    </div>
                    <div className=''>
                        <h3 className='text-center text-3xl'>{name}</h3>
                    </div>
                </NavLink>
            </div>

        </div>
    );
};

Brands.propTypes = {
    brands: PropTypes.object
}
export default Brands;