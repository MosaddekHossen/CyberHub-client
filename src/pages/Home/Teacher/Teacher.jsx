import { Link } from "react-router-dom";

const Teacher = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto mt-10 md:mt-20 lg:mb-16 md:mb-5 mb-4" data-aos="zoom-in">
                <h2 className="lg:text-5xl text-4xl font-bold mb-5 text-center">Teaching</h2>
                <div className="lg:h-full">
                    <div className="hero-content flex-col lg:flex-row">
                        <img className="lg:w-1/2 w-full lg:h-full md:h-[400px]" src="https://img.freepik.com/free-photo/businesspeople-celebrating-success_1098-1996.jpg" />
                        <div className="mt-1 ml-0 md:ml-20">
                            <h1 className="lg:text-5xl text-3xl font-bold">Become an instructor</h1>
                            <p className="py-6">A teacher, also called a schoolteacher or formally an educator, is a person who helps students to acquire knowledge, competence, or virtue,!</p>
                            <Link to={'/teaching'}><button className="btn bg-slate-500 btn-ghost text-white hover:text-blue-500 text-[16px] md:text-[18px] font-normal">Start teaching today</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Teacher;