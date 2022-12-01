import { useState } from "react";
import { useEffect } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Styles from "./Styles.module.css";
import LastPostCard from "./components/LastPostCard";

const Feed = () => {
    const [lastPosts, setLastPosts]= useState([]);
    useEffect( () => {
    
fetch( 'https://frtpwlgschfrwsaawgiv.supabase.co/rest/v1/posts?select=*',{
    method: "GET",
    headers: {
    apikey: process.env.REACT_APP_SUPABASE_ANON_KEY ,
    Authorization: `Bearer ${process.env.REACT_APP_SUPABASE_ANON_KEY}`,
    },
 })
    .then((response) => response.json())
    .then((response) => {
        if(response.length>0){
            setLastPosts(response);
        }
    });
}, []);

    return (
    <>
        <Header/>
        <Navbar/>
        <div 
        className= {`${Styles.wrapper}`}
        Styles={{marginTop:"32px"}}>

                {lastPosts.map((post)=> (
                <LastPostCard postData={post}/>
            ))}
            </div>
    </>
    );
  };
export default Feed;