// Images
import sunset1 from "../../../assets/sunset/sunset1.jpg"
import sunset2 from "../../../assets/sunset/sunset2.jpg"
import sunset3 from "../../../assets/sunset/sunset3.jpg"
import sunset4 from "../../../assets/sunset/sunset4.jpg"
// Interfaces
import { DaystripsInt } from "../daytrips"

export const sunset: DaystripsInt = {
    slug: "sunset",
    title: "Albufera SunSet Experience",
    subtitle: {
        label: "Destination",
        text: "El Palmar"
    },
    headline: "Delight in the beauty of La Albufera Sunset as you embrace the serenity of a natural canvas.",
    description: "La Albufera Sunset, a captivating boat journey through the serene waterways of Albufera Park near Valencia. As the sun gracefully sets, witness the sky painted in vibrant hues, creating a breathtaking backdrop. Savor local wines, embrace the tranquility of the surroundings, and create cherished memories amidst the enchanting beauty of nature's masterpiece.",
    information: "Albufera Park offers a remarkable value as a natural sanctuary, providing a haven for diverse ecosystems and wildlife within close proximity to Valencia. Its scenic beauty and tranquil ambiance allow visitors to escape the city's hustle and bustle, connecting with nature and finding serenity. Experience an unforgettable journey, departing from Valencia at 7:00 pm, as we set sail for the enchanting Sunset in La Albufera experience. As the sun begins its descent, casting a warm glow over the horizon, we'll embark on a captivating boat journey through the serene waterways of La Albufera. Witness nature's canvas unfolding before your eyes, as the sun gracefully sets and bathes the landscape in golden hues. ",
    multimedia: [
        {
            src: sunset1,
            type: "image"
        },
        {
            src: sunset2,
            type: "image"
        },
        {
            src: sunset3,
            type: "image"
        },
        {
            src: sunset4,
            type: "image"
        },
    ],
    highlights: [
        "Experience the awe-inspiring beauty of a sunset in La Albufera",
        "Cruise through the serene waterways of La Albufera, allowing you to immerse yourself in the peaceful ambiance and connect with the natural surroundings, as you revel in the tranquility of the sunset hours."
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
            text: "Wine",
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
                adults: 68,
                children: 52
            },
            deapertureTime: ["19:00"]
        },
        {
            title: "Private Group",
            type: "private",
            prices: {
                adults: 110,
                children: 89
            },
            deapertureTime: ["19:00"]
        }
    ],
    policies: "Cancel up to 72 hours in advance for a full refund",
    conditions: "Beyond Valencia has embraced the United Nations' 17 Sustainable Development Goals (SDGs) as a global framework for promoting sustainable development until 2030. As part of our commitment to sustainable tourism practices, we have incorporated four of these SDGs into our business operations: Good Health and Wellbeing, Industry, Innovation and Infrastructure, Sustainable Cities and Communities, and Climate Action.",
}