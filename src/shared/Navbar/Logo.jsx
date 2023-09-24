import { Link } from "react-router-dom";
const Logo = () => {
    return (
        <Link to='/'>
            <h1 className="md:text-3xl text-xl font-semibold">C<span className="text-geen-400">ADS</span></h1>
        </Link>
    );
};

export default Logo;