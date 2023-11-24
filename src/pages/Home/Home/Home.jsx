import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Partners from "../Partners/Partners";

const Home = () => {
    return (
        <div>
            <div className="max-w-screen-xl mx-auto">
                <Banner></Banner>
                <Partners></Partners>
                <Category></Category>
            </div>
        </div>
    );
};

export default Home;