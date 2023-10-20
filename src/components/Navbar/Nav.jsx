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

    const links = <>
        <nav className="text-lg space-x-5">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/addproduct'>Add Product</NavLink>
            <NavLink to='/mycart'>My card </NavLink>

        </nav>
    </>

    return (

        <div data-aos="fade-down" className="">
            <div className="py-4 navbar bg-slate-200">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-md dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-72">
                            {links}
                        </ul>
                    </div>
                    <figure className='text-6xl '><DiTechcrunch></DiTechcrunch></figure>
                    <a className="hidden lg:block btn btn-ghost normal-case sm: text-2xl md:text-4xl">Tech Source</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>

                <div className="navbar-end">
                    {
                        user ? <>
                            <span>{user.displayName}</span>
                            <figure className=" ml-3 ">
                                <img className="max-h-10 rounded-full" src={user.photoURL} alt="" />
                            </figure>
                            <button onClick={handleLogOut} className=" ml-4 px-3 py-1 rounded-lg bg-orange-500 text-white">Log Out</button>
                        </>
                            : <NavLink to={'/signup'}><button className="bg-orange-500  px-3 py-1 text-white rounded-lg">Sign Up</button></NavLink>

                    }



                </div>
            </div>
            {/* <ToastContainer /> */}
        </div>
        // <div className='bg-orange-400 text-white flex items-center justify-evenly'>

        //     <figure className='text-6xl'><DiTechcrunch></DiTechcrunch></figure>
        //     <h3 className='text-4xl hidden md:block'>Tech Source</h3>
        //     <div className='text-base md:text-xl space-x-10 flex'>
        //         <NavLink to='/'>Home</NavLink>
        //         <NavLink to='/addproduct'>Add Product</NavLink>
        //         <NavLink to='/mycart'>My card </NavLink>

        //         <div className='flex'>
        //             {

        //                 user ? <>
        //                     <span className=''>{user.displayName}</span>
        //                     <figure className=" ml-3 ">
        //                         <img className="max-h-10 rounded-full" src={user.photoURL} alt="" />
        //                     </figure>
        //                     <button onClick={handleLogOut} className=" ml-4 px-3 py-1 rounded-lg bg-white text-orange-600">Log Out</button>
        //                 </>
        //                     : <NavLink to={'/login'}><button className="bg-white text-orange-600 px-3 py-1 rounded-lg">Login</button></NavLink>


        //             }
        //         </div>

        //     </div>
        // </div>
    );
};

export default Nav;