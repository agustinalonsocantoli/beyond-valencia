// Interfaces
import { MultimediaInt } from "../../interfaces/exposure.model";

interface Props {
    data: MultimediaInt | undefined;
}

export const Exposure = ({ data }: Props) => {

    return(
        <div className="exposure">
            <div className="grid-a">
                { data?.A?.type === "video" &&
                <video autoPlay muted loop>
                    <source src={data?.A?.src} />
                </video>
                }

                { data?.A?.type === "image" && 
                <img src={data?.A?.src} alt={`img`} />
                }

                <div className="content-a">
                    <h3>{data?.A?.h3}</h3>
                    <p><strong>{data?.A?.span}</strong> {data?.A?.p}</p>
                </div>
            </div>

            <div className="grid-b">
                <img src={data?.B?.src} alt={`img`} />

                <div className="content-b">
                    <h3>{data?.B?.h3}</h3>
                    <p><strong>{data?.B?.span}</strong> {data?.B?.p}</p>
                </div>
            </div>

            <div className="grid-c">
                <img src={data?.C?.src} alt={`img`} />

                <div className="content-c">
                    <h3>{data?.C?.h3}</h3>
                    <p><strong>{data?.C?.span}</strong> {data?.C?.p}</p>
                </div>
            </div>

            <div className="grid-d">
                { data?.D?.type === "video" &&
                <video autoPlay muted loop>
                    <source src={data?.D?.src} />
                </video>
                }

                { data?.D?.type === "image" && 
                <img src={data?.D?.src} alt={`img`} />
                }

                <div className="content-d">
                    <h3>{data?.D?.h3}</h3>
                    <p><strong>{data?.D?.span}</strong> {data?.D?.p}</p>
                </div>
            </div>

        </div>
    );
}