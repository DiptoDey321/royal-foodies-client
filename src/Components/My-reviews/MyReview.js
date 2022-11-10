import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../Authentication/Authentication';
import useTitle from '../../Hooks/useHooks';

function MyReview() {
    useTitle('My Reviews')
    const [myReviews, setMyReviews] = useState([]);
    const {user} = useContext(AuthContext);
    // console.log(user.email);
    useEffect(()=>{
        fetch("https://royal-foodies-server.vercel.app/comments",{
            headers:{
                authorization : `Bearer ${localStorage.getItem('royal-foodies')}`
            }
        })
        .then(res => res.json())
        .then ( data => {
          const thisComment = data.filter(comment => comment.userEmail === user.email )
          setMyReviews(thisComment);
        })
      },[user.email])
      console.log(myReviews);

    const deleteComment = (myReview) =>{
        const agree = window.confirm(`are you sure to delete ${myReview.name}`);
        if(agree){
            fetch(`https://royal-foodies-server.vercel.app/comments/${myReview._id}`,{
                method: "DELETE",
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    // alert('Deleted successfully')
                    toast.success("Deleted succefully!")
                    const remainingReview = myReviews
                    .filter(prod => prod._id !== myReview._id)
                    setMyReviews(remainingReview)
                }
            })
        }
    }
    console.log(myReviews);
  return (
    <div className='mx-[10%] my-10 '>
       <h2 className='text-[30px] text-[#270000]'> Your all reviews : </h2>
       {
            myReviews.length <= 0 ? 
            <h2>You haven't add any review</h2>
            :
            myReviews.map(myReview =>
                <div key={myReview._id} className="mt-10 gap-x-[3%] flex flex-col sm:flex-row items-center">
                    <div className="w-[100%] sm:w-[75%] bg-slate-100 p-4 border min-h-[92px]">
                        <h2>On service - <span className='text-orange-700 font-semibold'>{myReview.serviceName}</span> </h2>
                        <p>{myReview.comment}</p>
                    </div>
                    <div className="w-[100%] sm:w-[20%] flex flex-col gap-y-3 mt-5 sm:mt-0">
                        <Link className='w-full' to={`/edit-review/${myReview._id}`}>
                            <button  className='w-full bg-green-700 text-white px-3 py-2 rounded-md'>Edit Review</button>
                        </Link>
                        <button onClick={()=>deleteComment(myReview)} className='bg-red-700 text-white px-3 py-2 rounded-md'>Delete</button>
                    </div>
                </div>    
            ) 
           
       }
      

    </div>
  )
}

export default MyReview