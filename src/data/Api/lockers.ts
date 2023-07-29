import { ProductInt } from "../../interfaces/orders.model";
import { TypeProductEnum } from "../../shared/types";

export const lockersProducts: ProductInt[] = [
    {
        type: TypeProductEnum.HOURS,
        title: '2 hours',
        description: '2 horas',
        select: '2-Hours',
        price: {
            small: 3,
            medium: 5,
            normal: 8
        }
    },
    {
        type: TypeProductEnum.AllDAY,
        title: 'All day',
        description: 'Todo el día',
        select: 'All-Day',
        price: {
            small: 5,
            medium: 8,
            normal: 12
        }
    },
    {
        type: TypeProductEnum.LONGER,
        title: 'Longer time?',
        description: '¿Cuántos días necesitas?',
        select: ['2-Days', '3-Days', '4-Days', '5-Days', '6-Days', '7-Days', '8-Days', '9-Days', '10-Days'],
        price: {
            small: 4,
            medium: 7,
            normal: 11
        }
    },
]