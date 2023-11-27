import { FaHome } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex flex-col md:flex-row max-w-screen-xl mx-auto">
            {/* Dashboard side bar */}
            <div className="md:w-72 lg:w-80 w-full pb-10 md:pb-0 max-h-full md:min-h-screen bg-indigo-300">
                <ul className="menu space-y-4 mt-5 grid justify-center">
                    <NavLink className={({ isActive }) => isActive ? "btn btn-primary text-[16px] font-semibold" : "btn btn-info text-[16px] font-semibold"}
                        to={'/dashboard/teacherProfile'}><FaHome></FaHome>Teacher Profile</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "btn btn-primary text-[16px] font-semibold" : "btn btn-info text-[16px] font-semibold"}
                        to={'/dashboard'}><FaHome></FaHome>Add Class</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "btn btn-primary text-[16px] font-semibold" : "btn btn-info text-[16px] font-semibold"}
                        to={'/dashboard'}><FaHome></FaHome>My Class</NavLink>
                    <div className="divider divider-success">Back to ...</div>
                    <NavLink className={({ isActive }) => isActive ? "btn btn-primary text-[16px] font-semibold" : "btn btn-info text-[16px] font-semibold"}
                        to={'/'}><FaHome></FaHome>Home</NavLink>
                </ul>
            </div>
            {/* Dashboard content */}
            <div className="md:flex-1 p-5 md:p-10 w-full">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;