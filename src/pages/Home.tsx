// Components
import { Services } from "../components/shared/Services";
import { Footer } from "../components/shared/Footer";
import { Events } from "../components/shared/Events";
import { Wine } from "../components/shared/Wine";
import { Whatsapp } from "../components/shared/Whatsapp";
// Video & Img
import home from '../assets/img/home.jpg';
import homeW from '../assets/img/home.webp';
import logo from '../assets/logoW.png';
// Icon
import { AiOutlineInstagram } from 'react-icons/ai';
// React
import { Link } from "react-router-dom";
import { dataHome } from "../data/views/home";


export const Home = () => {

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

            <Services
                sliderPage1={dataHome}
            />

            <Events />

            <Wine />

            <Whatsapp />
            
            <Footer />
        </div>
    );
}