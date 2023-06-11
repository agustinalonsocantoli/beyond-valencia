// Img
import visa from '../../assets/cart/visa.svg'
import amex from '../../assets/cart/amex.svg'
import master from '../../assets/cart/master.svg'
import cc from '../../assets/cart/cc.svg'
import apl from '../../assets/cart/appay.svg'
import goo from '../../assets/cart/gpay.jpg'
import ali from '../../assets/cart/ali.jpg'
import we from '../../assets/cart/wec.png'
import id from '../../assets/cart/ideal.svg'
import pho from '../../assets/cart/phone.svg'

export const Footer = () => {
    return(
        <div className="footer">
            

            <div className='footer_methods'>
                <img src={visa} alt="img/" />
                <img src={amex} alt="img/" />
                <img src={master} alt="img/" />
                <img src={cc} alt="img/" />
                <img src={apl} alt="img/" />
                <img src={goo} alt="img/" />
                <img src={ali} alt="img/" />
                <img src={we} alt="img/" />
                <img src={id} alt="img/" />
                <img src={pho} alt="img/" />
            </div>

            <h3>2023 &copy; All Rights Reserved</h3>
        </div>
    );
}