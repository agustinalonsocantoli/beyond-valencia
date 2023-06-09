// React
import { useState } from "react";
import { CodeOrders } from "./CodeOrders";

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
    const { s, m, n } = data;
    const [ discount, setDiscount ] = useState(0);
    const [ codeDiscount, setCodeDiscount ] = useState(null);
    const [ isDiscountAdd, setIsDescountAdd ] = useState(false);

    const handleGetCode = ({ target }) => {
        setCodeDiscount(target.value);
    }

    const validateCode = () => {
        if(!isDiscountAdd) {
            if(
                codeDiscount === import.meta.env.VITE_BASE_DISCOUNT_FIVED ||
                codeDiscount === import.meta.env.VITE_BASE_DISCOUNT_FIVEJ
            ) {
                setDiscount(5)
                setTotalPay(subTotal - ((subTotal * (5)) / 100))
                setCurrentOrder(prev => ({...prev, discountCode: codeDiscount}));
                setIsDescountAdd(true);
                notifySuccess("Congratulations you got the discount");
            } else if(
                codeDiscount === import.meta.env.VITE_BASE_DISCOUNT_TEND ||
                codeDiscount === import.meta.env.VITE_BASE_DISCOUNT_TENJ
            ) {
                setDiscount(10)
                setTotalPay(subTotal - ((subTotal * (10)) / 100))
                setCurrentOrder(prev => ({...prev, discountCode: codeDiscount}));
                setIsDescountAdd(true);
                notifySuccess("Congratulations you got the discount");
            } else if(
                codeDiscount === import.meta.env.VITE_BASE_DISCOUNT_HT_BAL ||
                codeDiscount === import.meta.env.VITE_BASE_DISCOUNT_HT_PAMP ||
                codeDiscount === import.meta.env.VITE_BASE_DISCOUNT_HT_BE ||
                codeDiscount === import.meta.env.VITE_BASE_DISCOUNT_HT_WEL ||
                codeDiscount === import.meta.env.VITE_BASE_DISCOUNT_HT_MEL ||
                codeDiscount === import.meta.env.VITE_BASE_DISCOUNT_HT_PV ||
                codeDiscount === import.meta.env.VITE_BASE_DISCOUNT_AIR_NAT ||
                codeDiscount === import.meta.env.VITE_BASE_DISCOUNT_AIR_DAN ||
                codeDiscount === import.meta.env.VITE_BASE_DISCOUNT_AIR_CAR ||
                codeDiscount === import.meta.env.VITE_BASE_DISCOUNT_HT_COZY ||
                codeDiscount === import.meta.env.VITE_BASE_DISCOUNT_HT_QUART ||
                codeDiscount === import.meta.env.VITE_BASE_DISCOUNT_HT_VTV
            ) {
                setDiscount(10)
                setTotalPay(subTotal - ((subTotal * (20)) / 100))
                setCurrentOrder(prev => ({...prev, discountCode: codeDiscount}));
                setIsDescountAdd(true);
                notifySuccess("Congratulations you got the discount");

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