import { Link } from "react-router-dom";

const Teacher = () => {

    return (
        <div>
            <div className="max-w-7xl mx-auto mt-10 md:mt-20 lg:mb-10 md:mb-5 mb-4">
                <h2 className="lg:text-5xl text-4xl font-bold mb-5 text-center">Teaching</h2>
                <div className="hero-content flex-col lg:flex-row">
                    <div className="lg:h-1/2 lg:w-1/2 flex justify-end md:h-[350px] md:w-2/3">
                        <img className="object-cover h-96 w-full" src="https://img.freepik.com/free-vector/teacher-class-world-teacher-s-day_23-2147666022.jpg?w=740&t=st=1703619105~exp=1703619705~hmac=ff0e830093ce72ecfda8642e34b133524a6351d5fc022b37f5bbdbb55768a9ea" />
                    </div>
                    <div className="mt-1 md:w-1/2 ml-0 md:ml-10">
                        <h1 className="lg:text-5xl text-3xl font-bold">Become an instructor</h1>
                        <p className="py-6">A teacher, also called a schoolteacher or formally an educator, is a person who helps students to acquire knowledge, competence, or virtue,!</p>
                        <Link to={'/teaching'}><button className="btn bg-slate-500 btn-ghost text-white hover:text-blue-500 text-[16px] md:text-[18px] font-normal">Start teaching today</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Teacher;