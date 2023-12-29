import { Link } from "react-router-dom";
import "./nav.css"
const Nav=()=>{
    return(
       
        <div className="navbar">
                    <div className="searchbar">
                        <input type="text" placeholder="search yuor products"></input>
                    </div>
                        <ul>
                            <li>Home</li>
                            <li><Link to='/about'>About</Link> </li>
                            <li><Link to='/products'>Products</Link> </li>
                            <li><Link to='/Contact'>Contact</Link></li>
                            <li><Link to='/Dash'>Dashboard</Link></li>
                            <li><Link to='/food/veg'>Veg</Link></li>
                            <li><Link to="/food/Biriyani">Non-Veg</Link></li>
                        </ul>
        </div>
    )
}

export default Nav;