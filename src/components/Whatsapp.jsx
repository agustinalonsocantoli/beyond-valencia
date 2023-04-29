// React
import { Link } from 'react-router-dom';
// Icons
import { BsWhatsapp } from 'react-icons/bs'

export const Whatsapp = () => {
    return(
        <div className="whatsapp">
            <Link to='https://wa.me/34722648023' target='_blank'  rel='noopener noreferrer'><BsWhatsapp /></Link>
        </div>
    );
};