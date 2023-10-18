import { NavLink } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <div className="text-center">
                <h2 className="text-7xl font-semibold text-red-500 mt-20">Opps !!</h2>
                <h2 className="text-3xl font-semibold text-red-600 mt-16 mb-10 ">Page Not Found</h2>
                <NavLink className="text-xl font-semibold bg-slate-200 px-4 py-1 rounded-lg" to={'/'}>Go Back</NavLink>
            </div>
        </div>
    );
};

export default ErrorPage;