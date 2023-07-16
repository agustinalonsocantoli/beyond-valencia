/* eslint-disable @typescript-eslint/no-explicit-any */
interface Props {
    adults: number;
    children: number;
    subTotal: number;
    validateCode: (action: any) => void;
    handleGetCode: (action: any) => void;
    discount: number;
    totalPay: number | null;
    date: any;
    time: string | null;
}

export const CodeBook = (props: Props) => {
    const { adults, children, subTotal, validateCode, handleGetCode, discount, totalPay, date, time } = props;

    return (
        <div className="book_total">
            <div className="book_total-container">
                <div className="book_info">
                    <h3>Adults {adults !== null ? adults : 0} x €35</h3>
                    <h3>Children {children !== null ? children : 0} x €30</h3>
                </div>

                <div className="book_date">
                    {date && <h3>Date: {date}</h3>}
                    {time && <h3>Time: {time}</h3>}
                </div>
            </div>

            <h2>Subtotal €{subTotal}</h2>

            <p>Si te alojas con uno de nuestros socios pidele el codigo para obtener un descuento.</p>
            <label>Enter your code here!</label>

            <div>
                <input type="text" name="discountCode" onChange={handleGetCode} />
                <button onClick={validateCode}>Validate Code</button>
            </div>

            <h3>Discount %{discount}</h3>
            <h2>Total €{totalPay}</h2>
        </div>
    );
};