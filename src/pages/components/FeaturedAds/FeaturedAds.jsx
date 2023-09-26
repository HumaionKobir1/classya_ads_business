import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import FeaturedCard from '../../../shared/FeaturedCard/FeaturedCard';
import { useEffect, useState } from 'react';

const FeaturedAds = () => {
    const [carouselData, setCarouselData] = useState([]);
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 1024 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 1024, min: 800 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 800, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      useEffect(() => {
        fetch('feturesAds.json')
        .then(res => res.json())
        .then(data => {
            setCarouselData(data);
        })
      }, [])

    return(
        <div className='w-3/4 mx-auto mt-16'>
            <h1 className='text-xl'>Featured Ads</h1>

            <div className='mt-7 px-2'>
                <Carousel responsive={responsive}>
                    {
                        carouselData.map(items => <FeaturedCard
                            key={items.id}
                            items={items}
                        ></FeaturedCard>)
                    }
                </Carousel>
            </div>
        </div>
        
    );
}
export default FeaturedAds;