import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const TeacherRequest = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })

    const handleMakeTeacher = user => {
        axiosSecure.patch(`/users/teacher/${user._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is an Teacher Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    return (
        <div>
            {/* <div className="flex justify-center items-center h-[50vh]">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Unavailable Request !</h1>
                </div>
            </div> */}
            <div>
                {/* <div className="my-4">
                    <h2 className="text-3xl md:text-4xl font-bold">Total Teacher Request: {users?.length}</h2>
                </div> */}
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr className="text-[16px] font-bold">
                                <th>Image</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users?.map((user) => <tr key={user?._id}>
                                    {/* <th>{index + 1}</th> ,index */}
                                    <th className="avatar flex items-center">
                                        <div className="w-12 rounded-full">
                                            <img src={user.image} />
                                        </div>
                                    </th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        {user.role === 'teacher' ? <button
                                            className="btn hover:text-black text-white bg-[#6de165] btn-ghost">Approved</button> : <button
                                                onClick={() => handleMakeTeacher(user)}
                                                className="btn hover:text-black text-white bg-indigo-500 btn-ghost">accepted</button>}
                                    </td>
                                    <td>
                                        {user.role === 'teache' ? <button
                                            className="btn hover:text-black text-white bg-[#ff4d3a] btn-ghost">Rejected</button> : <button
                                                onClick={() => handleMakeTeacher(user)}
                                                className="btn hover:text-black text-white bg-[#ff4b37] btn-ghost">reject</button>}
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default TeacherRequest;