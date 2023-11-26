import { Helmet } from "react-helmet-async";
import AddTeacher from "../AddTeacher/AddTeacher";

const Teaching = () => {
    return (
        <div>
            <Helmet>
                <title>CyberHub | Teaching</title>
            </Helmet>
            <AddTeacher></AddTeacher>
        </div>
    );
};

export default Teaching;