import { Link } from "react-router-dom";

const NavbarItems = () => {
    return (
        <div className='border-[1px] md:p-2 rounded-xl shadow-sm hover:shadow-md transition'>
        <div className='flex flex-row items-center justify-between'>
            
            <Link
              to='/'
              className=' px-3 py-2 rounded-lg hover:bg-neutral-100 hover:text-black transition font-semibold'
            >
              Home
            </Link>
             
             <Link
              to='/ads'
              className=' px-3 py-2 rounded-lg hover:bg-neutral-100  hover:text-black transition font-semibold'
            >
              Ads
            </Link>
            
            <Link
              to='/about'
              className=' px-3 py-2 rounded-lg hover:bg-neutral-100 hover:text-black transition font-semibold'
            >
              About
            </Link>

            <Link
              to='/blog'
              className='md:block hidden px-3 py-2 rounded-lg hover:bg-neutral-100 hover:text-black transition font-semibold'
            >
              Blog
            </Link>

            <Link
              to='/contact'
              className=' md:block hidden px-3 py-2 rounded-lg hover:bg-neutral-100 hover:text-black transition font-semibold'
            >
              Contact
            </Link>
        </div>
        </div>
    );
};

export default NavbarItems;