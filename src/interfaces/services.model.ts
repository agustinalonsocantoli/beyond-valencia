export interface DataInt {
    h1: string;
    h2: string;
    navigate?: string;
    content: ContentInt[]
}

export interface ContentInt {
    link: string;
    img: string;
    imgW?: string;
    type: string;
    h3: string;
    p?: string;
    span?: string;
}