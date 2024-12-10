import React from 'react'
import Container from './container/container'
import Accordion from './accordion/accordion'

function SecThree() {
    return (
        <div className='secThree py-[70px] bg-blue-500' id='sec3'>
            <Container>
                <div className="mainWrapper flex flex-wrap">
                    <div className="titleWrap w-[40%] pe-5">
                        <h1 className='text-white text-6xl font-bold font-Lexend'>Frequently Asked Questions</h1>
                        <p className='text-gray-200 font-thin mt-1 leading-tight'>Lorem ipsum dolor sit amet consectetur adipisicing elit Facere praesentium ea sapiente veritatis eligendi repellendus eaque. </p>
                        <button className='bg-white text-blue-500 px-4 py-2 mt-5 rounded-sm hover:bg-gray-50'>Ask Anything?</button>
                    </div>
                    <div className="questionsWra p w-[60%] ps-6 flex flex-col gap-6">
                        <Accordion title="Does TaxPal handle VAT?" para="Well no, but if you move your company offshore you can probably ignore it." />
                        <Accordion title="What was that testimonial about tax fraud all about?" para="TaxPal is just a software application, ultimately your books are your responsibility." />
                        <Accordion title="How do you generate reports?" para="You just tell us what data you need a report for, and we get our kids to create beautiful charts for you using only the finest crayons." />
                        <Accordion title="Can I pay for my subscription via purchase order?" para="Absolutely, we are happy to take your money in all forms." />
                        <Accordion title="TaxPal sounds horrible but why do I still feel compelled to purchase?" para="This is the power of excellent visual design. You just can’t resist it, no matter how poorly it actually functions." />
                        <Accordion title="How do I apply for a job at TaxPal?" para="We only hire our customers, so subscribe for a minimum of 6 months and then let’s talk." />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default SecThree