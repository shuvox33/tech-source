import { useContext } from 'react';
import { DiTechcrunch } from 'react-icons/di';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Nav = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div className='bg-orange-400 text-white flex items-center justify-evenly'>

            <figure className='text-6xl'><DiTechcrunch></DiTechcrunch></figure>
            <h3 className='text-4xl hidden md:block'>Tech Source</h3>
            <div className='text-base md:text-xl space-x-10 flex'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/addproduct'>Add Product</NavLink>
                <NavLink to='/mycart'>My card </NavLink>

                <div className='flex'>
                    {

                        user ? <>
                            <span className='sm:hidden'>{user.displayName}</span>
                            <figure className=" ml-3 ">
                                <img className="max-h-10 rounded-full" src={user.photoURL} alt="" />
                            </figure>
                            <button onClick={handleLogOut} className=" ml-4 px-3 py-1 rounded-lg bg-white text-orange-600">Log Out</button>
                        </>
                            : <NavLink to={'/login'}><button className="bg-white text-orange-600 px-3 py-1 rounded-lg">Login</button></NavLink>


                    }
                </div>

            </div>
        </div>
    );
};

export default Nav;