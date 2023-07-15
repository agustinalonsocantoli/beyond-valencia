// React
import { Link } from "react-router-dom";
// interfaces
import { DataInt } from "../../interfaces/services.model";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import { useEffect, useState } from "react";

interface Props {
    data: DataInt;
}

export const Services = ({ data }: Props) => {
    const { S1, S2, S3, S4, S5, S6, h1, h2 } = data;
    const [ loading, setLoading ] = useState<boolean>(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 500)

        return () => {
            clearTimeout(timeout)
        }
    }, [])

    return (
        <div className="services">
            <div className="services_title">
                <h1>{h1}</h1>
                <h2>{h2}</h2>
            </div>

            <div className="services_conteiner">
                <Swiper
                    spaceBetween={70}
                    slidesPerView={3}
                    style={{ padding: "15px" }}
                >
                    <SwiperSlide>
                        <Link className="services_img" to={S1.link}>
                            <picture>
                                <source srcSet={S1.imgW} type="image/webp" />
                                <img src={S1.img} alt={`img/${S1.h3}`} />
                            </picture>
                            
                            { !loading &&
                            <div className="img_content">
                                <h3>{S1.h3}</h3>
                                <p>{S1.p}</p>
                            </div>
                            }
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link className="services_img" to={S2.link}>
                            {S2.type === "video" &&
                                <video autoPlay muted loop>
                                    <source src={S2.img} />
                                </video>
                            }

                            {S2.type === "image" &&
                                <picture>
                                    <source srcSet={S2.imgW} type="image/webp" />
                                    <img src={S2.img} alt={`img/${S2.h3}`} />
                                </picture>
                            }
                        
                            { !loading &&
                            <div className="img_content">
                                <h3>{S2.h3}</h3>
                                <p>{S2.p} <span>{S2.span}</span></p>
                            </div>
                            }
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link className="services_img" to={S3.link}>
                            <picture>
                                <source srcSet={S3.imgW} type="image/webp" />
                                <img src={S3.img} alt={`img/${S3.h3}`} />
                            </picture>
                                                
                            { !loading &&
                            <div className="img_content">
                                <h3>{S3.h3}</h3>
                                <p>{S3.p}</p>
                            </div>
                            }
                        </Link>
                    </SwiperSlide>

                    {S4 &&
                    <SwiperSlide>
                        <Link className="services_img" to={S4.link}>
                            <picture>
                                <source srcSet={S4.imgW} type="image/webp" />
                                <img src={S4.img} alt={`img/${S4.h3}`} />
                            </picture>
                            
                            { !loading &&
                            <div className="img_content">
                                <h3>{S4.h3}</h3>
                                <p>{S4.p}</p>
                            </div>
                            }
                        </Link>
                    </SwiperSlide>
                    }

                    {S5 &&
                    <SwiperSlide>
                        <Link className="services_img" to={S5.link}>
                            {S5.type === "video" &&
                                <video autoPlay muted loop>
                                    <source src={S5.img} />
                                </video>
                            }

                            {S5.type === "image" &&
                                <picture>
                                    <source srcSet={S5.imgW} type="image/webp" />
                                    <img src={S5.img} alt={`img/${S5.h3}`} />
                                </picture>
                            }
                        
                            { !loading &&
                            <div className="img_content">
                                <h3>{S5.h3}</h3>
                                <p>{S5.p} <span>{S5.span}</span></p>
                            </div>
                            }
                        </Link>
                    </SwiperSlide>
                    }

                    {S6 &&
                    <SwiperSlide>
                        <Link className="services_img" to={S6.link}>
                            <picture>
                                <source srcSet={S6.imgW} type="image/webp" />
                                <img src={S6.img} alt={`img/${S6.h3}`} />
                            </picture>
                                                
                            { !loading &&
                            <div className="img_content">
                                <h3>{S6.h3}</h3>
                                <p>{S6.p}</p>
                            </div>
                            }
                        </Link>
                    </SwiperSlide>
                    }
                </Swiper>
            </div>

            <div className="bg_img"></div>
        </div>
    );
}