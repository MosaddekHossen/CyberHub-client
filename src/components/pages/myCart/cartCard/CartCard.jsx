import { Rating } from '@smastrom/react-rating';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';

const CartCard = ({ brand, brands, setBrands }) => {
    const { _id, name, brandName, type, price, des, rating, image } = brand || {};

    const handleDelete = _id => {
        // console.log(_id)

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://57-brand-shop-server-jcvh892nr-mosaddek.vercel.app/brands/${_id}`, {
                    method: 'delete'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Brand has been deleted.',
                                'success'
                            )
                            const remaining = brands.filter(brand => brand._id !== _id);
                            setBrands(remaining);
                        }
                    })
            }
        })
    }

    return (
        <>
            <div className="card shadow-xl h-full">
                <figure className="px-2 pt-2">
                    <img src={image} alt="Car" className="rounded-xl h-[40vh]" />
                </figure>
                <div className="pt-3 pl-5 pb-2">
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
                        <div className="form-control">
                            <button
                                onClick={() => handleDelete(_id)}
                                className="block w-full text-gray-90000 rounded-lg bg-red-400 hover:text-white py-3 px-6"
                                type="button"
                            >
                                Delete
                            </button>
                        </div>
                    </div>

                    {/* </Link> */}
                </div>
            </div>
        </>
    );
};

CartCard.propTypes = {
    brand: PropTypes.node,
    brands: PropTypes.node,
    setBrands: PropTypes.node
}

export default CartCard;