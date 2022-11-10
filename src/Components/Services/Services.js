import React, { useEffect, useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';
import useTitle from '../../Hooks/useHooks';

function Services() {
    useTitle('Services')
    const [loding, setLoading] = useState(true)
    const [services, setServices] = useState([])
    // const services = useLoaderData()
    useEffect(()=>{
        fetch('https://royal-foodies-server.vercel.app/allServices')
        .then(res => res.json())
        .then(data => {
            setServices(data)
            setLoading(false)
        })
    },[])

  return (
    <div className=''>
        <h2 className='text-[50px] Yeseva text-[#270000] text-center my-10'>our all services</h2>

        {
          loding && <div className="flex justify-center py-20">
                <div role="status">
                    <svg className="inline mr-2 w-32 h-32 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                    </svg>
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        }

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center px-[15%] gap-x-[2%] gap-y-[2%] pb-48">
           {
                services.map(services =>
                    <div key={services._id} className="border rounded-lg">
                        <div className=" p-[10px] flex flex-col gap-x-5 items-center justify-center Roboto">
                            <div className="w-full">
                                <PhotoProvider>
                                    <PhotoView className='w-full' src={services.picture}>
                                        <img className='w-full' src={services.picture} alt="" />
                                    </PhotoView>
                                </PhotoProvider>
                                {/* <img className='w-full' src={services.picture} alt="" /> */}
                            </div>
                            {/* <img className='w-full' src='https://i.ibb.co/zr8S1Q9/breakfst.png' alt="" srcSet="" /> */}
                           <div className="px-[2%]">
                                <div className="flex items-center justify-between gap-y-3 mt-5">
                                    <div className='py-2 text-orange-800 text-base font-bold'>{services.price}$</div>
                                    <span className='px-2 py-1 text-orange-800 text-xs font-bold'>⭐{services.rating}/5</span>
                                </div>
                                <h3 className='text-base tracking-widest mt-3 font-bold whitespace-nowrap'>{services.serviceName}</h3>
                                <p className='mt-[10px] text-sm mb-[20px] text-black/60 tracking-[1px] text-left font-light '>{(services.desc).length > 100 ? (services.desc).slice(0,100) : services.desc } </p>
                                
                                <Link to={`/service-details/${services._id}`}><button className='p-3 w-full text-white mt-5 bg-orange-700 capitalize rounded-[4px]'>
                                 view details
                                </button></Link>
                           </div>
                        </div>
                    </div>    
                )
           }
        </div> 
        
    </div>
  )
}

export default Services