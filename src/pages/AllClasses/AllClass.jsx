import { Link } from "react-router-dom";

const AllClass = ({ request }) => {
    const { _id, name, title, category, userImage } = request || {};

    return (
        <>
            <div className="bg-base-100 shadow-xl">
                <div className="flex justify-around">
                    <figure>
                        <div className="avatar">
                            <div className="md:w-24 w-14 mt-5 md:mt-0 rounded-full">
                                <img src={userImage} alt="Image" />
                            </div>
                        </div>
                    </figure>
                    <div>
                        <div className="flex items-center my-3 mx-4">
                            <div className="ml-3">
                                <h3 className="font-bold">
                                    By {name}
                                </h3>
                            </div>
                        </div>
                        <div className="px-5 pb-5 ml-2">
                            <h3 className="font-bold">{title}</h3>
                        </div>
                        <p className="mx-6 p-1 font-sans text-[18px] font-semibold leading-normal antialiased opacity-75">
                            {category}
                        </p>
                    </div>
                </div>
                <div className="p-6 pt-5">
                    <div className="form-control mb-2 lg:mb-0">
                        <Link to={`/class/${_id}`}>
                            <input type="submit" className="btn btn-secondary btn-block font-bold" value="Enroll" />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AllClass;