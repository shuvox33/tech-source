import { DiTechcrunch } from 'react-icons/di';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div className='bg-orange-400 text-white flex items-center justify-evenly'>

            <figure className='text-6xl'><DiTechcrunch></DiTechcrunch></figure>
            <h3 className='text-4xl hidden md:block'>Tech Source</h3>
            <div className='text-base md:text-xl space-x-10'>
                <NavLink to='/home'>Home</NavLink>
                <NavLink to='/home'>Add to Card</NavLink>
                <NavLink to='/home'>My card </NavLink>
                <NavLink to='/home'>Login</NavLink>
            </div>
        </div>
    );
};

export default Nav;