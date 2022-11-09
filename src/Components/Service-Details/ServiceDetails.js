import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AuthContext } from '../../Authentication/Authentication';

function ServiceDetails() {
  const {user} = useContext(AuthContext);
    // console.log(user);
    const {id}= useParams()
    const [service,setService] = useState([]);
    const [comments, setComments] = useState([])
    
    useEffect(()=>{
        fetch(`http://localhost:5000/service-details/${id}`)
        .then(res => res.json())
        .then(data => setService(data))
    },[])
    
    useEffect(()=>{
      fetch("http://localhost:5000/comments")
      .then(res => res.json())
      .then ( data => {
        const thisComment = data.filter(comment => comment.serviceId == id)
        setComments(thisComment);
      })
    },[])
    console.log(comments);

    const handleAddComment = (event) =>{
      event.preventDefault()
      const comment = event.target.comment.value;
      const userEmail = user.email;
      const serviceId = id;
      const userPhoto = user.photoURL
      const commentContent = {serviceId,comment,userEmail,userPhoto}

      fetch("http://localhost:5000/comments",{
      method: "post",
      headers: {
        'content-type' : "application/json"
      },
      body : JSON.stringify(commentContent)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        const newComments = [...comments, data];
        setComments(newComments)
      })
      .catch(err => console.log(err))
      event.target.reset();
    }

    // console.log(comments);

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
          <img className='w-full rounded-[10px]' src={service.picture} alt="" />
        </div>
      </div>

      {/* review part  */}
      <div className="reviews mt-28 mb-10">
        <h2 className='text-[25px] font-medium Roboto text-[#270000]'>Review over {service.serviceName}</h2>

        <div className="mt-10 w-[900px]">

          {/* review given part  */}

          {
            user?.uid? 
            <form onSubmit={handleAddComment}>
            <label>
              <span className='text-xl font-medium'>Give us your review</span>
              <textarea className='w-[90%] border mt-5 p-4' name='comment' placeholder='Review .........' type="text" />
            </label> <br />
            <button type='submit' className='text-white bg-[#270000] px-8 py-1 text-base mt-3 rounded-md'>submit</button>
          </form> 
          :
          <div className="login">
              <h2 className='mb-2'>Please Login to give us your review</h2>
              <Link to='/login'><button className='text-white px-3 py-1 bg-[#270000] rounded-sm'>Login Here</button></Link>
          </div>
          }

         


          {/* ================ we need to send this two====================== */}
          {/* userimage : https://lh3.googleusercontent.com/a/ALm5wu2NeCRmAAO7ZS_VEEPS0iAXzCwzazLz4UGMZQaW=s96-c
          username : {user.displayName} */}

          {/* watch review parts  */}
          {
            comments.map(comment =>
              <div key={comment._id} className="review flex gap-5 items-start mt-10">
              <img className='w-10 h-10 rounded-full shrink-0' src={comment.userPhoto} alt="" />
              <p>{comment.comment}</p>
             
          </div>
              )
          }
        </div>
      </div>
    </div>
    
  )
}

export default ServiceDetails