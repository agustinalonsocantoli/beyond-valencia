import { PaymentElement } from '@stripe/react-stripe-js';
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";

export const FormPay = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
      e.preventDefault();

      const { error, paymentMethod } = await stripe.createPaymentMethod({
          type: 'card',
          card: elements.getElement(PaymentElement),
      });

      if(!error) {
          try {
              const { id } = paymentMethod;

              const { data } = await axios.post('http://localhost:4242/api/checkout', {
                  id,
                  amount: 5000
              })
  
              console.log(data)
  
          }
          catch(err) {
              console.log(err)
          }
      }
  }

return (
  <div className="checkout">
      <form onSubmit={handleSubmit}>
          {/* <CardElement className="checkout_card" /> */}
          <PaymentElement />

          <button type="submit" disabled={!stripe}>Pay</button>
      </form>
  </div>
);
}