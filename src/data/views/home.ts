// Video & Img
import exp from '../../assets/img/experiences.jpg';
import day from '../../assets/img/dayTrip.jpg';
import food from '../../assets/img/fyd.jpg';
import expW from '../../assets/img/experiences.webp';
import dayW from '../../assets/img/dayTrip.webp';
import foodW from '../../assets/img/fyd.webp';
// Interface
import { DataInt } from '../../interfaces/services.model';


export const dataHome: DataInt = {
    h1: "Easy, safe and unique... #Valencia",
    h2: "LOCKERS & BIKE RENTALS",
    navigate: "/more-services",
    content: [
        {
            link: "/experiences",
            img: exp,
            imgW: expW,
            type: "image",
            h3: "Experiences",
            p: "Carefully selected and exclusive experiences in Valencia capital city",
        },
        {
            link: "daytrips",
            img: day,
            imgW: dayW,
            type: "image",
            h3: "Day trips",
            p: "Exploring locations out from the box, and out from the city centre",
        },
        {
            link: "",
            img: food,
            imgW: foodW,
            type: "image",
            h3: "Food & Dining",
            p: "Access to the best deals in town at run by local spots with authenticity",
        }
    ]
}