// Images
import bikeTour1 from "../../../assets/bike-tour/bikeTour1.jpg"
import bikeTour2 from "../../../assets/bike-tour/bikeTour2.jpg"
import bikeTour3 from "../../../assets/bike-tour/bikeTour3.jpg"
import bikeTour4 from "../../../assets/bike-tour/bikeTour4.jpg"
// Interfaces
import { ExperiencesInt } from "../experiences"

export const bikeTour: ExperiencesInt = {
    slug: "bike-tour",
    title: "Bike tour to Valencia Orchard",
    subtitle: {
        label: "Neighborhood",
        text: "Huerta valenciana"
    },
    headline: "Embark on an immersive adventure through the picturesque Valencian Orchard with our guided bike tour! Join us for a captivating 2-hour journey as we pedal through the lush orchards, unveiling the secrets of this enchanting location",
    description: "Our knowledgeable guide will lead the way, sharing fascinating insights about the region's rich agricultural heritage, vibrant flora, and the traditional cultivation practices that have shaped this beautiful landscape. Immerse yourself in the scents and colors of the Valencian Orchard as you cycle through its charming trails, capturing the essence of this hidden gem",
    information: "Valencia's Huerta not only supplies the markets and restaurants of Valencia, but its abundant production of fruits and vegetables is exported to the rest of Spain and abroad. Its irrigation system, a legacy from Arab times, is a display of ingenuity that has been recognized by the FAO as a Globally Important Agricultural Heritage System (GIAHS). It has also given rise to a unique institution declared an Intangible Cultural Heritage: the Water Tribunal, which is responsible for its regulation, and which continues to meet every Thursday at noon at the gate of the Apostles of the Cathedral. Finally, it is important to remember that without this farmland and its rice paddies, the most universal of Valencian dishes, the paella, would not exist.",
    multimedia: [
        {
            src: bikeTour1,
            type: "image"
        },
        {
            src: bikeTour2,
            type: "image"
        },
        {
            src: bikeTour3,
            type: "image"
        },
        {
            src: bikeTour4,
            type: "image"
        },
    ],
    highlights: [
        "Discover Valencia's Huerta, a vast area of fertile farmland, vineyards, and rice paddies with traditional country houses and farmhouses.",
        "Enjoy a guided bike tour along the picturesque Green Ring, connecting the Huerta to the Mediterranean Sea, with charming country houses along the way.",
        "A Mediterranean journey on a vintage bike, adding a touch of retro charm to the experience.",
    ],
    details: {
        age: "0-99, max of 10 pp per group",
        duration: "3-4 hours",
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
}