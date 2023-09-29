import { useEffect, useState } from "react";
import PorductCard from "../../../shared/ProductCard/ProductCard";

const PopularProducts = () => {
  // const [productItems, setProductItems] = useState([]);
  // console.log(productItems)

  //   useEffect(() => {
  //       fetch('feturesAds.json')
  //       .then(res => res.json())
  //       .then(data => {
  //           setProductItems(data.slice(0, 5));
  //       })
  //     }, [])

    return (
        <div className="md:mt-16 mt-10 md:w-3/4 w-full p-2 mx-auto">
            <div className="text-center">
                <h1 className="text-3xl font-semibold text-[#30e3ca]">Popular Products</h1>
                <p className="text-gray-500 my-2">Lorem Ipsum Dolor Sit Amet</p>
                <div className="w-28 h-1 bg-[#30e3ca] mx-auto"></div>
            </div>
            <div className="mt-10">
              {/* {
                productItems.map(products => <PorductCard
                  key={products.id}
                  products={products}
                ></PorductCard>)
              } */}
              <PorductCard></PorductCard>
            </div>

        </div>
    );
}
export default PopularProducts;