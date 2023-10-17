import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Login = () => {
    const {logInUser} = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const navigate = useNavigate();

    const handleLogin = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        setLoginError('')

        logInUser(email, password)
            .then((result) => {
                console.log(result.user);
                toast('Log In Successful')
                e.target.reset();
                navigate('/');
            })
            .catch(error => {
                setLoginError(error.message);
            })
    }
    return (
        <div>
            <h3 className="text-4xl text-center">Login</h3>
            <div className="hero min-h-full ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div className="mt-3">
                                <p className="text-sm text-center">Not a User? Please <NavLink to={'/signup'}><span className="text-blue-600">Sign Up</span></NavLink></p>
                            </div>
                            {
                                loginError && <p className="mb-2 text-sm text-red-600 text-center">{loginError}</p>
                            }
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;