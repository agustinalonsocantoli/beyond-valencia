// React
import { useState } from "react";
// Calendar
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
// Toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FormBook } from "../Shared/Form";
import { CodeBook } from "./CodeBook"
import { SelectQuantity } from "./SelectQuantity";
import { SelectDetail } from "./SelectDetail";

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
        if(
            codeDiscount === import.meta.env.VITE_BASE_DISCOUNT_FIVED ||
            codeDiscount === import.meta.env.VITE_BASE_DISCOUNT_FIVEJ
        ) {
            setDiscount(5)
            setTotalPay(subTotal - ((subTotal * (5)) / 100))
            notifySuccess("Congratulations you got the discount");
        } else if(
            codeDiscount === import.meta.env.VITE_BASE_DISCOUNT_TEND ||
            codeDiscount === import.meta.env.VITE_BASE_DISCOUNT_TENJ
        ) {
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

            <SelectDetail
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
            time={time}
            setTime={setTime}
            />

            <SelectQuantity 
            adults={adults}
            setAdults={setAdults}
            children={children}
            setChildren={setChildren}
            infants={infants}
            setInfants={setInfants}
            />

            <div className="book_btn">
                <button onClick={handleCheck}>BOOK</button>
            </div>

            {formVisible &&
            <div>
                <CodeBook 
                adults={adults}
                children={children}
                subTotal={subTotal}
                discount={discount}
                totalPay={totalPay}
                handleGetCode={handleGetCode}
                validateCode={validateCode}
                />

                <FormBook 
                handleSubmit={handleSubmit} 
                handleInput={handleInput} 
                labelButton="PAY NOW"
                nameClass="book_form"
                />
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