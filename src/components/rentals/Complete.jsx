// React
import { useState } from "react";

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
                <div className="contents_complete-total">
                    {small > 0 && <h3>{s.name} x {small}</h3>}
                    {medium > 0 && <h3>{m.name} x {medium}</h3>}
                    {normal > 0 && <h3>{n.name} x {normal}</h3>}
                    <h2>Subtotal €{subTotal}</h2>

                    <p>Si te alojas con uno de nuestros socios solicita el codígo para obtener un descuento.</p>
                    <label>Enter your code here!</label>

                    <div>
                        <input type="text" name="discountCode" onChange={handleGetCode}/>
                        <button onClick={validateCode}>Validate Code</button>
                    </div>

                    <h3>Discount %{discount}</h3>
                    <h2>Total €{totalPay}</h2>
                </div>  

                <form className="contents_complete-form" onSubmit={handleSubmit}>
                    <label>Name<span>*</span></label>
                    <input type="text" name="name" onChange={handleInput}/>

                    <label>Email<span>*</span></label>
                    <input type="email" name="email" onChange={handleInput}/>

                    <label>Phone<span>*</span></label>
                    <input type="tel" name="phone" onChange={handleInput}/>

                    <label>Comments</label>
                    <textarea name="comment" onChange={handleInput}></textarea>
                    
                    <button type="submit">{totalPay <= 0 ? "SEND ORDER" : "PAY NOW"}</button>
                </form>
            </div>
        </div>
    );
};