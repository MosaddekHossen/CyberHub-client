import { Link } from "react-router-dom";

const Teaching = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto mt-20 mb-16" data-aos="zoom-in">
                <h2 className="lg:text-5xl text-4xl font-bold mb-5 text-center">Teaching</h2>
                <div className="lg:h-full">
                    <div className="hero-content flex-col lg:flex-row">
                        <img className="lg:w-1/2 w-full lg:h-full md:h-[400px]" src="https://img.freepik.com/premium-photo/young-asian-teacher-man-teaching-video-conference-with-student_208349-895.jpg?w=996" />
                        <div className="mt-1 ml-0 md:ml-20">
                            <h1 className="lg:text-5xl text-3xl font-bold">Become an instructor</h1>
                            <p className="py-6">A teacher, also called a schoolteacher or formally an educator, is a person who helps students to acquire knowledge, competence, or virtue,!</p>
                            <Link to={'/teaching'}><button className="btn bg-black btn-ghost text-white hover:text-green-600 text-[16px] md:text-2xl font-normal">Start teaching today</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Teaching;