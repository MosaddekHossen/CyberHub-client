import { Link, useLoaderData } from "react-router-dom";

const Details = () => {
    const request = useLoaderData();
    const { name, title, category, userImage } = request || {};

    return (
        <>
            <div className="my-20 lg:w-2/3 md:w-full mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <figure >
                        <img src={userImage} alt="Image" className="h-80 w-full" />
                    </figure>
                    <div>
                        <div className="flex items-center my-3 mx-4">
                            <div className="ml-3">
                                <h3 className="font-bold text-2xl">{name}</h3>
                            </div>
                        </div>
                        <div className="px-5 pb-5 ml-2">
                            <h3 className="font-semibold">{title}</h3>
                        </div>
                        <div className="px-5 pb-5 ml-2">
                            <h3 className="font-semibold">Price: $567</h3>
                        </div>
                        <div className="px-5 pb-5 ml-2">
                            <h3 className="font-semibold">Total enroll: 56788+</h3>
                        </div>
                        <p className="mx-6 p-1 font-sans font-semibold leading-normal antialiased opacity-75">
                            {category}
                        </p>
                        <div className="p-6 pt-5">
                            <div className="form-control mb-2 lg:mb-0">
                                <Link to={'/payment'}><button className="btn btn-primary btn-block font-bold">Pay</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Details;