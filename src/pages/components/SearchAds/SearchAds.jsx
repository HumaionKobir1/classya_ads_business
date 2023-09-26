
const SearchAds = () => {
    return(
        <form action="">
            <div class='bg-white bg-opacity-50 md:mt-20 md:w-3/4 w-11/12 mx-auto p-5 rounded-lg flex md:flex-row flex-col justify-between items-center gap-8'>
                <div class="flex-grow w-full">
                    <input class='text-black bg-white p-3 rounded-md xl:w-72 w-full border-none' placeholder='What are you looking for?' type="text" />
                </div>
                <div class="flex-grow w-full">
                    <input class='text-black bg-white p-3 rounded-md xl:w-60 w-full border-none' placeholder='Location' type="text" />
                </div>
                <div class="flex-grow md:w-60 w-full bg-white rounded-md items-center gap-4 border-2 py-2 px-4 font-semibold text-slate-700">
                    <select class="bg-transparent border-none p-1 xl:w-52 w-full">
                        <option value="all categories">All Categories</option>
                        <option value="real state">Real State</option>
                        <option value="book & megazines">Book & Magazines</option>
                        <option value="furniture">Furniture</option>
                        <option value="electronics">Electronics</option>
                        <option value="car & vehicles">Car & Vehicles</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <button class='bg-[#30e3ca] md:w-32 w-full px-7 py-3 rounded-md font-medium'>Search</button>
            </div>
        </form>

    );
}
export default SearchAds;