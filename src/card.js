import "./card.css"
import { FaStar } from "react-icons/fa";
import { Component } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";


class Card extends Component{
    render(){
        const {menu}=this.props;
      const menuCard=  menu.map((e)=>{
            return(
                <div className="col4">
                <div className="menu_card">
                    <div className="image">
                         <img src={e.image} alt="img"/>
                    </div>
                        <div className="image_content">
                            <h3>{e.branch}</h3>
                                <div className="image_rat">
                                    <FaStar className="icons"/>
                                    <span>{e.rating}</span>
                                    <span>{e.time} Mins</span>
                                </div>
                            <p>{e.dish}</p>
                            <p>{e.location}</p>
                            
                        </div>
                </div>
            </div>
                
            )
        })
        return(
            <div className="container">
                <Nav />
                <div className="row">
                   {menuCard}
                </div>
                <Link to='/'></Link>
            </div>
            
        )
    }
}


export default Card;