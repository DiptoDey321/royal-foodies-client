import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Authentication/Authentication';


function Header() {
    
const {user,logOut} = useContext(AuthContext);
const[showmenu, setShowmenu] = useState(false)
const handleLogout = () =>{
    logOut()
    .then(()=>{})
    .catch(error => console.log(error))
  }

  return (
    <div className='bg-[#270000]'>
        <header className='mx-[10%] py-3'>
            <nav className="bg-[#270000] flex justify-between items-center">
                <div className='logo'>
                    <Link to='/'><img className='w-[100px] sm:w-[200px]' src="https://i.ibb.co/Nn12Kqt/r-foodies-logo.png" alt="" /></Link>
                </div>

                <div className="">
                    <button onClick={()=>  setShowmenu(!showmenu)} className='sm:hidden'>
                        <svg className='text-white' width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25 11H11V12H25V11Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M29 18H7V19H29V18Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M25 25H11V26H25V25Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                    {/* className='text-white flex items-center gap-x-8 text-xl Lato ' */}
                    <ul className={`${showmenu ? 'mt-[78px] ':'-translate-y-full md:translate-y-0 mt-0'} flex flex-col sm:flex-row gap-x-4 md:gap-x-10 items-center absolute sm:static text-white sm:bg-transparent w-full left-0 top-0 sm:mt-0 text-[16px] md:text-[18px] bg-[#270000] `}>
                        <li><Link to='services'><button>Services</button></Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        <li className="flex flex-col sm:flex-row">
                            {
                                user?.uid || user?.photoURL ?
                                <ul className="flex flex-col sm:flex-row  items-center gap-x-3 md:gap-x-8">
                                    <Link to='/my-review'><li className='cursor-pointer'>My reviews</li></Link>
                                    <Link to='/add-service'><li className='cursor-pointer'>Add-service </li></Link>
                                    <li> <button onClick={handleLogout} className=''>logout</button></li>
                                </ul>
                            :
                                <div className="flex items-center gap-x-5">
                                     <button><Link to='/login'>Login</Link></button>
                                </div>
                            }
                        </li>
                       
                       
                       
                    </ul>
                </div>
            </nav>
        </header>
    </div>
  )
}

export default Header