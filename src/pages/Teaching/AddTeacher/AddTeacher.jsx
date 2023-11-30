import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const AddTeacher = () => {
    const { user } = useAuth();
    const { photoURL, displayName } = user || {};
    const axiosSecure = useAxiosSecure();

    const handleAdd = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const experience = form.experience.value;
        const title = form.title.value;
        const category = form.category.value;
        const userImage = form.userImage.value;
        const request = { name, experience, title, category, userImage }
        console.log(request);

        // Send data to the server (Normal)
        // fetch('https://72-cyber-hub-server.vercel.app/request', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(request)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         if (data.insertedId) {
        //             Swal.fire({
        //                 title: 'Success!',
        //                 text: 'Added teacher request apply successfully!',
        //                 icon: 'success',
        //                 confirmButtonText: 'Cool'
        //             })
        //             form.reset();
        //         }
        //     })

        // (Axios)
        axiosSecure.post('/request', request)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Added teacher request apply successfully!',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    form.reset();
                }
            })
    }

    return (
        <>
            <div className="my-14 max-w-5xl lg:px-24 px-10 py-14 rounded-md bg-[#F4F3F0] mx-auto text-center">
                <h2 className="md:text-5xl text-3xl font-extrabold pb-10">Application as a teacher</h2>
                <form onSubmit={handleAdd}>
                    {/* Form row */}
                    <div className="md:flex gap-10 justify-between md:mb-5">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <label>
                                <input type="text" readOnly defaultValue={displayName} required name="name" placeholder="Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Experience</span>
                            </label>
                            <select name="experience" id="" className="input input-bordered w-full">
                                <option value="beginner">Beginner</option>
                                <option value="experienced">Experienced</option>
                                <option value="someIdea">Some Idea</option>
                            </select>
                        </div>

                    </div>
                    {/* Form row */}
                    <div className="md:flex gap-10 justify-between md:mb-5">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <label>
                                <input type="text" required name="title" placeholder="Title" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <select name="category" id="" className="input input-bordered w-full">
                                <option value="webDevelopment">Web Development</option>
                                <option value="digitalMarketing">Digital Marketing</option>
                                <option value="softwareDevelopment">Software Development</option>
                                <option value="graphicDesign">Graphic Design</option>
                                <option value="contentWriting">Content Writing</option>
                            </select>
                        </div>

                    </div>
                    {/* Form row */}
                    <div className="form-control md:w-full pb-5">
                        <label className="label">
                            <span className="label-text">User Image</span>
                        </label>
                        <label>
                            <input type="text" required name="userImage" placeholder="User Image" readOnly defaultValue={photoURL} className="input input-bordered w-full" />
                        </label>
                    </div>
                    <input type="submit" className="btn btn-block bg-gray-600 text-[18px] text-white hover:text-blue-600 font-bold" value="Review" />
                </form>
            </div>
        </>
    );
};

export default AddTeacher;