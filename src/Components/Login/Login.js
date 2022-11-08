import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Authentication/Authentication'

function Login() {
    // const {prodiverLogin} = useContext(AuthContext)
    const [error, setError] = useState('')
    const {signIn} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation()

    const from = location.state?.from?.pathname || '/'

    const HandleLoginForm = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value
        const password = form.password.value
        
        signIn(email,password)
        .then(result =>{
            const user = result.user
            console.log(user);
            form.reset()
            navigate(from, {replace : true})
            setError('')

        }).catch(error =>{
            console.log(error)
            setError(error.message)
        })
        
    }

  return (
    <div>
        <section className="bg-gray-100 pt-20">
            <div className="flex flex-col items-center px-6 py-8 mx-auto md:h-screen lg:py-0 ">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-[30rem] xl:p-0 text-black">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8 ">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                            Sign in to your account
                        </h1>

                        <form onSubmit={HandleLoginForm} className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="name@company.com" required/>
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required/>
                            </div>
                            <p className='text-red-700 text-sm'>{error}</p>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="remember" className="text-gray-500 dark:text-gray-400">Remember me</label>
                                    </div>
                                </div>
                                <Link href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</Link>
                            </div>
                            <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign in</button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don’t have an account yet?
                            <Link to='/register' className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Login