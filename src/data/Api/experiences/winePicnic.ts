// Images
import wine1 from "../../../assets/wine-picnic/wine1.jpg"
import wine2 from "../../../assets/wine-picnic/wine2.jpg"
import wine3 from "../../../assets/wine-picnic/wine3.jpg"
import wine4 from "../../../assets/wine-picnic/wine4.jpg"
// Interfaces
import { ExperiencesInt } from "../experiences"

export const winePicnic: ExperiencesInt = {
    slug: "wine-picnic",
    title: "All you can wine, while having a picnic",
    subtitle: {
        label: "Private experience",
        text: "Wine, local snacks and picnic set-up included"
    },
    headline: "Spent a great time with your partner, friends or famaily at one of the most iconic locations in Valencia surrounded by nature in a trully urban oasis, with the chance of chosing between the a beach set up or the Turia Park",
    description: "Spent a great time with visitors and locals at one of the most iconic locations in Valencia surrounded by nature in a trully urban oasis",
    information: "Welcome to the All-You-Can Wine Picnic in Turia Park or the Beach Side inn Valencia - a charming experience that brings together the vibrant flavors of local wines and the natural beauty of Turia Park. Settle into a cozy picnic spot amidst the lush greenery and meandering paths of this enchanting urban oasis. From crisp whites to robust reds, you'll have the opportunity to explore the diverse wine heritage of Valencia as you sip and savor each pour. Accompanying your wine journey is a carefully curated assortment of regional delicacies, showcasing the finest flavors of Valencia's culinary traditions. Immerse yourself in the captivating ambiance of Turia Park, savoring the wines, savoring the moment, and creating memories that will last a lifetime.",
    multimedia: [
        {
            src: wine1,
            type: "image"
        },
        {
            src: wine2,
            type: "image"
        },
        {
            src: wine3,
            type: "image"
        },
        {
            src: wine4,
            type: "image"
        },
    ],
    highlights: [
        "A unique chance to mingle with locals and visitors, and partake in an activity that resonates with the vibrant local culture.",
        "Discover the joy of doing something that locals also enjoy, forging connections, and creating memories that bridge the gap between traveler and resident.",
    ],
    details: {
        age: "18-99",
        duration: "2-3 hours",
        ticket: "Mobille ticket",
        meetengPoint: {
            link: "https://goo.gl/maps/HTMT4BSZGmjBdg3P8",
            label: "Carrer del Forn dels Apòstols, 4, Bajo derecha, 46001 Valencia"
        }, 
        language: "English, Spanish",
        accessibility: "On request",
        mobility: "On request",
        availably: "Anyday 24h previous booking"
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
    takeWithYou: ["Your ID showing you are +18 years old"],
    groups: [
        {
            title: "Shared Group",
            type: "group",
            prices: {
                adults: 98,
                children: null
            },
            deapertureTime: ["10:00", "18:00", "22:00"]
        }
    ],
    policies: "Cancel up to 72 hours in advance for a full refund",
    conditions: "Beyond Valencia has embraced the United Nations' 17 Sustainable Development Goals (SDGs) as a global framework for promoting sustainable development until 2030. As part of our commitment to sustainable tourism practices, we have incorporated four of these SDGs into our business operations: Good Health and Wellbeing, Industry, Innovation and Infrastructure, Sustainable Cities and Communities, and Climate Action.",
    published: true
}