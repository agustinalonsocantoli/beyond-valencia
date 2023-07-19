/* eslint-disable @typescript-eslint/no-explicit-any */
// Stripe
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
// Components
import { CheckoutForm } from './CheckoutForm';
import { ModalError } from '../modals/ModalError';
// React
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// MUI
import CircularProgress from '@mui/material/CircularProgress';

const stripePromise = loadStripe(import.meta.env.VITE_BASE_STRIPE_PUBLIC);

interface Props {
    setPaymentVisible: (action: boolean) => void;
    totalPay: number | null;
    setCurrentOrder: (action: any) => void;
    description: string;
}

export const Payments = (props: Props) => {
    const { setPaymentVisible, totalPay, setCurrentOrder, description } = props;
    const navigate = useNavigate();
    const [ clientSecret, setClientSecret ] = useState<any>(null);
    const [ id, setId ] = useState<string>('');
    const [openError, setOpenError] = useState<boolean>(false);
    const onOpenError = () => setOpenError(true);
    const onCloseError = () => { 
        setOpenError(false); 
        navigate("/");
    }

    useEffect(() => {
        fetch(import.meta.env.VITE_BASE_URL_APICHECKOUT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ 
            amount: totalPay && (totalPay * 100), 
            description: description,
        }),
        })
        .then((res) => res.json())
        .then((data) => {

            setClientSecret(data?.clientSecret);
            setId(data?.id);
        })
        .catch(() => {
            onOpenError();
        })

    }, []);


    const appearance: {
        theme: string
    } = {
        theme: 'stripe',
    };
    
    const options: any = {
    clientSecret,
    appearance,
    };

    return(
        <div className='payment'>
            {clientSecret ?
            <div>
            <Elements stripe={stripePromise} options={options}>
                <CheckoutForm 
                setPaymentVisible={setPaymentVisible} 
                setCurrentOrder={setCurrentOrder} 
                id={id} 
                />
            </Elements>
            </div>
            :
            openError &&
            <div className='payment_loading'>
                <CircularProgress size={150} />
            </div>
            }
            
            <ModalError 
            handleClose={onCloseError} 
            open={openError} 
            message="Server error, try again later."
            />
        </div>
    );
};