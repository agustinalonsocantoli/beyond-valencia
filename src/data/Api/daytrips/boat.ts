// Images
import boat1 from "../../../assets/boat/boat1.jpg"
import boat2 from "../../../assets/boat/boat2.jpg"
import boat3 from "../../../assets/boat/boat3.jpg"
import boat4 from "../../../assets/boat/boat4.jpg"
// Interfaces
import { DaystripsInt } from "../daytrips"

export const boat: DaystripsInt = {
    slug: "boat",
    title: "Private Dining and Sunset in a boat",
    subtitle: {
        label: "Location",
        text: "Marina de Valencia"
    },
    headline: "An Exquisite 4-Hour Nautical Escape",
    description: "Embark on an enchanting 4-hour private sailing experience, where relaxation, luxury, and delectable flavors come together on the sun-kissed waters of the Mediterranean Sea. Our expertly prepared staff will cater to your every need, ensuring your journey is filled with indulgence and delight. Sip on refreshing wines and savor a selection of delectable delicatessen, all while basking in the warm glow of Valencia's glistening sunset. This unforgettable voyage promises an extraordinary blend of serenity, fine flavors, and cherished company, leaving you with cherished memories that evoke the allure of Valencia's vibrant maritime identity.",
    information: "Set sail on a 4-hour private sailing experience, basking in the serenity and allure of the Mediterranean Sea as the sun sets over Valencia's glistening waters. Our expert staff will attend to your every need, ensuring a luxurious journey filled with delectable flavors and free-flowing wines. Delight in a curated selection of delicatessen as you relax amidst the beauty of Valencia's vibrant maritime identity. This intimate and exclusive sailing adventure promises cherished memories, timeless traditions, and an unforgettable connection to the heart of Valencia's nautical heritage. Experience the epitome of relaxation and luxury on a private sailing serenade, departing from La Marina de Valencia. With a carefully crafted menu of delectable treats and free-flowing wines, this 4-hour voyage offers an unparalleled blend of enchantment and indulgence. Celebrate the magic of Valencia's coast at sunset, surrounded by cherished company and the beauty of traditional sailing. Let the sea breeze carry your worries away as you savor each moment on the sun-kissed waves, creating unforgettable memories that will linger in your heart for years to come.",
    multimedia: [
        {
            src: boat1,
            type: "image"
        },
        {
            src: boat2,
            type: "image"
        },
        {
            src: boat3,
            type: "image"
        },
        {
            src: boat4,
            type: "image"
        },
    ],
    highlights: [
        "Intimate Sunset Serenade: Experience an enchanting sunset sailing adventure with our private 4-hour excursion. As the sun paints the sky in warm hues, revel in the intimacy and wonder of Valencia's coast during this magical twilight voyage",
        "Gastronomic Bliss on the Waves: Four hours of culinary bliss awaits as you savor a delectable dining experience complemented by expertly crafted mimosas and gourmet delights. Our attentive crew will cater to your every need, ensuring a luxurious and personalized voyage",
        "Embrace Valencia's Nautical Legacy: Departing from La Marina de Valencia, the heart of the city's seafaring heritage, this private sailboat excursion connects you to the soulful essence of Valencia's nautical culture. Sail into the horizon as you honor the timeless spirit of sailing traditions",
        "A Memorable Private Escape: With only your closest companions, enjoy an intimate dining affair amidst the stunning backdrop of the Mediterranean sunset. Create cherished memories that will linger in your hearts long after the voyage ends",
    ],
    details: {
        age: "0-99",
        duration: "4 hours",
        ticket: "Mobille ticket",
        meetengPoint: {
            link: "",
            label: "Marina Valencia – Dársena Norte, Carrer del Moll de la Duana, S/N, Local A3, 46024 Valencia"
        }, 
        language: "English, Spanish",
        accessibility: "On request",
        mobility: "On request",
        availably: "Everyday"
    },
    included: [
        {
            text: "An exclusive 4-hour private dining and sunset sailing experience on an elegantly designed sailboat",
            state: true
        },
        {
            text: "A delectable dining affair featuring expertly prepared mimosas and gourmet delights",
            state: true
        },
        {
            text: "Crew providing personalized service throughout your voyage",
            state: true
        },
        {
            text: "An intimate connection to Valencia's esteemed nautical heritage, celebrating the beauty of the sunset over the Mediterranean",
            state: true
        },
    ],
    takeWithYou: ["Embark on a remarkable 2-day journey from Valencia to Madrid, as we curate an unforgettable adventure that encapsulates the best of both magnificent cities. Experience the ease of seamless travel and let us take care of the logistics while you revel in the splendors of Madrid. Delight in scrumptious dining experiences that showcase the delectable flavors of Spain, savoring every bite of authentic cuisine that will tantalize your taste buds"],
    groups: [
        {
            title: "Shared Group",
            type: "group",
            prices: {
                adults: 189,
                children: 178
            },
            deapertureTime: ["16:00"]
        },
        {
            title: "Private Group",
            type: "private",
            prices: {
                adults: 270,
                children: 210
            },
            deapertureTime: ["16:00"]
        }
    ],
    policies: null,
    conditions: "As you wander through Madrid's captivating streets, you'll be enchanted by the city's unique charm and vibrant allure. Immerse yourself in the cultural heritage that spans centuries, from the iconic landmarks of the Art Walk, including the Prado, Thyssen-Bornemisza, and Reina Sofía museums, to the majestic views from the Teleférico cable car and the Faro de Moncloa observation deck. Unleash your curiosity at the Liria Palace and other attractions that await you with the exclusive Madrid City Card, granting you access to discounts and skip-the-line entrances.",
    published: true
}