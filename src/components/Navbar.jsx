// Icons
import { TfiMenu } from "react-icons/tfi";
// Img
import logo from "../assets/logoW.png";

export const Navbar = ({ title }) => {
    return(
        <div className="nav">
            <div className="nav_logo">
                <img src={logo} alt="img/logo" />
            </div>
                
            <div className="nav_title">
                <h1>{title}</h1>
            </div>
                
            <div className="nav_menu">
                <TfiMenu />
            </div>
        </div>
    );
}