/* eslint-disable @typescript-eslint/no-explicit-any */
// Interfaces
import { ProductInt } from "../../interfaces/orders.model";

interface Props {
    title: string; 
    subtitle: string; 
    time: string | null;
    longerTime: boolean; 
    setTime: (action: string) => void;
    product: ProductInt;
    setPage: (action: any) => void;
}

export const First = (props: Props) => {
    const { title, subtitle, longerTime, time, setTime, product, setPage } = props;
    const { h, allDay, longer, threeDays } = product;

    return(
        <div className='contents_first'>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>

            <div className='contents_first-time'>
                { h && 
                    <div>
                        <span className={time === h.select ? 'active' : 'disable'} 
                        onClick={() => {
                            setTime(h.select);
                            setPage((prev: number) => prev + 1);
                        }}
                        >
                            {h.time}
                        </span>
                        <span>{h.description}</span>
                    </div>
                }

                <div>
                    <span className={time === allDay.select ? 'active' : 'disable'} 
                    onClick={() => {
                        setTime(allDay.select);
                        setPage((prev: number) => prev + 1);
                    }}
                    >
                        {allDay.select}
                    </span>
                    <span>{allDay.description}</span>
                </div>

                { threeDays && 
                    <div>
                        <span className={time === threeDays.select ? 'active' : 'disable'} 
                        onClick={() => {
                            setTime(threeDays.select);
                            setPage((prev: number) => prev + 1);
                        }}
                        >
                            {threeDays.time}
                        </span>
                        <span>{threeDays.description}</span>
                    </div>
                }

                { longerTime && longer &&
                <div className='time-select'>
                    <div>
                    <label>{longer.time}</label>
                    <select name='longerTime' defaultValue="default" onChange={(e) => {
                        setTime(e.target.value);
                        setPage((prev: number) => prev + 1);
                        }}>
                        <option value="default" disabled>How many days?</option>
                        {longer.select.map((item: string, index: number) => (
                            <option key={index} value={item}>{index + 2}</option>
                        ))}
                    </select>
                    </div>
                    <span>{longer.description}</span>
                </div>
                }
            </div>
        </div>
    );
};