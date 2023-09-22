// Interfaces
import { Skeleton } from "@mui/material";
import { MultimediaInt } from "../../interfaces/exposure.model";
// React
import { Link } from "react-router-dom";

interface Props {
    loading: boolean;
    data: MultimediaInt[] | undefined;
}

export const Exposure = ({ data, loading }: Props) => {

    return (
        <div className="exposure">
            {
            !loading ?
            data?.map((item: MultimediaInt, index: number) => (
                <div key={index} className={`grid-${index + 1}`}>
                    <Link to={item?.navigate ? item?.navigate : ""}>
                        {item?.type === "video" &&
                            <video autoPlay muted loop>
                                <source src={item?.src} />
                            </video>
                        }

                        {item?.type === "image" &&
                            <img src={item?.src} alt={`img`} />
                        }

                        <div 
                        className={`content-${index + 1}`} 
                        style={{
                            padding: item?.h3 || item?.p ? "5px 0 5px 20px" : 0
                        }}
                        >
                            <h3>{item?.h3}</h3>
                            <p><strong>{item?.span}</strong> {item?.p}</p>
                        </div>
                    </Link>
                </div>
            ))
            :
            data?.map((_item: MultimediaInt, index: number) => (
                <Skeleton 
                    key={index} 
                    className={`grid-${index + 1}`} 
                    sx={{bgcolor: "rgba(255, 255, 255, .2)"}}
                    variant="rectangular"
                >

                </Skeleton>
            ))
        }
        </div>
    );
}