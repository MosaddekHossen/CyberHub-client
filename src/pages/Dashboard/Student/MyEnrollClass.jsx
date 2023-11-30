
const MyEnrollClass = ({ enrollClass }) => {
    const { name, title, userImage } = enrollClass || {};

    return (
        <div>
            <div>
                <div className="card shadow-xl mt-5">
                    <figure>
                        <img src={userImage} alt="Image" className="h-80 w-full" />
                    </figure>
                    <div className="flex items-center my-3 mx-4">
                        <div className="ml-3">
                            <h3 className="font-bold">Name: {name}</h3>
                        </div>
                    </div>
                    <div className="px-5 pb-5 ml-2">
                        <h3 className="font-semibold">Title: {title}</h3>
                    </div>
                    <div className="p-6 pt-5">
                        <div className="form-control mb-2 lg:mb-0">
                            <button className="btn btn-primary btn-block font-bold">Continue</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyEnrollClass;