import React, { useState } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
import useTitle from '../../Hooks/useHooks';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function UpdateReview() {
    useTitle('Update review')
    const selectedReview = useLoaderData()
    const [review , setReview] = useState(selectedReview)
    const navigate = useNavigate();
    // console.log(review);

    const handleCommentUpdate = (event) => {
        event.preventDefault();
        const comment = event.target.comment.value;
        // const serviceId = review.serviceId;
        // const userEmail = review.userEmail;
        // const userPhoto = review.userPhoto;
        // const serviceName = review.serviceName;
        review.comment = comment;
        setReview(review);

        // const newReview = {...review}
        // setReview(newReview);
        console.log(comment);
        console.log(review);

        fetch(`http://localhost:5000/comments/${review._id}`,{
            method: 'PUT',
            headers: {
                'content-Type' : 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => console.log(data))
        toast.success("successfully updated the comment!")
        // alert('Your Comment updated')
        navigate('/my-review')
        
    }

    // const handleReviewChange = (event) =>{
    //     const value = event.target.value
    //     const field = event.target.name
    //     const newReview = {...review}
    //     newReview[field] = value;
    //     setReview(newReview)
    // }
    return (
    <div className='my-20 '>
        <div className="flex justify-center">
            <form onSubmit={handleCommentUpdate}>
                <textarea className='w-full sm:w-[400px] border p-4 rounded-md' defaultValue={selectedReview.comment} type="text" name='comment' placeholder='name' required/><br /> <br />
                <button className='text-white bg-[#270000] px-3 py-2 rounded-md' type='submit'>Update Comment</button>
            </form>  
        </div>
    </div>
  )
}

export default UpdateReview