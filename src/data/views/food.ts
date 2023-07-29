// Video & Img
import foodA from '../../assets/video/foodA.mp4';
import foodB from '../../assets/img/foodB.jpg';
import foodC from '../../assets/img/foodC.jpg';
import foodD from '../../assets/video/foodD.mp4';
import imgS1 from '../../assets/img/food1.jpg';
import imgS2 from '../../assets/video/food2.mp4';
import imgS3 from '../../assets/img/food3.jpg';
// Interfaces
import { ContentInt } from '../../interfaces/services.model';
import { MultimediaInt } from '../../interfaces/exposure.model';

export const multimediaFood: MultimediaInt[] = [
    {
        src: foodA,
        h3: "Cusco Soir the bar",
        p: "2X1 in any tapas ordered",
        type: "video"
    },
    {
        src: foodB,
        h3: "Valencian traditional  choice",
        type: "image"
    },
    {
        src: foodC,
        h3: "Eating next to the Mediterranean",
        type: "image"
    },
    {
        src: foodD,
        h3: "Local fusion deal",
        p: "Mediterranean fusion restaurant (also delivered)",
        type: "video"
    },
]

export const contentFood: ContentInt[] = [
    {
        link: "",
        img: imgS1,
        type: "image",
        h3: "Eat the paella, or cook it yourself",
    },
    {
        link: "",
        img: imgS2,
        type: "video",
        h3: "Tacos in the old town",
    },
    {
        link: "",
        img: imgS3,
        type: "image",
        h3: "the best italian deal in town",
        p: "Charming, cozy Italian trattoria with focaccia, fresh pasta & carpaccio opened everyday!",
    }
]
