// Images
import wine1 from "../../../assets/wine-painting/wine1.jpg"
import wine2 from "../../../assets/wine-painting/wine2.jpg"
import wine3 from "../../../assets/wine-painting/wine3.jpg"
import wine4 from "../../../assets/wine-painting/wine4.jpg"
// Interfaces
import { ExperiencesInt } from "../experiences"

export const winePainting: ExperiencesInt = {
    slug: "wine-painting",
    title: "All you can wine while painting in the dark",
    subtitle: {
        label: "Location",
        text: "City Centre"
    },
    headline: "Join us for a night of artistic bliss, where you'll paint in the dark, guided by neon lights, and enjoy unlimited wine (or your beverage of choice). No limits to your creativity as you create a stunning masterpiece under the enchanting glow of neon hues.",
    description: "This exhilarating adventure is not only a celebration of art and wine but also a perfect opportunity to bond and connect with others. Whether you come solo, as a couple, or with friends and family, the experience fosters a warm and inviting atmosphere, encouraging interaction, laughter, and camaraderie. Share stories, exchange creative ideas, and witness the magic of artistic expression come to life together. ",
    information: "Welcome to 'All You Can Wine, While Waiting in the Dark' – an extraordinary experience that combines the thrill of painting with the delight of unlimited wine in the heart of Valencia. No prior painting skills are required as our friendly and experienced guides will lead you through every step of the artistic journey. The enchanting ambiance, illuminated by neon lights, sets the stage for a truly unique and immersive painting session. As you let your creativity flow, the dimly lit setting adds an element of mystery and excitement, making the experience truly unforgettable. This dynamic adventure is not just about painting; it's about connecting with others and creating cherished memories. Perfect for couples, friends, and families, this interactive experience fosters a warm and inviting atmosphere, encouraging interactions, laughter, and camaraderie. The dim lighting allows for an intimate and romantic date night for couples, while friends and family can enjoy quality time together, celebrating special occasions or simply reveling in each other's company. As the neon lights reveal your glowing masterpieces, the room will be filled with awe and applause, celebrating each participant's unique journey. 'All You Can Wine, While Waiting in the Dark' is a celebration of art, wine, and human connection – an experience that leaves participants inspired, fulfilled, and with a vibrant painting to take home as a cherished souvenir of a night well spent. Come and join us for an unforgettable evening of creativity, laughter, and camaraderie in the heart of Valencia.",
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
        "You do not need to know anything about painting, we will guide you step by step until you create a work of art that you can take home as a beautiful memory",
        "Perfect for solo travelers as much as for couples, friends & family; sharing the joy of painting and wine with your loved ones and other locals in town",
        "Interact with others in a warm and inviting atmosphere, exchanging stories and ideas while celebrating each other's artistic achievements",
    ],
    details: {
        age: "12-99",
        duration: "4 Hours",
        ticket: "Mobille ticket",
        meetengPoint: {
            link: "",
            label: "C/Obispo Jaime Pérez, 13 Valencia"
        }, 
        language: "English, Spanish",
        accessibility: "On request",
        mobility: "On request",
        availably: "Thursdays, Friday, Saturday, Sunday"
    },
    included: [
        {
            text: "Painting materials",
            state: true
        },
        {
            text: "Guided art work 🖼️",
            state: true
        },
        {
            text: "Fun environment",
            state: true
        },
        {
            text: "Wine both red and white",
            state: true
        },
        {
            text: "Tips for the guide",
            state: false
        },
        {
            text: "Food",
            state: false
        }
    ],
    takeWithYou: ["Your ID showing you are +18 years old"],
    groups: [
        {
            title: "Shared Group",
            type: "group",
            prices: {
                adults: 60,
                children: 55
            },
            deapertureTime: ["16:30"]
        },
    ],
    policies: "Cancel up to 72 hours in advance for a full refund",
    conditions: "Beyond Valencia has embraced the United Nations' 17 Sustainable Development Goals (SDGs) as a global framework for promoting sustainable development until 2030. As part of our commitment to sustainable tourism practices, we have incorporated four of these SDGs into our business operations: Good Health and Wellbeing, Industry, Innovation and Infrastructure, Sustainable Cities and Communities, and Climate Action.",
    published: true
}