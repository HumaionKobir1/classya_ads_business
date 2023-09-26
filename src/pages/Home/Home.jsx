import Categories from "../components/Categories/Categories";
import FeaturedAds from "../components/FeaturedAds/FeaturedAds";
import SubHome from "./SubHome/SubHome";

const Home = () => {
    return (
        <div>
            <SubHome></SubHome>
            <div className="bg-gray-50">
                <Categories></Categories>
                <FeaturedAds></FeaturedAds>
            </div>
        </div>
    );
}

export default Home;