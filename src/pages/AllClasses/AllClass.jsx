import { Link } from "react-router-dom";

const AllClass = ({ request }) => {
    const { _id, name, title, category, userImage } = request || {};

    return (
        <div>
            <div className="card shadow-xl h-full mt-5">
                <figure className="px-2 pt-2">
                    <img src={userImage} alt="Car" className="rounded-xl h-[300px] object-cover w-full" />
                </figure>
                <div className="flex items-center mt-5 mx-4">
                    <div className="ml-3">
                        {/* <h3 className="font-bold">Name: {name}</h3> */}
                    </div>
                </div>
                <div className="p-5 ml-2">
                    <h3 className="font-semibold">Title: {title}</h3>
                </div>
                <div className="p-5 ml-2">
                    <h3 className="font-semibold">Price: $567</h3>
                </div>
                <div className="p-5 ml-2">
                    <h3 className="font-semibold">Total enroll: 56788+</h3>
                </div>
                <p className="mx-6 p-1 mt-3 font-sans text-[18px] font-semibold leading-normal antialiased opacity-75">
                    Short description: {category}
                </p>
                <div className="p-6 pt-5">
                    <div className="form-control mb-2 lg:mb-0">
                        <Link to={`/details/${_id}`}><input type="submit" className="btn btn-block bg-gray-600 text-white hover:text-blue-600 font-bold" value="Enroll" /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllClass;