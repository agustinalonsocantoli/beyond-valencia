/* eslint-disable @typescript-eslint/no-explicit-any */
// React
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// Img
import bikes from '../assets/Options/bikes.jpg';
import bikesMb from '../assets/Options/bikesMb.jpg';
import logo from '../assets/logoB.png'
import bikesW from '../assets/Options/bikes.webp';
import bikesMbW from '../assets/Options/bikesMb.webp';
// Components
import { First } from '../components/orders/First';
import { Second } from '../components/orders/Second';
import { Third } from '../components/orders/Third';
import { Complete } from '../components/orders/Complete';
import { Payments } from '../components/stripe/Payments';
// DayJs
import dayjs from 'dayjs';
// Toast
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Icons
import { IoReturnDownBackSharp } from 'react-icons/io5';
import { BsCheck2 } from 'react-icons/bs';
import { sendEmail } from '../shared/emails';
import { notifySuccess } from '../shared/notify';
// Emails
import emailjs from '@emailjs/browser';

export const Bikes = () => {
    const dateNow = new Date();
    const resposive = window.innerWidth < 1024 ? true : false;
    const [page, setPage] = useState<number>(0);
    const [currentOrder, setCurrentOrder] = useState<any>(null);
    const [date, setDate] = useState<any>(dayjs(dateNow));
    const [small, setSmall] = useState<number>(0);
    const [medium, setMedium] = useState<number>(0);
    const [normal, setNormal] = useState<number>(0);
    const [time, setTime] = useState<string | null>(null);
    const [subTotal, setSubTotal] = useState<number>(0);
    const [totalPay, setTotalPay] = useState<number>(0);
    const [paymentVisible, setPaymentVisible] = useState<boolean>(false);
    const navigate = useNavigate();

    const templateParams: any = {
        name: currentOrder !== null && currentOrder?.name,
        email: currentOrder !== null && currentOrder?.email,
        phone: currentOrder !== null && currentOrder?.phone,
        time: currentOrder !== null && currentOrder?.time,
        date: currentOrder !== null && currentOrder?.date,
        small: currentOrder !== null && currentOrder?.small,
        medium: currentOrder !== null && currentOrder?.medium,
        childrenBike: currentOrder !== null && currentOrder?.childrenBike,
        comment: currentOrder !== null && currentOrder.comment ? currentOrder?.comment : 'No comment entered',
        total: `${totalPay}€`,
        discountCode: currentOrder !== null && currentOrder?.discountCode ? currentOrder?.discountCode : 'No code used',
    }

    const data = {
        s: {
            name: 'Small',
            description: "26 inches",
            others: "26 pulgadas"
        },
        m: {
            name: 'Medium',
            description: "28 inches",
            others: "28 pulgadas"
        },
        n: {
            name: 'Children bike',
            description: "Confirm request here: +34-611688865",
        }
    }

    const product = {
        allDay: {
            time: 'All day',
            description: 'Todo el día',
            select: 'All-Day',
            price: {
                small: 14,
                medium: 14,
            }
        },
        threeDays: {
            time: '3 days',
            description: 'Tres días',
            select: 'Three-Days',
            price: {
                small: 38,
                medium: 38,
            }
        },
    }

    const handleSubmit = (e: any) => {
        const { name, email, phone, comment } = e;

        if (totalPay > 0) {
            notifySuccess('We will proceed to the payment.')
        } else {
            notifySuccess('Order sent.')

            setTimeout(() => {
                navigate("/")
            }, 2000);
        }

        setCurrentOrder((prev: any) => ({
            ...prev,
            name,
            email,
            phone,
            comment,
            total: totalPay
        }));

        { totalPay > 0 && setPaymentVisible(true); }

        emailjs.send(
        import.meta.env.VITE_BASE_EMAIL_SERVICE, 
        import.meta.env.VITE_BASE_EMAIL_TEMPLATEBIKES, 
        templateParams,
        import.meta.env.VITE_BASE_EMAIL_PUBLIC
        )
        .then(() => console.log("Send Emails"))
        .catch((error) => console.error(error));
    }

    const handleOk = () => {
        if (page < 3) {
            if (page === 0 && time !== null && time !== undefined) {
                setCurrentOrder((prev: any) => ({ ...prev, time: time }));
                setPage(prev => prev + 1);
            } else if (page === 1 && (small !== 0 || medium !== 0 || normal !== 0)) {
                setCurrentOrder((prev: any) => ({
                    ...prev,
                    small: small,
                    medium: medium,
                    childrenBike: normal,
                }));
                setPage(prev => prev + 1);
            } else if (page === 2 && date !== null && date !== undefined) {
                const total = totalCalculate(small, medium, time);

                setSubTotal(total);
                setTotalPay(total);
                setCurrentOrder((prev: any) => ({ ...prev, date: dayjs(date.$d).format('DD/MM/YYYY') }));
                setPage(prev => prev + 1);
            }
        }
    };

    const handleBack = () => {
        if (page > 0) {
            setPage(prev => prev - 1)
        }
    };

    const totalCalculate = (smallOrder: number, mediumOrder: number, timeValue: string | null) => {
        let totalSmall = 0;
        let totalMedium = 0;

        if (timeValue === 'All-Day') {
            totalSmall = smallOrder > 0 ? (smallOrder * 14) : 0;
            totalMedium = mediumOrder > 0 ? (mediumOrder * 14) : 0;
        }
        else if (timeValue === 'Three-Days') {
            totalSmall = smallOrder > 0 ? (smallOrder * 38) : 0;
            totalMedium = mediumOrder > 0 ? (mediumOrder * 38) : 0;
        }

        return totalSmall + totalMedium;
    }

    return (
        <div className="bikes">

            <div className='bikes_contents'>
                <div className='bikes_contents-logo'>
                    <Link to={'/more-services'}><img src={logo} alt="img/logo" /></Link>
                </div>

                {page === 0 && <First
                    title="For how long would you like to rent the bike?"
                    subtitle="¿Por cuánto tiempo le gustaría rentar la bici?"
                    longerTime={false}
                    time={time}
                    setTime={setTime}
                    product={product}
                    setPage={setPage}
                />}

                {page === 1 && <Second
                    title="How many rental bikes?"
                    subtitle="¿Cuántas bicicletas por un día necesitas?"
                    small={small}
                    setSmall={setSmall}
                    medium={medium}
                    setMedium={setMedium}
                    normal={normal}
                    setNormal={setNormal}
                    data={data}
                    time={time}
                    product={product}
                />}

                {page === 2 && <Third
                    title="When?"
                    subtitle="¿Para cuándo necesitas tus bicis?"
                    date={date}
                    setDate={setDate}
                />}

                {page === 3 && <Complete
                    title="All set!"
                    subtitle="Todo listo!"
                    handleSubmit={handleSubmit}
                    subTotal={subTotal}
                    totalPay={totalPay}
                    setTotalPay={setTotalPay}
                    data={data}
                    small={small}
                    medium={medium}
                    normal={normal}
                    setCurrentOrder={setCurrentOrder}
                />}

                {page !== 3 &&
                    <div className='btn_ok'>
                        <button onClick={handleOk}>Ok<BsCheck2 /></button>
                    </div>
                }

                {page !== 0 &&
                    <div className='btn_back'>
                        <button onClick={handleBack}><IoReturnDownBackSharp />Back</button>
                    </div>
                }
            </div>

            <div className='bikes_line'></div>

            <div className='bikes_img'>
                <picture>
                    <source srcSet={!resposive ? bikesW : bikesMbW} type="image/webp" />

                    <img src={!resposive ? bikes : bikesMb} alt="img/bikes" loading='lazy' />
                </picture>
            </div>

            {paymentVisible &&
                <Payments
                    setCurrentOrder={setCurrentOrder}
                    setPaymentVisible={setPaymentVisible}
                    totalPay={totalPay}
                    description={`Order Bikes Email: ${currentOrder.email ? currentOrder.email : ""}`}
                />}

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
};
