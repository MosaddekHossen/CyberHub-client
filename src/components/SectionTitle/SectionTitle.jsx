
const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="text-center py-10 space-y-3 md:mt-7 mt-4 px-8 lg:px-0">         
            <h2 className="md:text-5xl text-3xl font-bold">{heading}</h2>
            <h3 className="text-[18px] font-normal">{subHeading}</h3>
        </div>
    );
};

export default SectionTitle;