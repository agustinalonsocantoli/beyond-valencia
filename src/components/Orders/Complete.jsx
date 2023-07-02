// React
import { useState } from "react";
import { CodeOrders } from "./CodeOrders";
import { FormBook } from "../Shared/Form";

export const Complete = (props) => {
    const { title, 
        subtitle, 
        handleInput, 
        handleSubmit, 
        totalPay, 
        setTotalPay, 
        subTotal, 
        notifySuccess, 
        notifyError,
        data,
        small,
        medium,
        normal,
        setCurrentOrder
    } = props;
    const [ discount, setDiscount ] = useState(0);
    const [ codeDiscount, setCodeDiscount ] = useState(null);
    const [ isDiscountAdd, setIsDescountAdd ] = useState(false);
    const codesFive = import.meta.env.VITE_BASE_DISCOUNT_FIVE.split(',')
    const codesTen = import.meta.env.VITE_BASE_DISCOUNT_TEN.split(',')
    const codesTwenty = import.meta.env.VITE_BASE_DISCOUNT_TWENTY.split(',')

    const handleGetCode = ({ target }) => {
        const code = target?.value?.toUpperCase();
        setCodeDiscount(code);
    }
    
    const addedDiscount = (porcent, code) => {
        setDiscount(porcent)
        setTotalPay(subTotal - ((subTotal * (porcent)) / 100))
        setCurrentOrder(prev => ({...prev, discountCode: code}));
        setIsDescountAdd(true);
        notifySuccess("Congratulations you got the discount");
    };

    const validateCode = () => {
        if(!isDiscountAdd) {
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
                handleInput={handleInput} 
                labelButton={totalPay <= 0 ? "SEND ORDER" : "PAY NOW"}
                nameClass="contents_complete-form"
                />
            </div>
        </div>
    );
};