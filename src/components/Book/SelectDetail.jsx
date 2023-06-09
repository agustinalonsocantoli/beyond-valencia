import { SelectHour } from "./SelectHour";

export const SelectDetail = (props) => {
    const { selectedValue, setSelectedValue, time, setTime } = props;

    const orders = [
        {
            title: "Shared Group",
            type: "group",
            prices: ["Adults €25", "Children €20"],
            hours: [ "10:00 AM", "3:30 PM" ]
        },
        {
            title: "Private Group",
            type: "private",
            prices: ["Adults €35", "Children €30"],
            hours: [ "11:30 AM", "5:00 PM" ]
        }
    ]

    return(
        <div className="book_type-conteiner">
            {orders?.map((order, i) => (
                <div 
                key={i}
                className={`book_type ${selectedValue === order.type && 'book_selected'}`}
                onClick={() => {
                    setSelectedValue(order.type);
                }}>
                    <h3>{order.title}</h3>
                    <h5>RESERVE AND PAY</h5>
    
                    <h4>Price</h4>
                    {order.prices.map((p, i) => (
                        <h4 key={i}>{p}</h4>
                    ))}
                    <p>No additional taxes</p>
    
                    <div className={`time ${selectedValue === order.type && 'time_selected'}`}>
                        { order.hours?.map((h, i) => (
                            <SelectHour
                            key={i}
                            type={order.type}
                            time={time}
                            setTime={setTime}
                            selectedValue={selectedValue}
                            hour={h}
                            />
                        ))
                        }
                    </div>
    
                    <div className="type_check">
                        <span className="radio">
                            {selectedValue === order.type && <span className="radio_check"></span>}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
};