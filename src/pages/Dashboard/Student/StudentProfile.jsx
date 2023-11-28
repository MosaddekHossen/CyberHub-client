import useAuth from "../../../Hooks/useAuth";

const StudentProfile = () => {
    const { user } = useAuth();

    return (
        <div>
            <div className="min-h-full bg-indigo-200 rounded-lg lg:w-1/2 w-full py-20 px-10 lg:px-32">
                <div className="hero-content text-center">
                    <div className="space-y-4">
                        <div className="avatar">
                            <div className="w-24 rounded-full">
                                <img src={user?.photoURL} />
                            </div>
                        </div>
                        <h2>{user?.displayName}</h2>
                        <h2 className="text-2xl font-bold">Student</h2>
                        <h3>{user?.email}</h3>
                        <h3>01710170798</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentProfile;