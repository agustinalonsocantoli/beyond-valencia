import lockers from '../assets/Options/lockers.jpg';
import bikes from '../assets/Options/bikes.jpg';
import lockersW from '../assets/Options/lockers.webp';
import bikesW from '../assets/Options/bikes.webp';
import { Link } from 'react-router-dom';

export const Options = () => {
    return(
        <div className="options">
            <div className='options_img-box'>
                <picture>
                    <source srcset={lockersW} type="image/webp" />
                    <img src={lockers} alt="img/lockers" />
                </picture>
                
                <Link to="/lockers" className='title_locker'>
                    <h1>LOCKERS &</h1>
                    <h1>CONSIGNAS</h1>
                </Link>
            </div>

            <div className='options_line'></div>

            <div className='options_img-box'>
                <picture>
                    <source srcset={bikesW} type="image/webp" />
                    <img src={bikes} alt="img/bikes" />
                </picture>
                
                <Link to="/bikes" className='title_bike'>
                    <h1>BIKE</h1>
                    <h1>RENTAL</h1>
                </Link>
            </div>
        </div>
    );
};