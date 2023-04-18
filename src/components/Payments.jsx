export const Payments = (props) => {
    const { setPaymentVisible, currentOrder, setCurrentOrder } = props;

    return(
        <div className="payment" style={{ width: "100%", height: '600px'}}>
            <h1 style={{
                fontSize: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center'      
                }}>
                FORMULARIO DEL PAGO
            </h1>

            {<ul  style={{
                    fontSize: '15px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    margin: 'auto',
                    width: '25%'       
                }}>
                
                    <li>Nombre: {currentOrder.name}</li>
                    <li>Email: {currentOrder.email}</li>
                    <li>Phone: {currentOrder.phone}</li>
                    <li>Date: {currentOrder.date}</li>
                    <li>Time: {currentOrder.time}</li>
                    <li>Order: {currentOrder.typeOrder}</li>
                    <li>Adults: {currentOrder.adults}</li>
                    <li>Children: {currentOrder.children}</li>
                    <li>Infants: {currentOrder.infants}</li>
            </ul>}
        </div>
    );
};