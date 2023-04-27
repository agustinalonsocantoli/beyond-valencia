// Components
import { Services } from "../components/Services";
import { Footer } from "../components/Footer";
import { Events } from "../components/Events";
import { Wine } from "../components/Wine";
import { Whatsapp } from '../components/Whatsapp';
// Video & Img
import homeVideo from '../assets/video/fire.mp4';
import logo from '../assets/logoB.png';
import exp from '../assets/img/experiences.jpg';
import day from '../assets/img/dayTrip.jpg';
import food from '../assets/img/fyd.jpg';
// Icon
import { GiClick } from 'react-icons/gi';
import { Link } from "react-router-dom";

export const Home = () => {
    const data = {
        h1: "Easy, safe and unique... #valencia",
        h2: "PERSONALIZED SERVICES",
        S1: {
            link: "/experiences",
            img: exp,
            type: "image",
            h3: "Experiences",
            p: "Carefully selected experiences in Valencia, from just a bike to dinning with a local family in the city centre.",
        },
        S2: {
            link: "/daytrips",
            img: day,
            type: "image",
            h3: "Day trips",
            p: "Day trips for going",
            span: "#beyondthecity"
        },
        S3: {
            link: "/food",
            img: food,
            type: "image",
            h3: "Food and Dinning",
            p: "Best selection of spots and deals in town.",
        },
    }

    return(
        <div className="home">

            <div className="home_video">
                <div className="video_hashtag">
                    <Link to="https://www.instagram.com/beyond_valencia_/">#BeyondValencia</Link>
                    <GiClick className="hashtag_icon"/>
                </div>

                <div className="video_link">
                    <Link to={"/more-services"}>More services</Link>
                </div>

                <div className="video_logo">
                    <div>
                        <img src={logo} alt="img/logo" />
                    </div>

                    <h2>CURATED EXPERIENCES</h2>
                </div>

                <video autoPlay muted loop>
                    <source src={homeVideo} type="video/mp4" />
                </video>
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