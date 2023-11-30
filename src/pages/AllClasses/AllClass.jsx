import { Link } from "react-router-dom";

const AllClass = ({ request }) => {
    const { _id, name, title, category, userImage } = request || {};

    return (
        <div>
            <div className="card shadow-xl h-full mt-5">
                <div className="avatar pt-7 pb-3 mx-auto">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={userImage} alt="Image" />
                    </div>
                </div>
                <div className="flex items-center my-3 mx-4">
                    <div className="ml-3">
                        <h3 className="font-bold">
                            By {name}</h3>
                    </div>
                </div>
                <div className="px-5 pb-5 ml-2 text-center">
                    <h3 className="font-semibold">{title}</h3>
                </div>
                <div className="px-5 pb-5 ml-2">
                    <h3 className="font-semibold text-center">Price: $567</h3>
                </div>
                <div className="px-5 pb-5 ml-2">
                    <h3 className="font-semibold text-center">Total enroll: 56788+</h3>
                </div>
                <p className="mx-6 p-1 font-sans text-[18px] font-semibold leading-normal antialiased opacity-75">
                    {category}
                </p>
                <div className="p-6 pt-5">
                    <div className="form-control mb-2 lg:mb-0">
                        <Link to={`/class/${_id}`}><input type="submit" className="btn btn-secondary btn-block font-bold" value="Enroll" /></Link>
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default AllClass;