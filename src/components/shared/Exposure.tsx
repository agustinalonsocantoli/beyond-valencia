// Interfaces
import { MultimediaInt } from "../../interfaces/exposure.model";

interface Props {
    data: MultimediaInt;
}

export const Exposure = ({ data }: Props) => {
    const { A, B, C, D } = data;

    return(
        <div className="exposure">
            <div className="grid-a">
                { A.type === "video" &&
                <video autoPlay muted loop>
                    <source src={A.src} />
                </video>
                }

                { A.type === "image" && 
                <img src={A.src} alt={`img`} />
                }

                <div className="content-a">
                    <h3>{A.h3}</h3>
                    <p>{A.p}</p>
                </div>
            </div>

            <div className="grid-b">
                <img src={B.src} alt={`img`} />

                <div className="content-b">
                    <h3>{B.h3}</h3>
                    <p>{B.p}</p>
                </div>
            </div>

            <div className="grid-c">
                <img src={C.src} alt={`img`} />

                <div className="content-c">
                    <h3>{C.h3}</h3>
                    <p>{C.p}</p>
                </div>
            </div>

            <div className="grid-d">
                { D.type === "video" &&
                <video autoPlay muted loop>
                    <source src={D.src} />
                </video>
                }

                { D.type === "image" && 
                <img src={D.src} alt={`img`} />
                }

                <div className="content-d">
                    <h3>{D.h3}</h3>
                    <p>{D.p}</p>
                </div>
            </div>

        </div>
    );
}