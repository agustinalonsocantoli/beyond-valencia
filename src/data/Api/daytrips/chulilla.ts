// Images
import chulilla1 from "../../../assets/chulilla/chulilla1.jpg"
import chulilla2 from "../../../assets/chulilla/chulilla2.jpg"
import chulilla3 from "../../../assets/chulilla/chulilla3.jpg"
import chulilla4 from "../../../assets/chulilla/chulilla4.jpg"
// Interfaces
import { DaystripsInt } from "../daytrips"

export const chulilla: DaystripsInt = {
    slug: "chulilla",
    title: "Chulilla and the hanging bridges",
    subtitle: {
        label: "Destination",
        text: "Chulilla"
    },
    headline: "This reserve is considered one of the most beautiful places in the Region of Valencia and is home to a multitude of attractions for locals and visitors.",
    description: "Embark on an immersive adventure through the picturesque Valencian Orchard with our guided bike tour! Join us for a captivating 2-hour journey as we pedal through the lush orchards, unveiling the secrets of this enchanting location.",
    information: "Embark on an exciting day trip from Valencia to Chulilla, nestled in the captivating region of La Serranía. Departing at 10:00 am, our journey will take us through the picturesque landscapes of inner Valencia, unveiling the beauty of this hidden gem. Upon arrival, a knowledgeable guide will lead us on a guided route, showcasing the stunning geological formations, including the remarkable Hoces of the Turia River and the surrounding mountains. After the informative tour, you'll have time to explore the charming town, savor a delightful meal, and immerse yourself in the authentic ambiance. As the afternoon approaches, we'll make our way back to Valencia, filled with unforgettable memories and a deeper appreciation for the natural wonders of Chulilla.",
    multimedia: [
        {
            src: chulilla1,
            type: "image"
        },
        {
            src: chulilla2,
            type: "image"
        },
        {
            src: chulilla3,
            type: "image"
        },
        {
            src: chulilla4,
            type: "image"
        },
    ],
    highlights: [
        "Guided Route and Cultural Insights",
        "Free Time to Explore and Savor",
        "Stunning geological formations, such as the Hoces of the Turia River, that have shaped the landscape of Chulilla",
        "Sharing fascinating facts about the area's heritage, cultural elements, and the unique ecosystem that thrives within"
    ],
    details: {
        age: "0-99",
        duration: "7-8 hours",
        ticket: "Mobille ticket",
        meetengPoint: {
            link: "https://goo.gl/maps/HTMT4BSZGmjBdg3P8",
            label: "Carrer del Forn dels Apòstols, 4, Bajo derecha, 46001 Valencia"
        }, 
        language: "English, Spanish",
        accessibility: "On request",
        mobility: "On request",
        availably: "Everyday"
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
            text: "Snacks",
            state: true
        },
        {
            text: "Meals",
            state: true
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
                adults: 130,
                children: 123
            },
            deapertureTime: ["10:00"]
        },
        {
            title: "Private Group",
            type: "private",
            prices: {
                adults: 178,
                children: 161
            },
            deapertureTime: ["10:00"]
        }
    ],
    policies: "Cancel up to 72 hours in advance for a full refund",
    conditions: "Beyond Valencia has embraced the United Nations' 17 Sustainable Development Goals (SDGs) as a global framework for promoting sustainable development until 2030. As part of our commitment to sustainable tourism practices, we have incorporated four of these SDGs into our business operations: Good Health and Wellbeing, Industry, Innovation and Infrastructure, Sustainable Cities and Communities, and Climate Action.",
    published: true
}