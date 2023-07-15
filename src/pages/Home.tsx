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
import exp from '../assets/img/experiences.jpg';
import day from '../assets/img/dayTrip.jpg';
import food from '../assets/img/fyd.jpg';
import expW from '../assets/img/experiences.webp';
import dayW from '../assets/img/dayTrip.webp';
import foodW from '../assets/img/fyd.webp';
// Icon
import { AiOutlineInstagram } from 'react-icons/ai';
// React
import { Link } from "react-router-dom";
// Interface
import { DataInt } from "../interfaces/services.model";

export const Home = () => {

    const data: DataInt = {
        h1: "Easy, safe and unique... #Valencia",
        h2: <Link to={"/more-services"}>LOCKERS & BIKE RENTALS </Link>,
        S1: {
            link: "/experiences",
            img: exp,
            imgW: expW,
            type: "image",
            h3: "Experiences",
            p: "Carefully selected and exclusive experiences in Valencia capital city",
        },
        S2: {
            link: "daytrips",
            img: day,
            imgW: dayW,
            type: "image",
            h3: "Day trips",
            p: "Exploring locations out from the box, and out from the city centre",
        },
        S3: {
            link: "",
            img: food,
            imgW: foodW,
            type: "image",
            h3: "Food & Dining",
            p: "Access to the best deals in town at run by local spots with authenticity",
        },
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

            <Services
            data={data}
            />

            <Events />

            <Wine />

            <Whatsapp />
            
            <Footer />
        </div>
    );
}