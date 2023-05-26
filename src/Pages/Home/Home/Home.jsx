import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";
import About from "./About/About";
import Banner from "./Banner/Banner";
import CallUs from "./Call Us/CallUs";
import ChefRecommends from "./ChefRecommends/ChefRecommends";
import Featured from "./Featured/Featured";
import Testimonials from "./Testimonials/Testimonials";


const Home = () => {
    return (
        <div className="mx-1">
            <Banner></Banner>
            <Category></Category>
            <About></About>
            <PopularMenu></PopularMenu>
            <CallUs></CallUs>
            <ChefRecommends></ChefRecommends>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;