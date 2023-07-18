// Images
import private1 from "../../../assets/private-boat/private1.jpg"
import private2 from "../../../assets/private-boat/private2.jpg"
import private3 from "../../../assets/private-boat/private3.jpg"
import private4 from "../../../assets/private-boat/private4.jpg"
// Interfaces
import { ExperiencesInt } from "../experiences"

export const privateBoat: ExperiencesInt = {
    slug: "private-boat",
    title: "Private boat expeirence",
    subtitle: {
        label: "Location",
        text: "Marina de Valencia"
    },
    headline: "Embrace Valencia's Nautical Culture in Exquisite Luxury!",
    description: "Embark on an opulent 8-hour sailing adventure with a private experience in the Valencian Coast, indulging in the epitome of exclusivity and seafaring elegance of the Mediterranean Sea. In the morning departing from La Marina de Valencia, the heart of the city's maritime heritage, our private sailboat excursion offers an extraordinary escape, celebrating traditional sailing culture while pampering you with mimosas and delectable appetizers. Savor the breathtaking Mediterranean views and embrace the true essence of Valencia's nautical identity on this luxurious journey",
    information: "Our expertly prepared staff will cater to your every need, serving refreshing mimosas and delectable appetizers, creating the ultimate brunch ambiance on the water. An unforgettable blend of relaxation, luxury, and tantalizing flavors, all set against the picturesque backdrop of Valencia's glistening sea. . This 8-hour private voyage promises an unforgettable celebration of traditional sailing, fine flavors, and cherished company. Set sail on a journey that will leave you with cherished memories, evoking the allure of Valencia's vibrant maritime identity.  Is your ticket to an enchanting experience where relaxation, luxury, and delectable flavors come together on the sun-kissed waters of the Mediterranean Sea. Is an opportunity to connect with the sailboat adventure that pays homage to the rich sailing traditions that shaped Valencia's culture for centuries, giving you a genuine connection to the city's seafaring roots. An experience that invites you to embrace the elegance of sailing, while enjoying the finest flavors and experiences Valencia has to offer.",
    multimedia: [
        {
            src: private1,
            type: "image"
        },
        {
            src: private2,
            type: "image"
        },
        {
            src: private3,
            type: "image"
        },
        {
            src: private4,
            type: "image"
        },
    ],
    highlights: [
        "Experience the Mediterranean Sea like no other, enjoying the exclusive company of your loved ones, creating unforgettable memories in the intimate ambiance of our meticulously crafted sailboat",
        "Eight hours of sailing bliss allows you to fully immerse in the beauty of the Mediterranean Sea and its captivating coastline. With more time to explore, relax, and indulge, this private voyage promises an all-encompassing nautical experience like is done in the Costa Blanca and its privileged shore",
        "Unmatched Luxury and Elegance: 'On Saturday We Brunch on a Boat' goes beyond traditional sailing ventures, elevating your journey with unparalleled luxury. Be treated to a delightful brunch affair, expertly prepared mimosas, and a crew that caters to your every desire, ensuring an experience of exquisite elegance",
        "Navigating Valencia's Heritage: Departing from La Marina de Valencia, the heart of the city's seafaring history, this private sailboat excursion connects you to Valencia's rich nautical culture. As our skilled crew navigates the waters, you'll embrace the authenticity and allure of centuries-old sailing traditions",
    ],
    details: {
        age: "0-99",
        duration: "8 Hours",
        ticket: "Mobille ticket",
        meetengPoint: {
            link: "",
            label: "Marina Valencia – Dársena Norte, Carrer del Moll de la Duana, S/N, Local A3, 46024 Valencia"
        }, 
        language: "English, Spanish",
        accessibility: "On request",
        mobility: "On request",
        availably: "Saturday and Sunday"
    },
    included: [
        {
            text: "An exclusive 8-hour private sailing journey on an elegantly designed sailboat",
            state: true
        },
        {
            text: "A delectable brunch experience featuring mimosas and gourmet appetizers",
            state: true
        },
        {
            text: "A dedicated crew catering to your needs, ensuring a luxurious and seamless voyage",
            state: true
        },
        {
            text: "An unforgettable connection to Valencia's prestigious nautical heritage, celebrating seafaring elegance in utmost privacy",
            state: true
        }
    ],
    takeWithYou: ["Your ID showing you are +18 years old"],
    groups: [
        {
            title: "Private Group",
            type: "private",
            prices: {
                adults: 378,
                children: 210
            },
            deapertureTime: ["10:00"]
        }
    ],
    policies: "Cancel up to 72 hours in advance for a full refund",
    conditions: "Beyond Valencia has embraced the United Nations' 17 Sustainable Development Goals (SDGs) as a global framework for promoting sustainable development until 2030. As part of our commitment to sustainable tourism practices, we have incorporated four of these SDGs into our business operations: Good Health and Wellbeing, Industry, Innovation and Infrastructure, Sustainable Cities and Communities, and Climate Action.",
    published: true
}