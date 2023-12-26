// import { Link } from "react-router-dom";
import { Rating } from '@smastrom/react-rating';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '@smastrom/react-rating/style.css'

const ProductCard = ({ brand }) => {
    const { _id, name, brandName, type, price, rating, image } = brand || {};

    return (
        <>
            <div className="card shadow-xl h-full">
                <figure className="px-2 pt-2">
                    <img src={image} alt="Car" className="rounded-xl h-[50vh]" />
                </figure>
                <div className="pt-10 pl-5 pb-2">
                    <Rating
                        style={{ maxWidth: 180 }}
                        value={rating}
                        readOnly
                    />
                </div>
                <p className="mx-6 p-1 font-sans text-[18px] font-semibold leading-normal text-[#171715]">
                    Name: {name}
                </p>
                <p className="mx-6 p-1 mt-3 font-sans text-[18px] font-semibold leading-normal text-[#171715]">
                    Brand Name: {brandName}
                </p>
                <div className="p-6">
                    <div className="mb-2 flex items-center justify-between">
                        <p className="block font-sans text-base font-medium text-blue-gray-900">
                            Type: {type}
                        </p>
                        <p className="block font-sans text-base font-medium text-blue-gray-900">
                            Price: {price}$
                        </p>
                    </div>
                </div>
                <div className="p-6 pt-0">
                    <div className="md:flex gap-10 justify-between md:mb-5">
                        <div className="form-control md:w-1/2 mb-2 lg:mb-0">
                            <Link to={`/brand/${_id}`}> <button
                                className="block w-full select-none rounded-lg bg-gray-300 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button"
                            >
                                Details
                            </button></Link>
                        </div>
                        <div className="form-control md:w-1/2">
                            <Link to={`/updateBrand/${_id}`}> <button
                                className="block w-full select-none rounded-lg bg-gray-500 text-white py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button"
                            >
                                Update
                            </button></Link>
                        </div>
                    </div>

                    {/* </Link> */}
                </div>
            </div>
        </>
    );
};

ProductCard.propTypes = {
    brand: PropTypes.node
}

export default ProductCard;