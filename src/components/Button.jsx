import React from 'react'

const Button = ({ label, iconUrl }) => {
  return (
    <button className='flex justify-center items-center gap-2 px-7 py-4 bg-coral-red text-lg text-white rounded-full border-coral-red leading-none'>
      {label}
      <img src={iconUrl} className='w-5 h-5 rounded-full ml-2' />
    </button>
  )
}

export default Button