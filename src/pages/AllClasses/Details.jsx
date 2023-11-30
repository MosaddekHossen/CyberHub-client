import { Link, useLoaderData } from "react-router-dom";

const Details = () => {
    const request = useLoaderData();
    const { name, title, category, userImage } = request || {};
    console.log(request);
    return (
        <div className="my-24 w-3/4 mx-auto">
            <div className="card shadow-xl mt-5">
                <figure >
                    <img src={userImage} alt="Food" className="h-80 w-1/2" />
                </figure>
                <div className="flex items-center my-3 mx-4">
                    <div className="ml-3">
                        <h3 className="font-bold">Name: {name}</h3>
                    </div>
                </div>
                <div className="px-5 pb-5 ml-2">
                    <h3 className="font-semibold">Title: {title}</h3>
                </div>
                <div className="px-5 pb-5 ml-2">
                    <h3 className="font-semibold text-center">Price: $567</h3>
                </div>
                <div className="px-5 pb-5 ml-2">
                    <h3 className="font-semibold text-center">Total enroll: 56788+</h3>
                </div>
                <p className="mx-6 p-1 font-sans text-[18px] font-semibold leading-normal antialiased opacity-75">
                    Short description: {category}
                </p>
                <div className="p-6 pt-5">
                    <div className="form-control mb-2 lg:mb-0">
                        <Link to={'/payment'}><button className="btn btn-primary btn-block font-bold">Pay</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;