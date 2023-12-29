import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


function Dashboard(){
    const navi=useNavigate()

    useEffect(()=>{
      if(localStorage.getItem('login')) navi('/contact') 
    })
    const submitBtn=(e)=>{
        e.preventDefault()
       const name= e.target.elements.name.value;
       const pass=e.target.elements.pass.value;
       if(name==="log"||pass==="1234"){
            localStorage.setItem("login",true)
            navi('/contact')
       }
       else{
        console.log("error");
       }
    }
    return(
        <div>
            <form onSubmit={submitBtn}>
                <input type="text"name='name' placeholder="Enter Your Name"></input>
                <input type="password" name="pass" placeholder="Enter Your Password"></input>
                <button type="submit" >Login</button>
            </form>
        </div>
    )
}

export default Dashboard;