// React
import { useState } from 'react';
// Img
import bikes from '../assets/Options/bikes.jpg';
import bikes1 from '../assets/Options/bikes1.jpg';
import bikes2 from '../assets/Options/lockers2.jpg';
import bikes3 from '../assets/Options/bikes3.jpg';
import logo from '../assets/logoB.png'
// Components
import { First } from '../components/rentals/First';
import { Second } from '../components/rentals/Second';
import { Third } from '../components/rentals/Third';
import { Complete } from '../components/rentals/Complete';
import { Payments } from '../components/Payments';
// DayJs
import dayjs from 'dayjs';
// Toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Icons
import { IoReturnDownBackSharp } from 'react-icons/io5';
import { BsCheck2 } from 'react-icons/bs';

export const Bikes = () => {
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
            description: 'Todo el dia',
            select: 'All-Day',
            price: {
                small: 14,
                medium: 14,
            }
        },
        threeDays: {
            time: '3 days',
            description: 'Tres dias',
            select: 'Three-Days',
            price: {
                small: 38,
                medium: 38,
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
                        setPaymentVisible(true);
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
                setPage(prev => prev + 1);
            } else if (page === 1 && (small !== 0 || medium !== 0 || normal !== 0)) {
                setPage(prev => prev + 1);
            } else if(page === 2 && date !== null && date !== undefined) {
                setPage(prev => prev + 1);

                const total = totalCalculate(small, medium, time);

                setSubTotal(total);
                setTotalPay(total);
            };
        };
    };

    const handleBack = () => {
        if(page > 0) {
            setPage(prev => prev - 1)
        }
    };

    const totalCalculate = (smallOrder, mediumOrder, timeValue) => {
        let totalSmall = 0;
        let totalMedium = 0;

        if(timeValue === 'All-Day') {
            totalSmall = smallOrder > 0 ? (smallOrder * 12) : 0;
            totalMedium = mediumOrder > 0 ? (mediumOrder * 12) : 0;
        } 
        else if (timeValue === 'Three-Days') {
            totalSmall = smallOrder > 0 ? (smallOrder * 25) : 0;
            totalMedium = mediumOrder > 0 ? (mediumOrder * 25) : 0;
        }

        return totalSmall + totalMedium;
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
        <div className="bikes">

            <div className='bikes_contents'>
                <div className='bikes_contents-logo'>
                    <img src={logo} alt="img/logo" />
                </div>

                { page === 0 && <First 
                    title="For how long would you like to rent the bike?"
                    subtitle="¿Por cuánto tiempo le gustaría rentar la bici?" 
                    longerTime={false}
                    time={time}
                    setTime={setTime}
                    product={product}
                />}

                { page === 1 && <Second
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

                { page === 2 && <Third 
                    title="When?"
                    subtitle="¿Para cuando necesitas tus bicis?" 
                    date={date}
                    setDate={setDate}
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

            <div className='bikes_line'></div>

            <div className='bikes_img'>
                <img 
                src={
                    page === 0 ? bikes : page === 1 ? bikes1 : page === 2 ? bikes2 : bikes3
                } alt="img/bikes" />
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