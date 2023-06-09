// Icons
import { HiMinusSmall, HiPlusSmall } from 'react-icons/hi2'

export const Orders = (props) => {
    const { type, setType } = props;

    return(
        <div className="order">
            <button disabled={!type > 0}
            onClick={() => {
                type > 0 &&
                setType(prev => prev - 1)
            }}>
                <HiMinusSmall />
            </button>
            <h4>{type}</h4>
            <button onClick={() => setType(prev => prev + 1)}> <HiPlusSmall /> </button>
        </div>
    );
};