import React from 'react'

function HeroSection() {
    const bimg = {
        background: `url(https://i.ibb.co/Qf4jr88/banner.jpg) no-repeat center`,
    }
  return (
    <div>
        <div style={{...bimg}} className='bg-img !bg-cover px-[10%]'>
            <div className="flex justify-end py-[200px]">
                <h2 className='text-[30px] sm:text-[50px] w-full sm:w-full md:w-full  lg:w-[40%] text-[#270000] font-[Yeseva One] Yeseva text-right capitalize'>the right ingredients for the right food</h2>
            </div>
        </div>
    </div>
  )
}

export default HeroSection