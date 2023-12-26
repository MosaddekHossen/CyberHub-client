import { useLoaderData } from "react-router-dom";
import ProductCard from "../productCard/ProductCard";
import { useState } from "react";

const ProductCards = () => {
    const brands = useLoaderData();
    const [brand, setBrand] = useState(false);

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-10 px-8 lg:px-0">
                {
                    brand ? brands?.map(brand => <ProductCard key={brand._id} brand={brand}></ProductCard>) : brands?.slice(0, 4).map(brand => <ProductCard key={brand._id} brand={brand}></ProductCard>)
                }
            </div>
            {brands.length > 4 && <div className="text-center mb-10">
                <button onClick={() => setBrand(!brand)} className="btn btn-primary">{brand ? 'See Less' : 'See More'}</button>
            </div>}
        </>
    );
};

export default ProductCards;