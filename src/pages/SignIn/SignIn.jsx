import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const SignIn = () => {
    const axiosPublic = useAxiosPublic();
    const { signIn, googleLogin } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    // Login User
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signIn(email, password)
            .then(() => {
                // console.log(res.user)
                Swal.fire('Good job!', 'Success Sign In!', 'success')
                e.target.reset();

                // navigate("/");
                // navigate(location?.state ? location?.state : '/');
                navigate(from, { replace: true });
            })
            .catch(err => {
                console.log(err.message)
                Swal.fire('Oops!', err.message, 'error')
            })
    }

    // Google Login
    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                Swal.fire('Good job!', 'Google Login Successful!', 'success');

                // Added user to the database
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName,
                    image: result.user?.photoURL
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                    })

                // navigate('/');
                // navigate(location?.state ? location?.state : '/');
                navigate(from, { replace: true });
            })
            .catch(err => Swal.fire('Oops!', err.message, 'error'))
    }

    return (
        <div>
            <Helmet>
                <title>CyberHub | SignIn</title>
            </Helmet>
            <div className="justify-center my-20 flex">
                <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-indigo-400">
                    <h2 className="md:text-4xl text-2xl mt-7 mx-auto flex justify-center font-bold text-black">Please Login Now!</h2>
                    <div className="card-body">
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    className="input input-bordered"
                                    required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn text-white text-[16px] font-bold hover:text-[#393939] bg-[#4d55cd]">Login</button>
                            </div>
                        </form>
                        <button onClick={handleGoogleLogin} className="text-[16px] hover:text-[#393939] font-bold text-white btn bg-[#4d55cd] flex justify-between rounded-lg"><svg xmlns="http://www.w3.org/2000/svg" width="31" height="32" viewBox="0 0 31 32" fill="none">
                            <g>
                                <path d="M30.9999 16.2335C30.9999 15.1547 30.9128 14.0702 30.7268 13.0089H15.8108V19.1198H24.3525C23.998 21.0907 22.8592 22.8342 21.1915 23.9421V27.9071H26.2875C29.28 25.1432 30.9999 21.0615 30.9999 16.2335Z" fill="#4285F4" />
                                <path d="M15.811 31.738C20.0761 31.738 23.6729 30.3328 26.2935 27.9071L21.1975 23.942C19.7797 24.91 17.9494 25.4581 15.8168 25.4581C11.6913 25.4581 8.19322 22.665 6.93811 18.9099H1.67944V22.9974C4.36398 28.3561 9.83183 31.738 15.811 31.738Z" fill="#34A853" />
                                <path d="M6.93237 18.9099C6.26995 16.9391 6.26995 14.8049 6.93237 12.834V8.74651H1.67951C-0.563416 13.2305 -0.563416 18.5134 1.67951 22.9975L6.93237 18.9099Z" fill="#FBBC04" />
                                <path d="M15.811 6.28C18.0656 6.24501 20.2446 7.09634 21.8774 8.65904L26.3923 4.12836C23.5334 1.43444 19.739 -0.0466314 15.811 1.65404e-05C9.83183 1.65404e-05 4.36398 3.38199 1.67944 8.74651L6.9323 12.834C8.1816 9.07304 11.6854 6.28 15.811 6.28Z" fill="#EA4335" />
                            </g>
                            <defs>
                                <clipPath id="clip0_19_525">
                                    <rect width="31" height="31.7381" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>Google Login</button>
                        <p className="text-white">Do not have an account? <Link to={'/signUp'}><button href="" className="text-white mt-5 underline">Create an account</button></Link></p>
                        <Link to={'/'} className="btn btn-neutral mt-5 bg-[#4d55cd] border-none">Go to home</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;