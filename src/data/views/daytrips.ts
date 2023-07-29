// Video & Img
import imgS2 from '../../assets/img/dayA.jpg';
import dayB from '../../assets/img/sunset.jpg';
import dayC from '../../assets/img/albufera.jpg';
import dayD from '../../assets/img/villareal.jpg';
import imgS1 from '../../assets/img/day1.jpg';
import dayA from '../../assets/img/day2.jpg';
import imgS3 from '../../assets/img/day3.jpg';
// Interfaces
import { ContentInt } from '../../interfaces/services.model';
import { MultimediaInt } from '../../interfaces/exposure.model';

export const multimediaDaytrips: MultimediaInt[] = [
    {
        navigate: "/daytrips/chulilla",
        src: dayA,
        h3: "Chulilla and the hanging bridges",
        p: "Chulilla",
        span: "Destination:",
        type: "image"
    },
    {
        navigate: "/daytrips/sunset",
        src: dayB,
        h3: "Sunset Experience",
        p: "La Albufera Park",
        span: "Destination:",
        type: "image"
    },
    {
        navigate: "/daytrips/albufera",
        src: dayC,
        h3: "Half a day in la Albufera departing at 10:00am",
        p: "La Albufera Park (from Valencia)",
        span: "Destination:",
        type: "image"
    },
    {
        navigate: "/daytrips/villareal",
        src: dayD,
        h3: "Villareal Football Club in one day",
        p: "Villarreal (with transportation, meals and guided tour included)",
        span: "Destination:",
        type: "image"
    },
]

export const contentDaytrips: ContentInt[] = [
    {
        link: "/daytrips/visiting-winary",
        img: imgS1,
        type: "image",
        h3: "Visiting three wineries in one day",
    },
    {
        link: "/daytrips/madrid",
        img: imgS2,
        type: "image",
        h3: "Private transfer to Madrid, curated experiences available",
    },
    {
        link: "/daytrips/boat",
        img: imgS3,
        type: "image",
        h3: "Private dining & sunset on a boat",
    }
]
