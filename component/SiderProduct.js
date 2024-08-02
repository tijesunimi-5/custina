import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const SiderProduct = () => {
  return (
    <div className="absolute top-0 left-0 w-[600px] h-[100vh] backdrop-blur-[2px]  z-10">
      <div className="flex flex-col bg-white w-[520px] h-[100vh] z-30 pt-16">
        <span className='pl-6 mt-2 text-orange-500 border-black border-b-2 pr-[336px] pb-6'>
          <FontAwesomeIcon icon={faArrowLeft} /> Main menu
        </span>

        <span className='bg-gray-100 font-medium pl-8 pt-3 pb-2'>
          Products
        </span>
      </div>
    </div>
  );
}

export default SiderProduct
