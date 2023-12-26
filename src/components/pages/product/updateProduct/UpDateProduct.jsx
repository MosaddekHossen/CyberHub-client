import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpDateProduct = () => {

    const product = useLoaderData();
    const { _id, name, brandName, type, price, des, rating, image } = product || {};


    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const brandName = form.brandName.value;
        const type = form.type.value;
        const price = form.price.value;
        const des = form.des.value;
        const rating = form.rating.value;
        const image = form.image.value;
        const updateProduct = { name, brandName, type, price, des, rating, image }
        // console.log(AddProduct);

        // Send data to the server
        fetch(`https://57-brand-shop-server-jcvh892nr-mosaddek.vercel.app/brand/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Update product successfully!',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    form.reset();
                }
            })
    }

    return (
        <div className="my-14 max-w-5xl lg:px-24 px-10 md:py-14 py-10 rounded-md bg-[#F4F3F0] mx-auto text-center">
            <h2 className="md:text-4xl text-2xl font-extrabold pb-10 text-blue-400">Update Product</h2>
            <form onSubmit={handleUpdate}>
                {/* Form row */}
                <div className="md:flex gap-10 justify-between md:mb-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label>
                            <input type="text" defaultValue={name} required name="name" placeholder="Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <label>
                            <input type="text" defaultValue={brandName} required name="brandName" placeholder="Brand Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* Form row */}
                <div className="md:flex gap-10 justify-between md:mb-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Type</span>
                        </label>
                        <label>
                            <input defaultValue={type} required type="text" name="type" placeholder="Type" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label>
                            <input type="number" defaultValue={price} required name="price" placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* Form row */}
                <div className="md:flex gap-10 justify-between md:mb-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Short description</span>
                        </label>
                        <textarea name="des" defaultValue={des} className="border-none border-slate-200 p-2" required id="des" placeholder="Short description" cols="20" rows="5"></textarea>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label>
                            <input type="text" defaultValue={rating} required name="rating" placeholder="Rating" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* Form row */}
                <div className="form-control md:w-full md:mb-10 pb-5">
                    <label className="label">
                        <span className="label-text">Image</span>
                    </label>
                    <label>
                        <input type="text" defaultValue={image} required name="image" placeholder="Image" className="input input-bordered w-full" />
                    </label>
                </div>
                <input type="submit" className="btn btn-block bg-gray-600 text-indigo-400 hover:text-blue-600 font-bold" value="Update Product" />
            </form>
        </div>
    );
};

export default UpDateProduct;