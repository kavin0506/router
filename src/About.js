import { Link, useParams } from "react-router-dom";

function About(){

    const{num}=useParams()
    return(
        <div>
            <h2>About page</h2>
            <p>Number:{num}</p>
            <Link to='/'>Home</Link>
        </div>
    )
}

export default About;