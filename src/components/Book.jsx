// React
import { useState } from "react";
// Icons
import { HiMinusSmall, HiPlusSmall } from 'react-icons/hi2'
// Calendar
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
// Toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Book = (props) => {
    const dateNow = new Date();
    const { setPaymentVisible, currentOrder, setCurrentOrder, setTotalPay, totalPay, formVisible, setFormVisible } = props;
    const [ date, setDate ] = useState(dayjs(dateNow));
    const [ selectedValue, setSelectedValue ] = useState(null);
    const [ time, setTime ] = useState(null);
    const [ adults, setAdults ] = useState(0);
    const [ children, setChildren ] = useState(0);
    const [ infants, setInfants ] = useState(0);
    const [ subTotal, setSubTotal ] = useState(0);
    const [ discount, setDiscount ] = useState(0);
    const [ codeDiscount, setCodeDiscount ] = useState(null);

    const totalCalculate = (adults, children, typeOrder) => {
        let totalAdults;
        let totalChildren;

        if(typeOrder === 'group') {
            totalAdults = adults > 0 ? (adults * 25) : 0;
            totalChildren = children > 0 ? (children * 20) : 0;
        } else if(typeOrder === 'private') {
            totalAdults = adults > 0 ? (adults * 35) : 0;
            totalChildren = children > 0 ? (children * 30) : 0;
        }

        return totalAdults + totalChildren;
    }
    
    const handleCheck = () => {
        if(selectedValue !== null) {
            if(time !== null) {
                if(adults !== 0 || children !== 0) {

                    setCurrentOrder({
                        tourName: "One Day in Calpe",
                        date: dayjs(date.$d).format('DD/MM/YYYY'),
                        time: time,
                        typeOrder: selectedValue,
                        adults: adults,
                        children: children,
                        infants: infants,
                    });
            
                    setFormVisible(true);

                    const total = totalCalculate(adults, children, selectedValue);
                    setSubTotal(total);
                    setTotalPay(total)

                } else {
                    notifyError("You must select the number of people.");
                }
            } else {
                notifyError("You must select a time.");
            }
        } else {
            notifyError("You must enter an option.");
        }
    }

    const handleInput = (e) => {
        const { name, value } = e.target;

        setCurrentOrder(prev => ({...prev, [name]: value}));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(currentOrder.name !== null && currentOrder.name !== undefined && currentOrder.name !== '') {
            if(currentOrder.email !== null && currentOrder.email !== undefined && currentOrder.email !== '') {
                if(currentOrder.phone !== null && currentOrder.phone !== undefined && currentOrder.phone !== '') {

                    notifySuccess('We will proceed to the payment.');
                    e.target.reset();
                    setPaymentVisible(true)
                } else {
                    notifyError("You must enter a correct Phone.");
                }
            } else {
                notifyError("You must enter a correct Email.");
            }
        } else {
            notifyError("You must enter a correct Name.");
        }
    }

    const handleGetCode = ({ target }) => {
        setCodeDiscount(target.value);
    }

    const validateCode = () => {
        if(codeDiscount === import.meta.env.VITE_BASE_HOTEL_CODE) {
            setDiscount(10)
            setTotalPay(subTotal - ((subTotal * (10)) / 100))
            notifySuccess("Congratulations you got the discount");
        } else {
            notifyError("The code entered is not valid");
        }
    }

    const notifyError = (message) => toast.error(message, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });

    const notifySuccess = (message) => toast.success(message, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });

    return(
        <div className="book">

            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar value={date} onChange={(value) => setDate(value)} minDate={dayjs(dateNow)} />
            </LocalizationProvider>


            <div className="book_type-conteiner">
                <div 
                className={`book_type ${selectedValue === 'group' && 'book_selected'}`}
                onClick={() => {
                    setSelectedValue('group');
                }}>
                    <h3>Shared Group</h3>
                    <h5>RESERVE AND PAY</h5>

                    <h4>Price</h4>
                    <h4>Adults €25</h4>
                    <h4>Children €20</h4>
                    <p>No additional taxes</p>

                    <div className={`time ${selectedValue === 'group' && 'time_selected'}`}>
                        <span
                        className={(time === "10:00 AM" && selectedValue === 'group') ? 'active' : 'disable'} 
                        onClick={() => {
                            (selectedValue === 'group') &&
                            setTime("10:00 AM");
                        }}>
                            10:00 AM
                        </span>

                        <span
                        className={(time === "3:30 PM" && selectedValue === 'group') ? 'active' : 'disable'} 
                        onClick={() => {
                            (selectedValue === 'group') &&
                            setTime("3:30 PM");
                        }}>
                            3:30 PM
                        </span>
                    </div>

                    <div className="type_check">
                        <span className="radio">
                            {selectedValue === 'group' && <span className="radio_check"></span>}
                        </span>
                    </div>
                </div>

                <div 
                className={`book_type ${selectedValue === 'private' && 'book_selected'}`}
                onClick={() => {
                    setSelectedValue('private');
                }}>
                    <h3>Private Group</h3>
                    <h5>RESERVE AND PAY</h5>

                    <h4>Price</h4>
                    <h4>Adults €35</h4>
                    <h4>Children €30</h4>
                    <p>Infants free ticket, no additional taxes</p>

                    <div className={`time ${selectedValue === 'private' && 'time_selected'}`}>
                        <span
                        className={(time === "11:30 AM" && selectedValue === 'private') ? 'active' : 'disable'} 
                        onClick={() => {
                            (selectedValue === 'private') &&
                            setTime("11:30 AM");
                        }}>
                            11:30 AM
                        </span>
                        
                        <span
                        className={(time === "5:00 PM" && selectedValue === 'private') ? 'active' : 'disable'} 
                        onClick={() => {
                            (selectedValue === 'private') &&
                            setTime("5:00 PM");
                        }}>
                            5:00 PM
                        </span>
                    </div>

                    <div className="type_check">
                        <span className="radio">
                            {selectedValue === 'private' && <span className="radio_check"></span>}
                        </span>
                    </div>
                </div>
            </div>

            <div className="amount_conteiner">
                <div className="book_amount">
                    <div>
                        <h3>Adults</h3>
                        <p>Age 18 - 99</p>
                    </div>

                    <div className="amount_selector">
                        <button disabled={!adults > 0}
                        onClick={() => {
                            adults > 0 &&
                            setAdults(prev => prev - 1)
                        }}>
                            <HiMinusSmall />
                        </button>
                        <h4>{adults}</h4>
                        <button onClick={() => setAdults(prev => prev + 1)}> <HiPlusSmall /> </button>
                    </div>
                </div>

                <div className="book_amount">
                    <div>
                        <h3>Children</h3>
                        <p>Age 6 - 17</p>
                    </div>

                    <div className="amount_selector">
                        <button disabled={!children > 0}
                        onClick={() => {
                            children > 0 &&
                            setChildren(prev => prev - 1)
                        }}>
                            <HiMinusSmall />
                        </button>
                        <h4>{children}</h4>
                        <button onClick={() => setChildren(prev => prev + 1)}> <HiPlusSmall /> </button>
                    </div>
                </div>

                <div className="book_amount">
                    <div>
                        <h3>Infants</h3>
                        <p>Age 0 - 5</p>
                    </div>

                    <div className="amount_selector">
                        <button disabled={!infants > 0}
                        onClick={() => {
                            infants > 0 &&
                            setInfants(prev => prev - 1)
                        }}>
                            <HiMinusSmall />
                        </button>
                        <h4>{infants}</h4>
                        <button onClick={() => setInfants(prev => prev + 1)}> <HiPlusSmall /> </button>
                    </div>
                </div>
            </div>

            <div className="book_btn">
                <button onClick={handleCheck}>BOOK</button>
            </div>
            


            {formVisible &&
            <div>
                <div className="book_total">
                    <h3>Adults {adults !== null ? adults : 0} x €35</h3>
                    <h3>Children {children !== null ? children : 0} x €30</h3>
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

                <form className="book_form" onSubmit={handleSubmit}>
                    <label>Name<span>*</span></label>
                    <input type="text" name="name"  onChange={handleInput}/>

                    <label>Email<span>*</span></label>
                    <input type="email" name="email"  onChange={handleInput}/>

                    <label>Phone<span>*</span></label>
                    <input type="tel" name="phone"  onChange={handleInput}/>

                    <label>Comment</label>
                    <textarea name="comment" onChange={handleInput}></textarea>

                    <button type="submit">PAY NOW</button>
                </form>
            </div>
            }

            <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover={false}
            theme="colored"
            />
        </div>
    );
}