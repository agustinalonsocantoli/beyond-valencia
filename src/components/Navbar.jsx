// React
import { useNavigate } from "react-router-dom";
// Icons
import { TfiMenu } from "react-icons/tfi";
// Img
import logo from "../assets/logoW.png";

export const Navbar = ({ title, subtitle }) => {
    const navigate = useNavigate()
    
    return(
        <div className="nav">

            <img src={logo} alt="img/logo" onClick={() => navigate('/')} />

            <div className="nav_title">
                <h1 data-text={subtitle}>{title}</h1>
            </div>
                
            <div className="nav_menu">
                <TfiMenu />
            </div>
        </div>
    );
}