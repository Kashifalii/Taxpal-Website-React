import React from 'react'
import Container from './container/container'
import Card from './card'

function SecTwo() {
    return (
        <div className='secTwo py-[70px]' id='sec2'>
            <Container>
                <div className="title text-center mb-10">
                    <h1 className='text-blue-600 text-4xl font-Lexend font-semibold'>Simple pricing, for everyone.</h1>
                    <p className='text-lg mt-1 text-gray-600'>It doesn’t matter what size your business is, our software won’t work well for you.</p>
                </div>
                <div className="cardsWrraper flex items-center justify-between">
                    <Card price="9" pkg="Starter" para="Self-employed and just getting started." p1="Send 10 quotes and invoices" p2="Connect up to 2 bank accounts" p3="Track up to 15 expenses per month" p4="Manual payroll support" p5="Export up to 3 reports" />
                    <Card price="15" pkg="Small business" para="Perfect for small / medium sized businesses." p1="Send 25 quotes and invoices" p2="Connect up to 5 bank accounts" p3="Track up to 50 expenses per month" p4="Automated payroll support" p5="Export up to 12 reports" />
                    <Card price="39" pkg="Enterprise" para="For even the biggest enterprise companies." p1="Send unlimited quotes and invoices" p2="Connect up to 15 bank accounts" p3="Track up to 200 expenses per month" p4="Automated payroll support" p5="Export up to 25 reports, including TPS" />
                </div>
            </Container>
        </div>
    )
}

export default SecTwo