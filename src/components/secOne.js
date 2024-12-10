import React from 'react'
import Container from './container/container'

function SecOne() {
  return (
    <div className='sec1 py-[70px] bg-blue-500' id='sec1'>
      <Container>
        <div className="wrapper flex flex-wrap">
          <div className="titleWrap w-[40%] pe-5">
            <h1 className='text-white text-6xl font-bold w-[20%] font-Lexend'>Our Features</h1>
            <p className='text-gray-200 font-thin mt-1 leading-tight'>Lorem ipsum dolor sit amet consectetur adipisicing elit Facere praesentium ea sapiente veritatis eligendi repellendus eaque. </p>
            <button className='bg-white text-blue-500 px-4 py-2 mt-5 rounded-sm hover:bg-gray-50'>Learn More</button>
          </div>
          <div className="features w-[60%]">
            <ol className='flex flex-col gap-5 text-white font-Lexend'>
              <h1 className='text-2xl font-bold font-Lexend'> WE PERFORM SPECIFIC TASKS</h1>
              <li>1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis atque nemo autem laborum error hic dolores ab dolore velit quam?</li>
              <li>2. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi laudantium impedit eos atque recusandae fuga alias consectetur possimus corporis voluptate.</li>
              <li>3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quia iusto aliquam esse cupiditate? Assumenda?</li>
              <li>4. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, modi minima. Sed quam iusto dolorum, consequuntur maxime sequi est ea incidunt assumenda. Nam, veniam reiciendis.</li>
              <li>5. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, sint eos? Porro nisi voluptates tempore fugiat in.</li>
            </ol>
          </div>
        </div>
      </Container>
    </div>
  )
};

export default SecOne