import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex justify-center items-center h-[100vh]">
            <div className="text-center">
                <img src="https://i.ibb.co/xXfqZkr/404.gif" alt="" />
                <Link to={'/'} className="btn btn-neutral text-white mt-5 bg-[#239452] border-none">Back to home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;