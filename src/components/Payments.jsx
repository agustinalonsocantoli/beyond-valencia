import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { CheckoutForm } from './stripe/CheckoutForm';
import { FormPay } from './stripe/formPay';
import { useEffect } from 'react';


const stripePromise = loadStripe(import.meta.env.VITE_BASE_STRIPE_PUBLIC);

export const Payments = (props) => {
    const { setPaymentVisible, currentOrder, setCurrentOrder, totalPay } = props;
    const clientSecret = 'pi_3MzIfXEHiue9EhXc1TmyQ57d_secret_spK9DHTFDAZXuUZ5iiDO8PTQx';

    useEffect(() => {
        async () => {
            const response = await fetch('http://localhost:4242/secret');
            const { client_secret } = await response.json();

            console.log(client_secret)
        }
    }, [])

    const appearance = {
        theme: 'stripe',
    };
    
    // const options = {
    // clientSecret,
    // appearance,
    // };

    return(
        <div className='payment'>

            <Elements stripe={stripePromise}>
                <CheckoutForm />
            </Elements>

        </div>
    );
};