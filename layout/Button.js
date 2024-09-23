import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-orange-400 pr-14 pl-14 pt-5 pb-5 text-4xl rounded-xl font-medium text-white'>
      {props.children}
    </button>
  )
}

export default Button
