
// Interfaces
import { MultimediaInt } from "../../interfaces/exposure.model";
import { OrdersGroupsInt } from "../../interfaces/books.model";
// Daytrips
import { villareal } from "./daytrips/villareal";
import { albufera } from "./daytrips/albufera";
import { sunset } from "./daytrips/sunset";
import { chulilla } from "./daytrips/chulilla";
import { winary } from "./daytrips/winary";
import { madrid } from "./daytrips/madrid";
import { boat } from "./daytrips/boat";

export interface DaystripsInt {
    slug: string;
    title: string;
    subtitle: {
        label: string | null;
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
        }[];
    takeWithYou: string[];
    groups: OrdersGroupsInt[];
    policies: string | null;
    conditions: string;
    published: boolean;
}

export const daytripsApi: DaystripsInt[] = [
    villareal,
    albufera,
    sunset,
    chulilla,
    winary,
    madrid,
    boat
]