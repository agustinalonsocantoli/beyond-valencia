// Components
import { Navbar } from "../components/shared/Navbar";
import { Exposure } from '../components/shared/Exposure';
import { Services } from "../components/shared/Services";
import { Footer } from "../components/shared/Footer";
import { Events } from "../components/shared/Events";
import { Wine } from "../components/shared/Wine";
import { Whatsapp } from '../components/shared/Whatsapp';
// Video & Img
import dayA from '../assets/img/dayA.jpg';
import dayB from '../assets/img/dayB.jpg';
import dayC from '../assets/img/dayTrip.jpg';
import dayD from '../assets/img/dayD.jpg';
import imgS1 from '../assets/img/day1.jpg';
import imgS2 from '../assets/video/day2.mp4';
import imgS3 from '../assets/img/experiences.jpg';
// Interfaces
import { DataInt } from "../interfaces/services.model";
import { MultimediaInt } from "../interfaces/exposure.model";

export const Daytrips = () => {

    const multimedia: MultimediaInt = {
        A: {
            src: dayA,
            h3: "One night in Madrid",
            type: "image"
        },
        B: {
            src: dayB,
            h3: "Xativa",
            p: "One Day trip",
            type: "image"
        },
        C: {
            src: dayC,
            h3: "Bocairent",
            p: "One Day trip",
            type: "image"
        },
        D: {
            src: dayD,
            h3: "Chulilla",
            p: "One Day trip",
            type: "image"
        },
    }

    const data: DataInt = {
        h1: "Transportation and tiquets included",
        h2: "SPORTS EXPERIENCES",
        S1: {
            link: "",
            img: imgS1,
            type: "image",
            h3: "Two nights in Barcelona",
            p: "Transportation and 2 nights in a 4 Stars Boutique Hotel included",
        },
        S2: {
            link: "",
            img: imgS2,
            type: "video",
            h3: "Peñiscola private tour",
            p: "Private transportation, old town tour and the meal is included",
        },
        S3: {
            link: "",
            img: imgS3,
            type: "image",
            h3: "Albufera in one day",
            p: "City scape to Albufera including the traditional boat ride.",
        },
    }

    return(
        <div>
            <Navbar title={"Day Trips"} subtitle={"Day Trips"} />

            <Exposure data={multimedia}  />

            <Services data={data} />

            <Events />

            <Wine />

            <Whatsapp />
            
            <Footer />
        </div>
    );
}