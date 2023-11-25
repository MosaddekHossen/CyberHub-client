import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Partners from "../Partners/Partners";
import Teaching from "../Teaching/Teaching";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>CyberHub | Home</title>
            </Helmet>
            <div className="max-w-screen-xl mx-auto">
                <Banner></Banner>
                <Partners></Partners>
                <Category></Category>
                <div className="mt-60">
                    <Teaching></Teaching>
                </div>
            </div>
        </div>
    );
};

export default Home;