import { useState } from "react";
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';

export const Payments = (props) => {
    const { setPaymentVisible, currentOrder, setCurrentOrder } = props;

    const [payData, setPayData] = useState({
        number: '',
        expiry: '',
        cvc: '',
        name: '',
        focus: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        
        setPayData((prev) => ({ ...prev, [name]: value }));
    }

    const handleInputFocus = (e) => {
        setPayData((prev) => ({ ...prev, focus: e.target.name }));
    }

    return(
        <div className="payment">
            <form>
                <div className="form-container">
                    <div className="personal-information">
                        <h1>Payment Information</h1>

                        <Cards style
                        number={payData.number}
                        expiry={payData.expiry}
                        cvc={payData.cvc}
                        name={payData.name}
                        focused={payData.focus}
                        />
                    </div>
                
                    <input id="column-left" className="input-pay" type="text" name="name" placeholder="First Name" value={payData.name} onChange={handleInputChange} onFocus={handleInputFocus}/>
                    <input id="input-field" className="input-pay" type="text" name="number" placeholder="Card Number" value={payData.number} onChange={handleInputChange} onFocus={handleInputFocus}/>
                    <input id="column-left" className="input-pay" type="text" name="expiry" placeholder="MM / YY" value={payData.expiry} onChange={handleInputChange} onFocus={handleInputFocus}/>
                    <input id="column-right" className="input-pay" type="text" name="cvc" placeholder="CCV" value={payData.cvc} onChange={handleInputChange} onFocus={handleInputFocus}/>
                                    
                    <input id="input-button" type="submit" value="Submit"/>
                </div>
            </form>
        </div>
    );
};