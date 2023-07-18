// Images
import albufera1 from "../../../assets/albufera/albufera1.jpg"
import albufera2 from "../../../assets/albufera/albufera2.jpg"
import albufera3 from "../../../assets/albufera/albufera3.jpg"
import albufera4 from "../../../assets/albufera/albufera4.jpg"
// Interfaces
import { DaystripsInt } from "../daytrips"

export const albufera: DaystripsInt = {
    slug: "albufera",
    title: "Albufera in half a day",
    subtitle: {
        label: "Destination",
        text: "El Palmar"
    },
    headline: "Delve into Ecosystems, Culture, and Serenity on an Unforgettable Adventure!",
    description: "A Captivating journey from Valencia to La Albufera, a stunning natural park that combines breathtaking landscapes with rich cultural heritage.",
    information: "Departing at 10:00 am, we'll embark on a scenic drive along the picturesque coastline, immersing ourselves in the beauty of the Mediterranean. As we arrive at La Albufera, prepare to be enchanted by the serene atmosphere and diverse ecosystems that make this park a true oasis. Hop aboard a small boat and set sail on a guided tour, where you'll learn about the park's geology, observe fascinating wildlife, and discover the intricacies of the local flora and fauna. After the boat tour, we'll visit the charming town of Palmar, steeped in history and known for its traditional connection to agriculture and fishing. This half-day experience promises to leave you with unforgettable memories and a deeper connection to the wonders of La Albufera.",
    multimedia: [
        {
            src: albufera1,
            type: "image"
        },
        {
            src: albufera2,
            type: "image"
        },
        {
            src: albufera3,
            type: "image"
        },
        {
            src: albufera4,
            type: "image"
        },
    ],
    highlights: [
        "Exploring the vibrant neighborhood of El Cabañal, a unique blend of old-world charm and modern innovation",
        "Witnessing the transformation of this historic neighborhood into a hub for creativity and entrepreneurship, making it a must-see destination for any traveler to Valencia"
    ],
    details: {
        age: "0-99",
        duration: "4 hours",
        ticket: "Mobille ticket",
        meetengPoint: {
            link: "https://goo.gl/maps/HTMT4BSZGmjBdg3P8",
            label: "Carrer del Forn dels Apòstols, 4, Bajo derecha, 46001 Valencia"
        }, 
        language: "Spanish",
        accessibility: "On request",
        mobility: "On request",
        availably: "Everyday"
    },
    included: [
        {
            text: "Guided Visit",
            state: true
        },
        {
            text: "Transportation for roundtrip",
            state: true
        },
        {
            text: "Meals",
            state: false
        },
        {
            text: "Drinks",
            state: false
        },
        {
            text: "Sunblock",
            state: false
        },
    ],
    takeWithYou: ["Confortable shoes, Mosquito repellent, Sunblock, Light Clothing"],
    groups: [
        {
            title: "Shared Group",
            type: "group",
            prices: {
                adults: 59,
                children: 49
            },
            deapertureTime: ["10:00"]
        },
        {
            title: "Private Group",
            type: "private",
            prices: {
                adults: 85,
                children: 76
            },
            deapertureTime: ["10:00"]
        }
    ],
    policies: "Cancel up to 72 hours in advance for a full refund",
    conditions: "Beyond Valencia has embraced the United Nations' 17 Sustainable Development Goals (SDGs) as a global framework for promoting sustainable development until 2030. As part of our commitment to sustainable tourism practices, we have incorporated four of these SDGs into our business operations: Good Health and Wellbeing, Industry, Innovation and Infrastructure, Sustainable Cities and Communities, and Climate Action.",
    published: true
}