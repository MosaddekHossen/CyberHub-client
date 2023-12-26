// import { element } from "prop-types";
import { Rating } from "@smastrom/react-rating";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom"; // , useParams
import Swal from "sweetalert2";
import { AuthContext } from "../../../../provider/AuthProvider";

const Details = () => {
    const detailsData = useLoaderData();
    const { user } = useContext(AuthContext);
    const { email } = user || {};
    // console.log(email);

    const { name, brandName, type, price, des, rating, image } = detailsData || {};

    const handleAddCart = () => {
        // console.log(id);
        const addRequest = {
            email,
            name,
            brandName,
            type,
            price,
            des,
            rating,
            image
        }
        // console.log(addRequest);
        fetch('https://57-brand-shop-server-jcvh892nr-mosaddek.vercel.app/brands', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addRequest)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Add car successfully!',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    return (
        <div>
            <div className="card shadow-xl w-10/12 mx-auto h-full my-10">
                <figure className="px-2 pt-2">
                    <img src={image} alt="Car" className="rounded-xl object-cover h-[30vh] md:h-[60vh]" />
                </figure>
                <div className="pt-2 pl-5 pb-2">
                    <Rating
                        style={{ maxWidth: 180 }}
                        value={rating}
                        readOnly
                    />
                </div>
                <p className="mx-6 p-1 font-sans text-[18px] text-[#171715]">
                    Name: {name}
                </p>
                <p className="mx-6 p-1 mt-3 font-sans text-[18px] font-semibold leading-normal text-[#171715] antialiased opacity-75">
                    Brand Name: {brandName}
                </p>
                <div className="p-6">
                    <div className="mb-2 flex items-center justify-between">
                        <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                            Type: {type}
                        </p>
                        <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                            Price: {price}$
                        </p>
                    </div>
                    <p className="block font-sans font-normal text-black leading-relaxed text-blue-gray-900">
                        {des}
                    </p>
                </div>
                <div className="p-6 pt-0">
                    <div className="md:mb-5">
                        <div className="form-control mb-2 lg:mb-0">
                            <input onClick={() => handleAddCart(detailsData)} type="submit" className="btn btn-block bg-gray-600 text-white hover:text-blue-600 font-bold" value="Add Cart" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;