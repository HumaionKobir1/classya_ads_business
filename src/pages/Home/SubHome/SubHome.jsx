import './subHome.css'
import { FaSearchLocation } from "react-icons/fa";

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
            <form action="">
                <div className='bg-white bg-opacity-50 mt-20 w-10/12 mx-auto p-5 rounded-lg flex md:flex-row flex-col justify-between items-center gap-8'>
                    <div>
                        <input className='text-black bg-white p-3 rounded-md md:w-56 w-80 border-none' placeholder='What are you looking for?' type="text" />
                    </div>
                    <div>
                        <input className='text-black bg-white p-3 rounded-md md:w-56 w-80 border-none' placeholder='Location' type="text" />
                    </div> 
                    <div className="flex justify-between md:w-56 w-80 bg-white rounded-md items-center gap-4 border-2 py-2 px-4 font-semibold text-slate-700">
                    
                    <select className="bg-transparent border-none p-1 w-full">
                        <option value="destination">Destination</option>
                        <option value="audi">Audi</option>
                        <option value="bmw">BMW</option>
                        <option value="citroen">Citroen</option>
                    </select>
                    </div>
                    <button className='bg-[#30e3ca] md:w-32 w-80 px-7 py-3 rounded-md font-medium'>Search</button>
                </div>
            </form>
        </div>
        
        </div>
    );
}
export default SubHome;