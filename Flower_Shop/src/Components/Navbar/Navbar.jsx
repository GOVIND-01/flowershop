import { Link } from "react-router-dom";
import "./Navbar.css";
import { Profile } from "./Profile";

export const Navbar = () => {
    return (
        <div className="navbar">
            <div><Link to="/"><img className="logo_flower_shop" src="https://t3.ftcdn.net/jpg/02/62/18/36/360_F_262183660_0nbXAUolsU7TqtELicdIOlbwTuz7oiGe.jpg" alt="" /></Link></div>
            <div className="navbar_input">
                <input className="input_nav" type="text" placeholder="Search" />
            </div>
            <div className="navbar_login"><Profile/></div>
        </div>
        
    )
}