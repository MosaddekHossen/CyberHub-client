import { Helmet } from "react-helmet-async";

const IntroDashboard = () => {
    return (
        <div>
            <Helmet>
                <title>CyberHub | Dashboard</title>
            </Helmet>
            <div className="flex justify-center items-center h-[75vh]">
                <div className="text-center">
                    <h1 className="md:text-5xl text-3xl text-indigo-600 font-bold">Welcome to the dashboard ! <br />Please select your route!</h1>
                </div>
            </div>
        </div>
    );
};

export default IntroDashboard;