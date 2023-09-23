import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";

const Main = () => {
    return(
        <div className=''>
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-484px)]'>
                <Outlet></Outlet>
            </div>
        </div>
    );
}
export default Main;