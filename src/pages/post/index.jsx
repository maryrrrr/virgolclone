import { useEffect, useState} from 'react';
import { useParams } from "react-router-dom";

const Post = () => {
    const{postId}= useParams();
    const[title,setTitle]= useState([]);
    const[desc,setDesc]= useState([]);
    const[image,setImage]= useState([]);
    const[comment, setComment]= useState([]);
    const[like,setlike]= useState(false);

    useEffect( () => {
    
        fetch( `https://frtpwlgschfrwsaawgiv.supabase.co/rest/v1/posts?id=eq.${postId}&select=*`,{
            method: "GET",
            headers: {
            apikey: process.env.REACT_APP_SUPABASE_ANON_KEY ,
            Authorization: `Bearer ${process.env.REACT_APP_SUPABASE_ANON_KEY}`,
            },
         })
            .then((response) => response.json())
            .then((response) => {
                if(response.length>0){
                    setImage(response[0].image); 
                    setTitle(response[0].title); 
                    setDesc(response[0].description);   
                    console.log(response);                         
               }
            });
        }, []);
        const onFormSubmit= (e) =>{
            e.preventDefault();
            fetch('https://frtpwlgschfrwsaawgiv.supabase.co/rest/v1/comments',{
                method: "POST",
                headers: {
                    apikey: process.env.REACT_APP_SUPABASE_ANON_KEY ,
                    Authorization: `Bearer ${process.env.REACT_APP_SUPABASE_ANON_KEY}`,
                    "Content-Type": "application/json",
                    "Prefer": "return=minimal",
                },
                body:JSON.stringify({comment:comment, username:"mary"})
            })
            .then((response)=> response.json())
            .then((response) => {console.log(response);})
            .catch((error)=> {console.log(error);
            });
        }

        const getComment=(e) => {
            setComment(e.target.value);
        }

    const LikeButton= ()=>{
    useEffect( ()=>{
        fetch('https://frtpwlgschfrwsaawgiv.supabase.co/rest/v1/likes',{
            method:'POST',
            header:  {
                apikey: process.env.REACT_APP_SUPABASE_ANON_KEY ,
                Authorization: `Bearer ${process.env.REACT_APP_SUPABASE_ANON_KEY}`,
                "Content-Type": "application/json",
                "Prefer": "return=minimal",
            },
        })
    }
    ),[like];
     return(
        <>
        <img src={image}/>
         <h1>{title}</h1>
         <p>{desc}</p>
         <form onSubmit={onFormSubmit}>
            <label>
                توضیحات:
                <textarea onChange={(e)=>getComment(e)} type="text" />
            </label>
            <button>submit</button>
            <button onClick= {()=> setlike(prev=>!prev)}>{like?"Dislike":"Like"}</button>
            </form>
        </>
    )
     }   
    
}
export default Post;