import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

function Services() {
    const services = useLoaderData()
    // console.log(services._id);
  return (
    <div className=''>
        <h2 className='text-[50px] Yeseva text-[#270000] text-center my-10'>our all services</h2>
        <div className="mt-14 grid grid-cols-3 justify-around px-[10%] gap-x-[3%] gap-y-[4%] mb-20">
           {
                services.map(services =>
                    <div key={services._id} className="border rounded-lg">
                        <div className=" p-[10px] flex flex-col gap-x-5 items-center justify-center Roboto">
                            <div className="w-full">
                                <img className='w-full' src={services.picture} alt="" />
                            </div>
                            {/* <img className='w-full' src='https://i.ibb.co/zr8S1Q9/breakfst.png' alt="" srcSet="" /> */}
                           <div className="px-[2%]">
                                <div className="flex items-center justify-between gap-y-3 mt-5">
                                    <div className='py-2 text-orange-800 text-base font-bold'>{services.price}$</div>
                                    <span className='px-2 py-1 text-orange-800 text-xs font-bold'>⭐{services.rating}/5</span>
                                </div>
                                <h3 className='text-base tracking-widest mt-3 font-bold'>{services.serviceName}</h3>
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