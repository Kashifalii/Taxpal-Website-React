import React from 'react'

function Navbar() {
  return (
      <div className='navbar px-10 py-5 flex items-center justify-between absolute top-0 w-[100%]'>
          <div className='flex items-center gap-[30px]'>
                <h1 className='logo text-[20px] m-0 font-semibold'>Tax<span className='text-blue-600'>Pal</span></h1>
          <ul className='links flex items-center justify-between gap-[20px]'>
              <li className='text-gray-500 hover:text-blue-600 transition duration-300'>
                  <a href='#sec1'>Features</a>
              </li>
              <li className='text-gray-500 hover:text-blue-600 transition duration-300'>
                  <a href='#sec2'>Pricing</a>
              </li>
              <li className='text-gray-500 hover:text-blue-600 transition duration-300'>
                  <a href='#sec3'>FAQs</a>
              </li>
          </ul>
          </div>
          <div className='btnWrap flex items-center gap-[20px] '>
              <button className='hover:text-blue-600 transition duration-300'>Sign in</button>
              <button className='bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition duration-300'>Get started today</button>
          </div>
    </div>
  )
}

export default Navbar