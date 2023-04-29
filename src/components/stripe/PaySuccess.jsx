import { BsCheckCircleFill } from 'react-icons/bs';

export const PaySuccess = () => {
    return(
        <div className="pay_success">
            <div className='pay_success-content'>
                <h1>Successful Payment</h1>
                <BsCheckCircleFill />
                <button>Home Page</button>
            </div>
        </div>
    );
};