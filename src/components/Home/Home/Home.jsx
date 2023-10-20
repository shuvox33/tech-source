import { useLoaderData } from "react-router-dom";
import Brands from "../Brands";
import { createContext, useState } from "react";
import Switch from "react-switch";
import './Home.css'

export const ThemeContext = createContext(null);

const Home = () => {

    const brands = useLoaderData();

    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light"));
    };

    return (
        <div>
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
                <div id={theme}>
                    <div className="text-right">
                        <Switch onChange={toggleTheme} checked={theme === "dark"} />
                    </div>


                    {/* banner */}
                    <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/L5H4v5b/marvin-meyer-SYTO3xs06f-U-unsplash.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-lg">
                                <h1 className="mb-5 text-5xl font-bold">Welcome to Tech Source</h1>
                                <p className="mb-5">Unlocking the Future, Redefining Technology: Your Premier Tech Universe.</p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>

                    {/* brands */}
                    <div className="max-w-6xl mx-auto mt-20">
                        <div className="">
                            <h3 className="text-center text-4xl my-7">Brands</h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 ">
                                {
                                    brands.map(brands => <Brands key={brands.id} brands={brands}></Brands>)
                                }
                            </div>
                        </div>
                    </div>

                    {/* hot deals */}
                    <div className=" mt-32">
                        <h3 className="text-3xl text-center my-4">Hot Deals !</h3>
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
                            <div className="card w-96 bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src="https://i.ibb.co/F8BsGtw/cezar-sampaio-b-Fzhdm9z-Zp0-unsplash.jpg" alt="Shoes" className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">Watch!</h2>
                                    <p>Our new Watch collection has come !</p>
                                    <div className="card-actions">
                                        <button className="btn btn-primary">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card w-96 bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src="https://i.ibb.co/fYLgdBc/onur-binay-m-Vc-TLc-RAkn-M-unsplash.jpg" alt="Shoes" className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">Phones!</h2>
                                    <p>Try our new Phon collection</p>
                                    <div className="card-actions">
                                        <button className="btn btn-primary">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card w-96 bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src="https://i.ibb.co/ctj9GSX/akhil-yerabati-Q2u-V5-Tkj-Nz8-unsplash.jpg" alt="Shoes" className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">HeadPhones!</h2>
                                    <p>Premium headphones has come</p>
                                    <div className="card-actions">
                                        <button className="btn btn-primary">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* category */}
                    <div className=" mt-28 mb-10">
                        <h3 className="text-3xl text-center my-10">Category</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-5xl mx-auto">
                            
                            <div className="card w-44 bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <figure className="px-5 pt-5">
                                        <img src="https://i.ibb.co/MD4NY7Q/smart-tv.png" alt="Shoes" className=" object-contain rounded-xl" />
                                    </figure>
                                    <h2 className="text-2xl text-center">TV</h2>
                                    
                                </div>
                            </div>
                            <div className="card w-44 bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <figure className="px-5 pt-5">
                                        <img src="https://i.ibb.co/0tMyD3C/earphone.png" alt="Shoes" className=" object-contain rounded-xl" />
                                    </figure>
                                    <h2 className="text-2xl text-center">Airbuds</h2>
                                    
                                </div>
                            </div>
                            <div className="card w-44 bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <figure className="px-5 pt-5">
                                        <img src="https://i.ibb.co/gjkm20p/desktop.png" alt="Shoes" className=" object-contain rounded-xl" />
                                    </figure>
                                    <h2 className="text-2xl text-center">Computer</h2>
                                    
                                </div>
                            </div>
                            <div className="card w-44 bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <figure className="px-5 pt-5">
                                        <img src="https://i.ibb.co/fvGXSRW/smart-watch.png" alt="Shoes" className=" object-contain rounded-xl" />
                                    </figure>
                                    <h2 className="text-2xl text-center">Watch</h2>
                                    
                                </div>
                            </div>
                            
                        </div>
                    </div>


                    {/* footer */}
                    <footer className="footer footer-center p-10 bg-orange-200 text-base-content rounded">
                        <nav className="grid grid-flow-col gap-4">
                            <a className="link link-hover">About us</a>
                            <a className="link link-hover">Contact</a>
                            <a className="link link-hover">Jobs</a>
                            <a className="link link-hover">Press kit</a>
                        </nav>
                        <nav>
                            <div className="grid grid-flow-col gap-4">
                                <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                                <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                                <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                            </div>
                        </nav>
                        <aside>
                            <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
                        </aside>
                    </footer>
                </div>
            </ThemeContext.Provider>
        </div>
    );
};

export default Home;