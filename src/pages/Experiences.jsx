// Components
import { Navbar } from '@/components/Navbar';
import { Exposure } from '../components/Exposure';
import { Services } from "../components/Services";
import { Footer } from "../components/Footer";
import { Events } from "../components/Events";
import { Wine } from "../components/Wine";
// Video & Img
import expA from '../assets/video/expA.mp4';
import expB from '../assets/img/expB.jpg';
import expC from '../assets/img/expC.jpg';
import expD from '../assets/video/expD.mp4';
import imgS1 from '../assets/img/exp1.jpg';
import imgS2 from '../assets/img/exp2.jpg';
import imgS3 from '../assets/img/exp3.jpg';

export const Experiences = () => {

    const multimedia = {
        A: {
            src: expA,
            h3: "Wine tasting with a local at home!",
            type: "video"
        },
        B: {
            src: expB,
            h3: "Street Art",
            p: "3x2 people in regular booking",
            type: "image"
        },
        C: {
            src: expC,
            h3: "Old town",
            p: "Regular tour everyday",
            type: "image"
        },
        D: {
            src: expD,
            h3: "Private tour of The Old Town",
            type: "video"
        },
    }

    const data = {
        h1: "Meeting point in the City",
        h2: "PERSONALIZED EXPERIENCE",
        S1: {
            link: "",
            img: imgS1,
            type: "image",
            h3: "Regular Tour in city of Art and Ciències",
        },
        S2: {
            link: "",
            img: imgS2,
            type: "image",
            h3: "Private tour of City of Art and Sciences & Oceanographic",
        },
        S3: {
            link: "",
            img: imgS3,
            type: "image",
            h3: "Five musuems tour",
            p: "City scape to Albufera including the traditional boat ride.",
        },
    }

    return(
        <div>
            <Navbar title={"Experiences"} subtitle={"Experiences"} />

            <Exposure data={multimedia}  />

            <Services data={data} />

            <Events />

            <Wine />
            
            <Footer />
        </div>
    );
}