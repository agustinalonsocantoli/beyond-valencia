import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { CheckoutForm } from './CheckoutForm';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import { ModalError } from '../Modals/ModalError';

const stripePromise = loadStripe(import.meta.env.VITE_BASE_STRIPE_PUBLIC);

export const Payments = (props) => {
    const { setPaymentVisible, currentOrder, totalPay, setCurrentOrder, setFormVisible, description } = props;
    const navigate = useNavigate();
    const [ clientSecret, setClientSecret ] = useState(null);
    const [ id, setId ] = useState('');
    const [openError, setOpenError] = useState(false);
    const onOpenError = () => setOpenError(true);
    const onCloseError = () => { 
        setOpenError(false); 
        console.log("hola");
        navigate("/");
    }

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

            setClientSecret(data?.clientSecret);
            setId(data?.id);
        })
        .catch(() => {
            onOpenError();
        })

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
            <div>
            <Elements stripe={stripePromise} options={options}>
                <CheckoutForm 
                setPaymentVisible={setPaymentVisible} 
                setCurrentOrder={setCurrentOrder} 
                id={id} 
                setFormVisible={setFormVisible}
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