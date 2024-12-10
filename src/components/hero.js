import React from 'react'
import Navbar from "./navbar"

function Hero() {
  return (
      <div className='hero h-[100vh] w-[100%] flex items-center justify-center'>
          <Navbar />
      <div className="container ">
        <div className="textWrap text-center flex-col items-center justify-center">
           <h1 className='text-7xl w-[60%] text-center mx-auto mb-3 leading-[1.1] font-Lexend '>Accounting <span className='text-blue-600'> made simple</span> for small businesses.</h1>
          <h1 className='mb-10 font-light text-[18px] w-[45%] mx-auto'>Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited. Get 6 months free Watch video</h1>
          <div className="btnWrap flex items-center justify-center gap-6">
            <button className='text-sm font-medium border border-2 border-slate-900 text-[17px] text-white bg-slate-900 px-4 py-2 rounded-full hover:bg-slate-800 hover:border-slate-800 transition duration-300'>Get 6 months free</button>
            <button className='text-sm font-light border border-1 border-slate-200 text-[17px] text-slate-900 px-4 py-2 rounded-full  hover:border-slate-300 transition duration-400'><i class="fa-solid fa-play text-blue-600 pe-2"></i> Watch Video</button>
          </div>
       </div>
      </div>
    </div>
  )
}

export default Hero