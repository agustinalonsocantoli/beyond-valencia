// Img
import wine from '../assets/img/wine.jpg';

export const Wine = () => {
    return(
        <div className="wine">
            <div className="wine_img">
                <img src={wine} alt="img/wine" />
            </div>

            <div className="wine_title">
                <h1>We also have wine!</h1>
                <h2>LOCAL DELIVERY IN 30MIN</h2>
            </div>
        </div>
    );
}