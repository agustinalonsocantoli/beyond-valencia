/* eslint-disable @typescript-eslint/no-explicit-any */
// React
import { useState } from "react";
// Components
import { CodeOrders } from "./CodeOrders";
import { FormBook } from "../shared/Form";
// Interfaces
import { OrdersDataInt } from "../../interfaces/orders.model";
import { notifyError, notifySuccess } from "../../shared/notify";

interface Props {
    title: string; 
    subtitle: string;
    handleSubmit: (action: any) => void; 
    totalPay: number; 
    setTotalPay: (action: number) => void; 
    subTotal: number; 
    data: OrdersDataInt;
    small: number;
    medium: number;
    normal: number;
    setCurrentOrder:(action: any) => void;
}

export const Complete = (props: Props) => {
    const { 
        title, 
        subtitle, 
        handleSubmit, 
        totalPay, 
        setTotalPay, 
        subTotal, 
        data,
        small,
        medium,
        normal,
        setCurrentOrder
    } = props;
    const [ discount, setDiscount ] = useState<number>(0);
    const [ codeDiscount, setCodeDiscount ] = useState<string | null>(null);
    const [ isDiscountAdd, setIsDescountAdd ] = useState<boolean>(false);
    const codesFive = import.meta.env.VITE_BASE_DISCOUNT_FIVE.split(',')
    const codesTen = import.meta.env.VITE_BASE_DISCOUNT_TEN.split(',')
    const codesTwenty = import.meta.env.VITE_BASE_DISCOUNT_TWENTY.split(',')

    const handleGetCode = ({ target }: any) => {
        const code = target?.value?.toUpperCase();
        setCodeDiscount(code);
    }
    
    const addedDiscount = (porcent: number, code: string) => {
        setDiscount(porcent)
        setTotalPay(subTotal - ((subTotal * (porcent)) / 100))
        setCurrentOrder((prev: any) => ({...prev, discountCode: code}));
        setIsDescountAdd(true);
        notifySuccess("Congratulations you got the discount");
    };

    const validateCode = () => {
        if(!isDiscountAdd && codeDiscount) {
            if(codesFive?.includes(codeDiscount)) {
                addedDiscount(5, codeDiscount)

            } else if(codesTen?.includes(codeDiscount)) {
                addedDiscount(10, codeDiscount)

            } else if(codesTwenty?.includes(codeDiscount)) {
                addedDiscount(20, codeDiscount)

            } else {
                notifyError("The code entered is not valid");
            }
        } else {
            notifyError("Just one code per order");
        }
    }

    return(
        <div className='contents_complete'>

            <div className="contents_complete-title">
                <h2>{title}</h2>
                <h3>{subtitle}</h3>
            </div>

            <div className="contents_complete-box">
                <CodeOrders
                small={small}
                medium={medium}
                normal={normal}
                subTotal={subTotal}
                discount={discount}
                totalPay={totalPay}
                handleGetCode={handleGetCode}
                validateCode={validateCode}
                data={data}
                />
                
                <FormBook
                handleSubmit={handleSubmit} 
                labelButton={totalPay <= 0 ? "SEND ORDER" : "PAY NOW"}
                nameClass="contents_complete-form"
                />
            </div>
        </div>
    );
};