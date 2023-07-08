export interface OrderBookInt {
    tourName: string;
    date: string;
    typeOrder: string;
    time: string;
    adults: number;
    children: number;
    infants: number;
    email: string;
    name: string;
    phone: string;
    comment?: string;
    discountCode?: string;
}

export interface OrdersGroupsInt {
    title: string,
    type: string,
    prices: string[],
    hours: string[]
}