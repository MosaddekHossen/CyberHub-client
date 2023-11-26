import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Partners from "../Partners/Partners";
import Teacher from "../Teacher/Teacher";
import Company from "../Company/Company";
import Users from "../Users/Users";
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
                <Company></Company>
                <Users></Users>
                <Partners></Partners>
                <Category></Category>
                <div className="mt-60">
                    <Teacher></Teacher>
                </div>
                <Stay></Stay>
                <Slider></Slider>
            </div>
        </div>
    );
};

export default Home;