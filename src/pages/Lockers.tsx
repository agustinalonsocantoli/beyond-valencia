/* eslint-disable @typescript-eslint/no-explicit-any */
// React
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// Img
import lockers from '../assets/Options/lockers.jpg';
import logo from '../assets/logoB.png'
import lockersW from '../assets/Options/lockers.webp';
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
import { OrdersDataInt, ProductInt } from '../interfaces/orders.model';
import { getProdruct } from '../shared/getProduct';
import { AxiosResponse } from 'axios';
import { getAllLockers } from '../middlewares/lockers.middlewares';

export const Lockers = () => {
    const dateNow = new Date();
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
    const [lockersProducts, setLockersProducts] = useState<ProductInt[]>()
    const [selectedProduct, setSelectedProduct] = useState<ProductInt>()

    const data: OrdersDataInt = {
        s: {
            name: 'Small',
            description: "Bags and backpacks",
            others: "Mochilas / Bolsas"
        },
        m: {
            name: 'Medium',
            description: "Cabins / Carry-On",
            others: "Equipaje de cabina"
        },
        n: {
            name: 'Large',
            description: "Suitcase / Checked luggage",
            others: "Maleta chequeada"
        }
    }

    useEffect(() => {
        getAllLockers()
        .then((response: AxiosResponse) => {
            setLockersProducts(response?.data?.data)
        })
    }, [])

    useEffect(() => {
        lockersProducts && 
            setSelectedProduct(getProdruct(lockersProducts, time))

    }, [time, lockersProducts])

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

        sendEmail({
            name: name,
            email: email,
            phone: phone,
            time: currentOrder !== null && currentOrder.time,
            date: currentOrder !== null && currentOrder.date,
            small: currentOrder !== null && currentOrder.small,
            medium: currentOrder !== null && currentOrder.medium,
            normal: currentOrder !== null && currentOrder.normal,
            comment: comment === null || comment === "" ? 'No comment entered' : comment,
            total: `${totalPay}€`,
            discountCode: currentOrder !== null && currentOrder.discountCode ? currentOrder.discountCode : 'No code used',
        }, import.meta.env.VITE_BASE_EMAIL_TEMPLATELOCKERS)
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
                    large: normal,
                }));
                setPage(prev => prev + 1);
            } else if (page === 2 && date !== null && date !== undefined) {
                const total = totalCalculate(small, medium, normal, time);

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

    const totalCalculate = (smallOrder: number, mediumOrder: number, normalOrder: number, timeValue: string | null) => {
        let totalSmall = 0;
        let totalMedium = 0;
        let totalNormal = 0;

        if (timeValue === '2-Hours') {
            totalSmall = smallOrder > 0 ? (smallOrder * 3) : 0;
            totalMedium = mediumOrder > 0 ? (mediumOrder * 5) : 0;
            totalNormal = normalOrder > 0 ? (normalOrder * 8) : 0;
        }
        else if (timeValue === 'All-Day') {
            totalSmall = smallOrder > 0 ? (smallOrder * 5) : 0;
            totalMedium = mediumOrder > 0 ? (mediumOrder * 8) : 0;
            totalNormal = normalOrder > 0 ? (normalOrder * 10) : 0;
        }
        else {
            totalSmall = smallOrder > 0 ? (smallOrder * 4) : 0;
            totalMedium = mediumOrder > 0 ? (mediumOrder * 7) : 0;
            totalNormal = normalOrder > 0 ? (normalOrder * 11) : 0;
        }

        return totalSmall + totalMedium + totalNormal;
    }

    return (
        <div className="lockers">
            <div className='lockers_img'>
                <picture>
                    <source srcSet={lockersW} type="image/webp" />

                    <img src={lockers} alt="img/lockers" loading='lazy' />
                </picture>
            </div>

            <div className='lockers_line'></div>

            <div className='lockers_contents'>
                <div className='lockers_contents-logo'>
                    <Link to={'/more-services'}><img src={logo} alt="img/logo" /></Link>
                </div>

                {page === 0 && <First
                    title="For how long would you like to storage your belongings?"
                    subtitle="¿Por cuánto tiempo le gustaría almacenar sus pertenencias?"
                    time={time}
                    setTime={setTime}
                    products={lockersProducts}
                    setPage={setPage}
                />}


                {page === 1 && <Second
                    title="How many pieces?"
                    subtitle="¿Cuantas piezas?"
                    small={small}
                    setSmall={setSmall}
                    medium={medium}
                    setMedium={setMedium}
                    normal={normal}
                    setNormal={setNormal}
                    data={data}
                    product={selectedProduct}
                />}

                {page === 2 && <Third
                    title="When?"
                    subtitle="¿Que día necesitas guardar tus pertenencias?"
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

            {paymentVisible &&
                <Payments
                    setCurrentOrder={setCurrentOrder}
                    setPaymentVisible={setPaymentVisible}
                    totalPay={totalPay}
                    description={`Order Lockers Email: ${currentOrder.email ? currentOrder.email : ""}`}
                />}

            <ToastContainer
                position="top-center"
                autoClose={2000}
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