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
    const { setPaymentVisible, currentOrder, setCurrentOrder } = props;
    const [ date, setDate ] = useState(dayjs(dateNow));
    const [ selectedValue, setSelectedValue ] = useState(null);
    const [ time, setTime ] = useState(null);
    const [ adults, setAdults ] = useState(0);
    const [ children, setChildren ] = useState(0);
    const [ infants, setInfants ] = useState(0);
    const [ formVisible, setFormVisible ] = useState(false)
    
    const handleCheck = () => {
        if(selectedValue !== null) {
            if(time !== null) {
                if(adults !== 0 || children !== 0) {

                    setCurrentOrder({
                        date: dayjs(date.$d).format('DD/MM/YYYY'),
                        time: time,
                        typeOrder: selectedValue,
                        adults: adults,
                        children: children,
                        infants: infants
                    });
            
                    setFormVisible(true);
                    notifySuccess('ok');
                } else {
                    notifyError("Personas");
                }
            } else {
                notifyError("Completar Hora");
            }
        } else {
            notifyError("Completar grupo");
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

                    notifySuccess('Enviado');
                    e.target.reset();
                    setPaymentVisible(true)
                } else {
                    notifyError("Phone");
                }
            } else {
                notifyError("Email");
            }
        } else {
            notifyError("Name");
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


            <div>
                <div 
                className={`book_type ${selectedValue === 'group' && 'book_selected'}`}
                onClick={() => {
                    setSelectedValue('group');
                }}>
                    <h3>Shared Group</h3>
                    <h5>RESERVE AND PAY</h5>

                    <h4>Price €25</h4>
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

                    <h4>Price €35</h4>
                    <p>No additional taxes</p>

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
                <button onClick={handleCheck}>CHECK NOW</button>
            </div>

            {formVisible &&
            <form className="book_form" onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" name="name"  onChange={handleInput}/>

                <label>Email</label>
                <input type="email" name="email"  onChange={handleInput}/>

                <label>Phone</label>
                <input type="tel" name="phone"  onChange={handleInput}/>

                <label>Comment</label>
                <textarea name="comment" onChange={handleInput}></textarea>

                <button type="submit">PAY NOW</button>
            </form>
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