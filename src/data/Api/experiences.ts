
// Interfaces
import { MultimediaInt } from "../../interfaces/exposure.model";
import { OrdersGroupsInt } from "../../interfaces/books.model";
// Experiences
import { tipsyTour } from "./experiences/tipsyTour";
import { bikeRide } from "./experiences/bikeRide";
import { bikeTour } from "./experiences/bikeTour";
import { winePicnic } from "./experiences/winePicnic";
import { winePainting } from "./experiences/winePainting";
import { brunchBoat } from "./experiences/brunchBoat";
import { privateBoat } from "./experiences/privateBoat";

export interface ExperiencesInt {
    slug: string;
    title: string;
    subtitle: {
        label: string;
        text: string;
    }
    headline: string;
    description: string;
    information: string;
    multimedia: MultimediaInt[];
    highlights: string[];
    details: {
        age: string;
        duration: string;
        ticket: string;
        meetengPoint: {
            link: string,
            label: string,
        };
        language: string;
        accessibility: string;
        mobility: string;
        availably: string;
    };
    included:
        {
            text: string;
            state: boolean;
        }[] | null;
    takeWithYou: string[];
    groups: OrdersGroupsInt[];
    policies: string;
    conditions: string;
    published: boolean;
}

export const experiencesApi: ExperiencesInt[] = [
    tipsyTour,
    bikeRide,
    bikeTour,
    winePicnic,
    winePainting,
    brunchBoat,
    privateBoat
]