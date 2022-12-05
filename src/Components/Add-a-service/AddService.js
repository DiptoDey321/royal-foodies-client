import React from 'react';
import useTitle from '../../Hooks/useHooks';

function AddService() {
  useTitle('Add Service')

  const handleServiceForm = (event) =>{
    event.preventDefault()
      const serviceName = event.target.serviceName.value;
      const rating = event.target.rating.value;
      const price = event.target.price.value;
      const desc = event.target.desc.value;
      const picture = event.target.picture.value;
      const commentContent = {serviceName,rating,price,desc,picture}
      
    console.log(commentContent);
    fetch('https://royal-foodies-server.vercel.app/add-services',{
        method: 'POST',
        headers: {
            'content-Type' : 'application/json'
        },
        body: JSON.stringify(commentContent)
    })
    .then(res => res.json())
    .then(data => {
        if(data.acknowledged){
            alert('User added successfully')
            event.target.reset()
        }
    })
}

  return (
    <div className='mx-[10%] my-20'>

        <h2 className='text-[30px] font-bold text-[#270000]'>Add Your Service  <br /> to Our Royal Foodies :</h2>

        <div className="mt-14 flex justify-center">

          <form onSubmit={handleServiceForm} className='w-full sm:w-[650px] p-7 bg-[#f0eaea] rounded-[10px]'> 
            <label > 
                Service name : <br />
                <input  className='border rounded-md p-3 w-full mt-1 outline-none' name='serviceName' type="text" required />
            </label> <br /> <br />

            <div className="flex justify-between">
              <label> 
                  Rating(Out of 5) : <br />
                  <input className='border p-3 rounded-md w-full sm:w-[280px] mt-1 outline-none' name='rating' type="text" required/>
              </label> 

              <label> 
                  Price : <br />
                  <input  className='border p-3 rounded-md w-full sm:w-[280px] mt-1 outline-none' name='price' type="text" required />
              </label> 
            </div> <br /> 

            <label> 
              Service Description : <br />
              <input  className='border p-3 w-full rounded-md mt-1 outline-none' name='desc' type="text" required/>
            </label> <br /> <br />

            <label> 
              Service photoURL : <br />
              <input  className='border p-3 w-full rounded-md mt-1 outline-none' name='picture' type="text" required/>
            </label>

            <div className="flex justify-center">
              <button className='mt-8 px-7 py-2 bg-[#270000] text-white rounded-md'>Add Service </button>
            </div>
          </form>
        </div>
    </div>
  )
}

export default AddService