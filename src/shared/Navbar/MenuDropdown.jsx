import { AiOutlineMenu } from 'react-icons/ai'
import { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import Avatar from './Avatar'

const MenuDropdown = () => {
    const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = useCallback(() => {
    setIsOpen(value => !value)
  }, [])
  return (
    <div className='relative text-black'>
      <div className='flex flex-row items-center gap-3 '>
        
        <div
          onClick={toggleOpen}
          className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition '
        >
          <AiOutlineMenu className='text-white'/>
          <div className='hidden md:block'>
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className='absolute rounded-xl shadow-md w-[40vw] md:w-[200px] bg-white overflow-hidden right-10 top-12 text-sm'>
          <div className='flex flex-col cursor-pointer'>
            
           
          {/* {user ? (
              <>
              <Link
                  to={isAdmin ? '/dashboard/manage-class' : isInstructor ? '/dashboard/add-class' : '/dashboard/my-class'}
                  className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                >
                  Dashboard
              </Link>

              <div
                onClick={logOut}
                className='px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer'
              >
                Logout
              </div>
              
              </>
              
            ) : (
              <>
                <Link
                  to='/login'
                  className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                >
                  Login
                </Link>
                <Link
                  to='/signUp'
                  className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                >
                  Sign Up
                </Link>
              </>
            )} */}
            <Link
                  to='/login'
                  className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                >
                  Login
                </Link>
                <Link
                  to='/signUp'
                  className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                >
                  Sign Up
            </Link>

            <Link
              to='/blog'
              className='md:hidden block px-4 py-3 hover:bg-neutral-100 transition font-semibold'
            >
              Blog
            </Link>

            <Link
              to='/contact'
              className='md:hidden block px-4 py-3 hover:bg-neutral-100 transition font-semibold'
            >
              Contact
            </Link>
            <button className="bg-[#30e3ca] md:hidden block text-white hover:bg-[#43a699] px-4 py-2 rounded-md">
                + Post an Ad
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default MenuDropdown;