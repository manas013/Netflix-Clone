import React, { useEffect, useState } from 'react'
import "./Nav.css";

function Nav() {
    // const [show, handleShow]=useState(false);
    // useEffect(()=>{
    //     window.addEventListener("scroll",()=>{
    //      if(window.scrollY>100){
    //         handleShow(true);

    //      }else handleShow(false)   
    //     });
    //     return () =>{
    //         window.removeEventListener("scroll");
    //     };
    // },[]);
  return (
    <div className="nav">
        <img
        className='nav_logo'
     src='https://www.freepnglogos.com/uploads/netflix-logo-text-emblem-31.png'
    alt="Netflix logo"/>

    <img
    className="nav_avatar" 
     src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
    alt='Avatar'  />

    </div>
  )
}

export default Nav