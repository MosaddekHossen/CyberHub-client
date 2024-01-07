import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Partners from "../Partners/Partners";
import Teacher from "../Teacher/Teacher";
import Stay from "../Stay/Stay";
import Slider from "../Slider/Slider";
import { Helmet } from "react-helmet-async";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>CyberHub | Home</title>
            </Helmet>
            <div className="max-w-screen-xl mx-auto">
                <Banner></Banner>
                <Teacher></Teacher>
                <Partners></Partners>
                <div className="hidden md:block">
                    <Category></Category>
                </div>
                <div className="md:mt-60 mt-0">
                </div>
                <Stay></Stay>
                <Slider></Slider>
            </div>
        </div>
    );
};

export default Home;