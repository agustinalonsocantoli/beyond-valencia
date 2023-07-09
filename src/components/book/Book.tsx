/* eslint-disable @typescript-eslint/no-explicit-any */
// React
import { useState } from "react";
// Calendar
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
// Toast
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Components
import { FormBook } from "../shared/Form";
import { CodeBook } from "./CodeBook"
import { SelectQuantity } from "./SelectQuantity";
import { SelectDetail } from "./SelectDetail";
// Interfaces
import { notifyError, notifySuccess } from "../../shared/notify";

interface Props {
    setPaymentVisible: (action: boolean) => void;
    setCurrentOrder: (order: any) => void;
    setTotalPay: (action: number | null) => void;
    totalPay: number | null;
    formVisible: boolean;
    setFormVisible: (action: boolean) => void;
}

export const Book = (props: Props) => {
    const dateNow: Date = new Date();
    const { setPaymentVisible, setCurrentOrder, setTotalPay, totalPay, formVisible, setFormVisible } = props;
    const [date, setDate] = useState<any>(dayjs(dateNow));
    const [selectedValue, setSelectedValue] = useState<string | null>(null);
    const [time, setTime] = useState<string | null>(null);
    const [adults, setAdults] = useState<number>(0);
    const [children, setChildren] = useState<number>(0);
    const [infants, setInfants] = useState<number>(0);
    const [subTotal, setSubTotal] = useState<number>(0);
    const [discount, setDiscount] = useState<number>(0);
    const [ isDiscountAdd, setIsDescountAdd ] = useState<boolean>(false);
    const [codeDiscount, setCodeDiscount] = useState<string | null>(null);
    const codesFive = import.meta.env.VITE_BASE_DISCOUNT_FIVE.split(',')
    const codesTen = import.meta.env.VITE_BASE_DISCOUNT_TEN.split(',')
    const codesTwenty = import.meta.env.VITE_BASE_DISCOUNT_TWENTY.split(',')

    const totalCalculate = (adults: number, children: number, typeOrder: string) => {
        let totalAdults = 0;
        let totalChildren = 0;

        if (typeOrder === 'group') {
            totalAdults = adults > 0 ? (adults * 25) : 0;
            totalChildren = children > 0 ? (children * 20) : 0;
        } else if (typeOrder === 'private') {
            totalAdults = adults > 0 ? (adults * 35) : 0;
            totalChildren = children > 0 ? (children * 30) : 0;
        }

        return totalAdults + totalChildren;
    }

    const handleCheck = () => {
        if (selectedValue !== null) {
            if (time !== null) {
                if (adults !== 0 || children !== 0) {

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

    const handleSubmit = (e: any) => {
        const { name, email, phone, comment } = e;

        setCurrentOrder((prev: any) => ({
            ...prev,
            name,
            email,
            phone,
            comment
        }));

        notifySuccess('We will proceed to the payment.');
        setPaymentVisible(true)
    }

    const handleGetCode = ({ target }: any) => {
        setCodeDiscount(target.value);
    }

    const addedDiscount = (porcent: number, code: string) => {
        setDiscount(porcent)
        setTotalPay(subTotal - ((subTotal * (porcent)) / 100))
        setCurrentOrder((prev: any) => ({ ...prev, discountCode: code }));
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

    return (
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