import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-orange-400 px-14 py-5  text-4xl rounded-xl font-medium text-white md:px-4 md:py-2 md:text-3xl'>
      {props.children}
    </button>
  )
}

export default Button
