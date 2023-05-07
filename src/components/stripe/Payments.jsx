import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { CheckoutForm } from './CheckoutForm';
import { useEffect, useState } from 'react';
import { MdError } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';

const stripePromise = loadStripe(import.meta.env.VITE_BASE_STRIPE_PUBLIC);

export const Payments = (props) => {
    const { setPaymentVisible, currentOrder, totalPay, setCurrentOrder, setFormVisible, description } = props;
    const [ clientSecret, setClientSecret ] = useState('');
    const [ id, setId ] = useState('');
    const navigate = useNavigate();
    const [ error, setError ] = useState(false);

    useEffect(() => {

        fetch(import.meta.env.VITE_BASE_URL_APICHECKOUT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ 
            amount: (totalPay * 100), 
            description: description,
        }),
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(clientSecret)
            console.log(data.message ? data.message : "Response Success")
            setClientSecret(data.clientSecret);
            setId(data.id);
        });

        const timeout = setTimeout(() => {
            setError(true);
        }, 10000)

        return () => {
            clearTimeout(timeout);
        }

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
            {clientSecret ?
            <Elements stripe={stripePromise} options={options}>
                <CheckoutForm 
                setPaymentVisible={setPaymentVisible} 
                setCurrentOrder={setCurrentOrder} 
                id={id} 
                setFormVisible={setFormVisible}
                />
            </Elements>
            :
            <div>
                {error ?
                <div className='payment_error'>
                    <h1>Server error, try again later.</h1>
                    <MdError />
                    <button onClick={() => navigate('/')}>Home Page</button>
                </div>
                :
                <div className='payment_loading'>
                    <CircularProgress size={200} />
                </div>
            }
            </div>
            }
        </div>
    );
};