import { BsFillSuitHeartFill } from "react-icons/bs";
import Rating from "react-rating";
import { FaRegStar, FaStar } from 'react-icons/fa';

const FeaturedCard = ({items}) => {
    const {img, category, title, location, review_number} = items;
    console.log(items)
    return(
        <div className='bg-white md:w-64 xl:w-62 w-full rounded-lg shadow-md'>
            <img className='rounded-t-lg h-44 w-full' src={img} alt="" />
            <div className='p-3'>
                    <div className='flex justify-between items-center'>
                        <div className='bg-gray-200 px-3 py-1 rounded-full'>
                            <h3>{category}</h3>
                        </div>
                        <div className='bg-gray-200 hover:bg-red-600 rounded-full p-2'>
                            <BsFillSuitHeartFill className=' text-[#30e3ca] hover:text-white'></BsFillSuitHeartFill>
                        </div>
                    </div>
                    <h2 className='text-base font-normal text-[#30e3ca] mt-5'>{title}</h2>
                    <p>{location}</p>
                    <div className='flex text-center gap-1 mt-2'>
                
                    <Rating
                    placeholderRating={review_number}
                    emptySymbol={<FaRegStar></FaRegStar>}
                    placeholderSymbol={<FaStar className='text-yellow-500'></FaStar>}
                    fullSymbol={<FaStar></FaStar>}
                    />
                        <span>({review_number} review)</span>
                    </div>
            </div>
        </div>
    );
}
export default FeaturedCard;