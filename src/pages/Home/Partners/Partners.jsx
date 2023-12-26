import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaSchoolCircleCheck } from "react-icons/fa6";
import { FaSchool } from "react-icons/fa";
import { IoSchool } from "react-icons/io5";

const Partners = () => {

    const subHeading =
        <>
            Teach offers students the best of education and entertainment opportunities available in the area.
            <br />
            We are glad to take care of every student and university entrant.
        </>

    return (<>
        <SectionTitle
            heading={"What We Offer"}
            subHeading={subHeading}
        ></SectionTitle>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 px-8 xl:px-0 space-y-5 md:space-y-0">
            <div className="text-center space-y-3">
                <div className="text-7xl flex justify-center">
                    <FaSchoolCircleCheck />
                </div>
                <h2 className="text-3xl font-bold">Online Education</h2>
                <p className="font-normal">Teachzy provides online education services with all learning materials and lectures available to you.</p>
            </div>
            <div className="text-center space-y-3">
                <div className="text-7xl flex justify-center">
                    <FaSchool />
                </div>
                <h2 className="text-3xl font-bold">Online Education</h2>
                <p className="font-normal">Teachzy provides online education services with all learning materials and lectures available to you.</p>
            </div>
            <div className="text-center space-y-3">
                <div className="text-7xl flex justify-center">
                    <IoSchool />
                </div>
                <h2 className="text-3xl font-bold">Online Education</h2>
                <p className="font-normal">Teachzy provides online education services with all learning materials and lectures available to you.</p>
            </div>
        </div>
    </>
    );
};

export default Partners;