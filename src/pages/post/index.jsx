import { useEffect, useState} from 'react';
import { useParams } from "react-router-dom";

const Post = () => {
    const{id}= useParams();
    const[title,setTitle]= useState([]);
    const[desc,setDesc]= useState([]);
    const[image,setImage]= useState([]);

    useEffect( () => {
    
        fetch( `https://frtpwlgschfrwsaawgiv.supabase.co/rest/v1/posts?id=eq.${id}&select=*`,{
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
    return(
        <>
        <img src={image}/>
         <h1>{title}</h1>
         <p>{desc}</p>
        </>
    )
    
    
}
export default Post;