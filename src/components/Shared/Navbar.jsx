// React
import { useNavigate, NavLink } from "react-router-dom";
// Icons
import { TfiMenu, TfiClose } from "react-icons/tfi";
// Img
import logo from "../../assets/logoW.png";
import { useState } from "react";

export const Navbar = ({ title, subtitle }) => {
    const navigate = useNavigate()
    const [ isVisible, setIsVisible ] = useState(false);
    // TODO: Desidir si se implementa navbar distinta a responsive
    // const resposive = window.innerWidth < 1024 ? false : true;
    
    return(
        <div className="nav">

            <img src={logo} alt="img/logo" onClick={() => navigate('/')} />

            <div className="nav_title">
                <h1 data-text={subtitle}>{title}</h1>
            </div>
            
            <div className="nav_menu">
                {!isVisible ? 
                <TfiMenu onClick={() => setIsVisible(true)} /> : 
                <TfiClose onClick={() => setIsVisible(false)} />
                }

                { isVisible &&
                <div className="menu_open">
                    <ul>
                        <li><NavLink to={"/"}>Home</NavLink></li>
                        <li><NavLink to={"/experiences"}>Experiences</NavLink></li>
                        <li><NavLink to={"/daytrips"}>Day Trips</NavLink></li>
                        <li><NavLink to={"/food"}>Food & Dinning</NavLink></li>
                        <li><NavLink to={"/aboutus"}>About Us</NavLink></li>
                    </ul>
                </div>
                }
            </div>
            
            {/* TODO: Desidir si se implementa navbar distinta a responsive */}
            {/* { resposive &&
            <div className="nav_menu">

                <div className="menu_open">
                    <ul>
                        <li><NavLink to={"/"}>Home</NavLink></li>
                        <li><NavLink to={"/experiences"}>Experiences</NavLink></li>
                        <li><NavLink to={"/daytrips"}>Day Trips</NavLink></li>
                        <li><NavLink to={"/food"}>Food & Dinning</NavLink></li>
                        <li><NavLink to={"/aboutus"}>About Us</NavLink></li>
                    </ul>
                </div>
            </div>
            } */}

        </div>
    );
}