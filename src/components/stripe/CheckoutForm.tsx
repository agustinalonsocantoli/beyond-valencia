/* eslint-disable @typescript-eslint/no-explicit-any */
// React
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// Striple
import { PaymentElement, useStripe, useElements, LinkAuthenticationElement } from "@stripe/react-stripe-js";
// MUI
import CircularProgress from '@mui/material/CircularProgress';
// Components
import { ModalPaySuccess } from "../modals/ModalPaySuccess";
// Icons
import { GrFormClose } from "react-icons/gr"
import { notifySuccess } from "../../shared/notify";

interface Props {
    setPaymentVisible: (action: boolean) => void;
    setCurrentOrder: (action: any) => void;
    id: string;
}

export const CheckoutForm = (props: Props) => {
    const { setPaymentVisible, setCurrentOrder, id } = props;
    const navigate = useNavigate();
    const stripe: any = useStripe();
    const elements = useElements();
    const [message, setMessage] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [openSuccess, setOpenSuccess] = useState<boolean>(false);
    const onOpenSuccess = () => setOpenSuccess(true);
    const onCloseSuccess = () => { 
        setOpenSuccess(false); 
        setPaymentVisible(false);
        navigate("/");
    }

    const handleSubmit = async (e: any) => {
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

    const paymentElementOptions: any = {
        layout: "tabs"
    }

    const handleCancel = async (e: any) => {
        e.preventDefault();

        fetch(import.meta.env.VITE_BASE_URL_APICANCEL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ 
                id: id,
        }),
        })
        .then((res) => res.json())
        .then(() => {
            notifySuccess('Order canceled successfully')
        })
        .catch((error) => console.error(error));

        setPaymentVisible(false);
        setCurrentOrder(null);
        navigate('/')
    };   

    const handleChange = (e: any) => {
        const { name, value }: any = e.target;

        setCurrentOrder((prev: any) => ({...prev, [name]: value}));
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