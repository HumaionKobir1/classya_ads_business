import SearchAds from '../../components/SearchAds/SearchAds';
import './SubHome.css'

const SubHome = () => {
    return (
        <div className="parallax">
        <div className="parallax-content">
            <h1 className="md:text-5xl text-2xl font-semibold text-white">
                Largest Classifieds In The World
            </h1>
            <p className="md:text-3xl text-xl font-semibold text-gray-300 my-4">
                You can buy, sell anything you want.
            </p>
            <SearchAds></SearchAds>
        </div>
        
        </div>
    );
}
export default SubHome;