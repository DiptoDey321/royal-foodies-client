import React, { useEffect, useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';

function Services() {
    const [homeServices,setHomeServices] = useState([])
    useEffect(()=>{
        fetch('https://royal-foodies-server.vercel.app/servicesForHome')
        .then(res => res.json())
        .then(data => setHomeServices(data))
    },[])
  return (
    <div>
        <h3 className='text-center text-4xl Yeseva text-[#270000]'>Our Services</h3>
        <p className='text-xl text-center mt-4'>Refreshing traditional & delicious food </p>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center px-[15%] gap-x-[2%] gap-y-[2%]">
           {
                homeServices.map(services =>
                    <div key={services._id} className="border rounded-lg">
                        <div className=" p-[10px] flex flex-col items-center justify-center Roboto">
                            <div className="relative w-full">
                                <PhotoProvider>
                                    <PhotoView className='w-full' src={services.picture}>
                                        <img className='w-full' src={services.picture} alt="" />
                                    </PhotoView>
                                </PhotoProvider>
                                <span className='px-2 py-1 bg-orange-800 absolute bottom-0 right-0 text-white text-xs font-bold'>{services.price}$</span>
                                <span className='px-2 py-1 bg-orange-800 absolute bottom-0 left-0 text-white text-xs font-bold'>{services.rating}/5</span>
                            </div>
                            {/* <img className='w-full' src='https://i.ibb.co/zr8S1Q9/breakfst.png' alt="" srcSet="" /> */}
                            <h3 className='text-base tracking-widest mt-4 font-bold'>{services.serviceName}</h3>
                            <p className='mt-[10px] text-sm mb-[20px] text-black/60 tracking-[1px] text-left font-light px-[4%]'>{(services.desc).length > 100 ? (services.desc).slice(0,100) : services.desc } </p>
                            <Link to={`/service-details/${services._id}`}><button className='p-3  hover:bg-gray-200'>
                                <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M0.75 8.00041C0.75 7.71032 0.865234 7.43213 1.07035 7.22701C1.27547 7.02189 1.55367 6.90666 1.84375 6.90666H14.5159L9.81938 2.21228C9.614 2.0069 9.49862 1.72835 9.49862 1.43791C9.49862 1.14746 9.614 0.868907 9.81938 0.66353C10.0248 0.458153 10.3033 0.342773 10.5938 0.342773C10.8842 0.342773 11.1627 0.458153 11.3681 0.66353L17.9306 7.22603C18.0325 7.32763 18.1133 7.44833 18.1684 7.58121C18.2236 7.71409 18.252 7.85654 18.252 8.00041C18.252 8.14427 18.2236 8.28672 18.1684 8.4196C18.1133 8.55248 18.0325 8.67318 17.9306 8.77478L11.3681 15.3373C11.1627 15.5427 10.8842 15.658 10.5938 15.658C10.3033 15.658 10.0248 15.5427 9.81938 15.3373C9.614 15.1319 9.49862 14.8534 9.49862 14.5629C9.49862 14.2725 9.614 13.9939 9.81938 13.7885L14.5159 9.09416H1.84375C1.55367 9.09416 1.27547 8.97892 1.07035 8.7738C0.865234 8.56869 0.75 8.29049 0.75 8.00041Z" fill="#5B1054" fillOpacity="0.7"/>
                                </svg>
                            </button></Link>
                        </div>
                    </div>    
                )
           }
        </div> 

        <div className="flex justify-center mt-16 sm:mt-10">
            <Link to='/services'><button className='py-3 px-8 bg-orange-600 text-white rounded-lg'>View All Services</button></Link>
        </div>
    </div>
  )
}

export default Services