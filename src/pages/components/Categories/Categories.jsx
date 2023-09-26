import { FaHome, FaBook, FaBed, FaLightbulb, FaCar, FaPizzaSlice  } from "react-icons/fa";

const Categories = () => {
    return (
        <div className="bg-white grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 md:gap-0 xl:gap-0 gap-5 justify-center items-center rounded-lg shadow-md p-4 m-2 md:w-3/4 w-11/12 mx-auto md:-mt-32 -mt-10 transition-transform transform">
        {/* First div */}
            <div className="text-center group w-full p-2 rounded-md   bg-white hover:bg-[#30e3ca] hover:translate-y-[-10px] transition-transform">
                <div className="text-[#30e3ca] group-hover:text-white">
                    <FaHome className="h-16 w-16 mx-auto"></FaHome>
                </div>
                <h3 className="text-base mt-2 mb-2">Real State</h3>
                <div className="bg-gray-200 w-1/3 mx-auto px-3 py-1 rounded-full group-hover:bg-[#44b9a9c9]">
                    <p className="text-gray-600 group-hover:text-white">2154</p>
                </div>
            </div>

            {/* Second div */}
            <div className="text-center group w-full bg-white  rounded-md p-2 hover:bg-[#30e3ca] hover:translate-y-[-10px] transition-transform">
                <div className="text-[#30e3ca] group-hover:text-white">
                    <FaBook className="h-16 w-16 mx-auto"></FaBook>
                </div>
                <h3 className="text-base mt-2 mb-2">Book & Magazine</h3>
                <div className="bg-gray-200 w-1/3 mx-auto px-3 py-1 rounded-full group-hover:bg-[#44b9a9c9]">
                    <p className="text-gray-600 group-hover:text-white">1574</p>
                </div>
            </div>

            {/* Third div */}
            <div className="text-center group group w-full bg-white  rounded-md p-2 hover:bg-[#30e3ca] hover:translate-y-[-10px] transition-transform">
                <div className="text-[#30e3ca] group-hover:text-white">
                    <FaBed className="h-16 w-16 mx-auto"></FaBed>
                </div>
                <h3 className="text-base mt-2 mb-2">Furnitures</h3>
                <div className="bg-gray-200 w-1/3 mx-auto px-3 py-1 rounded-full group-hover:bg-[#44b9a9c9]">
                    <p className="text-gray-600 group-hover:text-white">236</p>
                </div>
            </div>


            {/* Fourth div */}
            <div className="text-center group w-full p-2 rounded-md bg-white hover:bg-[#30e3ca] hover:translate-y-[-10px] transition-transform">
                <div className="text-[#30e3ca] group-hover:text-white">
                    <FaLightbulb className="h-16 w-16 mx-auto"></FaLightbulb>
                </div>
                <h3 className="text-base mt-2 mb-2">Electronics</h3>
                <div className="bg-gray-200 w-1/3 mx-auto px-3 py-1 rounded-full group-hover:bg-[#44b9a9c9]">
                    <p className="text-gray-600 group-hover:text-white">1213</p>
                </div>
            </div>

            {/* Fifth div */}
            <div className="text-center group w-full p-2 rounded-md bg-white hover:bg-[#30e3ca] hover:translate-y-[-10px] transition-transform">
                <div className="text-[#30e3ca] group-hover:text-white">
                    <FaCar className="h-16 w-16 mx-auto"></FaCar>
                </div>
                <h3 className="text-base mt-2 mb-2">Car & Vehicles</h3>
                <div className="bg-gray-200 w-1/3 mx-auto px-3 py-1 rounded-full group-hover:bg-[#44b9a9c9]">
                    <p className="text-gray-600 group-hover:text-white">523</p>
                </div>
            </div>

            {/* Sixth div */}
            <div className="text-center group w-full p-2 rounded-md bg-white hover:bg-[#30e3ca] hover:translate-y-[-10px] transition-transform">
                <div className="text-[#30e3ca] group-hover:text-white">
                    <FaPizzaSlice className="h-16 w-16 mx-auto"></FaPizzaSlice>
                </div>
                <h3 className="text-base mt-2 mb-2">Other</h3>
                <div className="bg-gray-200 w-1/3 mx-auto px-3 py-1 rounded-full group-hover:bg-[#44b9a9c9]">
                    <p className="text-gray-600 group-hover:text-white">350</p>
                </div>
            </div>
        </div>
    );
}
export default Categories;