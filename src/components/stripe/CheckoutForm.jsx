import React, { useState } from "react";
import { PaymentElement, useStripe, useElements, LinkAuthenticationElement } from "@stripe/react-stripe-js";
import CircularProgress from '@mui/material/CircularProgress';

export const CheckoutForm = (props) => {
    const { setPaymentVisible, setCurrentOrder, id, setFormVisible } = props;
    const stripe = useStripe();
    const elements = useElements();
    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsLoading(true);
        

        const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
            return_url: "http://127.0.0.1:5173/details",
        },
        });

        if (error.type === "card_error" || error.type === "validation_error") {
        setMessage(error.message);
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

        fetch('http://localhost:4242/api/cancel', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ 
                id: id,
        }),
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data.status);
        });

        setPaymentVisible(false);
        setCurrentOrder(null);
        setFormVisible && setFormVisible(false);
    };   

    const handleChange = (e) => {
        const { name, value } = e.target;

        setCurrentOrder(prev => ({...prev, [name]: value}));
    };

    return (
        <form onSubmit={handleSubmit} className="checkout">
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

        {message && <div>{message}</div>}
        </form>
    );
}