// Components
import { Navbar } from "../components/shared/Navbar";
import { Exposure } from '../components/shared/Exposure';
import { Services } from "../components/shared/Services";
import { Footer } from "../components/shared/Footer";
import { Events } from "../components/shared/Events";
import { Wine } from "../components/shared/Wine";
import { Whatsapp } from '../components/shared/Whatsapp';
// Video & Img
import foodA from '../assets/video/foodA.mp4';
import foodB from '../assets/img/foodB.jpg';
import foodC from '../assets/img/foodC.jpg';
import foodD from '../assets/video/foodD.mp4';
import imgS1 from '../assets/img/food1.jpg';
import imgS2 from '../assets/video/food2.mp4';
import imgS3 from '../assets/img/food3.jpg';
// Interfaces
import { DataInt } from "../interfaces/services.model";
import { MultimediaInt } from "../interfaces/exposure.model";

export const Food = () => {

    const multimedia: MultimediaInt = {
        A: {
            src: foodA,
            h3: "Cusco Soir the bar",
            p: "2X1 in any tapas ordered",
            type: "video"
        },
        B: {
            src: foodB,
            h3: "Valencian traditional  choice",
            type: "image"
        },
        C: {
            src: foodC,
            h3: "Eating next to the Mediterranean",
            type: "image"
        },
        D: {
            src: foodD,
            h3:  "Local fusion deal",
            p: "Mediterranean fusion restaurant (also delivered)",
            type: "video"
        },
    }

    const data: DataInt = {
        h1: "New deals every week!",
        h2: "DO YOU NEED A CATERING?",
        S1: {
            link: "",
            img: imgS1,
            type: "image",
            h3: "Eat the paella, or cook it yourself",
        },
        S2: {
            link: "",
            img: imgS2,
            type: "video",
            h3: "Tacos in the old town",
        },
        S3: {
            link: "",
            img: imgS3,
            type: "image",
            h3: "the best italian deal in town",
            p: "Charming, cozy Italian trattoria with focaccia, fresh pasta & carpaccio opened everyday!",
        },
    }

    return(
        <div>
            <Navbar title={"Beyond food"} subtitle={"food"} />

            <Exposure data={multimedia}  />

            <Services data={data} />

            <Events />

            <Wine />
            
            <Whatsapp />

            <Footer />
        </div>
    );
}