// Components
import { Navbar } from "../components/shared/Navbar";
import { Exposure } from '../components/shared/Exposure';
import { Services } from "../components/shared/Services";
import { Footer } from "../components/shared/Footer";
import { Events } from "../components/shared/Events";
import { Wine } from "../components/shared/Wine";
import { Whatsapp } from '../components/shared/Whatsapp';
// Video & Img
import expA from '../assets/img/tipsy.jpg';
import expB from '../assets/img/home.jpg';
import expC from '../assets/img/huerta.jpg';
import expD from '../assets/video/expD.mp4';
import imgS1 from '../assets/img/exp1.jpg';
import imgS3 from '../assets/img/exp2.jpg';
import imgS2 from '../assets/img/exp3.jpg';
// Interfaces
import { DataInt } from "../interfaces/services.model";
import { MultimediaInt } from "../interfaces/exposure.model";

export const Experiences = () => {

    const multimedia: MultimediaInt= {
        A: {
            src: expA,
            h3: "Tipsy Tour like a local!",
            p: "El Carmen",
            span: "Neighborhood:",
            type: "image"
        },
        B: {
            src: expB,
            h3: "Bike Tour to the seaside",
            p: "El cabañal",
            span: "Neighborhood:",
            type: "image"
        },
        C: {
            src: expC,
            h3: "Bike tour to the Valencian Orchard",
            p: "La huerta valenciana",
            span: "Neighborhood:",
            type: "image"
        },
        D: {
            src: expD,
            h3: "All you can wine, while having a picnic",
            p: "Private and Regular",
            type: "video"
        },
    }

    const data: DataInt = {
        h1: "Meeting point in the City",
        h2: "PERSONALIZED EXPERIENCE",
        S1: {
            link: "",
            img: imgS1,
            type: "image",
            h3: "All you can wine while painting in the dark",
        },
        S2: {
            link: "",
            img: imgS2,
            type: "image",
            h3: "Saturday we brunch on a boat",
        },
        S3: {
            link: "",
            img: imgS3,
            type: "image",
            h3: "Private boat expeirence",
        },
    }

    return(
        <div >
            <Navbar title={"Experiences"} subtitle={"Experiences"} />

            <Exposure data={multimedia} />

            <Services data={data} />

            <Events />

            <Wine />

            <Whatsapp />
            
            <Footer />
        </div>
    );
}