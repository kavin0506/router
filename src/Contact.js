import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Contact(){
   const[logout,setLogout]= useState(false)

    const navi=useNavigate()

    // useEffect(()=>{
        if(!localStorage.getItem("login")) navi("/dash")
    // },[logout])

    function logoutBtn(event){
        event.preventDefault()
        localStorage.removeItem("login")
        setLogout(true)

    }
    return(
        <div >
            <h2>Contact Page</h2>
            <Link to="/">Home</Link>

    
            <button onClick={logoutBtn}>Logout</button>
        </div>
    )
}

export default Contact;