import React from 'react'

function Header() {
  return (
    <div className='bg-[#270000]'>
        <header className='mx-[10%] py-3'>
            <nav className="bg-[#270000] flex justify-between items-center">
                <div className='logo'>
                    <img className='w-[200px]' src="https://i.ibb.co/Nn12Kqt/r-foodies-logo.png" alt="" />
                </div>
                <div className="">
                    <ul className='text-white flex items-center gap-x-5 text-xl Lato '>
                        <li>Add-Service</li>
                        <li>blog</li>
                        <li>Login</li>
                    </ul>
                </div>
            </nav>
        </header>
    </div>
  )
}

export default Header