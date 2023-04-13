// Components
import { Services } from "../components/Services";
// Video & Img
import homeVideo from '../assets/video/fire.mp4';
import logo from '../assets/logoB.png';
import exp from '../assets/img/experiences.jpg';
import day from '../assets/img/dayTrip.jpg';
import food from '../assets/img/fyd.jpg';
import wine from '../assets/img/wine.jpg';
// Icon
import { GiClick } from 'react-icons/gi';
import { Footer } from "../components/Footer";

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

            <div className="home_events">
                <div>
                    <h1>Our Upcoming Events</h1>
                </div>

                <div className="events_content">
                    <div>
                        <h3>April 2023 discounts</h3>
                        <p>We selected 20 local vendors in town that offer outstanding services and experiences, and they now give a special treat to our audience.</p>
                    </div>

                    <div>
                        <h3>Eastern rooftop-drinks</h3>
                        <p>On request attendance to a Boiler Room at the Cabanyal | April 28th, 5:00 p.m. to 11:00 p.m. | Don Vicente Gallart 15, 46011, Valencia.</p>
                    </div>

                    <div>
                        <h3><span>EcoCharlas</span> guestlist</h3>
                        <p>A Monthly Regional Industry Event | May 12, 2023, 3:00 p.m. to 5:00 p.m. | Marina de Empresas, CAMINO CANAL, 91 - LO 20, 46024, Valencia</p>
                    </div>

                </div>
            </div>

            <div className="home_wine">
                <div className="wine_img">
                    <img src={wine} alt="img/wine" />
                </div>

                <div className="wine_title">
                    <h1>We also have wine!</h1>
                    <h2>LOCAL DELIVERY IN 30MIN</h2>
                </div>
            </div>

            <Footer />
        </div>
    );
}