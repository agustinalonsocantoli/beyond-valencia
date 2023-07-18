// Images
import bike1 from "../../../assets/bike-ride/bike1.jpg"
import bike2 from "../../../assets/bike-ride/bike2.jpg"
import bike3 from "../../../assets/bike-ride/bike3.jpg"
import bike4 from "../../../assets/bike-ride/bike4.jpg"
// Interfaces
import { ExperiencesInt } from "../experiences"

export const bikeRide: ExperiencesInt = {
    slug: "bike-ride",
    title: "Bike ride to the seaside",
    subtitle: {
        label: "Neighborhood",
        text: "El Cabanyal"
    },
    headline: "Let’s go beyond the Valencian neighborhood that combines its heritage with the present while swimming in the 🏊‍♀️ Mediterranean Sea",
    description: "Come and explore the vibrant neighborhood of El Cabañal, the up-and-coming hotspot for remote workers and startups in Valencia! Our 2-hour guided bike tour will take you on a journey through the beach town of the city, departing from the Old Town and passing by the iconic City of Arts and Sciences, before arriving at El Cabañal",
    information: "Come and explore the vibrant neighborhood of El Cabañal, the up-and-coming hotspot for remote workers and startups in Valencia! Our 2-hour guided bike tour will take you on a journey through the beach town of the city, departing from the Old Town and passing by the iconic City of Arts and Sciences, before arriving at El Cabañal. As you ride through the charming streets of El Cabañal, you'll witness its unique blend of old-world charm and modern innovation. This local and historic neighborhood is transforming into a hub for creativity and entrepreneurship, making it a must-see destination for any traveler to Valencia. You'll have the opportunity to stop and take pictures, and even interact with the friendly locals. ",
    multimedia: [
        {
            src: bike1,
            type: "image"
        },
        {
            src: bike2,
            type: "image"
        },
        {
            src: bike3,
            type: "image"
        },
        {
            src: bike4,
            type: "image"
        },
    ],
    highlights: [
        "Exploring the vibrant neighborhood of El Cabañal, a unique blend of old-world charm and modern innovation.",
        "Witnessing the transformation of this historic neighborhood into a hub for creativity and entrepreneurship, making it a must-see destination for any traveler to Valencia.",
        "Riding through the charming streets of El Cabañal, passing by its local shops, cafes, and markets.",
        "Enjoying a leisurely bike ride through Valencia, passing by the iconic City of Arts and Sciences and taking in the beautiful scenery along the way.",
        "Having the opportunity to stop and take pictures, interact with the friendly locals, and soak up the unique atmosphere of El Cabañal."
    ],
    details: {
        age: "0-99, max of 10 pp per group",
        duration: "2 Hours",
        ticket: "Mobille ticket",
        meetengPoint: {
            link: "https://goo.gl/maps/HTMT4BSZGmjBdg3P8",
            label: "Carrer del Forn dels Apòstols, 4, Bajo derecha, 46001 Valencia"
        }, 
        language: "English, Spanish",
        accessibility: "On request",
        mobility: "On request",
        availably: "From Monday to Sunday "
    },
    included: [
        {
            text: "Good quality bike",
            state: true
        },
        {
            text: "Tour guide",
            state: true
        },
        {
            text: "Pictures support",
            state: true
        },
        {
            text: "Tips for the guide",
            state: false
        },
        {
            text: "Food and beverages",
            state: false
        },
    ],
    takeWithYou: ["Conformable cloth, Confortable Shoes, Curious 👀  mindset"],
    groups: [
        {
            title: "Shared Group",
            type: "group",
            prices: {
                adults: 36,
                children: 24
            },
            deapertureTime: ["10:00", "12:00", "16:00"]
        },
        {
            title: "Private Group",
            type: "private",
            prices: {
                adults: 55,
                children: 42
            },
            deapertureTime: ["10:00", "12:00", "16:00"]
        }
    ],
    policies: "Cancel up to 72 hours in advance for a full refund",
    conditions: "Beyond Valencia has embraced the United Nations' 17 Sustainable Development Goals (SDGs) as a global framework for promoting sustainable development until 2030. As part of our commitment to sustainable tourism practices, we have incorporated four of these SDGs into our business operations: Good Health and Wellbeing, Industry, Innovation and Infrastructure, Sustainable Cities and Communities, and Climate Action.",
    published: true
}