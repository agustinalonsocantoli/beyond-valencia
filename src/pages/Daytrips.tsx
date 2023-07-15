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
import dayB from '../assets/img/sunset.jpg';
import dayC from '../assets/img/albufera.jpg';
import dayD from '../assets/img/villareal.jpg';
import imgS1 from '../assets/img/day1.jpg';
import imgS2 from '../assets/img/day2.jpg';
import imgS3 from '../assets/img/day3.jpg';
import imgS4 from '../assets/img/exp1.jpg';
import imgS5 from '../assets/img/exp2.jpg';
import imgS6 from '../assets/img/exp3.jpg';
// Interfaces
import { DataInt } from "../interfaces/services.model";
import { MultimediaInt } from "../interfaces/exposure.model";

export const Daytrips = () => {

    const multimedia: MultimediaInt = {
        A: {
            src: dayA,
            h3: "Private transfer to Madrid",
            p: "Curated experiences available",
            span: "Optional:",
            type: "image"
        },
        B: {
            src: dayB,
            h3: "Sunset Experience",
            p: "La Albufera Park",
            span: "Destination:",
            type: "image"
        },
        C: {
            src: dayC,
            h3: "Half a day in la Albufera departing at 10:00am",
            p: "La Albufera Park (from Valencia)",
            span: "Destination:",
            type: "image"
        },
        D: {
            src: dayD,
            h3: "Villareal Football Club in one day (The Yellow Submarine experience)",
            p: "Villarreal (with transportation, meals and guided tour included)",
            span: "Destination:",
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
            h3: "Visiting three wineries in one day",
        },
        S2: {
            link: "",
            img: imgS2,
            type: "image",
            h3: "Chulilla and the hanging bridges, in a private tour",
        },
        S3: {
            link: "",
            img: imgS3,
            type: "image",
            h3: "Private dining & sunset on a boat",
        },
        S4: {
            link: "",
            img: imgS4,
            type: "image",
            h3: "All you can wine while painting in the dark",
        },
        S5: {
            link: "",
            img: imgS5,
            type: "image",
            h3: "Saturday we brunch on a boat",
        },
        S6: {
            link: "",
            img: imgS6,
            type: "image",
            h3: "Private boat expeirence",
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