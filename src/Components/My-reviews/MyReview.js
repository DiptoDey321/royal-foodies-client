import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Authentication/Authentication';

function MyReview() {
    const [myReviews, setMyReviews] = useState([]);
    const {user} = useContext(AuthContext);
    // console.log(user.email);
    useEffect(()=>{
        fetch("http://localhost:5000/comments")
        .then(res => res.json())
        .then ( data => {
          const thisComment = data.filter(comment => comment.userEmail == user.email )
          setMyReviews(thisComment);
        })
      },[])
    //   console.log(myReviews);

    const deleteComment = (myReview) =>{
        const agree = window.confirm(`are you sure to delete ${myReview.name}`);
        if(agree){
            fetch(`http://localhost:5000/comments/${myReview._id}`,{
                method: "DELETE",
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    alert('Deleted successfully')
                    const remainingReview = myReviews
                    .filter(prod => prod._id !== myReview._id)
                    setMyReviews(remainingReview)
                }
            })
        }
        console.log(agree);
    }
  return (
    <div className='mx-[10%] my-10 '>
       <h2 className='text-[30px] text-[#270000]'> Your all reviews : </h2>
       {
        myReviews.map(myReview =>
            <div key={myReview._id} className="mt-10 gap-x-[3%] flex">
                <div className="w-[75%] bg-slate-100 p-4 border min-h-[92px]">
                    <h2>On service - <span className='text-orange-700 font-semibold'>{myReview.serviceName}</span> </h2>
                    <p>{myReview.comment}</p>
                </div>
                <div className="w-[20%] flex flex-col gap-y-3">
                    <button className='bg-green-700 text-white px-3 py-2 rounded-md'>Update</button>
                    <button onClick={()=>deleteComment(myReview)} className='bg-red-700 text-white px-3 py-2 rounded-md'>Delete</button>
                </div>
            </div>    
        )
       }
    </div>
  )
}

export default MyReview