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
                    <ul className='text-white flex items-center gap-x-5 text-xl Lato '>
                        <li>Add-Service</li>
                        <li>blog</li>
                        <li className="">
                            {
                                user?.uid || user?.photoURL ?
                                <div className="flex items-center gap-x-3">
                                <img className='w-14 h-14 rounded-full' src={user?.photoURL} alt="" srcset="" title={user?.displayName} />
                                <button onClick={handleLogout} className=''>Sign-out</button>
                                </div>
                            :
                                <div className="flex items-center gap-x-5">
                                     <li><Link to='/login'>Login</Link></li>
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