import SectionTitle from "../../../components/SectionTitle/SectionTitle";

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
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 px-8 xl:px-0 space-y-5 md:space-y-0">
            <div className="text-center space-y-3">
                <div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?w=740&t=st=1700838882~exp=1700839482~hmac=afd862722c78d9470de37d8da95848143f8c99269c9eade2db407c0f308e107d" />
                    </div>
                </div>
                <h2 className="text-3xl font-bold text-[#141414]">Oliver</h2>
                <h3 className="text-2xl font-semibold text-[#141414]">Global Learning Institute</h3>
                <p className="font-normal">Our alliance with the Global Learning Institute focuses on expanding access to high-quality education globally. Together, we develop online courses, workshops, and collaborative projects that empower learners with diverse educational opportunities, bridging gaps and promoting lifelong learning.</p>
                <button className="bg-slate-300 btn">View Profile</button>
            </div>
            <div className="text-center space-y-3">
                <div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg?w=996" />
                    </div>
                </div>
                <h2 className="text-3xl font-bold text-[#141414]">Benjamin</h2>
                <h3 className="text-2xl font-semibold text-[#141414]">EdTech Innovations</h3>
                <p className="font-normal">Partnering with EdTech Innovations allows us to stay at the forefront of educational technology. Through joint ventures, we integrate cutting-edge tools and platforms into our learning programs, ensuring that students benefit from the latest advancements in digital education and interactive learning.</p>
                <button className="bg-slate-300 btn">View Profile</button>
            </div>
            <div className="text-center space-y-3">
                <div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="https://img.freepik.com/premium-photo/successful-positive-bearded-man-looking-camera-with-toothy-smile-indoor-studio-shot-isolated-blue-background_533057-1741.jpg" />
                    </div>
                </div>
                <h2 className="text-3xl font-bold text-[#141414]">Ethan</h2>
                <h3 className="text-2xl font-semibold text-[#141414]">STEAM Education Alliance</h3>
                <p className="font-normal">The partnership with the STEAM Education Alliance emphasizes the importance of Science, Technology, Engineering, Arts, and Mathematics (STEAM) education. Together, we develop engaging curriculum content, organize STEM events, and encourage hands-on learning experiences to inspire the next generation of innovators.</p>
                <button className="bg-slate-300 btn">View Profile</button>
            </div>
            <div className="text-center space-y-3">
                <div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="https://img.freepik.com/premium-photo/close-up-portrait-satisfied_1258-14014.jpg" />
                    </div>
                </div>
                <h2 className="text-3xl font-bold text-[#141414]">Jackson</h2>
                <h3 className="text-2xl font-semibold text-[#141414]">Global Learning Institute</h3>
                <p className="font-normal">
                    These education partnerships reflect our dedication to providing a holistic and inclusive learning environment. By collaborating with these organizations, we strive to empower individuals, promote educational equity, and contribute to the advancement of knowledge on a global scale.</p>
                <button className="bg-slate-300 btn">View Profile</button>
            </div>
        </div>
    </>
    );
};

export default Partners;