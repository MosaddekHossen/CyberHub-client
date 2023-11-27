import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../ErrorPage";
import Home from "../pages/Home/Home/Home";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Teaching from "../pages/Teaching/Teaching/Teaching";
import Dashboard from "../Layout/Dashboard";
import ThHome from "../pages/Dashboard/ThHome/ThHome";
import AllClasses from "../pages/AllClasses/AllClasses";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/allClasses',
                element: <PrivateRoute><AllClasses></AllClasses></PrivateRoute>,
                loader: () => fetch('http://localhost:500/request')
            },
            {
                path: '/signIn',
                element: <SignIn></SignIn>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/teaching',
                element: <PrivateRoute><Teaching></Teaching></PrivateRoute>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'teacherProfile',
                element: <PrivateRoute><ThHome></ThHome></PrivateRoute>
            }
        ]
    }
]);


export default Routes;