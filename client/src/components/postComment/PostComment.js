import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './postComment.css'
import {AiTwotoneDelete,AiTwotoneEdit} from "react-icons/ai";

const PostComment = ({post,callBack}) => {

    let [comment,setComment] = useState("");
    let [readComment,setReadComment] = useState([]);
    callBack(readComment.length);
    
    console.log(readComment.length);
    let FetchComments = async()=>{
      axios.get(`http://localhost:8000/postupload/comment/${post._id}`)
      .then((res)=>{
        let result = JSON.parse(JSON.stringify(res.data));
        setReadComment(Object.entries(result.comments));
       
      })
      .catch((err)=>{
        console.log(err);
      })
    }

    useEffect(()=>{
      FetchComments();
    },[comment]);


    //getting data from localstorage
    let myProfile = JSON.parse(localStorage.getItem('userData'));
    myProfile = myProfile.profileObj;
    
    
    
    let changeComment = (e)=>{
        e.preventDefault();
        setComment(e.target.value);
        
    }

    //posting comment
    let addComment = async()=>{
        axios.post(`http://localhost:8000/postupload/comment/${post._id}`,{
          id:post._id,
         comments:[{
         author:myProfile.email,
         name:myProfile.name,
         comment:comment
      }]
        })
        .then((response)=>{
          console.log(response);
        })
        .catch((err)=>{
          console.log(err); 
        })

        setComment("");
        
    }

    /*let editComment = (value)=>{
      if(value[1].name!=myProfile.name)return ;

      setComment(value[1].comment);

      axios.put(`http://localhost:8000/postupload/comment/${post._id}/${value[1]._id}`,{
        comment:comment
      })
      .then((res)=>{console.log(res)})
      .catch((err)=>console.log(err))
    }*/

    let deleteComment = async(value)=>{
      if(value[1].name!=myProfile.name)return ;

      axios.delete(`http://localhost:8000/postupload/comment/${post._id}/${value[1]._id}`)
      .then((res)=>{
        console.log(res);
      })
      .catch((err)=>{
        console.log(err);
      })
      setComment("");
    }
    


  return (
    <div className='Postcommet'>
        <div className='AddComment'>
            <input type='text'
            className='InputComment' value={comment} onChange={changeComment}/>
            <button type='button' className='CommentButton' onClick={addComment}>Add</button>
        </div>
        
        <div className='ReadComment'>
           {readComment.map((value)=><div className='showComment'>
             <div className="UserContainer">
             <div className='Row'>
             <h3>{value[1].name}</h3>
             </div>
             <div className='Row'>
             {value[1].comment}
             </div>
             </div>
             
             <div>
               {/*<AiTwotoneEdit onClick={()=>editComment(value)}/>*/}
               <AiTwotoneDelete onClick={()=>{deleteComment(value)}} /> 

               </div>
             </div>)}
          
        </div>
      
    </div>
  )
}

export default PostComment
