// Images
import tipsy1 from "../../../assets/typsi-tour/tipsy1.jpg"
import tipsy2 from "../../../assets/typsi-tour/tipsy2.jpg"
import tipsy3 from "../../../assets/typsi-tour/tipsy3.jpg"
import tipsy4 from "../../../assets/typsi-tour/tipsy4.jpg"
// Interfaces
import { ExperiencesInt } from "../experiences"

export const tipsyTour: ExperiencesInt = {
    slug: "tipsy-tour",
    title: "Tipsy tour like a local",
    subtitle: {
        label: "Neighborhood",
        text: "El Carmen"
    },
    headline: "Raise your glass, and your Spanish with the tipsy tour, as every sip unleashes your language skills, toasting to fluency with every drink!",
    description: "Get ready to embark on an unforgettable journey through the vibrant world of Spanish drinks. This unique tour takes you on a delightful adventure, exploring the top four iconic beverages that are beloved by locals and travelers alike.",
    information: "An extraordinary expedition through the captivating world of Spanish beverages! We invite you to indulge in the rich heritage of Spanish wine, where you'll sample exquisite vintages from renowned vineyards, savoring the diverse flavors and aromas that make them truly exceptional. As our journey continues, we'll venture into the flourishing craft beer scene, where you'll have the opportunity to taste an array of handcrafted brews, each one a masterpiece of flavor and craftsmanship. Prepare to be enchanted by the effervescent joy of Agua de Valencia, a sparkling cocktail that blends the vibrant citrus flavors with the delightful fizz of cava and the warmth of local orange liqueur. Finally, we'll dive into the world of Vermut, a classic Spanish aperitif that tantalizes the palate with its herb-infused charm and delightful complexity. Led by our knowledgeable guide, you'll gain insights into the production techniques, cultural significance, and unique stories behind each of these beloved drinks. Get ready to raise your glasses and embark on the Tipsy Tour, a remarkable expedition celebrating the finest wines, craft beers, Agua de Valencia, and Vermut that Spain has to offer. Cheers to unforgettable moments and the spirited flavors of Spain!",
    multimedia: [
        {
            src: tipsy1,
            type: "image"
        },
        {
            src: tipsy2,
            type: "image"
        },
        {
            src: tipsy3,
            type: "image"
        },
        {
            src: tipsy4,
            type: "image"
        },
    ],
    highlights: [
        "Let loose, have fun, and feel your Spanish skills flow more fluently with each delightful sip",
        "Four drinks and one shot included",
        "Let loose, have fun, and feel Valencia like a local while making new friends"
    ],
    details: {
        age: "18-99",
        duration: "2 Hours",
        ticket: "Mobille ticket",
        meetengPoint: {
            link: "",
            label: "Carrer del Forn dels Apòstols, 4, Bajo derecha, 46001 Valencia"
        }, 
        language: "English, Spanish",
        accessibility: "On request",
        mobility: "On request",
        availably: "Everyday"
    },
    included: [
        {
            text: "One Vermout",
            state: true
        },
        {
            text: "Wine Glass",
            state: true
        },
        {
            text: "One agua de Valencia",
            state: true
        },
        {
            text: "Crafted beer",
            state: true
        },
        {
            text: "Surprise",
            state: true
        },
        {
            text: "Food",
            state: false
        },
        {
            text: "Water",
            state: false
        }
    ],
    takeWithYou: ["Your ID showing you are +18 years old"],
    groups: [
        {
            title: "Shared Group",
            type: "group",
            prices: {
                adults: 25,
                children: null
            },
            deapertureTime: ["20:00"]
        },
        {
            title: "Private Group",
            type: "private",
            prices: {
                adults: 25,
                children: null
            },
            deapertureTime: ["20:00"]
        }
    ],
    policies: "Cancel up to 72 hours in advance for a full refund",
    conditions: "Beyond Valencia has embraced the United Nations' 17 Sustainable Development Goals (SDGs) as a global framework for promoting sustainable development until 2030. As part of our commitment to sustainable tourism practices, we have incorporated four of these SDGs into our business operations: Good Health and Wellbeing, Industry, Innovation and Infrastructure, Sustainable Cities and Communities, and Climate Action.",
}