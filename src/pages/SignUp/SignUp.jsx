import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import { useState } from "react";
import useAuth from '../../Hooks/useAuth';
import { Helmet } from 'react-helmet-async';
import useAxiosPublic from '../../Hooks/useAxiosPublic';

const SignUp = () => {
    const axiosPublic = useAxiosPublic();
    const [showPassword, setShowPassword] = useState(false);
    const { createUser } = useAuth();
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const image = e.target.img.value;
        // const email = e.target.email.value;
        const password = e.target.password.value;
        const accepted = e.target.terms.checked;
        // console.log(accepted)
        const emailInput = document.getElementById('email');
        const email = emailInput.value.toLowerCase();
        // console.log(lowercaseEmail,email);

        if (password.length < 6) {
            return Swal.fire('Oops!', "Is less than 6 characters. Your password must be at least 6 characters long.", 'error');
        }

        if (!/[A-Z]/.test(password)) {
            return Swal.fire('Oops!', "Don't have a capital letter. Your password should contain uppercase letters.", 'error');
        }

        if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password)) {
            return Swal.fire('Oops!', "Don't have a special character.Your password should contain special characters.", 'error');
        }
        else if (!accepted) {
            Swal.fire('Oops!', 'Please accept our terms and conditions', 'error')
            return;
        }

        createUser(email, password)
            .then(res => {
                console.log(res.user)
                Swal.fire('Good job!', 'User Created Successfully!', 'success')
                e.target.reset();
                navigate("/");

                // Update Profile
                updateProfile(res.user, {
                    displayName: name,
                    photoURL: image
                })
                    .then(() => {
                        const userInfo = {
                            name,
                            image,
                            email
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log("User added to the database.");
                                }
                            })
                        // console.log("Update Profile!")
                        window.location.reload();
                    })
                    .catch(err => {
                        Swal.fire('Oops!', err.message, 'error')
                        console.log(err.message)
                    })
            })
            .catch(err => {
                console.log(err.message)
                Swal.fire('Oops!', err.message, 'error')
            })
    }

    return (
        <div>
            <Helmet>
                <title>CyberHub | SignUp</title>
            </Helmet>
            <div className="text-center px-8 lg:px-0 pb-10">
                <div className="mx-auto lg:max-w-lg md:w-2/3 mt-20 bg-indigo-400 p-5 rounded-lg border-2">
                    <h2 className="text-3xl mb-8 mx-auto flex justify-center font-medium text-white">Please Register</h2>
                    <form onSubmit={handleRegister}>
                        <input required type="text" className="mb-4 w-full py-2 px-4 border-b-teal-200 border-b-2" name="name" placeholder="Your Name" id="name" />
                        <br />
                        <input required type="text" className="mb-4 w-full py-2 px-4 border-b-teal-200 border-b-2" name="img" placeholder="Your Image" id="image" />
                        <br />
                        <input required type="email" className="mb-4 w-full py-2 px-4 border-b-teal-200 border-b-2" name="email" placeholder="Email Address" id="email" />
                        <br />
                        <div className="mb-4 relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                className="w-full py-2 px-4 border-b-teal-200 border-b-2"
                                name="password" required
                                placeholder="Password" id="password" />
                            <span className="absolute top-3 right-3" onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                            </span>
                        </div>
                        <br />
                        <div className="mb-2">
                            <input type="checkbox" name="terms" id="terms" />
                            <label className="ml-1 text-white" htmlFor="terms">Accept our <a href="">Terms and conditions</a></label>
                        </div>
                        <br />
                        <input className="btn bg-indigo-500 mb-4 w-full text-[16px] font-bold hover:text-indigo-950 text-white" type="submit" value="Register" />
                    </form>
                    <p className="text-white">Already have an account? <Link to={'/signIn'}><button href="" className="text-white underline">Login</button></Link></p>
                </div>
                <Link to={'/'} className="btn btn-neutral mt-5 bg-indigo-500 text-[16px] border-none">Go to home</Link>
            </div>
        </div>
    );
};

export default SignUp;