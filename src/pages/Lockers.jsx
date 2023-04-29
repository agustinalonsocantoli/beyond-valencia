// React
import { useState } from 'react';
// Img
import lockers from '../assets/Options/lockers.jpg';
import lockers1 from '../assets/Options/lockers1.jpg';
import lockers2 from '../assets/Options/lockers2.jpg';
import lockers3 from '../assets/Options/lockers3.jpg';
import logo from '../assets/logoB.png'
// Components
import { First } from '../components/rentals/First';
import { Second } from '../components/rentals/Second';
import { Third } from '../components/rentals/Third';
import { Complete } from '../components/rentals/Complete';
import { Payments } from '../components/stripe/Payments';
// DayJs
import dayjs from 'dayjs';
// Toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Icons
import { IoReturnDownBackSharp } from 'react-icons/io5';
import { BsCheck2 } from 'react-icons/bs';
//  Email
import emailjs from '@emailjs/browser';

export const Lockers = () => {
    const dateNow = new Date();
    const [ page, setPage ] = useState(0);
    const [ currentOrder, setCurrentOrder ] = useState(null);
    const [ date, setDate ] = useState(dayjs(dateNow));
    const [ small, setSmall ] = useState(0);
    const [ medium, setMedium ] = useState(0);
    const [ normal, setNormal ] = useState(0);
    const [ time, setTime ] = useState(null);
    const [ subTotal, setSubTotal ] = useState(0);
    const [ totalPay, setTotalPay ] = useState(0);
    const [ paymentVisible, setPaymentVisible ] = useState(false);

    let templateParams = {
        name: currentOrder !== null && currentOrder.name,
        email: currentOrder !== null && currentOrder.email,
        phone: currentOrder !== null && currentOrder.phone,
        time: currentOrder !== null && currentOrder.time,
        date: currentOrder !== null && currentOrder.date,
        small: currentOrder !== null && currentOrder.small,
        medium: currentOrder !== null && currentOrder.medium,
        normal: currentOrder !== null && currentOrder.normal,
        comment: currentOrder !== null && currentOrder.comment ? currentOrder.comment : 'No comment entered',
        total: `${totalPay}€`,
        discountCode: currentOrder !== null && currentOrder.discountCode ? currentOrder.discountCode : 'No code used',
    }

    const data = {
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

    const product = {
        h: {
            time: '2 hours',
            description: '2 horas',
            select: '2-Hours',
            price: {
                small: 3,
                medium: 5,
                normal: 8
            }
        },
        allDay: {
            time: 'All day',
            description: 'Todo el dia',
            select: 'All-Day',
            price: {
                small: 5,
                medium: 8,
                normal: 12
            }
        },
        longer: {
            time: 'Longer time?',
            description: '¿Cuantos dias necesitas?',
            select: ['2-Days', '3-Days', '4-Days', '5-Days', '6-Days', '7-Days', '8-Days', '9-Days', '10-Days'],
            price: {
                small: 4,
                medium: 7,
                normal: 11
            }
        },
    }

    const handleInput = (e) => {
        const { name, value } = e.target;

        setCurrentOrder(prev => ({...prev, [name]: value}));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(currentOrder !== null && currentOrder !== undefined) {
            if(currentOrder.name !== null && currentOrder.name !== undefined && currentOrder.name !== '') {
                if(currentOrder.email !== null && currentOrder.email !== undefined && currentOrder.email !== '') {
                    if(currentOrder.phone !== null && currentOrder.phone !== undefined && currentOrder.phone !== '') {

                        notifySuccess('We will proceed to the payment.');
                        setCurrentOrder(prev => ({...prev, total: totalPay}));
                        setPaymentVisible(true);

                        emailjs.send(
                            import.meta.env.VITE_BASE_EMAIL_SERVICE, 
                            import.meta.env.VITE_BASE_EMAIL_TEMPLATELOCKERS, 
                            templateParams,
                            import.meta.env.VITE_BASE_EMAIL_PUBLIC
                        )
                        .then(function(response) {
                        console.log('SUCCESS!', response.status, response.text);
                        }, function(error) {
                        console.log('FAILED...', error);
                        });

                        e.target.reset();
                    } else {
                        notifyError("You must enter a correct Phone.");
                    }
                } else {
                    notifyError("You must enter a correct Email.");
                }
            } else {
                notifyError("You must enter a correct Name.");
            }
        } else {
            notifyError("You must complete the fields.");
        }
    }

    const handleOk = () => {
        if(page < 3) {
            if(page === 0 && time !== null && time !== undefined) {
                setCurrentOrder(prev => ({...prev, time: time}));
                setPage(prev => prev + 1);
            } else if (page === 1 && (small !== 0 || medium !== 0 || normal !== 0)) {
                setCurrentOrder(prev => ({
                    ...prev,
                    small: small,
                    medium: medium,
                    childrenBike: normal,
                }));
                setPage(prev => prev + 1);
            } else if(page === 2 && date !== null && date !== undefined) {
                const total = totalCalculate(small, medium, normal, time);

                setSubTotal(total);
                setTotalPay(total);
                setCurrentOrder(prev => ({...prev, date: dayjs(date.$d).format('DD/MM/YYYY')}));
                setPage(prev => prev + 1);
            };
        };
    };

    const handleBack = () => {
        if(page > 0) {
            setPage(prev => prev - 1)
        }
    };

    const totalCalculate = (smallOrder, mediumOrder, normalOrder, timeValue) => {
        let totalSmall = 0;
        let totalMedium = 0;
        let totalNormal = 0;

        if(timeValue === '2-Hours') {
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
        <div className="lockers">
            <div className='lockers_img'>
                <img 
                src={
                    page === 0 ? lockers : page === 1 ? lockers1 : page === 2 ? lockers2 : lockers3
                } alt="img/lockers" />
            </div>

            <div className='lockers_line'></div>

            <div className='lockers_contents'>
                <div className='lockers_contents-logo'>
                    <img src={logo} alt="img/logo" />
                </div>

                { page === 0 && <First 
                    title="For how long would you like to storage your belongings?"
                    subtitle="¿Por cuánto tiempo le gustaría almacenar sus pertenencias?"
                    longerTime={true}
                    time={time}
                    setTime={setTime}
                    product={product}
                />}

                 
                { page === 1 && <Second
                    title="How many pieces?"
                    subtitle="¿Cuantas piezas?" 
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

                { page === 2 && <Third 
                    title="When?"
                    subtitle="¿Que día necesitas guardar tus pertenencias?" 
                    date={date}
                    setDate={setDate}
                    setCurrentOrder={setCurrentOrder}
                    
                />}

                { page === 3 && <Complete 
                    title="All set!"
                    subtitle="Todo listo!"
                    handleInput={handleInput}
                    handleSubmit={handleSubmit}
                    subTotal={subTotal}
                    totalPay={totalPay}
                    setTotalPay={setTotalPay}
                    notifyError={notifyError}
                    notifySuccess={notifySuccess}
                    data={data}
                    small={small}
                    medium={medium}
                    normal={normal}
                    setCurrentOrder={setCurrentOrder}
                />}

                { page !== 3 &&
                    <div className='btn_ok'>
                        <button onClick={handleOk}>Ok<BsCheck2 /></button>
                    </div>
                }

                { page !== 0 &&
                    <div className='btn_back'>
                        <button onClick={handleBack}><IoReturnDownBackSharp />Back</button>
                    </div>
                }
            </div>

            {paymentVisible && 
            <Payments 
                currentOrder={currentOrder}
                setCurrentOrder={setCurrentOrder}
                setPaymentVisible={setPaymentVisible}
                totalPay={totalPay}
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