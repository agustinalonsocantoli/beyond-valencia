// Images
import brunch1 from "../../../assets/brunch-boat/brunch1.jpg"
import brunch2 from "../../../assets/brunch-boat/brunch2.jpg"
import brunch3 from "../../../assets/brunch-boat/brunch3.jpg"
import brunch4 from "../../../assets/brunch-boat/brunch4.jpg"
// Interfaces
import { ExperiencesInt } from "../experiences"

export const brunchBoat: ExperiencesInt = {
    slug: "brunch-boat",
    title: "Saturday we have brunch on a boat",
    subtitle: {
        label: "Location",
        text: "Marina de Valencia"
    },
    headline: "A brunch experience like no other by the Mediterranean Sea!",
    description: "Step aboard our exclusive sailboat as we embark on a delightful four-hour brunch journey, departing from La Marina de Valencia – the closest and most central marina in Valencia. Bask in the warm Mediterranean sun, feel the gentle sea breeze, and indulge in a luxurious sailing experience along the stunning coast",
    information: "Our expertly prepared staff will cater to your every need, serving refreshing mimosas and delectable appetizers, creating the ultimate brunch ambiance on the water. An unforgettable blend of relaxation, luxury, and tantalizing flavors, all set against the picturesque backdrop of Valencia's glistening sea. Is your ticket to an enchanting experience where relaxation, luxury, and delectable flavors come together on the sun-kissed waters of the Mediterranean Sea. Is an opportunity to connect with the sailboat adventure that pays homage to the rich sailing traditions that shaped Valencia's culture for centuries, giving you a genuine connection to the city's seafaring roots. An experience that invites you to embrace the elegance of sailing, while enjoying the finest flavors and experiences Valencia has to offer.",
    multimedia: [
        {
            src: brunch1,
            type: "image"
        },
        {
            src: brunch2,
            type: "image"
        },
        {
            src: brunch3,
            type: "image"
        },
        {
            src: brunch4,
            type: "image"
        },
    ],
    highlights: [
        "An exclusive four-hour sailing journey on a meticulously crafted sailboat",
        "Mimosas and appetizers for a lavish brunch experience on the Mediterranean Sea",
        "A true connection to Valencia's prestigious sailing culture, embracing the elegance and exclusivity of this coastal gem",
    ],
    details: {
        age: "0-99",
        duration: "4 Hours",
        ticket: "Mobille ticket",
        meetengPoint: {
            link: "",
            label: "Marina Valencia – Dársena Norte, Carrer del Moll de la Duana, S/N, Local A3, 46024 Valencia"
        }, 
        language: "English, Spanish",
        accessibility: "On request",
        mobility: "On request",
        availably: "Saturdays"
    },
    included: null,
    takeWithYou: ["Your ID showing you are +18 years old"],
    groups: [
        {
            title: "Shared Group",
            type: "group",
            prices: {
                adults: 118,
                children: 98
            },
            deapertureTime: ["10:00"]
        },
        {
            title: "Private Group",
            type: "private",
            prices: {
                adults: 260,
                children: 198
            },
            deapertureTime: ["10:00"]
        }
    ],
    policies: "Cancel up to 72 hours in advance for a full refund",
    conditions: "Beyond Valencia has embraced the United Nations' 17 Sustainable Development Goals (SDGs) as a global framework for promoting sustainable development until 2030. As part of our commitment to sustainable tourism practices, we have incorporated four of these SDGs into our business operations: Good Health and Wellbeing, Industry, Innovation and Infrastructure, Sustainable Cities and Communities, and Climate Action.",
    published: true
}