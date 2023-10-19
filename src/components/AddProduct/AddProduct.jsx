import Swal from 'sweetalert2'

const AddProduct = () => {

    const handleAddProduct = (e) => {
        e.preventDefault();
        const result = e.target;
        const imageUrl = result.image.value;
        const name = result.name.value;
        const brand = result.brand.value;
        const type = result.price.value;
        const price = result.price.value;
        const description = result.description.value;
        const rating = result.rating.value;

        const newProduct = { imageUrl, name, brand, type, price, description, rating }

        //send data to server
        fetch('https://a10-tech-source-server-eek4bsgeb-shakib-hassan-shuvos-projects.vercel.app/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'User Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
            })

    }
    
    return (
        <div className="mt-8 w-full max-w-6xl mx-auto">
            <h3 className="text-center text-4xl">Add Product </h3>
            <form onSubmit={handleAddProduct}>
                <div className="max-w-4xl mx-auto flex flex-col gap-3">
                    <label className="text-xl" htmlFor="image">Image url : </label>
                    <input className=" w-full h-10 rounded-lg border border-orange-200 border-" type="text" name="image" id="image" placeholder="  Image url" />
                </div>
                <div className="max-w-4xl mx-auto flex flex-col gap-3">
                    <label className="text-xl" htmlFor="name">Name : </label>
                    <input className=" w-full h-10 rounded-lg border border-orange-200 border-" type="text" name="name" id="name" placeholder="  Name" />
                </div>
                <div className="max-w-4xl mx-auto flex flex-col gap-3">
                    <label className="text-xl" htmlFor="brand">Brand Name : </label>
                    <input className=" w-full h-10 rounded-lg border border-orange-200 border-" type="text" name="brand" id="brand" placeholder="  Brand Name" />
                </div>
                <div className="max-w-4xl mx-auto flex flex-col gap-3">
                    <label className="text-xl" htmlFor="type">Type : </label>
                    <input className=" w-full h-10 rounded-lg border border-orange-200 border-" type="text" name="type" id="type" placeholder="  Type" />
                </div>
                <div className="max-w-4xl mx-auto flex flex-col gap-3">
                    <label className="text-xl" htmlFor="price">Price : </label>
                    <input className=" w-full h-10 rounded-lg border border-orange-200 border-" type="text" name="price" id="price" placeholder="  price" />
                </div>
                <div className="max-w-4xl mx-auto flex flex-col gap-3">
                    <label className="text-xl" htmlFor="description">Short Description : </label>
                    <input className=" w-full h-10 rounded-lg border border-orange-200 border-" type="text" name="description" id="description" placeholder="  description" />
                </div>
                <div className="max-w-4xl mx-auto flex flex-col gap-3">
                    <label className="text-xl" htmlFor="rating">Rating : </label>
                    <input className=" w-full h-10 rounded-lg border border-orange-200 border-" type="text" name="rating" id="rating" placeholder="  rating" />
                </div>
                <div className="text-center mt-5">
                    <button className=" text-white bg-orange-500 px-4 py-2 rounded-lg ">Add Product</button>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;