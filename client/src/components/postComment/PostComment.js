import axios from 'axios';
import React, { useState } from 'react'
import './postComment.css'

const PostComment = ({post}) => {

    let [comment,setComment] = useState("");
    let myProfile = JSON.parse(localStorage.getItem('userData'));
    myProfile = myProfile.profileObj;
    console.log(myProfile.email);

    let changeComment = (e)=>{
        setComment(e.target.value);
    }

  
    let addComment = async()=>{
        axios.post(`http://localhost:8000/postupload/comment/${post._id}`,{
          id:post._id,
         comments:[{
         author:myProfile.email,
         comment:comment
      }]
        })
        .then((response)=>{
          console.log(response);
        })
        .catch((err)=>{
          console.log(err); 
        })
    }
    console.log((post._id));
  return (
    <div className='Postcommet'>
        <div className='AddComment'>
            <input type='text'
            className='InputComment' value={comment} onChange={changeComment}/>
            <button type='button' className='CommentButton' onClick={addComment}>Add</button>
        </div>
      
    </div>
  )
}

export default PostComment
