// Video & Img
import expA from '../../assets/img/tipsy.jpg';
import expB from '../../assets/img/home.jpg';
import expC from '../../assets/img/huerta.jpg';
import expD from '../../assets/video/expD.mp4';
import imgS1 from '../../assets/img/exp1.jpg';
import imgS3 from '../../assets/img/exp2.jpg';
import imgS2 from '../../assets/img/exp3.jpg';
// Interfaces
import { DataInt } from '../../interfaces/services.model';
import { MultimediaInt } from '../../interfaces/exposure.model';

export const multimediaExperiences: MultimediaInt[] = [
    {
        navigate: "/experiences/tipsy-tour",
        src: expA,
        h3: "Tipsy Tour like a local!",
        p: "El Carmen",
        span: "Neighborhood:",
        type: "image"
    },
    {
        src: expB,
        h3: "Bike Tour to the seaside",
        p: "El cabañal",
        span: "Neighborhood:",
        type: "image"
    },
    {
        src: expC,
        h3: "Bike tour to the Valencian Orchard",
        p: "La huerta valenciana",
        span: "Neighborhood:",
        type: "image"
    },
    {
        src: expD,
        h3: "All you can wine, while having a picnic",
        p: "Private and Regular",
        type: "video"
    },
]

export const dataExperiences: DataInt = {
    h1: "Meeting point in the City",
    h2: "PERSONALIZED EXPERIENCE",
    content: [
        {
            link: "",
            img: imgS1,
            type: "image",
            h3: "All you can wine while painting in the dark",
        },
        {
            link: "",
            img: imgS2,
            type: "image",
            h3: "Saturday we brunch on a boat",
        },
        {
            link: "",
            img: imgS3,
            type: "image",
            h3: "Private boat expeirence",
        }
    ]
}