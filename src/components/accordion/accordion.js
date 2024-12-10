import React, { useState } from 'react';

function Accordion(props) {

    const [status, setStatus] = useState(false);

    return (
        <div className='w-full h-fit'>
            <div className='flex items-center justify-between p-3 bg-white rounded-sm'>
                <h2 className='font-medium'>{props.title}</h2>
                <button onClick={() => setStatus(!status)} className='text-xs'>🔹</button>
            </div>
            {status ? <div className='bg-blue-600 p-3 text-white rounded-bl-md rounded-br-md'><p>{props.para}</p></div> : null}
        </div>
    )
}

export default Accordion