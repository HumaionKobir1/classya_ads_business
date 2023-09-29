import Categories from "../components/Categories/Categories";
import FeaturedAds from "../components/FeaturedAds/FeaturedAds";
import PopularProducts from "../components/PopularProducts/PopularProducts";
import SubHome from "./SubHome/SubHome";

const Home = () => {
    return (
        <div>
            <SubHome></SubHome>
            <div className="bg-gray-100 pb-3">
                <Categories></Categories>
                <FeaturedAds></FeaturedAds>
            </div>
            <PopularProducts></PopularProducts>
        </div>
    );
}

export default Home;