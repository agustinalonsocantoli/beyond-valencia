// React
import { Link } from "react-router-dom";
// interfaces
import { ContentInt, DataInt } from "../../interfaces/services.model";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import { Skeleton } from "@mui/material";

interface Props {
    loading: boolean;
    sliderPage1: DataInt | undefined;
    sliderPage2?: ContentInt[] | undefined;
    sliderPage3?: ContentInt[] | undefined;
}

export const Services = (props: Props) => {
    const { loading, sliderPage1, sliderPage2, sliderPage3 } = props;

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

                {
                loading ?
                    sliderPage1?.content?.map((item: ContentInt, index: number) => (
                    <SwiperSlide className="services_conteiner" style={{ gap: "70px" }}>
                        <Link key={index} className="services_img" to={item?.link}>
                            <picture>
                                <source srcSet={item?.imgW} type="image/webp" />
                                <img src={item?.img} alt={`img/${item?.h3}`} />
                            </picture>

                                <div className="img_content">
                                    <h3>{item?.h3}</h3>
                                    <p>{item?.p}</p>
                                </div>
                        </Link>
                    </SwiperSlide>
                    ))
                    :
                    sliderPage1?.content?.map((_item: ContentInt, index: number) => (
                        <SwiperSlide className="services_conteiner" style={{ gap: "70px" }}>
                            <Skeleton key={index} className="services_img" sx={{ borderRadius: "20px", bgcolor: "rgba(255, 255, 255, .2)"}}>

                            </Skeleton>
                        </SwiperSlide>
                    ))
                }

                {sliderPage2?.map((item: ContentInt, index: number) => (
                    <SwiperSlide className="services_conteiner" style={{ gap: "70px" }}>
                        <Link key={index} className="services_img" to={item?.link}>
                            <picture>
                                <source srcSet={item?.imgW} type="image/webp" />
                                <img src={item?.img} alt={`img/${item?.h3}`} />
                            </picture>

                                <div className="img_content">
                                    <h3>{item?.h3}</h3>
                                    <p>{item?.p}</p>
                                </div>
                        </Link>
                    </SwiperSlide>
                ))}

                {sliderPage3?.map((item: ContentInt, index: number) => (
                    <SwiperSlide className="services_conteiner" style={{ gap: "70px" }}>
                        <Link key={index} className="services_img" to={item?.link}>
                            <picture>
                                <source srcSet={item?.imgW} type="image/webp" />
                                <img src={item?.img} alt={`img/${item?.h3}`} />
                            </picture>

                                <div className="img_content">
                                    <h3>{item?.h3}</h3>
                                    <p>{item?.p}</p>
                                </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="bg_img"></div>

        </div>
    );
}