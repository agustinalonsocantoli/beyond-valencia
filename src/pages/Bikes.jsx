// React
import { useState } from 'react';
// Img
import bikes from '../assets/Options/bikes.jpg';
import logo from '../assets/logoB.png'
// Components
import { First } from '../components/rentals/First';
import { Second } from '../components/rentals/Second';
import { Third } from '../components/rentals/Third';
import { Complete } from '../components/rentals/Complete';
// DayJs
import dayjs from 'dayjs';

export const Bikes = () => {
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


    const data = {
        s: {
            name: 'Small',
            price: 12,
            description: "26 inches",
            others: "Pequeñas de 26 pulgadas"
        },
        m: {
            name: 'Medium',
            price: 12,
            description: "28 inches",
            others: "Pequeñas de 28 pulgadas"
        },
        n: {
            name: 'Children bike',
            price: 0,
            description: "Free of charge,  ensure your request calling (+34)611688865",
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
        <div className="bikes">

            <div className='lockers_contents'>
                <div className='lockers_contents-logo'>
                    <img src={logo} alt="img/logo" />
                </div>

                { view && <First 
                    title="For how long would you like to rent the bike?"
                    subtitle="¿Por cuánto tiempo le gustaría rentar la bici?" 
                    longerTime={false}
                    setTime={setTime}
                />}

                { view && <Second
                    title="How many rental bikes?"
                    subtitle="¿Cuántas bicicletas por un día necesitas?" 
                    small={small} 
                    setSmall={setSmall}
                    medium={medium}
                    setMedium={setMedium}
                    normal={normal}
                    setNormal={setNormal}
                    data={data}
                />}

                { view && <Third 
                    title="When do you need your bikes?"
                    subtitle="¿Para cuando necesitas tus bicis?" 
                    date={date}
                    setDate={setDate}
                />}

                {  <Complete 
                    title="All set!"
                    subtitle="Todo listo!" 
                    handleInput={handleInput}
                    handleSubmit={handleSubmit}
                    subTotal={subTotal}
                    totalPay={totalPay}
                    setTotalPay={setTotalPay}
                />}

            </div>

            <div className='bikes_line'></div>

            <div className='bikes_img'>
                <img src={bikes} alt="img/lockers" />
            </div>

        </div>
    );
};