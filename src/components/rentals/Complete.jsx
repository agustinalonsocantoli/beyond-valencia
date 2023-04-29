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

    const handleGetCode = ({ target }) => {
        setCodeDiscount(target.value);
    }

    const validateCode = () => {
        if(
            codeDiscount === import.meta.env.VITE_BASE_DISCOUNT_FIVED ||
            codeDiscount === import.meta.env.VITE_BASE_DISCOUNT_FIVEJ
        ) {
            setDiscount(5)
            setTotalPay(subTotal - ((subTotal * (5)) / 100))
            setCurrentOrder(prev => ({...prev, discountCode: codeDiscount}));
            notifySuccess("Congratulations you got the discount");
        } else if(
            codeDiscount === import.meta.env.VITE_BASE_DISCOUNT_TEND ||
            codeDiscount === import.meta.env.VITE_BASE_DISCOUNT_TENJ
        ) {
            setDiscount(10)
            setTotalPay(subTotal - ((subTotal * (10)) / 100))
            setCurrentOrder(prev => ({...prev, discountCode: codeDiscount}));
            notifySuccess("Congratulations you got the discount");
        } else {
            notifyError("The code entered is not valid");
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

                    <p>Si te alojas con uno de nuestros socios pidele el codigo para obtener un descuento.</p>
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

                    <label>Comment</label>
                    <textarea name="comment" onChange={handleInput}></textarea>

                    <button type="submit">PAY NOW</button>
                </form>
            </div>
        </div>
    );
};