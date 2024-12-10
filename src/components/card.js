import React from 'react'

function Card({price, pkg, para, p1, p2, p3, p4, p5}) {
  return (
      <div className='card w-[32%] bg-blue-500 p-8 rounded-2xl space-y-4 text-center'>
          <h1 className='text-white text-5xl'>${ price}</h1>
          <h1 className='text-white text-lg font-medium'>{pkg}</h1>
          <p className='text-gray-100 text-md'>{para}</p>
          <button className='bg-white w-full font-semibold py-2 rounded-full hover:bg-gray-50'>Get Started</button>
          <ul className='flex flex-col gap-3 pt-5 text-white text-center font-medium'>
              <li>{p1}</li>
              <li>{p2}</li>
              <li>{p3}</li>
              <li>{p4}</li>
              <li>{p5}</li>
          </ul>
    </div>
  )
}

export default Card