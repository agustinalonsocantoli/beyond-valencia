// Images
import madrid1 from "../../../assets/madrid/madrid1.jpg"
import madrid2 from "../../../assets/madrid/madrid2.jpg"
import madrid3 from "../../../assets/madrid/madrid3.jpg"
import madrid4 from "../../../assets/madrid/madrid4.jpg"
// Interfaces
import { DaystripsInt } from "../daytrips"

export const madrid: DaystripsInt = {
    slug: "madrid",
    title: "Private transfer to Madrid and curated experience",
    subtitle: {
        label: "Destination",
        text: "Madrid"
    },
    headline: "Embrace the Spanish Capital from Valencia in an exclusive round trip.",
    description: "Embark on an exhilarating 2-day journey from Valencia to the bustling streets of Madrid with our \"Madrid in 2 Days\" experience. This all-inclusive trip includes roundtrip transportation, a Madrid City Card offering discounts and skip-the-line access to major attractions, a delightful dinner, and a captivating city tour. Immerse yourself in the heritage, culture, and vibrant atmosphere of both cities, making unforgettable memories along the way.",
    information: "Embark on a remarkable 2-day journey from Valencia to Madrid, as we curate an unforgettable adventure that encapsulates the best of both magnificent cities. Experience the ease of seamless travel and let us take care of the logistics while you revel in the splendors of Madrid. Delight in scrumptious dining experiences that showcase the delectable flavors of Spain, savoring every bite of authentic cuisine that will tantalize your taste buds. As you wander through Madrid's captivating streets, you'll be enchanted by the city's unique charm and vibrant allure. Immerse yourself in the cultural heritage that spans centuries, from the iconic landmarks of the Art Walk, including the Prado, Thyssen-Bornemisza, and Reina Sofía museums, to the majestic views from the Teleférico cable car and the Faro de Moncloa observation deck. Unleash your curiosity at the Liria Palace and other attractions that await you with the exclusive Madrid City Card, granting you access to discounts and skip-the-line entrances.",
    multimedia: [
        {
            src: madrid1,
            type: "image"
        },
        {
            src: madrid2,
            type: "image"
        },
        {
            src: madrid3,
            type: "image"
        },
        {
            src: madrid4,
            type: "image"
        },
    ],
    highlights: [
        "Seamless Journey: Enjoy comfortable roundtrip transportation from Valencia to Madrid, ensuring a stress-free travel experience",
        "Madrid City Card: Unlock the city's treasures with exclusive discounts and skip-the-line entrances to top tourist attractions, museums, and leisure activities",
        "Gourmet Delights: Delight your taste buds with a delectable dinner, savoring the flavors of Spanish cuisine at a local restaurant",
        "Captivating City Tour: Discover the charm and history of Madrid with a guided city tour, exploring its iconic landmarks and hidden gems",
        "Immerse in one the greatest capital of the world, unlocking Madrid's Rich Heritage and Vibrant European Vibe!",
    ],
    details: {
        age: "18-99",
        duration: "2 days, One night",
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
            text: "Roundtrip transportation between Valencia and Madrid for a seamless and enjoyable journey",
            state: true
        },
        {
            text: "Madrid City Card with access to exclusive discounts and skip-the-line entrances at selected attractions",
            state: true
        },
        {
            text: "A delightful dinner at a local restaurant, showcasing the delectable flavors of Spanish cuisine",
            state: true
        },
        {
            text: "Captivating city tour to explore the rich history and vibrant culture of Madrid",
            state: true
        },
        {
            text: "Accommodation is not included",
            state: true
        },
    ],
    takeWithYou: ["Confortable shoes, Mosquito repellent, Sunblock, Light Clothing"],
    groups: [
        {
            title: "Shared Group",
            type: "group",
            prices: {
                adults: 585,
                children: 240
            },
            deapertureTime: ["08:00"]
        },
        {
            title: "Private Group",
            type: "private",
            prices: {
                adults: 698,
                children: 280
            },
            deapertureTime: ["08:00"]
        }
    ],
    policies: "Cancel up to 72 hours in advance for a full refund",
    conditions: "Beyond Valencia has embraced the United Nations' 17 Sustainable Development Goals (SDGs) as a global framework for promoting sustainable development until 2030. As part of our commitment to sustainable tourism practices, we have incorporated four of these SDGs into our business operations: Good Health and Wellbeing, Industry, Innovation and Infrastructure, Sustainable Cities and Communities, and Climate Action.",
    published: true
}