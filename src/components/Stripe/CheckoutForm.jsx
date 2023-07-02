import React, { useState } from "react";
import { PaymentElement, useStripe, useElements, LinkAuthenticationElement } from "@stripe/react-stripe-js";
import CircularProgress from '@mui/material/CircularProgress';
import { ModalPaySuccess } from "../Modals/ModalPaySuccess";
import { GrFormClose } from "react-icons/gr"
import { useNavigate } from "react-router-dom";

export const CheckoutForm = (props) => {
    const { setPaymentVisible, setCurrentOrder, id, setFormVisible } = props;
    const navigate = useNavigate();
    const stripe = useStripe();
    const elements = useElements();
    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [openSuccess, setOpenSuccess] = useState(false);
    const onOpenSuccess = () => setOpenSuccess(true);
    const onCloseSuccess = () => { 
        setOpenSuccess(false); 
        setPaymentVisible(false);
        navigate("/");
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsLoading(true);
        

        const { error, paymentIntent } = await stripe.confirmPayment({
        elements,
        confirmParams: {
            return_url: "https://www.beyondvalencia.com/#/pay-success",
        },
        redirect: "if_required",
        });

        if (error) {
            setMessage(error.message);
        } else if (paymentIntent && paymentIntent.status === "succeeded") {
            setIsLoading(false);
            onOpenSuccess();
        } else {
            setMessage("An unexpected error occurred.");
        }

        setIsLoading(false);
    };

    const paymentElementOptions = {
        layout: "tabs"
    }

    const handleCancel = async (e) => {
        e.preventDefault();

        fetch(import.meta.env.VITE_BASE_URL_APICANCEL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ 
                id: id,
        }),
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data.status);
        })
        .catch((error) => console.error(error));

        setPaymentVisible(false);
        setCurrentOrder(null);
        setFormVisible && setFormVisible(false);
        navigate('/more-services')
    };   

    const handleChange = (e) => {
        const { name, value } = e.target;

        setCurrentOrder(prev => ({...prev, [name]: value}));
    };

    return (
        <div>
            {!openSuccess &&
            <form onSubmit={handleSubmit} className="checkout">
                <GrFormClose className="icon_close" onClick={handleCancel}/>

                <div className="checkout_email">
                    <LinkAuthenticationElement
                    onChange={handleChange}
                    />
                </div>

                <PaymentElement options={paymentElementOptions} />

                {isLoading ?  
                <div className="loading">
                    <CircularProgress />
                </div>
                :
                <div className="checkout_btn">
                    <button disabled={isLoading || !stripe} type="submit">
                        CONFIRM
                    </button>

                    <button onClick={handleCancel}>
                        CANCEL
                    </button>
                </div>
                }

                {message && <div className="checkout_msg">{message}</div>}
            </form>
            }

            <ModalPaySuccess
            handleClose={onCloseSuccess} 
            open={openSuccess} 
            />
        </div>
    );
}