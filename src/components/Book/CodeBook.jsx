export const CodeBook = (props) => {
    const { adults, children, subTotal, validateCode, handleGetCode, discount, totalPay } = props;

    return(
        <div className="book_total">
            <h3>Adults {adults !== null ? adults : 0} x €35</h3>
            <h3>Children {children !== null ? children : 0} x €30</h3>
            <h2>Subtotal €{subTotal}</h2>

            <p>Si te alojas con uno de nuestros socios pidele el codigo para obtener un descuento.</p>
            <label>Enter your code here!</label>

            <div>
                <input type="text" name="discountCode" onChange={handleGetCode}/>
                <button onClick={validateCode}>Validate Code</button>
            </div>

            <h3>Discount %{discount}</h3>
            <h2>Total €{totalPay}</h2>
        </div>  
    );
};