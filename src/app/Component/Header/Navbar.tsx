import React from 'react'

function Navbar() {
  return (
    <div className='flex flex-wrap justify-around'>
      <h1 className='font-semibold text-lg'>Todo App</h1>
      <ul className='flex gap-[40px] text-m'>
        <li className='cursor-pointer hover:text-orange-400'>Home</li>
        <li className='cursor-pointer hover:text-orange-400'>Product</li>
        <li className='cursor-pointer hover:text-orange-400'>Account</li>
        <li className='cursor-pointer hover:text-orange-400'>Contact</li>
      </ul>     
    </div>
  )
}

export default Navbar
