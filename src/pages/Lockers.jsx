// React
import { useState } from 'react';
// Img
import lockers from '../assets/Options/lockers.jpg';
import logo from '../assets/logoB.png'
// Components
import { First } from '../components/rentals/First';
import { Second } from '../components/rentals/Second';
import { Third } from '../components/rentals/Third';
import { Complete } from '../components/rentals/Complete';
// DayJs
import dayjs from 'dayjs';

export const Lockers = () => {
    const [ view, setView ] = useState(false);
    const [ currentOrder, setCurrentOrder ] = useState(null);

    const dateNow = new Date();
    const [ date, setDate ] = useState(dayjs(dateNow));

    const [ small, setSmall ] = useState(0);
    const [ medium, setMedium ] = useState(0);
    const [ normal, setNormal ] = useState(0);

    const [ time, setTime ] = useState(null);

    const [ subTotal, setSubTotal ] = useState(0);
    const [ totalPay, setTotalPay ] = useState(0);

    console.log(currentOrder)
    const data = {
        s: {
            name: 'Small',
            price: 5,
            description: "Bags and backpacks",
            others: "Mochilas y/o bolas"
        },
        m: {
            name: 'Medium',
            price: 8,
            description: "Cabins / Carry-On",
            others: "Equipaje de cabina"
        },
        n: {
            name: 'Normal',
            price: 10,
            description: "Suitcase / Checked luggage",
            others: "Maleta chequeada"
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

    return(
        <div className="lockers">
            <div className='lockers_img'>
                <img src={lockers} alt="img/lockers" />
            </div>

            <div className='lockers_line'></div>

            <div className='lockers_contents'>
                <div className='lockers_contents-logo'>
                    <img src={logo} alt="img/logo" />
                </div>

                { view && <First 
                    title="For how long would you like to storage your belongings?"
                    subtitle="¿Por cuánto tiempo le gustaría almacenar sus pertenencias?"
                    longerTime={true}
                    setTime={setTime}
                />}

                 
                { view && <Second
                    title="How many pieces?"
                    subtitle="¿Cuantas piezas?" 
                    small={small} 
                    setSmall={setSmall}
                    medium={medium}
                    setMedium={setMedium}
                    normal={normal}
                    setNormal={setNormal}
                    data={data}
                    setCurrentOrder={setCurrentOrder}
                />}

                {  <Third 
                    title="When?"
                    subtitle="¿Cuando?" 
                    date={date}
                    setDate={setDate}
                    setCurrentOrder={setCurrentOrder}
                />}

                { view && <Complete 
                    title="All set!"
                    subtitle="Todo listo!"
                    handleInput={handleInput}
                    handleSubmit={handleSubmit}
                    subTotal={subTotal}
                    totalPay={totalPay}
                    setTotalPay={setTotalPay}
                />}

            </div>
        </div>
    );
};