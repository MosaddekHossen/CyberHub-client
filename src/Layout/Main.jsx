import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../pages/Shared/NavBar/NavBar";
import Footer from "../pages/Shared/Footer/Footer";

const Main = () => {
    const location = useLocation();
    // console.log(location);
    const isLogin = location.pathname.includes('signIn') || location.pathname.includes('signUp')

    return (
        <div>
            {isLogin || <NavBar></NavBar>}
            <div className="max-w-screen-xl mx-auto">
                <Outlet></Outlet>
            </div>
            {isLogin || <Footer></Footer>}
        </div>
    );
};

export default Main;