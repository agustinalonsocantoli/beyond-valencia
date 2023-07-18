// Images
import villareal1 from "../../../assets/villareal/villareal1.jpg"
import villareal2 from "../../../assets/villareal/villareal2.jpg"
import villareal3 from "../../../assets/villareal/villareal3.jpg"
import villareal4 from "../../../assets/villareal/villareal4.jpg"
// Interfaces
import { DaystripsInt } from "../daytrips"

export const villareal: DaystripsInt = {
    slug: "villareal",
    title: "Villareal FC Experience in one day",
    subtitle: {
        label: "Destination",
        text: "Villarreal"
    },
    headline: "Celebrate the 100-year anniversary of the team that won the Champions League, while discovering its roots and contemporary vibe at the brand-new Ceramic Stadium",
    description: "Explore the brand-new Ceramic Stadium in a guided visit. Witness the inner workings of the club as you tour the changing rooms, football field, VIP boxes, and more. Delight in a traditional Valencian lunch, with meal choice at the club's exclusive restaurant, El Ceramista, where you'll experience a contemporary and football-inspired dining experience that captures the essence of Villa-real's present and future.",
    information: "Enjoy an authentic experience from the ❤ heart of Vila-real. Departing in the morning from Valencia's city centre, we will visit the stunning and brand- new Ceramic Stadium, enjoying a guided tour that will take us to the changing rooms, the football field, the visitors' bench, the press room, the VIP boxes, and much more. During the day we will have a chance to visit the official store and the surroundings of the stadium, right before having a unique proposal of Valencian cuisine at the Restaurant of the club called: El Ceramista; offering a unique, exclusive, and contemporary proposal of food and dining that also reflects the present and future Villa-real, combining the spirit of the football club, the team, and its community in an impressive showroom inspired by ceramic.",
    multimedia: [
        {
            src: villareal1,
            type: "image"
        },
        {
            src: villareal2,
            type: "image"
        },
        {
            src: villareal3,
            type: "image"
        },
        {
            src: villareal4,
            type: "image"
        },
    ],
    highlights: [
        "Guided visit to the Ceramic Stadium",
        "Roundtrip from Valencia",
        "Visit the official Club store",
        "Lunch with traditional Paella or a tasting plate",
        "Unlock exclusive information about the club",
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
            text: "Guided Visit",
            state: true
        },
        {
            text: "Transportation for roundtrip",
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
                adults: 89,
                children: 79
            },
            deapertureTime: ["10:00"]
        },
        {
            title: "Private Group",
            type: "private",
            prices: {
                adults: 153,
                children: 141
            },
            deapertureTime: ["10:00"]
        }
    ],
    policies: "Cancel up to 72 hours in advance for a full refund",
    conditions: "Beyond Valencia has embraced the United Nations' 17 Sustainable Development Goals (SDGs) as a global framework for promoting sustainable development until 2030. As part of our commitment to sustainable tourism practices, we have incorporated four of these SDGs into our business operations: Good Health and Wellbeing, Industry, Innovation and Infrastructure, Sustainable Cities and Communities, and Climate Action.",
    published: true
}