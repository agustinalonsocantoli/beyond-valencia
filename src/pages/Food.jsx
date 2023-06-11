// Components
import { Navbar } from '@/components/Shared/Navbar';
import { Exposure } from '../components/Shared/Exposure';
import { Services } from "../components/Shared/Services";
import { Footer } from "../components/Shared/Footer";
import { Events } from "../components/Shared/Events";
import { Wine } from "../components/Shared/Wine";
import { Whatsapp } from '../components/Shared/Whatsapp';
// Video & Img
import foodA from '../assets/video/foodA.mp4';
import foodB from '../assets/img/foodB.jpg';
import foodC from '../assets/img/foodC.jpg';
import foodD from '../assets/video/foodD.mp4';
import imgS1 from '../assets/img/food1.jpg';
import imgS2 from '../assets/video/food2.mp4';
import imgS3 from '../assets/img/food3.jpg';

export const Food = () => {

    const multimedia = {
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

    const data = {
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