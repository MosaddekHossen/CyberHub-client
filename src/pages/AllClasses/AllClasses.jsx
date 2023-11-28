import { useLoaderData } from "react-router-dom";
import AllClass from "./AllClass";
import { Helmet } from "react-helmet-async";

const AllClasses = () => {
    const filterData = useLoaderData();

    return (
        <div>
            <Helmet>
                <title>CyberHub | All Classes</title>
            </Helmet>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24 mt-16 px-8 lg:px-0">
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