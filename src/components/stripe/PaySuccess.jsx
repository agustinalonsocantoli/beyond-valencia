import { BsCheckCircleFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

export const PaySuccess = () => {
    const navigate = useNavigate();
    
    return(
        <div className="pay_success">
            <div className='pay_success-content'>
                <h1>Successful Payment</h1>
                <BsCheckCircleFill />
                <button onClick={() => navigate('/')}>Home Page</button>
            </div>
        </div>
    );
};