import { useLoaderData } from "react-router-dom";
import AllClass from "./AllClass";

const AllClasses = () => {
    const filterData = useLoaderData();

    return (
        <div>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24 px-8 lg:px-0">
                {
                    filterData?.map(request => <AllClass
                        key={request?._id}
                        request={request}
                    ></AllClass>)
                }
            </div>
        </div>
    );
};

export default AllClasses;