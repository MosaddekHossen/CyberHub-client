
const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="text-center py-10 space-y-3 md:mt-7 mt-4 px-8 lg:px-0">         
            <h2 className="md:text-5xl text-3xl text-[#262525] font-bold">{heading}</h2>
            <h3 className="md:text-2xl text-[16px] font-bold text-[#141414]">{subHeading}</h3>
        </div>
    );
};

export default SectionTitle;