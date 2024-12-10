import React from 'react'
import Container from './container/container'

function Footer() {
    return (
        <div className='footer pt-[70px]'>
            <Container>
                <div className="mainWrapper flex flex-wrap justify-between mb-12">
                    <div className="one w-[32%] space-y-4">
                        <h1 className='logo text-5xl m-0 font-semibold'>Tax<span className='text-blue-600'>Pal</span></h1>
                        <p>The best part about TaxPal is every time I pay my employ my bank balance doesn’t go down like it used to. Looking forward to spending this extra cash when I figure out why my card is being declined.</p>
                        <ul className='flex flex-col gap-4'>
                            <h1 className='text-blue-500 text-lg font-medium mt-3'>Contact Information</h1>
                            <li>🏚 23rd street boston, NYC USA</li>
                            <li>📧 TaxpalOfficial@gmail.com</li>
                            <li>📞 000 - 2457 - 55859</li>
                        </ul>
                    </div>
                    <div className="two w-[32%] flex flex-col items-center text-center">
                        <h1 className='text-blue-500 text-xl font-medium mb-7'>Social Media Plateforms</h1>
                        <ul className='flex flex-col gap-3 text-lg font-medium text-gray-900'>
                            <li className='hover:text-blue-500 duration-300'><a href="#">Facebook</a></li>
                            <li className='hover:text-blue-500 duration-300'><a href="#">Instagram</a></li>
                            <li className='hover:text-blue-500 duration-300'><a href="#">Twitter</a></li>
                            <li className='hover:text-blue-500 duration-300'><a href="#">Linkedin</a></li>
                            <li className='hover:text-blue-500 duration-300'><a href="#">Skype</a></li>
                        </ul>
                    </div>
                    <div className="three w-[32%]">
                        <h1 className='text-blue-500 text-xl font-medium mb-7' >Send Feedback!</h1>
                        <p>Send us an email and we will send you a copy of our latest password spreadsheet so you can find your information.</p>
                        <form action="#" className='w-full flex mt-5'>
                            <input type="email" placeholder='Your Email Address' className='w-full bg-gray-100 px-2 py-3 focus:outline-none' />
                            <button className='bg-blue-500 text-white px-6 py-3 hover:bg-blue-700 duration-300'>Send</button>
                        </form>
                    </div>
                </div>
                <div className="last px-2 py-10 border-t-2 border-gray-100 flex items-center justify-between">
                    <h1 className='text-gray-500'>Copyright © 2024 TaxPal. All rights reserved.</h1>
                    <h1>Made by <span className='text-blue-600'>Tailwind Css</span></h1>
                </div>
            </Container>
        </div>
    )
}

export default Footer