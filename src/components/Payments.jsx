import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { CheckoutForm } from './stripe/CheckoutForm';
import { useEffect, useState } from 'react';

const stripePromise = loadStripe(import.meta.env.VITE_BASE_STRIPE_PUBLIC);

export const Payments = (props) => {
    const { setPaymentVisible, currentOrder, totalPay, setCurrentOrder, setFormVisible } = props;
    const [ clientSecret, setClientSecret ] = useState('');
    const [ id, setId ] = useState('');
    
    useEffect(() => {

        fetch("http://localhost:4242/api/checkout", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ 
            amount: (totalPay * 100), 
            description: currentOrder.tourName,
            email: currentOrder.email,
            name: currentOrder.name,
            phone: currentOrder.phone,
        }),
        })
        .then((res) => res.json())
        .then((data) => {
            setClientSecret(data.clientSecret);
            setId(data.id);
        });

    }, []);


    const appearance = {
        theme: 'stripe',
    };
    
    const options = {
    clientSecret,
    appearance,
    };

    return(
        <div className='payment'>
            {clientSecret &&
            <Elements stripe={stripePromise} options={options}>
                <CheckoutForm 
                setPaymentVisible={setPaymentVisible} 
                setCurrentOrder={setCurrentOrder} 
                id={id} 
                setFormVisible={setFormVisible}
                />
            </Elements>
            }

            {/* <Elements stripe={stripePromise}>
                <CardForm 
                setPaymentVisible={setPaymentVisible} 
                currentOrder={currentOrder}
                setFormVisible={setFormVisible}
                />
            </Elements> */}

        </div>
    );
};