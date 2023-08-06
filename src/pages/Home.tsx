// Components
import { GroupServices } from "../components/shared/GroupServices";
import { Footer } from "../components/shared/Footer";
import { Events } from "../components/shared/Events";
import { Whatsapp } from "../components/shared/Whatsapp";
// Video & Img
import home from '../assets/img/home.jpg';
import homeW from '../assets/img/home.webp';
import logo from '../assets/logoW.png';
// Icon
import { AiOutlineInstagram } from 'react-icons/ai';
// React
import { Link } from "react-router-dom";
import { contentHome } from "../data/views/home";
import { DataInt } from "../interfaces/services.model";
import { Options } from "../components/shared/Options";


export const Home = () => {

    const dataHome: DataInt = {
        h1: "Easy, safe and unique... #Valencia",
        h2: "LOCKERS & BIKE RENTALS",
        navigate: "#options",
        content: contentHome
    }

    return(
        <div className="home">

            <div className="home_video">
                <div className="video_hashtag">
                    <Link to="https://www.instagram.com/beyond_valencia_/" target='_blank'  rel='noopener noreferrer'>
                        #weareonfire
                        <AiOutlineInstagram />
                    </Link>
                </div>

                <div className="video_logo">
                    <div>
                        <img src={logo} alt="img/logo" />
                    </div>

                    <h2>CURATED EXPERIENCES</h2>
                </div>

                <picture>
                    <source srcSet={homeW} type="image/webp" />
                    <img src={home} alt="img/home" />
                </picture>
            </div>

            <GroupServices
                sliderPage1={dataHome}
            />

            <Events />

            <div id="options">
                <Options />
            </div>

            <Whatsapp />
            
            <Footer />
        </div>
    );
}