import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AuthContext } from '../../Authentication/Authentication';

function ServiceDetails() {
  const {user} = useContext(AuthContext);
  console.log(user);

    const {id}= useParams()
    // console.log(id);
    const [service,setService] = useState([]);
    
    useEffect(()=>{
        // const url = 
        fetch(`http://localhost:5000/service-details/${id}`)
        .then(res => res.json())
        .then(data => setService(data))
    },[]) 

    // console.log(service);
  return (
    <div className='mx-[10%] mt-10'>
      <h2 className='text-center text-[#270000] text-[50px] font-bold Yeseva'>About - {service.serviceName}</h2>
      
      <div className="flex mt-10 justify-between items-center">
        <div className="w-[50%]">
          <p className='text-3xl font-semibold text-[#270000] capitalize'>{service.serviceName}</p>
          <p className='mt-4  Roboto text-justify text-xl'>Short info about <span className='text-gray-600 text-[16px]'> :  <br /> {service.desc}</span></p>
          <p className='text-xl font-semibold text-[#270000] capitalize mt-3'>Price : $<span className='text-3xl text-green-700'>{service.price}</span></p>
        </div>
        <div className="w-[40%]">
          <img className='rounded-[10px]' src="https://i.ibb.co/r3qm4qX/demo.jpg" alt="" />
        </div>
      </div>

      {/* review part  */}
      <div className="reviews mt-28 mb-10">
        <h2 className='text-[25px] font-medium Roboto text-[#270000]'>Review over {service.serviceName}</h2>

        <div className="mt-10 w-[900px]">

          {/* review given part  */}
          <div className="">
            <label>
              <span className='text-xl font-medium'>Give us your review</span>
              <textarea className='w-[90%] border mt-5 p-4' placeholder='Review .........' type="text" />
            </label> <br />
            <button type='submit' className='text-white bg-[#270000] px-8 py-1 text-base mt-3 rounded-md'>submit</button>
          </div>


          {/* ================ we need to send this two====================== */}
          {/* userimage : https://lh3.googleusercontent.com/a/ALm5wu2NeCRmAAO7ZS_VEEPS0iAXzCwzazLz4UGMZQaW=s96-c
          username : {user.displayName} */}

          {/* watch review parts  */}
          <div className="review flex  gap-5 items-start mt-10">
              <img className='w-10 h-10 rounded-full shrink-0' src="https://www.bdstall.com/asset/user-image/21771.jpg" alt="" />
              <div className="">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam eligendi cupiditate ullam quas, aspernatur et dolorum quae, distinctio sapiente consequatur provident! Id, aliquam facere deleniti autem qui atque blanditiis.</p>

                <p className='flex gap-x-5 mt-2'>
                  <span className='capitalize'>Alif</span>
                  <span>25 March 2021</span>
                  <span>11.34 PM</span>
                </p>
              </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default ServiceDetails