import React from 'react'
import { products } from "../constants";
import PapularProductsCard from '../components/PapularProductsCard';
const PopularProducts = () => {
  return (
    <div id='products' className='max-container max-sm:mt-12'>
      <div>
        <h2 className='text-4xl font-bold font-palanquin'> Our<span className='text-coral-red'>Popular</span>Products</h2>
        <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value</p>
      </div>
      <div className='grid lg:grid-cols-4 mt-16 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14'>
        {
          products.map((product) => (
            <PapularProductsCard key={product.name} {...product} />
          ))
        }
      </div>

    </div>
  )
}

export default PopularProducts 