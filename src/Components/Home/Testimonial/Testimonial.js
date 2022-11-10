import React from 'react'

function Testimonial() {
  return (
    <div className='my-20 mx-[10%] flex flex-col md:flex-row justify-between items-center'>
        <div className="w-full sm:w-full md:w-[38%]">
            <img className='rounded-lg' src="https://i.ibb.co/DMPh3Z4/customer.jpg" alt="" />
        </div>
        <div className="w-full  md:w-[60%] pl-5 Roboto mt-10 md:mt-0">
            <h2 className='text-xl font-medium customer  text-slate-500'>Our Customer</h2>
            <h3 className='text-[40px] md:text-[70px] leading-[50px] sm:leading-[80px] mt-10 text-orange-600'>Hearing is <br /> believing</h3>
            <p className='mt-5 text-xl'>Hear from the chefs and entrepreneurs growing <br /> their restaurant business with CloudKitchens ghost kitchens.</p>
            <p className='mt-10'>Royal Foodies allow restaurateurs to increase profitability by maintaining the essential elements of a restaurant while cutting costs on labor, overhead, and wasted food while reaching a higher volume of customers ordering online. Plus, you can run multiple virtual brands out of a single ghost kitchen to increase revenue without the extra overhead.</p>
        </div>
    </div>
  )
}

export default Testimonial