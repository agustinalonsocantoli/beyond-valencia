/* eslint-disable @typescript-eslint/no-explicit-any */
// Icons
import { HiMinusSmall, HiPlusSmall } from 'react-icons/hi2'

interface Props {
    type: any;
    setType: (action: any) => void;
}

export const Orders = (props: Props) => {
    const { type, setType } = props;

    return(
        <div className="order">
            <button disabled={type > 0}
            onClick={() => {
                type > 0 &&
                setType((prev: number) => prev - 1)
            }}>
                <HiMinusSmall />
            </button>
            <h4>{type}</h4>
            <button onClick={() => setType((prev: number) => prev + 1)}> <HiPlusSmall /> </button>
        </div>
    );
};