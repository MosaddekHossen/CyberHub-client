import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom';
import MyEnrollClass from './MyEnrollClass';

const MyEnrollClasses = () => {
    const enrollClasses = useLoaderData();
    console.log(enrollClasses);

    return (
        <div>
            <Helmet>
                <title>CyberHub | My Enroll Class</title>
            </Helmet>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mb-24 px-8 lg:px-0">
                {
                    enrollClasses?.slice(0,4).map(enrollClass => <MyEnrollClass
                        key={enrollClass?._id}
                        enrollClass={enrollClass}
                    ></MyEnrollClass>)
                }
            </div>
        </div>
    );
};

export default MyEnrollClasses;