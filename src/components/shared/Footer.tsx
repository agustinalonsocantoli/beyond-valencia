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
import logo from '../../assets/logoW.png'
import { IoLocationSharp } from 'react-icons/io5'
import { IoMdPhonePortrait } from 'react-icons/io'
import { MdEmail } from 'react-icons/md'
import { FiInstagram, FiLinkedin } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <div className="footer">
            <div className='content'>
                <div className='content_items'>
                    <div className='items-card'>
                        <h3>Office Hours</h3>
                        <p>Monday to Sunday</p>
                        <p>9:00 am to 8:00 pm</p>
                    </div>

                    <div>
                        <h3>More about us</h3>
                        <p>
                            <span>We are</span> a dynamic and forward-thinking team that embodies a modern and contemporary
                            image of the Valencian community. <span>Our aim</span> is to resonate with independent travellers
                            visiting the region in the small groups, with family, as couples, or as solo adventures.
                            <span>We provide</span> a curated selection of activities and services for both local and global
                            visitors who want to embrance the Valencian community beyond the city.
                        </p>
                    </div>
                </div>

                <div className='content_items'>
                    <div className='items-card'>
                        <h3>Drop Off {">"} Old Town</h3>
                        <p className='location'>
                            <IoLocationSharp />
                            <Link to='https://goo.gl/maps/G5UcGWaBxEkd1VF99' target='_blank' rel='noopener noreferrer'>
                                Carrer del Fron dels Apòstol, 4, Bajo Izquierdo, 46001 Valencia
                            </Link>
                        </p>
                    </div>

                    <div className='items-card'>
                        <h3>Drop Off {">"} Beachside</h3>
                        <p className='location'>
                            <IoLocationSharp />
                            <Link to='https://goo.gl/maps/ggzkikLQQAnNueQx5' target='_blank' rel='noopener noreferrer'>
                                C/ de I'Arquitecte Alfaro, 40, 46011, València, Valencia
                            </Link>
                        </p>
                    </div>

                    <div>
                        <h3>Services</h3>
                        <ul>
                            <li><Link to='/daytrips/villareal'>Visit Villarreal with transportation</Link></li>
                            <li><Link to='daytrips/sunset'>Day Trips</Link></li>
                            <li><Link to='/bikes'>Vintage Bike Rentals</Link></li>
                            <li><Link to='/lockers'>Luggage Storage Service</Link></li>
                            <li><Link to='/experiences'>Experiences</Link></li>
                            <li>Deals</li>
                            <li>Tailored travel services</li>
                        </ul>
                    </div>
                </div>

                <div className='content_items'>
                    <div className='items-card'>
                        <h3>Get Social</h3>
                        <p className='social'>
                            <IoMdPhonePortrait />
                            +34 680841402
                        </p>

                        <p className='social'>
                            <MdEmail />
                            admin@beyondvalencia.com
                        </p>

                        <div className='icons'>
                            <div className='icon'><FiLinkedin /></div>
                            <div className='icon'><MdEmail /></div>
                            <div className='icon'>
                                <Link to="https://www.instagram.com/beyond_valencia_/" target='_blank'  rel='noopener noreferrer'>
                                    <FiInstagram />
                                </Link>
                            </div>
                        </div>

                        <div className='buttons'>
                            <span>
                                Chat with us
                            </span>
                        </div>

                        <div className='buttons'>
                            <span>
                                Join our newsletter
                            </span>
                        </div>
                    </div>

                    <div className='footer_logo'>
                        <img src={logo} alt="logo/beyondvalencia" />
                    </div>
                </div>
            </div>


            <div className='information'>
                <div className='methods'>
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
        </div>
    );
}