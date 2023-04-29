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
                    <picture>
                        <source srcset={S1.imgW} type="image/webp" />
                        <img src={S1.img} alt={`img/${S1.h3}`} />
                    </picture>
                    
                    <div className="img_content">
                        <h3>{S1.h3}</h3>
                        <p>{S1.p}</p>
                    </div>
                </Link>

                <Link className="services_img" to={S2.link}>
                    { S2.type === "video" &&
                    <video autoPlay muted loop>
                        <source src={S2.img} />
                    </video>
                    }

                    { S2.type === "image" &&
                    <picture>
                        <source srcset={S2.imgW} type="image/webp" />
                        <img src={S2.img} alt={`img/${S2.h3}`} />
                    </picture>
                    }
                    
                    <div className="img_content">
                        <h3>{S2.h3}</h3>
                        <p>{S2.p} <span>{S2.span}</span></p>
                    </div>
                </Link>

                <Link className="services_img" to={S3.link}>
                    <picture>
                        <source srcset={S3.imgW} type="image/webp" />
                        <img src={S3.img} alt={`img/${S3.h3}`} />
                    </picture>
                    
                    <div className="img_content">
                        <h3>{S3.h3}</h3>
                        <p>{S3.p}</p>
                    </div>
                </Link>

            </div>

            <div className="bg_img"></div>
        </div>
    );
}