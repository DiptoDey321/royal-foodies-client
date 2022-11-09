import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../Authentication/Authentication'


function Header() {
    
const {user,logOut} = useContext(AuthContext)
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
                    <Link to='/'><img className='w-[200px]' src="https://i.ibb.co/Nn12Kqt/r-foodies-logo.png" alt="" /></Link>
                </div>
                <div className="">
                    <ul className='text-white flex items-center gap-x-8 text-xl Lato '>
                        <li><Link to='services'><button>Service</button></Link></li>
                        <li>blog</li>
                        <li className="">
                            {
                                user?.uid || user?.photoURL ?
                                <ul className="flex items-center gap-x-8">
                                    <li>My reviews</li>
                                    <li>Add-service </li>
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