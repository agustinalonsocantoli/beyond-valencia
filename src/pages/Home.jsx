// React
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
// Video & Img
import homeVideo from '../assets/video/home.mp4';
import logo from '../assets/logoB.png';
// Icon
import { GiClick } from 'react-icons/gi';

export const Home = ({ setNavbarVisible }) => {
    const location = useLocation();

    useEffect(() => {
        const url = location.pathname;
        
        if(url === '/'){
            setNavbarVisible(false)
        }
    }, []);

    return(
        <div className="home_box">

            <div className="video_box">
                <div className="hashtag">
                    <h2>#weareonfire</h2>
                    <GiClick className="iconClick"/>
                </div>

                <div className="logo_box">
                    <div className="home_logo">
                        <img src={logo} alt="img/logo" />
                    </div>

                    <h2 className="">CURATED EXPERIENCES</h2>
                </div>

                <video autoPlay muted loop>
                    <source src={homeVideo} type="video/mp4" />
                </video>
            </div>

        </div>
    );
}