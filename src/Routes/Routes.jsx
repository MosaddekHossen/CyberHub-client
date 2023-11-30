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
import AllClasses from "../pages/AllClasses/AllClasses";
import AdminProfile from "../pages/Dashboard/Admin/AdminProfile";
import TeacherProfile from "../pages/Dashboard/Teacher/TeacherProfile";
import Users from "../pages/Dashboard/Admin/Users";
import StudentProfile from "../pages/Dashboard/Student/StudentProfile";
import MyClass from "../pages/Teaching/Teaching/MyClass";
import AddClass from "../pages/Teaching/Teaching/AddClass";
import MyEnrollClass from "../pages/Dashboard/Student/MyEnrollClass";
import AdminAllClasses from "../pages/Dashboard/Admin/AdminAllClasses";
import TeacherRequest from "../pages/Dashboard/Admin/TeacherRequest";
import IntroDashboard from "../pages/Dashboard/Dashboard/IntroDashboard";

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
                element: <AllClasses />,
                loader: () => fetch('https://72-cyber-hub-server.vercel.app/request')
            },
            {
                path: '/signIn',
                element: <SignIn />
            },
            {
                path: '/signUp',
                element: <SignUp />
            },
            {
                path: '/teaching',
                element: <PrivateRoute><Teaching /></PrivateRoute>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <IntroDashboard />
            },
            // Admin routes
            {
                path: 'adminProfile',
                element: <AdminProfile />
            },
            {
                path: 'teacherRequest',
                element: <TeacherRequest />
            },
            {
                path: 'adminAllClasses',
                element: <AdminAllClasses />
            },
            {
                path: 'users',
                element: <Users />
            },
            // Teacher routes
            {
                path: 'teacherProfile',
                element: <TeacherProfile />
            },
            {
                path: 'addClass',
                element: <AddClass />
            },
            {
                path: 'myClass',
                element: <MyClass />
            },
            // Student routes
            {
                path: 'studentProfile',
                element: <StudentProfile />
            },
            {
                path: 'myEnrollClass',
                element: <MyEnrollClass />
            }
        ]
    }
]);

export default Routes;