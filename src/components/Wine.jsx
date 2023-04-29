// Img
import wine from '../assets/img/wine.jpg';
import wineW from '../assets/img/wine.webp';

export const Wine = () => {
    return(
        <div className="wine">
            <div className="wine_img">
                <picture>
                    <source srcSet={wineW} type="image/webp" />
                    <img src={wine} alt="img/wine" />
                </picture>
            </div>

            <div className="wine_title">
                <h1>We also have wine!</h1>
                <h2>LOCAL DELIVERY IN 30MIN</h2>
            </div>
        </div>
    );
}