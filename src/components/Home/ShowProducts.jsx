import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShowProduct from "./ShowProduct";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
    {
        "image_url": "https://i.ibb.co/ctj9GSX/akhil-yerabati-Q2u-V5-Tkj-Nz8-unsplash.jpg"
    },
    {
        "image_url": "https://i.ibb.co/p1g3grc/ady-teenagerinro-s-Q0x-Xx-Qdfe-Y-unsplash.jpg"
    },
    {
        "image_url": "https://i.ibb.co/2k7nLQ1/onur-binay-9j-LI9-Ux6-IFo-unsplash.jpg"
    }
]

const ShowProducts = () => {

    const { name } = useParams();
    // const {products} = useLoaderData();

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://a10-tech-source-server.vercel.app/product')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    const selected = products.filter(product => product.brand === name.toLocaleLowerCase());
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

        return (
            <div className="my-10 ">

                <div className="max-w-2xl mx-auto">
                    <Slider {...settings}>
                        {
                            data.map(d =>
                                <div className="my-8" key={d.id}>
                                    <figure className="max-h-72">
                                        <img className="w-full h-full object-cover" src={d.image_url} alt="" />
                                    </figure>
                                </div>
                            )

                        }
                    </Slider>
                </div>

                {/* <h3 className="text-5xl text-center my-5">Product of : {name}</h3> */}
                <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    {
                        selected.map(product => <ShowProduct key={product._id} product={product}></ShowProduct>)
                    }
                </div>
            </div>
        );
    };

    export default ShowProducts;