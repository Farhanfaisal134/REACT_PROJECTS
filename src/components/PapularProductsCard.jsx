import React from 'react'
import { star } from "../assets/icons";

const PapularProductsCard = ({ imgURL, name, price }) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full'>
      <img src={imgURL} alt={name} className='w-[282px] h-[282px]' />
      <div className='mt-8 flex justify-start gap-2.5 '>
        <img src={star} className='w-[24] h-[24]' />
        <p className='font-montserrat text-xl leading-normal text-slate-gray'>(4.5)</p>
      </div>
      <h3 className='mt-2 font-semibold  font-palanquin text-2xl leading-normal'>{name}</h3>
      <p className='text-2xl leading-normal font-semibold text-coral-red font-montserrat mt-2'>{price}</p>
    </div>
  )
}

export default PapularProductsCard