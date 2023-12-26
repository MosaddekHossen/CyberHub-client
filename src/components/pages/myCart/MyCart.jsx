import { AuthContext } from "../../../provider/AuthProvider";
import CartCard from "../myCart/cartCard/CartCard";
import { useContext, useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";

const MyCart = () => {
    const { user } = useContext(AuthContext);
    const [brands, setBrands] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`https://57-brand-shop-server-jcvh892nr-mosaddek.vercel.app/brands/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setBrands(data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setIsLoading(false);
            });
    }, [user?.email]);

    return (
        <>
            {isLoading ? (
                <div className="h-[100vh] md:text-5xl text-2xl font-bold flex justify-center items-center">
                    <ClipLoader color="#36D7B7" loading={isLoading} size={150} />
                </div>
            ) : brands.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10 px-8 lg:px-0">
                    {brands?.map(brand => (
                        <CartCard key={brand._id} brand={brand} brands={brands} setBrands={setBrands}></CartCard>
                    ))}
                </div>
            ) : (
                <div className="h-[90vh] md:text-5xl text-2xl font-bold flex justify-center items-center">
                    <h1>You have not added any vehicles!</h1>
                </div>
            )}
        </>
    );
};

export default MyCart;
