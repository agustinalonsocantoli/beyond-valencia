import { ReactElement } from "react";

export interface DataInt {
    h1: string;
    h2: string | ReactElement;
    S1: {
        link: string;
        img: string;
        imgW?: string;
        type: string;
        h3: string;
        p?: string;
        span?: string;
    }
    S2: {
        link: string;
        img: string;
        imgW?: string;
        type: string;
        h3: string;
        p?: string;
        span?: string;
    }
    S3: {
        link: string;
        img: string;
        imgW?: string;
        type: string;
        h3: string;
        p?: string;
        span?: string;
    }
}