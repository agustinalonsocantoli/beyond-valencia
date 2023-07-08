import { Orders } from "../shared/Orders";

interface Props {
    adults: number;
    setAdults: (action: number) => void;
    children: number;
    setChildren: (action: number) => void;
    infants: number;
    setInfants: (action: number) => void;
}

export const SelectQuantity = (props: Props) => {
    const { adults, setAdults, children, setChildren, infants, setInfants } = props;

    return(
        <div className="amount_conteiner">
            <div className="book_amount">
                <div>
                    <h3>Adults</h3>
                    <p>Age 18 - 99</p>
                </div>

                <Orders type={adults} setType={setAdults} />
            </div>

            <div className="book_amount">
                <div>
                    <h3>Children</h3>
                    <p>Age 6 - 17</p>
                </div>

                <Orders type={children} setType={setChildren} />
            </div>

            <div className="book_amount">
                <div>
                    <h3>Infants</h3>
                    <p>Age 0 - 5</p>
                </div>

                <Orders type={infants} setType={setInfants} />
            </div>
        </div>
    );
};