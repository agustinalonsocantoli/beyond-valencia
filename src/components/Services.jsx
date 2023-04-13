// React
import { Link } from "react-router-dom";

export const Services = ({ data }) => {
    const { S1, S2, S3, h1, h2 } = data;

    return(
        <div className="services">
            <div className="services_title">
                <h1>{h1}</h1>
                <h2>{h2}</h2>
            </div>

            <div className="services_conteiner">
                
                <Link className="services_img" to={S1.link}>
                    <img src={S1.img} alt={`img/${S1.h3}`} />
                    
                    <div className="img_content">
                        <h3>{S1.h3}</h3>
                        <p>{S1.p}</p>
                    </div>
                </Link>

                <Link className="services_img">
                    <img src={S2.img} alt={`img/${S2.h3}`} />
                    
                    <div className="img_content">
                        <h3>{S2.h3}</h3>
                        <p>{S2.p} <span>{S2.span}</span></p>
                    </div>
                </Link>

                <Link className="services_img">
                    <img src={S3.img} alt={`img/${S3.h3}`} />
                    
                    <div className="img_content">
                        <h3>{S3.h3}</h3>
                        <p>{S3.p}</p>
                    </div>
                </Link>

            </div>
        </div>
    );
}