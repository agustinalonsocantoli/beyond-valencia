// Components
import { Services } from "../components/Services";
import { Footer } from "../components/Footer";
import { Events } from "../components/Events";
import { Wine } from "../components/Wine";
// Video & Img
import homeVideo from '../assets/video/fire.mp4';
import logo from '../assets/logoB.png';
import exp from '../assets/img/experiences.jpg';
import day from '../assets/img/dayTrip.jpg';
import food from '../assets/img/fyd.jpg';
// Icon
import { GiClick } from 'react-icons/gi';

export const Home = () => {
    const data = {
        h1: "Easy, safe and unique... #valencia",
        h2: "PERSONALIZED SERVICES",
        S1: {
            link: "/experiences",
            img: exp,
            h3: "Experiences",
            p: "Carefully selected experiences in Valencia, from just a bike to dinning with a local family in the city centre.",
        },
        S2: {
            link: "",
            img: day,
            h3: "Day trips",
            p: "Day trips for going",
            span: "#beyondthecity"
        },
        S3: {
            link: "",
            img: food,
            h3: "Food and Dinning",
            p: "Best selection of spots and deals in town.",
        },
    }

    return(
        <div className="home">

            <div className="home_video">
                <div className="video_hashtag">
                    <h2>#weareonfire</h2>
                    <GiClick className="hashtag_icon"/>
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
            
            <Footer />
        </div>
    );
}