import { ProductInt } from "../../interfaces/orders.model";
import { TypeProductEnum } from "../../shared/types";

export const bikesProducts: ProductInt[] = [
    {   
        title: "All day",
        type: TypeProductEnum.AllDAY,
        description: 'Todo el día',
        select: 'All-Day',
        price: {
            small: 14,
            medium: 14,
        }
    },
    {   
        title: "3 days",
        type: TypeProductEnum.DAYS,
        description: 'Tres días',
        select: 'Three-Days',
        price: {
            small: 38,
            medium: 38,
        }
    },
]