import React from 'react'

function Footer() {
  return (
    <div className='border-t '>
        <div className='bg-slate-100 py-10'>
            <h3 className='text-black text-base text-center'>All copy-write deserve by ©<span className='text-orange-500'>Royal Foodies</span></h3>
            <div className="text-sm text-center flex gap-x-10 mx-[20%] justify-center mt-5">
                <p>We use cookies to personalize content, analyze traffic, and for advertising</p>
                <p>Cookies policy</p>
            </div>
        </div>
    </div>
  )
}

export default Footer