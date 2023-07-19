// React
import { Link } from "react-router-dom";
// interfaces
import { ContentInt, DataInt } from "../../interfaces/services.model";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import { useEffect, useState } from "react";

interface Props {
    sliderPage1: DataInt;
    sliderPage2?: DataInt;
    sliderPage3?: DataInt;
}

export const GroupServices = (props: Props) => {
    const { sliderPage1, sliderPage2, sliderPage3 } = props;
    const [loading, setLoading] = useState<boolean>(true);

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
                <h1>{sliderPage1?.h1}</h1>
                <h2>
                    {sliderPage1?.navigate
                        ? <Link to={sliderPage1?.navigate}>{sliderPage1?.h2}</Link>
                        : sliderPage1?.h2
                    }
                </h2>
            </div>

            <Swiper
                spaceBetween={70}
                slidesPerView={1}
                style={{ padding: "15px 3%" }}
            >
                <SwiperSlide className="services_conteiner" style={{ gap: "70px" }}>
                    {sliderPage1?.content?.map((item: ContentInt, index: number) => (
                        <Link key={index} className="services_img" to={item?.link}>
                            <picture>
                                <source srcSet={item?.imgW} type="image/webp" />
                                <img src={item?.img} alt={`img/${item?.h3}`} />
                            </picture>

                            {!loading &&
                                <div className="img_content">
                                    <h3>{item?.h3}</h3>
                                    <p>{item?.p}</p>
                                </div>
                            }
                        </Link>
                    ))}
                </SwiperSlide>


                {sliderPage2 &&
                    <SwiperSlide className="services_conteiner" style={{ gap: "70px" }}>
                        {sliderPage2?.content?.map((item: ContentInt, index: number) => (
                            <Link key={index} className="services_img" to={item?.link}>
                                <picture>
                                    <source srcSet={item?.imgW} type="image/webp" />
                                    <img src={item?.img} alt={`img/${item?.h3}`} />
                                </picture>

                                {!loading &&
                                    <div className="img_content">
                                        <h3>{item?.h3}</h3>
                                        <p>{item?.p}</p>
                                    </div>
                                }
                            </Link>
                        ))}
                    </SwiperSlide>
                }

                {sliderPage3 &&
                    <SwiperSlide className="services_conteiner" style={{ gap: "70px" }}>
                        {sliderPage3?.content?.map((item: ContentInt, index: number) => (
                            <Link key={index} className="services_img" to={item?.link}>
                                <picture>
                                    <source srcSet={item?.imgW} type="image/webp" />
                                    <img src={item?.img} alt={`img/${item?.h3}`} />
                                </picture>

                                {!loading &&
                                    <div className="img_content">
                                        <h3>{item?.h3}</h3>
                                        <p>{item?.p}</p>
                                    </div>
                                }
                            </Link>
                        ))}
                    </SwiperSlide>
                }
            </Swiper>

            <div className="bg_img"></div>

        </div>
    );

}