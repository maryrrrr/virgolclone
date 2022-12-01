import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getAllCategories } from "../../../data/category";
import Styles from "../Styles.module.css";

const Navbar =()=>
{
    const [navItems, setNavItems]= useState([]);
    useEffect(() => {
        const getAllData = async () => {
            const{data , error}= await getAllCategories();
            if(!error){
                setNavItems(data);
            }
        };
        getAllData();
    }, []);

    return(
            <div className= {Styles.navbar}>
                <ul>
                    {navItems.map( (item) => (
                        <li>
                            <a style={{fontSize:"20px", fontWeight:"bold"}}href= {`/category/${item.id}`}>{item.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
         );
};

export default Navbar;